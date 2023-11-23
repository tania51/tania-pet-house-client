import Container from "../../../components/Shared/Container/Container";
import Title from "../../../components/Shared/Title/Title";
import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
};


const AboutUs = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <Container>
            <div>
                <Title heading="About Us"></Title>
            </div>

            {/* about section using accordion */}
            {/* part-1 */}
            <div className="flex gap-12 mb-32 mt-8">
                <div className="space-y-4">
                    <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader className="text-xl hover:text-teal-900 bg-teal-50 pl-7" onClick={() => handleOpen(1)}>How the website works?</AccordionHeader>
                        <AccordionBody className="text-blue-gray-800">
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader className="text-xl hover:text-teal-900 bg-teal-50 pl-7" onClick={() => handleOpen(2)}>
                            How to use Material Tailwind?
                        </AccordionHeader>
                        <AccordionBody className="text-blue-gray-800">
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader className="text-xl hover:text-teal-900 bg-teal-50 pl-7" onClick={() => handleOpen(3)}>
                            What can I do with Material Tailwind?
                        </AccordionHeader>
                        <AccordionBody className="text-blue-gray-800">
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>

                </div>


                {/* part-2 */}
                <div className="space-y-4">
                    <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader className="text-xl hover:text-teal-900 bg-teal-50 pl-7" onClick={() => handleOpen(4)}>What is Material Tailwind?</AccordionHeader>
                        <AccordionBody className="text-blue-gray-800">
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader className="text-xl hover:text-teal-900 bg-teal-50 pl-7" onClick={() => handleOpen(5)}>
                            How to use Material Tailwind?
                        </AccordionHeader>
                        <AccordionBody className="text-blue-gray-800">
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 6} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader className="text-xl hover:text-teal-900 bg-teal-50 pl-7" onClick={() => handleOpen(6)}>
                            What can I do with Material Tailwind?
                        </AccordionHeader>
                        <AccordionBody className="text-blue-gray-800">
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>

                </div>
            </div>

        </Container>
    );
};

export default AboutUs;