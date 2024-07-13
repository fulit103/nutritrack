import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import clsx from "clsx";

const accordionData = [
    {
        category: "Producción",
        items: [
            {
                id: uuid(),
                title: "¿Cuántas empanadas puede producir la máquina por hora?",
                isOpen: true,
                content:
                    "Nuestra máquina puede producir hasta 720 empanadas por hora con un solo operario. Con dos operarios adicionales, la producción puede escalar hasta 2,160 empanadas por hora."
            }
        ]
    },
    {
        category: "Operación",
        items: [
            {
                id: uuid(),
                title: "¿La máquina requiere un compresor o elementos neumáticos?",
                isOpen: false,
                content:
                    "No, nuestra máquina no requiere compresor ni elementos neumáticos. Es completamente eléctrica y solo necesita ser conectada a la electricidad para comenzar a operar."
            },
            {
                id: uuid(),
                title: "¿Es difícil de usar la máquina?",
                isOpen: false,
                content: "No, nuestra máquina es muy fácil de usar. Está diseñada para ser operada de manera sencilla, permitiendo que un solo operario pueda manejarla sin complicaciones. Además, es compacta y fácil de instalar."
            },
            {
                id: uuid(),
                title: "¿Qué tipos de alimentos puedo hacer con esta máquina?",
                isOpen: false,
                content:
                    "Nuestra máquina está equipada con moldes intercambiables que permiten hacer una variedad de alimentos, incluyendo empanadas, pasteles, arepas de huevo, y más."
            },
            {
                id: uuid(),
                title: "¿Qué debo hacer si tengo problemas con la máquina?",
                isOpen: false,
                content:
                    "Si tienes algún problema con la máquina, puedes contactar a nuestro equipo de soporte técnico, que estará encantado de ayudarte a resolver cualquier inconveniente."
            }
        ]
    },
    {
        category: "Especificaciones",
        items: [
            {
                id: uuid(),
                title: "¿Cuáles son las dimensiones de los alimentos que puede producir la máquina?",
                isOpen: false,
                content:
                    "La máquina puede producir empanadas de hasta 18 cm de longitud y arepas de hasta 20 cm de diámetro. Además, permite ajustar el grosor de la masa entre 1 mm y 10 mm."
            },
            {
                id: uuid(),
                title: "¿Cuánta energía consume la máquina?",
                isOpen: false,
                content:
                    "Nuestra máquina tiene un consumo energético menor a 300W, lo que la hace muy eficiente en términos de energía."
            },
            {
                id: uuid(),
                title: "¿La máquina es ruidosa durante su operación?",
                isOpen: false,
                content:
                    "No, la máquina está diseñada para operar de manera silenciosa, garantizando un ambiente de trabajo cómodo."
            },
            {
                id: uuid(),
                title: "¿Qué materiales se utilizan en la fabricación de la máquina?",
                isOpen: false,
                content:
                    "Nuestras máquinas están fabricadas con materiales aprobados para la industria alimenticia, garantizando seguridad y calidad en la producción de alimentos."
            }
        ]
    },
    {
        category: "Garantías y Accesorios",
        items: [
            {
                id: uuid(),
                title: "¿La máquina viene con alguna garantía?",
                isOpen: false,
                content:
                    "Sí, nuestras máquinas vienen con una garantía de 12 meses, asegurando la tranquilidad de nuestros clientes."
            },
            {
                id: uuid(),
                title: "¿Se pueden adquirir accesorios adicionales para la máquina?",
                isOpen: false,
                content:
                    "Sí, continuamente desarrollamos nuevos accesorios para nuestras máquinas, incluyendo funciones automáticas de doblado de masa y dosificación de relleno."
            }
        ]
    },
    {
        category: "Otros",
        items: [
            {
                id: uuid(),
                title: "¿Cuál es el tiempo de entrega de la máquina?",
                isOpen: false,
                content:
                    "El tiempo de entrega de la máquina es de 30 días hábiles a partir de la confirmación del pedido."
            },
            {
                id: uuid(),
                title: "¿Cuál es la forma de pago de la máquina?",
                isOpen: false,
                content:
                    "Aceptamos pagos en efectivo, transferencia bancaria y tarjetas de crédito. Además, ofrecemos financiamiento a través de nuestro socio financiero."
            }
        ]
    }
];

export const Accordion = () => {
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const categoryClickHandle = (category) => {
        setActiveCategory(category === activeCategory ? null : category);
    };

    const accordionClickHandle = (id) => {
        setActiveAccordion(id === activeAccordion ? null : id);
    };

    return (
        <SectionContainer className="accordion--container my-16 drop-shadow-xl max-w-3xl mx-auto offset-y-0 offset-x-8">
            {accordionData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-0">
                    <h2 className="category-item--heading mb-0">
                        <button
                            className={clsx(
                                "group relative flex w-full font-bold items-center border-0 bg-slate-50 py-4 px-5 text-left text-xl text-neutral-800 transition",
                                {
                                    "rounded-t-lg": categoryIndex === 0,
                                    "rounded-b-lg": categoryIndex === accordionData.length - 1 && activeCategory !== category.category
                                }
                            )}
                            type="button"
                            aria-expanded={category.category === activeCategory}
                            onClick={() =>
                                categoryClickHandle(category.category)
                            }
                        >
                            {category.category}
                            <Icon
                                icon="material-symbols:keyboard-arrow-up-rounded"
                                className={clsx(
                                    "ml-auto h-8 w-8 shrink-0 transition-transform duration-200 ease-in-out motion-reduce:transition-none",
                                    {
                                        "rotate-[-180deg]":
                                            category.category === activeCategory
                                    }
                                )}
                            />
                        </button>
                    </h2>
                    <div
                        className={clsx(
                            "category-item--content py-5 px-5 text-lg bg-white",
                            {
                                hidden: activeCategory !== category.category,
                                "!visibility block rounded-b-lg": activeCategory === category.category && categoryIndex === accordionData.length - 1,
                                "rounded-b-lg": activeCategory !== category.category && categoryIndex === accordionData.length - 1
                            }
                        )}
                    >
                        {category.items.map((accordionItem, index) => (
                            <div
                                key={accordionItem.id}
                                id={accordionItem.id}
                                className={clsx(
                                    "accordion-item--container border border-neutral-200 bg-white overflow-hidden",
                                    {
                                        "rounded-t-lg": index === 0,
                                        "rounded-none": index > 0 && index < category.items.length - 1,
                                        "rounded-b-lg": index === category.items.length - 1
                                    }
                                )}
                            >
                                <h2 className="accordion-item--heading mb-0">
                                    <button
                                        className="group relative flex w-full font-semibold items-center border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition"
                                        type="button"
                                        aria-expanded={accordionItem.isOpen}
                                        onClick={() =>
                                            accordionClickHandle(
                                                accordionItem.id
                                            )
                                        }
                                    >
                                        {accordionItem.title}
                                        <Icon
                                            icon="material-symbols:keyboard-arrow-up-rounded"
                                            className="ml-auto h-8 w-8 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out motion-reduce:transition-none"
                                        />
                                    </button>
                                </h2>
                                <div
                                    className={clsx(
                                        "accordion-item--content py-4 px-5 text-base",
                                        {
                                            hidden:
                                                activeAccordion !==
                                                accordionItem.id,
                                            "!visibility block":
                                                activeAccordion ===
                                                accordionItem.id
                                        }
                                    )}
                                >
                                    <p>{accordionItem.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};