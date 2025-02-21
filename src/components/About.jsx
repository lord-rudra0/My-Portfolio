const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-primary text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8" data-aos="fade-right">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div className="text-xl mt-20" data-aos="fade-up">
          <p className="text-secondary">
            I am a passionate software developer with a strong foundation in full-stack development.
            My journey in technology began with a curiosity about how things work, which led me to
            pursue a career in software development. Over the years, I've had the opportunity to
            work on various projects that have helped me develop a deep understanding of both
            frontend and backend technologies.
          </p>

          <br />

          <p className="text-secondary">
            I specialize in building responsive web applications using modern technologies like
            React, Node.js, and various cloud platforms. I'm always eager to learn new technologies
            and methodologies to improve my skills and deliver better solutions. When I'm not coding,
            you can find me contributing to open-source projects or mentoring aspiring developers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;