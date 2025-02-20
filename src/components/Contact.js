import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  // Initialize EmailJS with your user ID (do this once)
  emailjs.init("9QyhPTtjxcHhR6ZLZ");

  const sendEmail = (e) => {
    e.preventDefault();

    // Extract values from the form
    const from_name = e.target.user_name.value;
    const from_email = e.target.user_email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    emailjs.send("service_7kaz4sf", "template_7e1fimr", {
      from_name,      // Will replace {{from_name}}
      from_email,     // Will replace {{from_email}} (set from user_email)
      to_name: "rahul", // Static value, or change as needed
      subject,        // Will replace {{subject}}
      message,        // Will replace {{message}}
    })
      .then(
        (result) => {
          console.log(result.text);
          alert('Email sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
        }
      );
  };


  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12">
        {/* Left Side: Contact Information */}
        <div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold mb-6 text-center lg:text-left">
            Contact Me
          </h2>
          <p className="mb-4">
            Feel free to reach out for collaborations or opportunities! I'm always open to discussing new projects, creative ideas, or ways to be part of your vision.
          </p>
          <p className="font-semibold mb-6">Thank You!</p>
          <div className="space-y-4 mt-8 flex flex-col items-start">
            <p className="flex items-center">
              📧 <span className="ml-2">Email:</span>
              <a
                href="mailto:rahulhiragond04@gmail.com"
                className="ml-2 text-blue-400"
                aria-label="Send email"
              >
                rahulhiragond04@gmail.com
              </a>
            </p>
            <p className="flex items-center">
              📞 <span className="ml-2">Phone:</span> +91-7744002085
            </p>
            {/* Social Links and Coding Profiles omitted for brevity */}
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold mb-6 text-center">Drop your message here</h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4" aria-label="Contact form">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 px-6 py-2 rounded text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 transition"
              aria-label="Send message"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
