"use client";
import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Instagram,
  ArrowUpCircle,
  FileText,
} from "lucide-react";

import { siteConfig } from "@/config/site";

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

const Footer: React.FC = () => {
  const contactInfo: ContactInfo = {
    phone: "+267  311 67 64\nor +267 71 567 840",
    email: "letstransform@transformit.co.bw",
    address: "Fabrics Building, Plot 1269, Old Lobatse Road, SISMO, Gaborone",
  };

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-custom-light-blue">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold">{siteConfig.name}</h3>
            <p>{siteConfig.description}</p>
            <div className="flex space-x-4">
              {siteConfig.links.facebook && (
                <a
                  aria-label="Facebook"
                  className="hover:text-custom-dark-blue"
                  href={siteConfig.links.facebook}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {siteConfig.links.linkedin && (
                <a
                  aria-label="LinkedIn"
                  className="hover:text-custom-dark-blue"
                  href={siteConfig.links.linkedin}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {siteConfig.links.instagram && (
                <a
                  aria-label="Instagram"
                  className="hover:text-custom-dark-blue"
                  href={siteConfig.links.instagram}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {siteConfig.navItems.map((item, index) => (
                <li key={index}>
                  <a className="hover:text-custom-dark-blue" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  className="hover:text-custom-dark-blue flex items-center space-x-2"
                  href="https://drive.google.com/file/d/1SSGVGR85aRrLBClqmkSByxGRj833NVD_/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FileText className="w-4 h-4" />
                  <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a
                  className="hover:text-custom-dark-blue flex items-center space-x-2"
                  href="https://drive.google.com/file/d/1XFdnow9exkjI60FXzQv08HLh7ipgj0ev/view?usp=sharing"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FileText className="w-4 h-4" />
                  <span>Company Profile</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a className="hover:text-custom-dark-blue" href="/privacy">
              Privacy Policy
            </a>
            <a className="hover:text-custom-dark-blue" href="/terms">
              Terms of Service
            </a>
            <button
              aria-label="Scroll to top"
              className="hover:text-custom-dark-blue flex items-center space-x-1"
              onClick={scrollToTop}
            >
              <ArrowUpCircle className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
