import { motion } from "framer-motion";

const projects = [
  {
    title: "Hack’Prise 2.0",
    date: "May 2022 – June 2022",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "Developed a dynamic event website for ENSI Junior Entreprise, enabling event details and registration.",
    link: "#", // Add a link if available
  },
  {
    title: "HR Management Dashboard",
    date: "January 2022 – June 2022",
    tech: ["React.js", "Blockchain", "Talend"],
    description:
      "Designed an HR dashboard with KPIs, integrated blockchain for security, and used Talend for ETL processing.",
    link: "#", // Add a link if available
  },
  {
    title: "Driving School Management",
    date: "July 2021 – September 2021",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "Built a full-stack app for managing driving school operations, improving efficiency and organization.",
    link: "#", // Add a link if available
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#F5F5DC] to-[#303031] text-[#EAE0D5]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Ensures animation only happens once
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-[#303031] mb-4">Projects</h2>
          <p className="text-lg sm:text-xl text-[#7E6957]">
            A selection of my past projects showcasing my expertise.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#1E1D1D] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} // Triggers animation when 20% of the element is visible
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Project Title */}
              <h3 className="text-2xl font-bold text-[#F5F5DC] mb-2">
                {project.title}
              </h3>

              {/* Project Date */}
              <p className="text-sm text-[#7E6957] mb-4">{project.date}</p>

              {/* Project Description */}
              <p className="text-[#A89B8D] mb-6">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#5A4D41] text-[#EAE0D5] px-3 py-1 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
