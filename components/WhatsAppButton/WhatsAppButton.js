import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "@iconify/react";


export const WhatsAppButton = ({ phoneNumber }) => {
    return (
        <a
            href={`https://wa.me/${phoneNumber}`}
            className="flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            target="_blank"
            rel="noopener noreferrer"
        >            
            <span className="block sm:hidden">Contáctanos </span> {/* Short text for mobile */}
            <span className="hidden sm:block">Contáctanos </span> {/* Long text for desktop */}
            <Icon icon="ic:baseline-whatsapp" className="pl-1 w-6 h-6"  />
        </a>
    );
};

WhatsAppButton.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
};