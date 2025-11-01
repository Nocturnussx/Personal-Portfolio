import React from 'react';
import { CONTACT_DETAILS } from '../constants';

const ContactItem: React.FC<{ icon: string; title: string; text: string; href?: string }> = ({ icon, title, text, href }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-gray-800 rounded-full w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#ffdb70]">
        <i className={`fas ${icon} text-lg`}></i>
    </div>
    <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-white break-all hover:text-[#ffdb70] transition-colors">
            {text}
        </a>
    </div>
  </div>
);

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 w-full md:w-[25%] lg:w-[22%] h-full bg-[#2a2a2a] p-8 flex-col items-center justify-center border-r-2 border-gray-700 hidden md:flex">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6">
            <img
                src="https://storage.googleapis.com/aistudio-hosting/9c67201b-9f4a-4643-9844-31519d1d5203/image.jpeg"
                alt="Azmain Azad"
                className="w-40 h-40 rounded-full border-4 border-gray-600 object-cover shadow-lg"
            />
        </div>
        <h1 className="text-3xl font-bold text-white">Azmain Azad</h1>
        <p className="bg-[#ffdb70] text-black text-sm font-semibold px-4 py-1 rounded-md my-4">
            Freelancer & Developer
        </p>

        <div className="w-full my-8 border-t border-gray-700"></div>

        <div className="space-y-5 text-left w-full">
            <ContactItem icon="fa-envelope" title="Email" text={CONTACT_DETAILS.email} href={`mailto:${CONTACT_DETAILS.email}`} />
            <ContactItem icon="fa-phone" title="Phone" text={CONTACT_DETAILS.phone} href={`tel:${CONTACT_DETAILS.phone}`} />
            <ContactItem icon="fa-map-marker-alt" title="Location" text={CONTACT_DETAILS.address} />
            <ContactItem icon="fa-globe" title="Website" text={CONTACT_DETAILS.website} href={CONTACT_DETAILS.website} />
        </div>
      </div>
    </aside>
  );
}