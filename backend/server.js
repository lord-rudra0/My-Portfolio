import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import pkg from 'validator';

const { isEmail, trim, escape } = pkg;

dotenv.config();

if (typeof process === 'undefined') {
  throw new Error('This code must be run in a Node.js environment.');
}

const app = express();
const port = process.env.PORT || 5000;

// Security middleware
app.use(helmet());

app.use(cors({
  origin: 'https://rudra-p-s-portfolio.vercel.app', // Allow the full site, not just '/contact'
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json())

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // Limit each IP to 5 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting to all routes
app.use(limiter);

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  debug: process.env.NODE_ENV === 'development'
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log("Transporter verification error:", error);
    console.log("Please check your Gmail settings:");
    console.log("1. Make sure 2-Step Verification is enabled");
    console.log("2. Generate a new App Password from Google Account settings");
    console.log("3. Use the App Password in your .env file");
  } else {
    console.log("Server is ready to take our messages");
  }
});

// Input validation middleware
const validateContactInput = (req, res, next) => {
  const { name, email, message } = req.body;

  // Check if all fields are present
  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'All fields are required',
      details: {
        name: !name ? 'Name is required' : null,
        email: !email ? 'Email is required' : null,
        message: !message ? 'Message is required' : null
      }
    });
  }

  // Validate email format
  if (!isEmail(email)) {
    return res.status(400).json({
      error: 'Invalid email format',
      details: { email: 'Please enter a valid email address' }
    });
  }

  // Sanitize inputs
  req.body = {
    name: trim(escape(name)),
    email: trim(escape(email)),
    message: trim(escape(message))
  };

  next();
};

// Root route for health check
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Portfolio backend server is running',
    timestamp: new Date().toISOString()
  });
});

// Contact form endpoint
app.post('/api/contact', validateContactInput, async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Email content with enhanced template
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `
New Contact Form Submission
==========================
Name: ${name}
Email: ${email}
Time: ${new Date().toLocaleString()}
IP: ${req.ip}

Message:
--------
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong style="color: #4b5563;">Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong style="color: #4b5563;">Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong style="color: #4b5563;">Time:</strong> ${new Date().toLocaleString()}</p>
            <p style="margin: 5px 0;"><strong style="color: #4b5563;">IP:</strong> ${req.ip}</p>
          </div>

          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #4b5563; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; color: #1f2937;">${message}</p>
          </div>

          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
            <p>This is an automated message from your portfolio contact form.</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Send success response
    res.status(200).json({
      message: 'Email sent successfully',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error sending email:', error);

    // Enhanced error handling
    const errorMessage = error.code === 'ECONNREFUSED'
      ? 'Failed to connect to email server'
      : error.code === 'EAUTH'
        ? 'Email authentication failed'
        : 'Failed to send email';

    res.status(500).json({
      error: errorMessage,
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Something went wrong!',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
}); 