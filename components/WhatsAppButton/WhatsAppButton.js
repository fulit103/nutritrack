import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "@iconify/react";

export const WhatsAppButton = ({ phoneNumber, buttonText = "Contáctanos", whatsappLink = "https://walink.co/cf2269" }) => {
    const openWhatsApp = (e) => {
        e.preventDefault();
        
        // Send Google Analytics event
        if (window.gtag) {
            window.gtag('event', 'whatsapp_click', {
                'event_category': 'Engagement',
                'event_label': 'WhatsApp Button Clicked'
            });
        }

        window.open(whatsappLink, '_blank', 'noopener,noreferrer');
    };

    return (
        <a
            onClick={openWhatsApp}
            className="inline-flex items-center px-3 py-2 bg-green-500 text-white font-medium text-sm rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-colors duration-200"
            role="button"
            tabIndex={0}
        >
            <span className="mr-2">{buttonText}</span>
            <Icon icon="ic:baseline-whatsapp" className="w-4 h-4" />
        </a>
    );
};

WhatsAppButton.propTypes = {
    phoneNumber: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    whatsappLink: PropTypes.string
};