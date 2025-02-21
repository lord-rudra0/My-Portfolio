const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with React and Node.js",
      image: "https://via.placeholder.com/400x300",
      demo: "https://example.com",
      code: "https://github.com"
    },
    {
      id: 2,
      title: "Social Media App",
      description: "A social networking platform with real-time features",
      image: "https://via.placeholder.com/400x300",
      demo: "https://example.com",
      code: "https://github.com"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "A comprehensive task management solution for teams",
      image: "https://via.placeholder.com/400x300",
      demo: "https://example.com",
      code: "https://github.com"
    }
  ];

  return (
    <div name="projects" className="bg-primary w-full min-h-screen text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8" data-aos="fade-right">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 text-secondary">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, title, description, image, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
              data-aos="fade-up"
              data-aos-delay={id * 100}
            >
              <img
                src={image}
                alt={title}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-secondary mb-4">{description}</p>
                <div className="flex items-center justify-center">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 border border-white rounded-md"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;