import React from 'react';

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-bold text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {links.map((link) => (
          <li key={link.text}>
            <a href={link.href} className="hover:text-[#00A2E3]">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;