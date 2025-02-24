import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <>
      <div className="max-w-screen-lg mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-secondary text-lg mb-8">I'm always open to new opportunities and collaborations</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full md:w-1/2">
          <input style={{zIndex: 2 }}
            type="text"
            {...register('name', { required: 'Name is required' })}
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          
          <input style={{zIndex: 2 }}
            type="email"
            {...register('email', { required: 'Email is required' })}
            placeholder="Enter your email"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          
          <textarea style={{zIndex: 2 }}
            {...register('message', { required: 'Message is required' })}
            placeholder="Enter your message"
            rows="10"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          ></textarea>
          {errors.message && <p className="text-red-500">{errors.message.message}</p>}

          <button style={{zIndex: 2 }} type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Let's talk
          </button>
        </form>
      </div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-primary text-white py-20"
    >
    </motion.div> </>
  );
};

export default Contact;