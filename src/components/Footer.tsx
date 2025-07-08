import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-emerald-600 text-white px-6 md:px-16 lg:px-32 pt-16 pb-10 lg:mt-[90px] sm:mt-[70px] mt-[70px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
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

        {/* Solutions */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Solutions</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {[
              "Cloud Infrastructure",
              "Automation",
              "Cybersecurity",
              "Custom Software",
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

        {/* Spacer on large screens */}
        <div className="hidden lg:block" />

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 text-white" />
              <span className="hover:text-white transition-colors duration-200">
                info@amconsultingservices.com
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 text-white" />
              <span className="hover:text-white transition-colors duration-200">
                +91 876 217 8672
              </span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 text-white" />
              <span className="hover:text-white transition-colors duration-200">
                Prestige Shantiniketan, 2nd floor, Cresent Tower 4,Bangalore-48
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-emerald-500 pt-6 text-sm text-white/70 text-center">
        <p>
          &copy; {new Date().getFullYear()} AM Consulting Services. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
