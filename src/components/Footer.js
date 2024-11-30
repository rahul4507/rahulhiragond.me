const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/rahul-hiragond/",
      label: "LinkedIn",
      className: "hover:text-blue-400",
    },
    {
      href: "https://github.com/rahul4507/",
      label: "GitHub",
      className: "hover:text-blue-400",
    },
    {
      href: "https://x.com/RahulHiragond/",
      label: "Twitter",
      className: "hover:text-blue-400",
    },
    {
      href: "https://rahulhiragond.medium.com/",
      label: "Medium",
      className: "hover:text-blue-400",
    },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Social Links */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={link.className}
                aria-label={`Visit ${link.label}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright Section */}
          <div className="text-center">
            <p>
              &copy; {new Date().getFullYear()}{" "}
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
