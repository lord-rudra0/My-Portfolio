import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { content } from '../data/content';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { contact } = content;
  const { theme } = useTheme();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.2 }
    }
  };

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const secondaryTextColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';
  const accentColor = theme === 'dark' ? 'text-blue-400' : 'text-blue-600';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';
  const placeholderColor = theme === 'dark' ? 'placeholder-gray-500' : 'placeholder-gray-400';
  const inputBgColor = theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/50';
  const buttonBgColor = theme === 'dark' ? 'bg-blue-600' : 'bg-blue-500';
  const buttonHoverColor = theme === 'dark' ? 'hover:bg-blue-700' : 'hover:bg-blue-600';
  const shadowColor = theme === 'dark' ? 'shadow-blue-500/20' : 'shadow-blue-500/10';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen bg-primary ${textColor} py-20`}
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className={`text-4xl font-bold mb-6 ${textColor}`}>Get in Touch</h1>
          <p className={`text-lg max-w-2xl mx-auto ${secondaryTextColor}`}>
            I&apos;m always open to new opportunities and collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <motion.div 
                className="flex items-center space-x-4 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className={`text-2xl ${accentColor}`}
                >
                  <FaEnvelope />
                </motion.div>
                <a 
                  href={`mailto:${contact.email}`} 
                  className={`${secondaryTextColor} hover:${accentColor} transition-colors duration-300`}
                >
                  {contact.email}
                </a>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className={`text-2xl ${accentColor}`}
                >
                  <FaPhone />
                </motion.div>
                <a 
                  href={`tel:${contact.phone}`} 
                  className={`${secondaryTextColor} hover:${accentColor} transition-colors duration-300`}
                >
                  {contact.phone}
                </a>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className={`text-2xl ${accentColor}`}
                >
                  <FaMapMarkerAlt />
                </motion.div>
                <span className={secondaryTextColor}>{contact.location}</span>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="space-y-6"
            >
              <h2 className={`text-2xl font-semibold ${accentColor}`}>Connect With Me</h2>
              <div className="flex space-x-8">
                {['github', 'linkedin', 'twitter'].map((social) => (
                  <motion.a
                    key={social}
                    href={contact.social[social]}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-2xl ${secondaryTextColor} hover:${accentColor} transition-colors duration-300`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social === 'github' && <FaGithub />}
                    {social === 'linkedin' && <FaLinkedin />}
                    {social === 'twitter' && <FaTwitter />}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              custom={1}
              variants={inputVariants}
              initial="hidden"
              animate="visible"
            >
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                placeholder="Enter your name"
                className={`w-full p-4 ${inputBgColor} border-2 rounded-full ${textColor} ${placeholderColor}
                  focus:outline-none focus:border-[var(--color-accent)] transition-all duration-300
                  ${borderColor}`}
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              custom={2}
              variants={inputVariants}
              initial="hidden"
              animate="visible"
            >
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                placeholder="Enter your email"
                className={`w-full p-4 ${inputBgColor} border-2 rounded-full ${textColor} ${placeholderColor}
                  focus:outline-none focus:border-[var(--color-accent)] transition-all duration-300
                  ${borderColor}`}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              custom={3}
              variants={inputVariants}
              initial="hidden"
              animate="visible"
            >
              <textarea
                {...register('message', { required: 'Message is required' })}
                placeholder="Enter your message"
                rows="6"
                className={`w-full p-4 ${inputBgColor} border-2 rounded-3xl ${textColor} ${placeholderColor}
                  focus:outline-none focus:border-[var(--color-accent)] transition-all duration-300 resize-none
                  ${borderColor}`}
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    {errors.message.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.button
              type="submit"
              className={`w-full py-4 px-6 rounded-full text-white font-semibold
                ${buttonBgColor} ${buttonHoverColor} transition-all duration-300
                shadow-lg ${shadowColor}`}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;