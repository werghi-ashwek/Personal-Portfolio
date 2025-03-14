import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"; 

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#1E1D1D] text-[#EAE0D5] py-20 px-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }} // Ensures animation runs when 20% of the section is in view
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-[#F5F5DC]">Contact Me</h2>
        <p className="text-lg text-[#7E6957] mt-2">
          Feel free to reach out via email or phone. Let's connect!
        </p>
      </motion.div>

      <motion.div
        className="max-w-2xl mx-auto bg-[#303031] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        {/* Email */}
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-4">
            <FaEnvelope className="text-4xl text-[#867C70]" />
            <a
              href="mailto:werghiachwek90@gmail.com" 
              className="text-lg sm:text-xl text-[#F5F5DC] hover:text-[#7E6957] transition-all duration-300"
            >
              werghiachwek90@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-4">
            <FaPhone className="text-4xl text-[#867C70]" />
            <a
              href="tel:+21621202785" 
              className="text-lg sm:text-xl text-[#F5F5DC] hover:text-[#7E6957] transition-all duration-300"
            >
              +216 21 202 785
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mt-8">
          <motion.a
            href="https://www.linkedin.com/in/ashwek-werghi-4193291b9/" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaLinkedin className="text-4xl text-[#867C70] hover:text-[#7E6957] transition-all duration-300" />
          </motion.a>
          <motion.a
            href="https://github.com/ashwek-werghi" // Replace with your actual GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub className="text-4xl text-[#867C70] hover:text-[#7E6957] transition-all duration-300" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
