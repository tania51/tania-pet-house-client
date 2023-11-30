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
                        <AccordionHeader className="text-xl hover:text-teal-900 bg-teal-50 pl-7" onClick={() => handleOpen(1)}>PET VETERINARY</AccordionHeader>
                        <AccordionBody className="text-blue-gray-800">
                            Access Vet Care is committed to improving your relationship with your pets through education. Dogs, cats, ferrets, snakes – all can be important parts of our lives. Helping you understand their behavior, needs, and health care is what we do here.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader className="text-xl hover:text-teal-900 bg-teal-50 pl-7" onClick={() => handleOpen(2)}>

                            PET HOTEL
                        </AccordionHeader>
                        <AccordionBody className="text-blue-gray-800">
                            Nowadays, he said, people want to travel with their pets, or at least make sure someone is taking care of them at home. “When they go to your hotel, they would expect to have all the necessary facilities and hospitality.”
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader className="text-xl hover:text-teal-900 bg-teal-50 pl-7" onClick={() => handleOpen(3)}>
                            PET BOUTIQUE
                        </AccordionHeader>
                        <AccordionBody className="text-blue-gray-800">
                            A pet boutique or pet store is an essential services retailer which sells animals and pet care resources to the public. A variety of animal supplies and pet accessories are also sold in pet shops.

                        </AccordionBody>
                    </Accordion>

                </div>


                {/* part-2 */}
                <div className="space-y-4">
                    <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader className="text-xl hover:text-teal-900 bg-teal-50 pl-7" onClick={() => handleOpen(4)}>PET GUIDE & CARE</AccordionHeader>
                        <AccordionBody className="text-blue-gray-800">
                            Pets, especially dogs and cats, can reduce stress, anxiety, and depression, ease loneliness, encourage exercise and playfulness, and even improve your cardiovascular health. Caring for an animal can help children grow up more secure and active. Pets also provide valuable companionship for older adults.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader className="text-xl hover:text-teal-900 bg-teal-50 pl-7" onClick={() => handleOpen(5)}>
                            PET TREATMENT
                        </AccordionHeader>
                        <AccordionBody className="text-blue-gray-800">
                            Pets need care and attention to keep them healthy, happy, and safe. They need healthy food; clean, fresh water; and a comfortable place to sleep. Most pets also require regular exercise to stay fit. It is important to find out all about an animal before deciding whether it will fit in well with you or your family.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 6} animate={CUSTOM_ANIMATION}>
                        <AccordionHeader className="text-xl hover:text-teal-900 bg-teal-50 pl-7" onClick={() => handleOpen(6)}>
                            PET GROOMING
                        </AccordionHeader>
                        <AccordionBody className="text-blue-gray-800">
                            While for many people the concept of grooming your pet conjures up notions of brushes and bows, it is in fact a vital element to their overall health and wellbeing. Regularly grooming your animal allows you to catch any underlying diseases or conditions early, meaning that they will be able to be treated quicker and more efficiently and will therefore be less likely to have any lasting effect on your pet.

                        </AccordionBody>
                    </Accordion>

                </div>
            </div>

        </Container>
    );
};

export default AboutUs;