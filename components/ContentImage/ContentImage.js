import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { v4 as uuid } from "uuid";
import { ModalVideo } from "@components/ModalVideo";
import VideoThumb from '@public/empanadas-facil-usar.jpeg';

const ContentImageData = [
    {
        id: uuid(),
        title: "Fácil de usar y eficiente",
        content:
            "La máquina no requiere compresor ni elementos neumáticos, es compacta y fácil de instalar, solo necesitas conectarla a la electricidad. Un solo operario puede producir hasta 720 empanadas por hora, y con dos operarios adicionales, la producción puede escalar hasta 2,160 empanadas por hora.",
        align: "right",
        image: "/empanadas-facil-usar.jpeg",
        video: "/facil-usar-maquina-empanadas.mp4"
    },
    {
        id: uuid(),
        title: "Optimiza tu productividad y bienestar laboral",
        content:
            "La máquina elimina la necesidad de esfuerzo físico para armar empanadas, reduciendo dolores musculares. Es una herramienta ideal para aumentar la producción sin complicaciones.",
        align: "left",
        image: "/features2.png"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl ${
                            item.align === "left" ? "md:order-1" : ""
                        }`}
                    >
                        {item.video ? <ModalVideo
                            thumb={VideoThumb}
                            thumbWidth={768}
                            thumbHeight={432}
                            thumbAlt="Modal video thumbnail"
                            video={item.video}
                            videoWidth={1920}
                            videoHeight={1080} /> : 
                            
                            <Image
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />}
                        
                    </div>
                    <div
                        className={`process-item--content ${
                            item.align === "left"
                                ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                                : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                        } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p>{item.content}</p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
