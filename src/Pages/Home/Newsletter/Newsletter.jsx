import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Input,
    Button,
} from "@material-tailwind/react";
import Container from "../../../components/Shared/Container/Container";
import "./../Banner/Banner.css"

const Newsletter = () => {
    return (
        <div className="pb-10 lg:pb-32">
            <Container>
                <Card
                    shadow={false}
                    className="relative grid h-[20rem] w-full items-end justify-center overflow-hidden text-center"
                >
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.pexels.com/photos/776635/pexels-photo-776635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-left-bottom bg-opacity-60"
                    >
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800/80 via-amber-300/50" />
                    </CardHeader>
                    <CardBody className="relative py-14 flex gap-3 items-center bg-amber-300 jstify-center lg:mb-8 rounded">
                        <Typography
                            variant="h2"
                            className="mb-6 font-medium leading-[1.5] text-teal-900" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >
                            <span className="font-extrabold">Newsletter For</span><br />
                            <span className="text-lg">*
                                Do Not Show Your Email.</span>
                        </Typography>
                        <Typography variant="h5" className="mb-4 text-gray-400">
                            <div>
                                <Input data-aos="flip-left" data-aos-easing="ease-out-cubic"
                                    data-aos-duration="2000"
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 py-7 pr-56 pl-7 bg-white"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                            </div>
                        </Typography>
                        <Button size="sm" variant="text" className="flex items-center gap-2 bg-teal-800 px-7 py-5 rounded hover:bg-amber-800 text-white btn-hover4" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            Subscribe
                        </Button>
                        {/* <Button size="sm" variant="text" className="flex items-center gap-2 bg-teal-900 px-7 py-5 rounded text-white hover:text-white hover:bg-amber-800" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            Subscribe
                        </Button> */}
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
};

export default Newsletter;