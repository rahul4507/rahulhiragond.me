const Contact = () => (
  <section id="contact" className="min-h-screen py-20 bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12">
      {/* Left Side: Contact Information */}
      <div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center lg:text-left">
          Contact Me
        </h2>
        <p className="mb-4">
          Feel free to reach out for collaborations or opportunities! I'm always
          open to discussing new projects, creative ideas, or ways to be part of
          your vision.
        </p>
        <p className="font-semibold mb-6">Thank You!</p>
        <div className="space-y-4 mt-8 flex flex-col items-start">
          {/* Email */}
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
          {/* Phone */}
          <p className="flex items-center">
            📞 <span className="ml-2">Phone:</span> +91-7744002085
          </p>
          {/* Social Links */}
          <div className="mt-4">
            <p className="font-semibold">Social Links:</p>
            <div className="flex space-x-4 mt-2">
              {[
                {
                  href: "https://www.linkedin.com/in/rahul-hiragond/",
                  img: "/LinkedIn.png",
                  alt: "LinkedIn",
                },
                {
                  href: "https://x.com/RahulHiragond/",
                  img: "/X.png",
                  alt: "Twitter",
                },
                {
                  href: "https://github.com/rahul4507/",
                  img: "/GitHub.png",
                  alt: "GitHub",
                },
                {
                  href: "https://rahulhiragond.medium.com/",
                  img: "/Medium.png",
                  alt: "Medium",
                },
              ].map(({ href, img, alt }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                >
                  <img src={img} alt={alt} className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
          {/* Coding Profiles */}
          <div className="mt-6">
            <p className="font-semibold">My Coding Profiles:</p>
            <div className="flex space-x-4 mt-2">
              {[
                {
                  href: "https://leetcode.com/rahul4257/",
                  img: "/Leetcode.png",
                  alt: "LeetCode",
                },
                {
                  href: "https://www.codeforces.com/rahul4257/",
                  img: "/codeforces.png",
                  alt: "CodeForces",
                },
                {
                  href: "https://www.geeksforgeeks.org/user/rahul8768/",
                  img: "/GFG.png",
                  alt: "GeeksforGeeks",
                },
                {
                  href: "https://www.codechef.com/users/rahul5670",
                  img: "/codechef.png",
                  alt: "Codechef",
                },
              ].map(({ href, img, alt }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={alt}
                >
                  <img src={img} alt={alt} className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold mb-6 text-center">
          Drop your message here
        </h3>
        <form className="space-y-4" aria-label="Contact form">
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            required
          />
          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            required
          />
          <label htmlFor="subject" className="sr-only">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="Subject"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
            required
          />
          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            id="message"
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

export default Contact;
