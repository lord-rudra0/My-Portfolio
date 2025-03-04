import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaGithub, FaLinkedin, FaTwitter, FaBriefcase, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhone, FaAddressCard, FaShareAlt, FaPaperPlane } from 'react-icons/fa';
import { content } from '../data/content';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';
import ContactCTA from '../components/ContactCTA';


const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { contact } = content;
  const { theme } = useTheme();
  const [submitStatus, setSubmitStatus] = useState({ 
    loading: false, 
    success: false, 
    error: null,
    details: null 
  });
  const [serverStatus, setServerStatus] = useState('checking');

  // Check server status on component mount
  useEffect(() => {
    const checkServerStatus = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/health');
        if (response.ok) {
          setServerStatus('online');
        } else {
          setServerStatus('offline');
        }
      } catch (error) {
        console.error('Server status check failed:', error);
        setServerStatus('offline');
      }
    };

    checkServerStatus();
    const interval = setInterval(checkServerStatus, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data) => {
    if (serverStatus !== 'online') {
      setSubmitStatus({
        loading: false,
        success: false,
        error: 'Server is currently offline. Please try again later.',
        details: null
      });
      return;
    }

    setSubmitStatus({ loading: true, success: false, error: null, details: null });
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setSubmitStatus({ 
        loading: false, 
        success: true, 
        error: null,
        details: result 
      });
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ loading: false, success: false, error: null, details: null });
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({ 
        loading: false, 
        success: false, 
        error: error.message || 'Failed to connect to server. Please try again later.',
        details: null 
      });
    }
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
    <>
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
            <h1 className={`text-4xl font-bold mb-6 mt-16 ${textColor}`}>Get in Touch</h1>
            <p className={`text-lg max-w-2xl mx-auto ${secondaryTextColor}`}>
              I&apos;m always open to new opportunities and collaborations
          </p>
        </motion.div>

          {/* Server Status Indicator */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
              serverStatus === 'online' 
                ? 'bg-green-100 text-green-800' 
                : serverStatus === 'offline'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-yellow-100 text-yellow-800'
            }`}>
              <span className={`w-2 h-2 rounded-full mr-2 ${
                serverStatus === 'online' 
                  ? 'bg-green-500' 
                  : serverStatus === 'offline'
                    ? 'bg-red-500'
                    : 'bg-yellow-500'
              }`} />
              {serverStatus === 'online' ? 'Server Online' : 
               serverStatus === 'offline' ? 'Server Offline' : 
               'Checking Server Status...'}
            </span>
          </motion.div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`space-y-8 p-8 rounded-2xl ${inputBgColor} border-2 ${borderColor}`}
              variants={containerVariants}
            >
              {/* Open for Work Card */}
              <motion.div
                variants={itemVariants}
                className="space-y-8"
              >
                <div className="flex items-start space-x-6">
                  <motion.div
                    variants={iconVariants}
                    whileHover="hover"
                    className={`text-3xl ${accentColor} p-3 rounded-xl bg-opacity-10 ${accentColor.replace('text-', 'bg-')}`}
                  >
                    <FaBriefcase />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold mb-3 ${textColor}`}>Open for Work</h3>
                    <p className={`${secondaryTextColor} leading-relaxed text-lg`}>
                      I&apos;m currently available for freelance projects and full-time opportunities. 
                      Let&apos;s discuss how we can work together to bring your ideas to life.
                    </p>
              </div>
            </div>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                variants={itemVariants}
                className="pt-8 border-t border-gray-700"
              >
                <h2 className={`text-2xl font-semibold ${accentColor} mb-8 flex items-center gap-2`}>
                  <FaShareAlt className="text-2xl" />
                  Connect With Me
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {['github', 'linkedin', 'twitter'].map((social) => (
                    <motion.a
                      key={social}
                      href={contact.social[social]}
                  target="_blank"
                  rel="noreferrer"
                      className={`group relative overflow-hidden rounded-xl ${inputBgColor} border-2 ${borderColor}
                        hover:border-[var(--color-accent)] transition-all duration-300`}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-accent)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      <div className="relative p-6 flex flex-col items-center">
                        <span className={`text-4xl mb-3 ${secondaryTextColor} group-hover:${accentColor} transition-colors duration-300`}>
                          {social === 'github' && <FaGithub />}
                          {social === 'linkedin' && <FaLinkedin />}
                          {social === 'twitter' && <FaTwitter />}
                        </span>
                        <span className={`text-sm font-medium capitalize ${secondaryTextColor} group-hover:${accentColor} transition-colors duration-300`}>
                          {social}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {['instagram', 'whatsapp'].map((social) => (
                    <motion.a
                      key={social}
                      href={contact.social[social]}
                  target="_blank"
                  rel="noreferrer"
                      className={`group relative overflow-hidden rounded-xl ${inputBgColor} border-2 ${borderColor}
                        hover:border-[var(--color-accent)] transition-all duration-300`}
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-accent)] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                      <div className="relative p-6 flex flex-col items-center">
                        <span className={`text-4xl mb-3 ${secondaryTextColor} group-hover:${accentColor} transition-colors duration-300`}>
                          {social === 'instagram' && <FaInstagram />}
                          {social === 'whatsapp' && <FaWhatsapp />}
                        </span>
                        <span className={`text-sm font-medium capitalize ${secondaryTextColor} group-hover:${accentColor} transition-colors duration-300`}>
                          {social}
                        </span>
              </div>
                    </motion.a>
                  ))}
            </div>
          </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className={`space-y-8 p-8 rounded-2xl ${inputBgColor} border-2 ${borderColor}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={`text-2xl font-semibold ${accentColor} mb-8 flex items-center gap-2`}>
                <FaPaperPlane className="text-2xl" />
                Send me a Message
              </h2>

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
                  className={`w-full p-4 rounded-xl ${inputBgColor} border-2 ${textColor} ${placeholderColor}
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
                  className={`w-full p-4 rounded-xl ${inputBgColor} border-2 ${textColor} ${placeholderColor}
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
                  className={`w-full p-4 rounded-xl ${inputBgColor} border-2 ${textColor} ${placeholderColor}
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
                className={`w-full py-4 px-6 rounded-xl text-white font-semibold
                  ${buttonBgColor} ${buttonHoverColor} transition-all duration-300
                  shadow-lg ${shadowColor} ${submitStatus.loading ? 'opacity-75 cursor-not-allowed' : ''}
                  hover:shadow-xl hover:shadow-[var(--color-accent)]/20`}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                disabled={submitStatus.loading}
              >
                {submitStatus.loading ? 'Sending...' : 'Send Message'}
              </motion.button>

              <AnimatePresence>
                {submitStatus.success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-500 text-center space-y-2"
                  >
                    <p>Message sent successfully!</p>
                    <p className="text-sm text-gray-500">
                      Sent at: {new Date(submitStatus.details?.timestamp).toLocaleString()}
                    </p>
                  </motion.div>
                )}
                {submitStatus.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-center space-y-2"
                  >
                    <p>{submitStatus.error}</p>
                    {submitStatus.details && (
                      <p className="text-sm text-gray-500">
                        {submitStatus.details}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.form>
              </div>

          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-20 mb-16"
          >
            <h2 className={`text-4xl font-bold mb-12 text-center ${textColor} flex items-center justify-center gap-3`}>
              <FaAddressCard className="text-[var(--color-accent)] text-4xl" />
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Location Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl ${inputBgColor} 
                  border-2 ${borderColor} hover:border-green-400 dark:hover:border-green-400 
                  transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 dark:hover:shadow-green-500/10`}
              >
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content.contact.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-center cursor-pointer"
                >
                  <div className="text-2xl text-green-600 dark:text-green-400 p-3 rounded-xl bg-green-100 dark:bg-green-900/30 mb-3 shadow-inner">
                    <FaMapMarkerAlt />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>Location</h3>
                  <p className={`${secondaryTextColor} hover:text-green-600 dark:hover:text-green-400 leading-relaxed text-base transition-colors duration-300`}>
                    {content.contact.location}
                  </p>
                </a>
              </motion.div>

              {/* Email Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl ${inputBgColor} 
                  border-2 ${borderColor} hover:border-green-400 dark:hover:border-green-400 
                  transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 dark:hover:shadow-green-500/10`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-2xl text-green-600 dark:text-green-400 p-3 rounded-xl bg-green-100 dark:bg-green-900/30 mb-3 shadow-inner">
                    <FaEnvelope />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>Email</h3>
                  <a 
                    href={`mailto:${content.contact.email}`}
                    className={`${secondaryTextColor} hover:text-green-600 dark:hover:text-green-400 leading-relaxed text-base transition-colors duration-300`}
                  >
                    {content.contact.email}
                  </a>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl ${inputBgColor} 
                  border-2 ${borderColor} hover:border-green-400 dark:hover:border-green-400 
                  transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 dark:hover:shadow-green-500/10`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-2xl text-green-600 dark:text-green-400 p-3 rounded-xl bg-green-100 dark:bg-green-900/30 mb-3 shadow-inner">
                    <FaPhone />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>Phone</h3>
                  <a 
                    href={`tel:${content.contact.phone}`}
                    className={`${secondaryTextColor} hover:text-green-600 dark:hover:text-green-400 leading-relaxed text-base transition-colors duration-300`}
                  >
                    {content.contact.phone}
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-2xl ${inputBgColor} 
                  border-2 ${borderColor} hover:border-green-400 dark:hover:border-green-400 
                  transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 dark:hover:shadow-green-500/10`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="text-2xl text-green-600 dark:text-green-400 p-3 rounded-xl bg-green-100 dark:bg-green-900/30 mb-3 shadow-inner">
                    <FaWhatsapp />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${textColor}`}>WhatsApp</h3>
                  <a 
                    href={content.contact.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${secondaryTextColor} hover:text-green-600 dark:hover:text-green-400 leading-relaxed text-base transition-colors duration-300`}
              >
                Send Message
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
      </div>
    </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <ContactCTA />
      </motion.section>
    </>
  );
  
};

export default Contact;