import { BadgeMessage, BadgeGroup, BadgeIcon } from "@components/Badge";
import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { HomeBanner } from "@components/Banner";
import { Columns } from "@components/Columns";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { Accordion } from "@components/Accordion";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";
import {
    CardBody,
    CardGroup,
    CardHeader,
    CardImage,
    Card
} from "@components/Card";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Ferrero Machines - Maquina para hacer empanadas 🚀"
                description="Discover NutriTrack, the effortless way to plan your meals with the power of Notion. Streamline your nutrition journey and achieve your health goals with ease."
            />
            <FloatingWhatsApp phoneNumber="+573204061224"/>
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                <HomeBanner />
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Beneficios</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Beneficios de nuestras máquinas
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Nuestras máquinas son compactas, fáciles de usar y ultra rápidas, produciendo desde 720 empanadas por hora sin necesidad de compresor. ¡Escala tu producción sin esfuerzo y reduce los costos con nuestras soluciones innovadoras!:
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Características</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Innovación en la Producción de Empanadas y Arepas
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Automatización completa, bajo consumo energético, producción escalable, y fácil operación con accesorios desarrollados continuamente.
                                </p>
                            </Content>
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features4.png"
                                            alt="Customizable Layouts image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Características Principales
                                        </CardHeader>
                                        <div className="space-y-2">
                                            
                                            <div className="space-y-2">
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Equipadas con moldes intercambiables, ideales para hacer empanadas, pasteles, arepas de huevo, y más.</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Sistema 100% eléctrico que garantiza menor consumo de energía y operación silenciosa.</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Permiten ajustar el grosor de la masa entre 1 mm y 10 mm.</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Producen empanadas de hasta 18 cm de longitud y arepas de hasta 20 cm de diámetro.</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Fabricadas con materiales aprobados para la industria alimenticia.</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Máquinas compactas adecuadas para cualquier mesa de cocina estándar.</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Vienen con una garantía de 12 meses.</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/features3.png"
                                            alt="Progress Tracking image used."
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Innovación y Eficiencia
                                        </CardHeader>
                                        <div className="space-y-2">
                                            <div className="space-y-2">
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Automatización completa: laminado, corte, sellado, realimentación de sobrantes y traslado de empanadas.</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Funciones automáticas de doblado de masa y dosificación de relleno (accesorios disponibles).</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Consumo energético menor a 300W con velocidad ajustable: produce hasta 720 empanadas por hora con un operario.</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Escalabilidad sin inversiones adicionales: hasta 2,160 empanadas por hora con múltiples operarios.</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Operación simple y cómoda con desarrollo continuo de nuevos accesorios.</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Última tecnología en fabricación de alimentos con menos esfuerzo y dependencia de mano de obra.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Testimonials */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer
                            id="testimonials"
                            className="benefits"
                        >
                            <BadgeGroup alignment="left">
                                <BadgeMessage>Testimonios</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle className="" type="default">
                                Esto es lo que nuestros clientes tienen que decir sobre nuestras máquinas
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Preguntas Frequentes</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                ¿Tienes algunas preguntas urgentes sobre nuestras Máquinas?          
                                <br />
                                <br />
                                ¡No te preocupes! Tenemos las respuestas que necesitas:
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
