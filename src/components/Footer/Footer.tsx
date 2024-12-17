import React from 'react';
import FooterColumn from './FooterColumn';

const footerSections = {
  help: {
    title: 'Help & Contact',
    links: [
      { text: 'Contact Us', href: '#' },
      { text: 'Help Center', href: '#' },
      { text: 'Safe Trading', href: '#' },
    ],
  },
  about: {
    title: 'About Us',
    links: [
      { text: 'About AuctionHub', href: '#' },
      { text: 'Careers', href: '#' },
      { text: 'Press', href: '#' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { text: 'Privacy Policy', href: '#' },
      { text: 'Terms of Service', href: '#' },
      { text: 'Cookie Policy', href: '#' },
    ],
  },
  social: {
    title: 'Follow Us',
    links: [
      { text: 'Facebook', href: '#' },
      { text: 'Twitter', href: '#' },
      { text: 'Instagram', href: '#' },
    ],
  },
};

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {Object.values(footerSections).map((section) => (
            <FooterColumn key={section.title} {...section} />
          ))}
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; 2024 AuctionHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;