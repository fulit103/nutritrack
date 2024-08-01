import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";
import Image from "next/image";

const ColumnData = [
    {
        id: uuid(),
        title: "Mauricio Muñoz DeliEmpanadas Bogotá, D.C.",
        icon: "/mauricio.png",
        profile: "/mauricio.png",
        content:
            "Me gusto la maquina desde que la vi, no hace ruido y es muy facil de usar. La recomiendo."
    },
    {
        id: uuid(),
        title: "Diego Armando Forero Empanadas La Ricura Pereira, Risaralda.",
        icon: "carbon:user-avatar-filled-alt",
        profile: "/empanadas-la-ricura2.jpg",
        content:
            "La maquina es compacta, no necesita parte neumatica y produce hasta 2500 por hora, ha transformado nuestro negocio."
    },
    {
        id: uuid(),
        title: "Heliberto Anaya Empanadas By Jeimy Soacha, Cundinamarca.",
        profile: "/empanadas-by-jeimy.jpeg",
        content:
            "Muy buen servicio técnico, la maquina es muy eficiente y estoy muy agradecido con la maquina, en 1 hora y media hago la produccion del día."
    },

    {
        id: uuid(),
        title: "Carlos Eduardo Enríquez Panadería 20 de Julio Pasto, Nariño.",        
        profile: "/otro.png",
        content:
            "La maquina es muy facil de usar, no hace ruido y es muy eficiente, la recomiendo."
        
    }
    
];

export const Columns = () => {
    return (
        <SectionContainer className="benefits-lists grid gap-x-8 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16">
            {ColumnData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="benefits-list--item text-[#737373] text-left"
                >
                    {/* <Icon icon={item.icon} className="mb-4 w-10 h-10 my-2" /> */}
                    { item.profile && <Image src={item.profile} width="100" height="100" className="w-[100px] h-[100px] rounded-full object-cover border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"/>}
                    <h3 className="text-xl mb-2 font-medium text-black">
                        {item.title}
                    </h3>
                    <p>{item.content}</p>
                    <o className="flex">
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                        <Icon
                            icon="solar:star-bold"
                            className="h-10 mr-1 text-secondary-500"
                        />
                    </o>
                </div>
            ))}
        </SectionContainer>
    );
};
