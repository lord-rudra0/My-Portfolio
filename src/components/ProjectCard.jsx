"use client"
import { useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useOutsideClick } from "./hook/use-outside-click"
import { useTheme } from '../context/ThemeContext'

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  )
}

export default function ProjectCard({ projects }) {
  const [active, setActive] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const id = useId()
  const ref = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false)
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [active])

  useOutsideClick(ref, () => setActive(null))

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(2px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-black/10 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className={`w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col ${theme === 'dark' ? 'bg-neutral-900' : 'bg-white'} sm:rounded-3xl overflow-hidden shadow-2xl relative z-20`}
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  src={active.src || active.image}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className={`font-medium ${theme === 'dark' ? 'text-neutral-200' : 'text-neutral-700'} text-base`}
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className={`text-neutral-600 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'} text-base`}
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <div className="flex gap-2">
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink || active.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white hover:bg-green-600 transition-colors duration-300"
                    >
                      {active.ctaText || "Demo"}
                    </motion.a>
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.githubRepo || active.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={`/${active.projectName || active.title.toLowerCase().replace(/ /g, "-")}`}
                      className="px-4 py-3 text-sm rounded-full font-bold bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-300"
                    >
                      Project
                    </motion.a>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`text-neutral-600 ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'} text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto`}
                  >
                    {active.content || active.longDescription}
                    {active.technologies && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {active.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4 p-4">
        {projects.map((project) => (
          <motion.div
            layoutId={`card-${project.title}-${id}`}
            key={project.title}
            onClick={() => setActive(project)}
            onHoverStart={() => setHoveredCard(project.title)}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative group"
          >
            <motion.div
              animate={{
                scale: hoveredCard === project.title ? 1.02 : 1,
                filter: hoveredCard && hoveredCard !== project.title ? "blur(0.1px)" : "blur(0px)",
                opacity: hoveredCard && hoveredCard !== project.title ? 0.6 : 1,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={`p-4 flex flex-col ${theme === 'dark' ? 'bg-neutral-900 hover:bg-[#5F6769] text-white hover:text-black' : 'bg-white hover:bg-[#5F6769] text-black hover:text-white'} rounded-xl cursor-pointer transform-gpu`}
            >
              <div className="flex gap-4 flex-col w-full">
                <motion.div
                  layoutId={`image-${project.title}-${id}`}
                  className="relative overflow-hidden rounded-lg group-hover:shadow-xl transition-shadow duration-300"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={project.src || project.image}
                    alt={project.title}
                    className="h-60 w-full rounded-lg object-cover object-top transform-gpu transition-transform duration-500 group-hover:scale-105 rounded-xl"
                  />
                </motion.div>
                <div className="flex justify-center items-center flex-col">
                  <motion.h3
                    layoutId={`title-${project.title}-${id}`}
                    className={`font-medium ${theme === 'dark' ? 'text-neutral-200 group-hover:text-black' : 'text-neutral-800 group-hover:text-white'} text-center md:text-left text-base transition-colors duration-300`}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${project.description}-${id}`}
                    className={`text-neutral-600 ${theme === 'dark' ? 'text-neutral-400 group-hover:text-black' : 'text-neutral-600 group-hover:text-white'} text-center md:text-left text-sm transition-colors duration-300`}
                  >
                    {project.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </ul>
    </>
  )
}

