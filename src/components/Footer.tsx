import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white px-6 md:px-16 lg:px-32 pt-16 pb-10 mt-[70px]">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
        {/* Newsletter */}
        <div className="lg:col-span-2">
          <h4 className="font-semibold text-lg mb-4">
            Subscribe to our Newsletter
          </h4>
          <p className="text-sm text-white/80 mb-4">
            Get the latest updates and insights from AM Consulting Services.
          </p>
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-2 rounded-md text-emerald-700 placeholder-gray-500 focus:outline-none bg-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-emerald-700 font-semibold px-5 py-2 rounded-md hover:bg-emerald-100 transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Industries */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Industries</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {["Banking & Finance", "Healthcare", "Retail", "Logistics"].map(
              (item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {[
              "Business Advisory",
              "Business Consulting",
              "Business Support",
              "Assurance Services",
            ].map((item) => (
              <li key={item}>
                <Link
                  to="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {["About Us", "Careers", "Blog", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact and Footer Bottom */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-t border-emerald-500 pt-6">
        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 text-white" />
              <span>info@amconsultingservices.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 text-white" />
              <span>+91 876 217 8672</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 text-white" />
              <span>
                Prestige Shantiniketan, 2nd floor, Crescent Tower 4,
                Bangalore-48
              </span>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-center text-sm text-white/70 text-center lg:text-right">
          <p>
            &copy; {new Date().getFullYear()} AM Consulting Services. All rights
            reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
