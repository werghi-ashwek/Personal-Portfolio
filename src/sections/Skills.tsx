import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCss3Alt, FaGithub, FaDatabase, FaHandshake, FaChartLine, FaUsers, FaMicrophone } from "react-icons/fa";
import { SiJira, SiJenkins } from "react-icons/si";

const technicalSkills = [
  { name: "JavaScript (ES6+)", icon: <FaReact /> },
  { name: "TypeScript", icon: <FaNodeJs /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "TailwindCSS", icon: <FaCss3Alt /> },
  { name: "Redux", icon: <FaGithub /> },
  { name: "Next.js", icon: <FaReact /> },
  { name: "Express.js", icon: <FaNodeJs /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Jenkins", icon: <SiJenkins /> },
  { name: "JIRA", icon: <SiJira /> },
];

const nonTechnicalSkills = [
  { name: "Negotiation Techniques", icon: <FaHandshake /> },
  { name: "KPIs Knowledge", icon: <FaChartLine /> },
  { name: "Team Collaboration", icon: <FaUsers /> },
  { name: "Public Speaking & Presentation", icon: <FaMicrophone /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#F5F5DC] to-[#303031] text-[#EAE0D5]">
      <div className="container mx-auto px-4">

        {/* Technical Skills Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-[#303031] text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-[#1E1D1D] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-[#5A4D41] hover:border-[#867C70]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4 text-[#867C70] hover:text-[#5A4D41] transition-all duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#F5F5DC]">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Non-Technical Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-[#F5F5DC] text-center">
            Non-Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {nonTechnicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-[#1E1D1D] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-[#5A4D41] hover:border-[#867C70]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4 text-[#867C70] hover:text-[#5A4D41] transition-all duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#F5F5DC]">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;
