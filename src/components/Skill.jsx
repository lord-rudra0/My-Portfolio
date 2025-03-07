import { IconCloud } from "@/components/magicui/icon-cloud";
import { useEffect, useState } from 'react';

const slugs = [
  "c",
  "csharp",
  "java",
  "css3",
  "javascript",
  "html5",
  "python",
  "assemblyscript",
  "typescript",
  "vercel",
  "render",
  "netlify",
  "heroku",
  "firebase",
  "bootstrap",
  "ejs",
  "expressjs",
  "fastapi",
  "flask",
  "jinja",
  "nodedotjs",
  "npm",
  "react",
  "vite",
  "tailwindcss",
  "mongodb",
  "mysql",
  "sqlite",
  "figma",
  "canva",
  "numpy",
  "pandas",
  "tensorflow",
  "git",
  "github",
  "unity",
  "postman",
  "docker"
];

export default function Skill() {
  const [dimensions, setDimensions] = useState({ width: 600, height: 600, radius: 200 });

  useEffect(() => {
    function updateDimensions() {
      if (window.innerWidth <= 768) {
        setDimensions({
          width: window.innerWidth - 40, // 40px for padding
          height: 400,
          radius: 150
        });
      } else {
        setDimensions({
          width: 600,
          height: 600,
          radius: 200
        });
      }
    }

    // Initial call
    updateDimensions();

    // Add event listener
    window.addEventListener('resize', updateDimensions);

    // Cleanup
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  return (
    <div className="relative w-full flex justify-center items-center py-8">
      <div className="w-full max-w-[600px] mx-auto px-4">
        <IconCloud 
          images={images} 
          width={dimensions.width} 
          height={dimensions.height} 
          sphereRadius={dimensions.radius} 
          autoRotate={true}
        />
      </div>
    </div>
  );
} 