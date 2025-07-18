import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Menu,
  X,
  ChevronDown,
  Linkedin,
  Shield,
  Settings,
  BarChart3,
  Users,
} from "lucide-react";
import { Button } from "./ui/button";
import { ContactModal } from "./ContactModal";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const servicesItem = [
    {
      title: "Consulting Services",
      description: "Strategic business solutions for enhanced performance.",
      href: "/services/consulting",
      icon: <BarChart3 size={20} className="text-emerald-500" />,
      category: "business",
    },
    {
      title: "Advisory Services",
      description: "Expert guidance on finance, risk, and compliance.",
      href: "/services/advisory",
      icon: <Shield size={20} className="text-green-500" />,
      category: "business",
    },
    {
      title: "Assurance Services",
      description: "Ensuring accuracy, compliance, and stakeholder confidence.",
      href: "/services/assurance",
      icon: <Users size={20} className="text-purple-500" />,
      category: "business",
    },
    {
      title: "Business Support Services",
      description: "Operational support to streamline and grow your business.",
      href: "/services/support",
      icon: <Settings size={20} className="text-orange-500" />,
      category: "business",
    },
    // {
    //   title: "IT Consulting",
    //   description: "Technology strategy and digital transformation solutions.",
    //   href: "/services/it-consulting",
    //   icon: <Code size={20} className="text-emerald-600" />,
    //   category: "technology",
    // },
    // {
    //   title: "Cloud Services",
    //   description: "Scalable cloud infrastructure and migration services.",
    //   href: "/services/cloud",
    //   icon: <Cloud size={20} className="text-sky-500" />,
    //   category: "technology",
    // },
    // {
    //   title: "Software Development",
    //   description: "Custom software solutions and application development.",
    //   href: "/services/software",
    //   icon: <Server size={20} className="text-indigo-500" />,
    //   category: "technology",
    // },
    // {
    //   title: "Mobile App Development",
    //   description: "Native and cross-platform mobile applications.",
    //   href: "/services/mobile",
    //   icon: <Smartphone size={20} className="text-pink-500" />,
    //   category: "technology",
    // },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dropdown
  const toggleDropdown = (e: any, dropdown: any) => {
    e.stopPropagation();
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const businessServices = servicesItem.filter(
    (item) => item.category === "business"
  );
  const technologyServices = servicesItem.filter(
    (item) => item.category === "technology"
  );

  return (
    <>
      <div
        className={`w-full bg-white/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-300 border-b ${
          scrolled ? "shadow-lg border-gray-200/50" : "border-transparent"
        }`}
      >
        {/* Top bar with gradient */}
        <div className="hidden lg:flex justify-between items-center bg-gradient-to-r from-emerald-600 to-emerald-800 px-6 xl:px-20 h-9">
          <div className="flex items-center space-x-8 text-sm">
            <div className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
              <Phone size={12} />
              <span className="font-medium text-sm">+91 876 217 8672</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors">
              <Mail size={12} />
              <span className="font-medium text-sm">
                info@amconsultingservices.com
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors p-1"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-between h-16 lg:h-20 px-4 md:px-6 lg:px-20 w-full">
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="AM Consulting Services"
              className="h-8 w-auto sm:h-10 lg:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center space-x-8 text-base font-medium"
            ref={dropdownRef}
          >
            <div className="relative">
              <button
                onClick={(e) => toggleDropdown(e, "services")}
                className="flex items-center text-slate-700 hover:text-emerald-600 transition-colors py-2 px-1 group"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-200 ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "services" && (
                <div className="absolute top-full left-0 bg-white shadow-2xl rounded-xl w-[600px] mt-2 p-6 z-50 border border-gray-100">
                  <div className="grid grid-cols-1 gap-6">
                    {/* Business Services Section */}
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center">
                        Business Services
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {businessServices.map((item, i) => (
                          <Link
                            key={i}
                            to={item.href}
                            className="flex items-start space-x-3 hover:bg-emerald-50 p-3 rounded-lg group transition-all"
                          >
                            <div className="mt-0.5">{item.icon}</div>
                            <div className="flex-1">
                              <span className="font-medium text-slate-900 group-hover:text-emerald-600 text-sm">
                                {item.title}
                              </span>
                              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* IT Services Section */}
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3 flex items-center">
                        {/* IT Services */}
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {technologyServices.map((item, i) => (
                          <Link
                            key={i}
                            to={item.href}
                            className="flex items-start space-x-3 hover:bg-emerald-50 p-3 rounded-lg group transition-all"
                          >
                            <div className="mt-0.5">{item.icon}</div>
                            <div className="flex-1">
                              <span className="font-medium text-slate-900 group-hover:text-emerald-600 text-sm">
                                {item.title}
                              </span>
                              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-slate-700 hover:text-emerald-600 transition-colors py-2 px-1 relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/career"
              className="text-slate-700 hover:text-emerald-600 transition-colors py-2 px-1 relative group"
            >
              Career
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              to="/about"
              className="text-slate-700 hover:text-emerald-600 transition-colors py-2 px-1 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all group-hover:w-full"></span>
            </Link>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:flex bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-5 py-5 rounded-md shadow-md hover:shadow-lg transition-all duration-200 text-sm font-medium cursor-pointer"
            >
              Get in Touch
            </Button>

            <button
              className="lg:hidden text-slate-700 hover:text-emerald-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed top-16 left-0 w-full h-screen bg-white z-50 overflow-y-auto">
            <div className="p-4 space-y-4">
              {/* Services with dropdown */}
              <div className="">
                <button
                  className="flex items-center justify-between w-full text-left text-slate-700 font-medium py-2"
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === "mobile-services"
                        ? null
                        : "mobile-services"
                    )
                  }
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`transition-transform duration-200 ${
                      openDropdown === "mobile-services" ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                {openDropdown === "mobile-services" && (
                  <div className="mt-3 space-y-4">
                    {/* Business Services */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Business Services
                      </h4>
                      <div className="space-y-2 pl-2">
                        {businessServices.map((item, i) => (
                          <Link
                            key={i}
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-start space-x-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors"
                          >
                            <div className="mt-0.5">{item.icon}</div>
                            <div>
                              <div className="font-medium text-slate-900 text-sm">
                                {item.title}
                              </div>
                              <div className="text-xs text-slate-500 mt-1">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* IT Services */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        {/* IT Services */}
                      </h4>
                      <div className="space-y-2 pl-2">
                        {technologyServices.map((item, i) => (
                          <Link
                            key={i}
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-start space-x-3 p-2 rounded-lg hover:bg-emerald-50 transition-colors"
                          >
                            <div className="mt-0.5">{item.icon}</div>
                            <div>
                              <div className="font-medium text-slate-900 text-sm">
                                {item.title}
                              </div>
                              <div className="text-xs text-slate-500 mt-1">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Other navigation links */}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block text-slate-700 font-medium py-2 hover:text-emerald-600 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                to="/career"
                onClick={() => setIsMenuOpen(false)}
                className="block text-slate-700 font-medium py-2 hover:text-emerald-600 transition-colors"
              >
                Career
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block text-slate-700 font-medium py-2 hover:text-emerald-600 transition-colors"
              >
                About Us
              </Link>

              {/* Contact info for mobile */}
              <div className="border-t pt-4 space-y-3">
                <div className="flex items-center space-x-2 text-slate-600">
                  <Phone size={16} />
                  <span className="text-sm">+91 876 217 8672</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600">
                  <Mail size={16} />
                  <span className="text-sm">info@amconsultingservices.com</span>
                </div>
              </div>

              {/* Get in Touch Button */}
              <Button
                className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3 rounded-lg shadow-lg font-medium"
                onClick={() => setIsModalOpen(true)}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        )}
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
