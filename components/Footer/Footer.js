import { SectionContainer } from "@components/Section";
import Link from "next/link";
import Image from "next/image";
import { ButtonGroup } from "@components/Button";
//import { SliderButton } from '@typeform/embed-react'
//import { Icon } from "@iconify/react";

const DATA = [
    {
        title: "Máquinas",
        items: [
            {
                label: "Características",
                href: "#features"
            },
            {
                label: "Testimonios",
                href: "#testimonials"
            },
            {
                label: "Preguntas Frequentes",
                href: "#faq"
            }
        ]
    },
    {
        title: "Compañia",
        items: [
            {
                label: "Acerca De",
                href: "https://www.ferrero-machines.com/",
                target: "_blank"
            },
            {
                label: "Instagram",
                href: "https://www.instagram.com/ferrero_machines/",
                target: "_blank"
            },
            {
                label: "Facebook",
                href: "https://www.facebook.com/FerreroFoodMachines/",
                target: "_blank"
            },
            {
                label: "YouTube",
                href: "https://www.youtube.com/@ferrero.machines",
                target: "_blank"
            }
        ]
    }
];

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer" className="bg-white">
            {/* Footer Links */}
            <SectionContainer className="footer--container wrap wrap-px relative z-10">
                <div className="footer--content-container py-16">
                    <div className="footer-links mb-12 grid grid-cols-2 gap-8 md:mb-16 md:grid-cols-8 lg:grid-cols-12">
                        <div className="col-span-6">
                            <div className="footer--logo grid gap-8">
                                <Link href="/">
                                    <Image
                                        src="/ferrero-machines-logo.png"
                                        alt="logo"
                                        className="h-10 w-auto"
                                        height="25"
                                        width="100"
                                        priority
                                    />
                                </Link>
                                {/* Get Template button; remove if not used */}
                                <ButtonGroup alignment="left">
                                    {/* <SliderButton id="GhZiV4sJ" style={{ fontSize: 20 }} className="btn btn--secondary">
                                        Solicitar Cotización
                                    </SliderButton> */}
                                    {/* <a
                                        role="button"
                                        href="https://github.com/christian-luntok/nutritrack"
                                        className="btn btn--secondary"
                                    >
                                        Mas Información
                                        <Icon icon="material-symbols:arrow-forward-rounded" />
                                    </a> */}
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className="col-span-6">
                            <div className="footer-menu grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12">
                                {DATA.map((footerLinks) => (
                                    <div
                                        key={footerLinks.title}
                                        className="footer-menu--container col-span-1 md:col-span-3"
                                    >
                                        <h3 className="font-bold text-base mb-2">
                                            {footerLinks.title}
                                        </h3>
                                        <ul className="footer-menu--list">
                                            {footerLinks.items.map(
                                                (footerItem) => (
                                                    <li
                                                        key={footerItem.label}
                                                        className="footer-menu--list-item gap-2"
                                                    >
                                                        <a
                                                            className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                            href={
                                                                footerItem.href
                                                            }
                                                            target={
                                                                footerItem.target
                                                            }
                                                        >
                                                            {footerItem.label}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                ))}
                                <div className="footer-menu--container col-span-1 md:col-span-6">
                                    <h3 className="font-bold text-base mb-2">
                                        Contáctanos
                                    </h3>
                                    <ul className="footer-menu--list">
                                        <li className="footer-menu--list-item gap-2">
                                            <a
                                                className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                href="tel:+573204061224"
                                            >
                                                + 1   917 310 1240 (United States)
                                            </a>
                                        </li>
                                        <li className="footer-menu--list-item gap-2">
                                            <a
                                                className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                href="tel:+573204061224"
                                            >
                                                +57 (320) 4061224 (Colombia)
                                            </a>
                                        </li>
                                        <li className="footer-menu--list-item gap-2">
                                            <a
                                                className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                href="tel:+573204061224"
                                            >
                                                +57 (320) 406 1224 (Colombia)
                                            </a>
                                        </li>
                                        <li className="footer-menu--list-item gap-2">
                                            <a
                                                className="mb-2 block w-auto font-medium transition-colors duration-300 hover:underline"
                                                href="mailto:contactenos@ferrero-machines.com"
                                            >contactenos@ferrero-machines.com</a>
                                        </li>
                                        <li className="footer-menu--list-item gap-2">
                                            Cra 6 # 27-61, Pereira, Colombia
                                        </li>                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
            {/* Footer Credits */}
            <SectionContainer className="footer-credits relative z-10">
                <div className="wrap wrap-px py-6">
                    <p className="my-0">
                        © {year} Ferrero Machines. All rights reserved{" - "}
                        <span className="font-normal">
                            A template by{" "}
                            <Link
                                className="transition-colors duration-300 hover:underline"
                                href="https://chrstnl.com"
                                target="_blank"
                            >
                                chrstnl.
                            </Link>
                        </span>
                    </p>
                </div>
            </SectionContainer>
            <div className="footer--background"></div>
        </footer>
    );
};
