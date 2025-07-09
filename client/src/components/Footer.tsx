import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-consultancy-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ConsultancyPro</h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transforming businesses through strategic consulting, data-driven insights, 
              and proven methodologies. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-700 hover:bg-consultancy-primary p-3 rounded-full transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-consultancy-primary p-3 rounded-full transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-consultancy-primary p-3 rounded-full transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-700 hover:bg-consultancy-primary p-3 rounded-full transition-colors duration-200">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-consultancy-accent transition-colors duration-200">
                  Strategy Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-consultancy-accent transition-colors duration-200">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-consultancy-accent transition-colors duration-200">
                  Performance Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-consultancy-accent transition-colors duration-200">
                  Growth Strategy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-consultancy-accent transition-colors duration-200">
                  Risk Management
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/about">
                  <span className="hover:text-consultancy-accent transition-colors duration-200 cursor-pointer">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/case-studies">
                  <span className="hover:text-consultancy-accent transition-colors duration-200 cursor-pointer">
                    Case Studies
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="hover:text-consultancy-accent transition-colors duration-200 cursor-pointer">
                    Team
                  </span>
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-consultancy-accent transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:text-consultancy-accent transition-colors duration-200 cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} ConsultancyPro. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-consultancy-accent text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-consultancy-accent text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-consultancy-accent text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
