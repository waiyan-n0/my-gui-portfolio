import { motion } from "framer-motion";

const Reveal = ({ children }) => {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
            viewport={{ once: false, amount: 0.15,margin: "-20px" }}
            transition={{ duration: 0.8,delay: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;