// import { BadgeGroup, BadgeIcon, BadgeMessage } from "@components/Badge";
import { ButtonGroup } from "@components/Button";
import { Content } from "@components/Content";
import { MotionBTTContainer, MotionInfiniteImage } from "@components/Motion";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
//import { Icon } from "@iconify/react";
//import Image from "next/image";
import { ModalVideo } from "@components/ModalVideo";
//import { SliderButton } from '@typeform/embed-react'
import { Popup } from "@typebot.io/nextjs";
import { useState } from "react";

export const HomeBanner = () => {
    const [openTypebot, setOpenTypeBot] =  useState(false);

    return (
        <SectionContainer className="page-banner--container py-16">
            <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">                            
                {/* Appear Second */}
                <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                    <PageTitle className="text-center mx-auto" type="heavy">
                        La máquina perfecta para tu negocio de empanadas
                    </PageTitle>
                </MotionBTTContainer>
                {/* Appear Third */}
                <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                    <Content className="text-center" alignment="center">
                        <p>
                            Diseñadas para hacer más de 2000 empanadas por hora, 100% eléctrica, solo la conectas y empiezas a trabajar de inmediato.{" "}
                        </p>
                    </Content>
                    <div className="mt-6 mb-16 text-center">
                        <ButtonGroup alignment="center">
                            
                            {/* <SliderButton id="GhZiV4sJ" style={{ fontSize: 20 }} className="btn btn--secondary">
                                Solicitar Cotización
                            </SliderButton> */}
                            {/* <Button href="#features">Caracteristicas</Button>
                            <a
                                role="button"
                                href="https://github.com/christian-luntok/nutritrack"
                                className="btn btn--secondary"
                            >
                               Mas Información
                                <Icon icon="material-symbols:arrow-forward-rounded" />
                            </a> */}

                            <a role="button" className="btn btn--secondary" onClick={() => setOpenTypeBot(true)}>
                                Descubre tu Máquina Ideal
                            </a>

                            <Popup 
                                isOpen={openTypebot}
                                typebot="lead-generations-ferrero-81pfhfu"
                                onClose={() => setOpenTypeBot(false)}
                                apiHost="https://typebotviewer.webspro.co"
                            />

                        </ButtonGroup>
                    </div>
                </MotionBTTContainer>
                {/* Appear Fourth */}
                <MotionBTTContainer transition={{ delay: 0.8, duration: 0.5 }}>
                    <div className="page-banner--image flex justify-center items-center">
                        {/* <Image
                            src="/nutritrack-hero-banner.png"
                            width={1024}
                            height={680}
                            alt="Page Banner"
                            objectFit="cover"
                            className="mx-auto"
                        /> */}                        
                        <ModalVideo
                            thumbWidth={768}
                            thumbHeight={432}
                            thumbAlt="Modal video thumbnail"
                            video="/ferrero-machines.mp4"
                            videoWidth={1920}
                            videoHeight={1080} />
                    </div>
                </MotionBTTContainer>
            </SectionContainer>
        </SectionContainer>
    );
};
