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
import { Icon } from "@iconify/react";
import { WhatsAppButton } from "@components/WhatsAppButton";

export default function UltraPattyMaker() {

    const onClick = () => {
        console.log('clicked');
        //open whatsapp
        window.dataLayer.push({'event': 'conversion_event_outbound_click'})
        window.open('https://walink.co/cf2269', '_blank');
    }

    return (
        <Layout className="">
            <SEO
                title="Ultra Patty Maker - Máquina para hacer empanadas profesional 🚀"
                description="La Ultra Patty Maker es la máquina perfecta para producir empanadas profesionales de alta calidad. Producción masiva, fácil operación, resultados consistentes y deliciosos."
            />
            <div className="fixed bottom-6 right-6 z-50">
                <button className="bg-[#25D366] hover:bg-[#20BD5C] text-white font-semibold p-3 rounded-full shadow-lg boton-whatsapp-cta transition-colors duration-200" onClick={onClick}>
                    <Icon icon="ic:baseline-whatsapp" className="w-8 h-8"  />
                </button>
            </div>
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* Page Banner */}
                <SectionContainer className="page-banner--container py-16">
                    <SectionContainer className="page-banner--inner-container wrap wrap-px z-10">
                        {/* Appear Second */}
                        <MotionBTTContainer transition={{ delay: 0.4, duration: 0.5 }}>
                            <PageTitle className="text-center mx-auto" type="heavy">
                                Ultra Patty Maker - Máquina Profesional para Empanadas
                            </PageTitle>
                        </MotionBTTContainer>
                        {/* Appear Third */}
                        <MotionBTTContainer transition={{ delay: 0.6, duration: 0.5 }}>
                            <Content className="text-center" alignment="center">
                                <p>
                                    La solución definitiva para tu negocio de empanadas. Máquina automática de alta producción diseñada para crear empanadas perfectas de manera consistente y eficiente.{" "}
                                </p>
                            </Content>
                            <div className="mt-6 mb-16 text-center">
                                <WhatsAppButton buttonText="Solicitar Información" whatsappLink="https://walink.co/cf2269" />
                            </div>
                        </MotionBTTContainer>
                    </SectionContainer>
                </SectionContainer>

                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Product Overview */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="product-overview">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Ultra Patty Maker</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Características de la Ultra Patty Maker
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    La Ultra Patty Maker es una máquina revolucionaria diseñada específicamente para la producción masiva de empanadas con calidad profesional. Combina tecnología avanzada con facilidad de uso para llevar tu negocio al siguiente nivel.
                                </p>
                            </Content>
                        </SectionContainer>
                    </MotionBTTContainer>

                    {/* Product Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="product-features">
                            <CardGroup className="grid scroll-m-24 gap-8 grid-cols-1 max-w-4xl mx-auto mt-24 md:grid-cols-2">
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/empanadas.jpeg"
                                            alt="Ultra Patty Maker - Máquina para hacer empanadas"
                                            imageClassName="rounded-md"
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Especificaciones Técnicas
                                        </CardHeader>
                                        <div className="space-y-2">
                                            <div className="space-y-2">
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Producción: Hasta 2,000 empanadas por hora</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Sistema 100% eléctrico - Sin compresor necesario</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Control de grosor de masa: 1mm a 10mm ajustable</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Tamaño máximo: Empanadas de hasta 18cm de longitud</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Materiales aprobados para industria alimenticia</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Dimensiones compactas: Se adapta a cualquier mesa estándar</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Garantía completa de 12 meses</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                                <Card className="col-span-1 text-primary-900">
                                    <CardBody className="w-full bg-white-600/20 p-12">
                                        <CardImage
                                            src="/mas-caracteristicas.jpeg"
                                            alt="Características avanzadas de la Ultra Patty Maker"
                                            imageClassName="rounded-md"
                                        />
                                        <CardHeader className="!text-black !text-2xl !font-bold">
                                            Ventajas Competitivas
                                        </CardHeader>
                                        <div className="space-y-2">
                                            <div className="space-y-2">
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Automatización completa del proceso de producción</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Operación silenciosa y bajo consumo energético (&lt;300W)</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Velocidad ajustable según necesidades de producción</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Sistema de dosificación automática de relleno (opcional)</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Moldes intercambiables para diferentes productos</p>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="mr-2 text-green-500">✓</span>
                                                    <p>Reducción significativa de mano de obra requerida</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </SectionContainer>
                    </MotionBTTContainer>

                    {/* Product Benefits */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="product-benefits">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Beneficios</BadgeMessage>
                                <BadgeIcon icon="twemoji:waving-hand" />
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                ¿Por qué elegir la Ultra Patty Maker?
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Esta máquina no solo aumenta tu producción, sino que también mejora la calidad y consistencia de tus productos, reduce costos operativos y elimina el trabajo manual repetitivo.
                                </p>
                            </Content>

                            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <div className="text-center">
                                        <Icon icon="mdi:speedometer" className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold mb-3">Alta Productividad</h3>
                                        <p className="text-gray-600">
                                            Produce hasta 2,000 empanadas por hora con un solo operario, escalable a 6,000+ con múltiples máquinas.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <div className="text-center">
                                        <Icon icon="mdi:account-check" className="w-12 h-12 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold mb-3">Calidad Consistente</h3>
                                        <p className="text-gray-600">
                                            Cada empanada tiene el mismo tamaño, grosor y calidad, manteniendo estándares profesionales.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-lg shadow-lg">
                                    <div className="text-center">
                                        <Icon icon="mdi:cash-multiple" className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold mb-3">Ahorro de Costos</h3>
                                        <p className="text-gray-600">
                                            Reduce costos laborales, minimiza desperdicios y optimiza el uso de ingredientes.
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                                Lo que dicen nuestros clientes sobre la Ultra Patty Maker
                            </PageTitle>
                            <Columns />
                        </SectionContainer>
                    </MotionBTTContainer>

                    {/* FAQ */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                            <BadgeGroup alignment="center">
                                <BadgeMessage>Preguntas Frecuentes</BadgeMessage>
                            </BadgeGroup>
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                ¿Tienes preguntas sobre la Ultra Patty Maker?
                                <br />
                                <br />
                                ¡Aquí están las respuestas que necesitas!:
                            </PageTitle>
                            <Accordion />
                        </SectionContainer>
                    </MotionBTTContainer>

                    {/* Call to Action */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="cta-section bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-lg">
                            <div className="text-center">
                                <PageTitle className="text-white mx-auto" type="heavy">
                                    ¿Listo para revolucionar tu negocio de empanadas?
                                </PageTitle>
                                <Content className="text-white text-center mt-6 mb-8" alignment="center">
                                    <p>
                                        La Ultra Patty Maker está transformando negocios en toda Latinoamérica. Únete a cientos de emprendedores que ya están disfrutando de mayor productividad y ganancias.
                                    </p>
                                </Content>
                                <WhatsAppButton buttonText="Solicitar Cotización Ahora" whatsappLink="https://walink.co/cf2269" />
                            </div>
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
