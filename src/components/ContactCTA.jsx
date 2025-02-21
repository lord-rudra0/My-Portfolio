import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-tertiary">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;