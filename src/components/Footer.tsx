import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#1E1D1D] border-t-2 border-[#EAE0D5] text-[#EAE0D5] py-8">
      <motion.div
        className="text-center text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>&copy; 2025 Ashwek Werghi. All Rights Reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
