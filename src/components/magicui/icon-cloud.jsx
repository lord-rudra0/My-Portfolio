"use client"

import { useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types'

export function IconCloud({ images, width = 600, height = 600, sphereRadius = 200, autoRotate = true }) {
  const canvasRef = useRef(null)
  const [iconPositions, setIconPositions] = useState([])
  const [isDragging, setIsDragging] = useState(false)
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 })
  const rotationRef = useRef({ x: 0, y: 0 })
  const iconCanvasesRef = useRef([])
  const imagesLoadedRef = useRef([])
  const autoRotateRef = useRef(0)

  // PropTypes validation
  IconCloud.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    sphereRadius: PropTypes.number,
    autoRotate: PropTypes.bool,
  }

  // Default props
  IconCloud.defaultProps = {
    width: 600,
    height: 600,
    sphereRadius: 200,
    autoRotate: true,
  }

  // Initialize icon canvases
  useEffect(() => {
    if (!images) return

    imagesLoadedRef.current = new Array(images.length).fill(false)
    const newIconCanvases = images.map((imageUrl, index) => {
      const offscreen = document.createElement("canvas")
      offscreen.width = 40
      offscreen.height = 40
      const offCtx = offscreen.getContext("2d")

      if (offCtx) {
        const img = new Image()
        img.crossOrigin = "anonymous"
        img.src = imageUrl
        img.onload = () => {
          offCtx.clearRect(0, 0, 40, 40)
          offCtx.beginPath()
          offCtx.arc(20, 20, 20, 0, Math.PI * 2)
          offCtx.closePath()
          offCtx.clip()
          offCtx.drawImage(img, 0, 0, 40, 40)
          imagesLoadedRef.current[index] = true
        }
      }
      return offscreen
    })

    iconCanvasesRef.current = newIconCanvases
  }, [images])

  // Generate sphere points
  useEffect(() => {
    if (!images) return

    const newIcons = []
    const numIcons = images.length
    const phi = Math.PI * (3 - Math.sqrt(5)) // golden angle

    for (let i = 0; i < numIcons; i++) {
      const y = 1 - (i / (numIcons - 1)) * 2 // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y) // radius at y
      const theta = phi * i // golden angle increment

      const x = Math.cos(theta) * radius
      const z = Math.sin(theta) * radius

      newIcons.push({
        x: x * sphereRadius,
        y: y * sphereRadius,
        z: z * sphereRadius,
        id: i,
      })
    }

    setIconPositions(newIcons)
  }, [images, sphereRadius])

  // Handle mouse interactions
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setLastMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x
      const deltaY = e.clientY - lastMousePos.y

      rotationRef.current = {
        x: rotationRef.current.x + deltaY * 0.005,
        y: rotationRef.current.y + deltaX * 0.005,
      }

      setLastMousePos({ x: e.clientX, y: e.clientY })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    let animationFrameId

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      // Auto-rotation
      if (autoRotate && !isDragging) {
        autoRotateRef.current += 0.005
        rotationRef.current = {
          x: rotationRef.current.x,
          y: autoRotateRef.current,
        }
      }

      const sortedIcons = [...iconPositions].sort((a, b) => {
        // Calculate transformed Z positions for proper sorting
        const az = a.z * Math.cos(rotationRef.current.x) - a.y * Math.sin(rotationRef.current.x)
        const bz = b.z * Math.cos(rotationRef.current.x) - b.y * Math.sin(rotationRef.current.x)
        return bz - az
      })

      sortedIcons.forEach((icon) => {
        // Apply rotations
        let x = icon.x
        let y = icon.y
        let z = icon.z

        // Rotate around Y axis
        const tempX = x * Math.cos(rotationRef.current.y) + z * Math.sin(rotationRef.current.y)
        z = -x * Math.sin(rotationRef.current.y) + z * Math.cos(rotationRef.current.y)
        x = tempX

        // Rotate around X axis
        const tempY = y * Math.cos(rotationRef.current.x) - z * Math.sin(rotationRef.current.x)
        z = y * Math.sin(rotationRef.current.x) + z * Math.cos(rotationRef.current.x)
        y = tempY

        // Project 3D coordinates to 2D with perspective
        const scale = 1000 / (1000 + z)
        const screenX = width / 2 + x * scale
        const screenY = height / 2 + y * scale

        // Draw icon
        if (imagesLoadedRef.current[icon.id]) {
          ctx.save()
          ctx.globalAlpha = Math.max(0.2, (z + sphereRadius) / (sphereRadius * 2))
          ctx.drawImage(
            iconCanvasesRef.current[icon.id],
            screenX - 20 * scale,
            screenY - 20 * scale,
            40 * scale,
            40 * scale,
          )
          ctx.restore()
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [width, height, iconPositions, isDragging, autoRotate, sphereRadius])

  return (
    <div className="flex justify-center items-center w-full h-full">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="rounded-lg cursor-grab active:cursor-grabbing max-w-full max-h-full"
        aria-label="Interactive 3D Icon Cloud"
        role="img"
      />
    </div>
  )
}


