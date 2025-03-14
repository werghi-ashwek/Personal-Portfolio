import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode, FaUniversity } from "react-icons/fa";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer - Frontend Department",
      company: "Knowlepsy",
      location: "Remote",
      duration: "August 2024 – Present",
      description: [
        "Spearheaded the design and development of Knowlepsy (KnowRisk), a platform enabling hospitals and doctors to track and analyze epileptic patient data, leveraging Next.js, React.js, and Chart.js.",
        "Built and maintained the Knowlepsy website, integrating essential company information and product details using Next.js, TypeScript, and Tailwind CSS to ensure a user-friendly and responsive experience.",
        "Collaborated closely with backend and data engineering teams to deliver a comprehensive, data-driven dashboard for various stakeholders, enhancing decision-making capabilities.",
        "Partnered with Product Management to develop and implement a Power BI dashboard, enabling hospital administrators to monitor and analyze key metrics within the neurology department."
      ],
      link: "https://knowlepsy.com"
    },
    {
      title: "Software Engineer - Frontend Department",
      company: "COGNIRA",
      location: "Tunis, Tunisia",
      duration: "August 2023 – July 2024",
      description: [
        "Developed and maintained COGNIRA’s internal library, 'Rich UI,' featuring a comprehensive collection of reusable React.js components, significantly streamlining the creation of UI elements for external projects, improving development efficiency and consistency.",
        "Collaborated on an external project for a prominent retailer, utilizing React.js and Redux to create a robust, feature-rich application. Played a pivotal role in enhancing the core application, which served as a foundation for various external projects.",
        "Supervised an intern in their end-of-studies project, providing mentorship, guidance, and feedback to enhance their skills and performance."
      ],
      link: "https://cognira.com"
    },
    {
      title: "End of Studies Intern - Frontend Department",
      company: "COGNIRA",
      location: "Tunis, Tunisia",
      duration: "February 2023 – June 2023",
      description: [
        "Led the development of a Model Comparator Dashboard, empowering Cognira’s data scientists to streamline the analysis of various forecast engine iterations. Facilitated the visualization and presentation of results to clients, enabling data scientists to select the best forecasting model and effectively communicate forecasts.",
        "Utilized React.js, Rich UI, MUI, and Kendo UI to create a user-friendly application.",
        "Collaborated with the data science team, using Python for dataset management and analysis."
      ],
      link: "https://cognira.com"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#1E1D1D] text-[#EAE0D5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-5xl font-bold mb-4 text-[#F5F5DC]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            My Experience
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl font-medium text-[#7E6957]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            A summary of my professional journey so far.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="bg-[#303031] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Icon Based on Title */}
              <div className="mb-6 text-6xl text-[#867C70]">
                {index === 0 ? (
                  <FaLaptopCode />
                ) : index === 1 ? (
                  <FaBriefcase />
                ) : (
                  <FaUniversity />
                )}
              </div>

              <h3 className="text-2xl font-bold mb-2 text-[#F5F5DC]">{experience.title}</h3>
              <p className="text-lg font-medium mb-2 text-[#7E6957]">{experience.company}</p>
              <p className="text-sm mb-4 text-[#867C70]">
                {experience.location} | {experience.duration}
              </p>
              <ul className="text-sm mb-6 text-[#EAE0D5]">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    <span className="text-[#5A4D41]">•</span> {item}
                  </li>
                ))}
              </ul>
              <a
                href={experience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#5A4D41] text-[#EAE0D5] py-2 px-6 rounded-full hover:bg-[#7E6957] transition-all duration-300"
              >
                Visit Company
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
