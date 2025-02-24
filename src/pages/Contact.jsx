import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { content } from '../data/content';


const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { contact } = content;

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-primary text-white py-20"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-secondary text-lg">
            I'm always open to new opportunities and collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-600 text-xl" />
                <a href={`mailto:${contact.email}`} className="text-secondary hover:text-white">
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-blue-600 text-xl" />
                <span className="text-secondary">{contact.phone}</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl" />
                <span className="text-secondary">{contact.location}</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              <div className="flex space-x-6">
                <a
                  href={contact.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary hover:text-white transition-colors"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={contact.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary hover:text-white transition-colors"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={contact.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary hover:text-white transition-colors"
                >
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-2 bg-tertiary border border-gray-600 rounded-md focus:outline-none focus:border-blue-600 text-white"
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-2 bg-tertiary border border-gray-600 rounded-md focus:outline-none focus:border-blue-600 text-white"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  {...register('message', { required: 'Message is required' })}
                  className="w-full px-4 py-2 bg-tertiary border border-gray-600 rounded-md focus:outline-none focus:border-blue-600 text-white"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;