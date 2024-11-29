const Contact = () => (
  <section id="contact" className="py-20 bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-12">
      {/* <div className="flex flex-col lg:flex-row gap-8"> */}
      {/* Left side: Contact Information */}
      <div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-center lg:text-left">
          Contact Me
        </h2>
        <p className="mb-4">
          Feel free to reach out for collaborations or opportunities! I'm always
          open to discussing new projects, creative ideas, or opportunities to
          be part of your vision.
        </p>
        <p className="font-semibold mb-2">Thank You!</p>
        <div className="space-y-4 mt-8">
          <p className="flex items-center justify-center lg:justify-start">
            <span role="img" aria-label="email" className="mr-2">
              📧
            </span>
            Shoot me an E-mail:
            <a
              href="mailto:rahulhiragond04@gmail.com"
              className="ml-2 text-blue-400"
            >
              rahulhiragond04@gmail.com
            </a>
          </p>
          <p className="flex items-center justify-center lg:justify-start">
            <span role="img" aria-label="phone" className="mr-2">
              📞
            </span>
            Phone: +91-7744002085
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/rahul-hiragond/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Linkedin.png" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a
              href="https://x.com/RahulHiragond/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/X.png" alt="Twitter" className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/rahul4507/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/GitHub.png" alt="GitHub" className="w-8 h-8" />
            </a>
            <a
              href="https://rahulhiragond.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Medium.png" alt="Medium" className="w-8 h-8" />
            </a>
          </div>
          <div className="mt-6 text">
            <p>My Coding Profiles:</p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://leetcode.com/rahul4257/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/Leetcode.png" alt="LeetCode" className="w-8 h-8" />
              </a>
              <a
                href="https://leetcode.com/rahul4257/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/codeforces.png"
                  alt="CodeForces"
                  className="w-8 h-8"
                />
              </a>
              <a
                href="https://www.geeksforgeeks.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/GFG.png" alt="GeeksforGeeks" className="w-8 h-8" />
              </a>
              <a
                href="https://www.codechef.com/users/rahul5670"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/codechef.png" alt="Codechef" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Contact Form */}
      <div className="flex-1 bg-gray-800 p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold mb-6 text-center text-white">
          Drop your message here
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 px-6 py-2 rounded text-white hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* </div> */}
    </div>
  </section>
);

export default Contact;
