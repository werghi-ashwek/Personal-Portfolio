import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin } from "react-icons/fa"; // Added LinkedIn icon
import myImage from "/assets/Ash1.jpg";
import resume from "/assets/AshwekWERGHI_Resume_ENGLISH.pdf";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-[#1E1D1D] text-[#EAE0D5] px-8 py-20">
      {/* Profile Image */}
      <motion.div
        className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#5A4D41] shadow-lg hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={myImage}
          alt="Ashwek Werghi"
          className="w-full h-full object-cover transform hover:scale-110 transition-all duration-300"
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        className="text-center lg:text-left max-w-2xl lg:ml-16 mt-10 lg:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 mt-2 leading-tight text-[#F5F5DC]">
          Hi, I'm <span className="text-[#867C70]">Ashwek Werghi</span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8 text-[#7E6957]">
          I'm a dedicated{" "}
          <span className="font-semibold text-[#5A4D41]">
            Software Engineer
          </span>{" "}
          with a deep passion for{" "}
          <span className="font-semibold text-[#867C70]">
            Front-End Development
          </span>
          . I specialize in building{" "}
          <span className="font-semibold text-[#5A4D41]">
            highly responsive
          </span>{" "}
          and <span className="font-semibold text-[#5A4D41]">intuitive</span>{" "}
          web applications using technologies such as{" "}
          <span className="font-semibold text-[#867C70]">JavaScript</span>,{" "}
          <span className="font-semibold text-[#5A4D41]">React</span>, and{" "}
          <span className="font-semibold text-[#867C70]">Next.js</span>. With a
          strong focus on clean code and{" "}
          <span className="font-semibold text-[#5A4D41]">
            user-centric design
          </span>
          , I’m always motivated to solve complex problems and deliver seamless
          user experiences.
        </p>

        <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8 text-[#7E6957]">
          Over the course of my career, I’ve honed my skills in{" "}
          <span className="font-semibold text-[#867C70]">
            optimizing performance
          </span>{" "}
          and{" "}
          <span className="font-semibold text-[#5A4D41]">
            enhancing the usability
          </span>{" "}
          of web applications. I thrive in dynamic environments where{" "}
          <span className="font-semibold text-[#867C70]">creativity</span> and{" "}
          <span className="font-semibold text-[#5A4D41]">innovation</span> are
          at the core of problem-solving.
        </p>

        {/* Tech Icons */}
        <motion.div
          className="flex justify-center lg:justify-start space-x-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaReact className="text-[#61DAFB] text-5xl hover:text-[#21A1F1] transition-all duration-300" />
          </motion.a>
          <motion.a
            href="https://nodejs.org"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaNodeJs className="text-[#5A4D41] text-5xl hover:text-[#3B8735] transition-all duration-300" />
          </motion.a>
          <motion.a
            href="https://github.com/your-profile" // Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub className="text-[#867C70] text-5xl hover:text-[#5A4D41] transition-all duration-300" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/your-profile" // Replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin className="text-[#867C70] text-5xl hover:text-[#5A4D41] transition-all duration-300" />
          </motion.a>
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.a
            href="#projects"
            className="inline-block bg-[#5A4D41] hover:bg-[#7E6957] text-white font-semibold py-3 px-8 rounded-full text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            View My Projects
          </motion.a>
          <motion.a
            href={resume}
            download
            className="inline-block bg-[#303031] hover:bg-[#5A4D41] text-white font-semibold py-3 px-8 rounded-full text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
          >
            Download My Resume
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
