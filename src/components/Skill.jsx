import { IconCloud } from "@/components/magicui/icon-cloud";

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
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  return (
    <div className="relative h-[600px] w-[600px] mx-auto">
      <IconCloud images={images} width={600} height={600} sphereRadius={200} autoRotate={true} />
    </div>
  );
} 