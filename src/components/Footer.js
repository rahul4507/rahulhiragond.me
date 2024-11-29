const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            <a
              href="https://www.linkedin.com/in/rahul-hiragond/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rahul4507/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              GitHub
            </a>
            <a
              href="https://x.com/RahulHiragond/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Twitter
            </a>
            <a
              href="https://rahulhiragond.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              Medium
            </a>
          </div>
          <div className="text-center mt-4 lg:mt-0">
            <p>
              &copy; 2024{" "}
              <a href="#home" className="hover:text-blue-400">
                Rahul Hiragond
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
