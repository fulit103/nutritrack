import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "@iconify/react";

export const WhatsAppButton = ({ phoneNumber, buttonText = "Contáctanos" }) => {
    const openWhatsApp = (e) => {
        e.preventDefault();
        
        // Send Google Analytics event
        if (window.gtag) {
            window.gtag('event', 'whatsapp_click', {
                'event_category': 'Engagement',
                'event_label': 'WhatsApp Button Clicked'
            });
        }

        window.open('https://walink.co/891365', '_blank', 'noopener,noreferrer');
    };

    return (
        <a
            onClick={openWhatsApp}
            className="flex items-center px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            role="button"
            tabIndex={0}
        >            
            <span className="block sm:hidden">{buttonText} </span>
            <span className="hidden sm:block">{buttonText} </span>
            <Icon icon="ic:baseline-whatsapp" className="pl-1 w-6 h-6"  />
        </a>
    );
};

WhatsAppButton.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
};