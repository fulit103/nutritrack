import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@components/Section";
import { Nav } from "@components/Nav";
import { ButtonGroup, Button } from "@components/Button";
import { Icon } from "@iconify/react";
import { WhatsAppButton } from "@components/WhatsAppButton";

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-30 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <SectionContainer className="header--container wrap wrap-px ">
                <div className="header-logo--container">
                    <h1 className="logo mb-0">
                        <Link href="/">
                            <Image
                                src="/ferrero-machines-logo.png"
                                alt="logo"
                                className="h-6 w-auto"
                                height="24"
                                width="100"
                                priority
                            />
                        </Link>
                    </h1>
                </div>
                <SectionContainer className="flex items-center ml-auto">
                    {/* <Nav /> */}
                    <label className="hidden md:block px-4">Tel: +57 (320) 4061224</label>
                    <ButtonGroup className="">                        
                        {/* <a
                            role="button"
                            href="https://github.com/christian-luntok/nutritrack"
                            className="btn btn--secondary ml-4"
                        >
                            Get Template
                            <Icon icon="material-symbols:arrow-forward-rounded" />
                        </a> */}
                        <WhatsAppButton whatsappLink="https://walink.co/891365"/>
                    </ButtonGroup>
                </SectionContainer>
            </SectionContainer>
        </header>
    );
};
