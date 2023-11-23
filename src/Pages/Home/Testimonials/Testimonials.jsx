import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import Container from "../../../components/Shared/Container/Container";
import Title from "../../../components/Shared/Title/Title";

function StarIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-yellow-700"
        >
            <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
            />
        </svg>
    );
}



const Testimonials = () => {
    return (
        <Container>
            {/* testimonals title */}
            <Title heading="Testimonials"></Title>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32 mt-8">

                {/* testimonial card 1 */}
                <Card color="transparent" shadow={false} className="w-full border-amber-700 border-b-[3px] bg-amber-50 p-8">

                    <CardBody className="mb-6 p-0 pt-6">
                        <Typography>
                            &quot;I found solution to all my design needs from Creative Tim. I use
                            them as a freelancer in my hobby projects for fun! And its really
                            affordable, very humble guys !!!&quot;
                        </Typography>
                    </CardBody>
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-4"
                    >
                        <Avatar
                            size="lg"
                            variant="circular"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                    Tania Andrew
                                </Typography>
                            </div>
                            <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                        </div>
                    </CardHeader>
                </Card>

                {/* testimonial card 2 */}
                <Card color="transparent" shadow={false} className="w-full border-teal-700 border-b-[3px] bg-teal-50 p-8">

                    <CardBody className="mb-6 p-0 pt-6">
                        <Typography>
                            &quot;I found solution to all my design needs from Creative Tim. I use
                            them as a freelancer in my hobby projects for fun! And its really
                            affordable, very humble guys !!!&quot;
                        </Typography>
                    </CardBody>
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-4"
                    >
                        <Avatar
                            size="lg"
                            variant="circular"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                    Tania Andrew
                                </Typography>
                            </div>
                            <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                        </div>
                    </CardHeader>
                </Card>

                {/* testimonial card 3 */}
                <Card color="transparent" shadow={false} className="w-full border-teal-700 border-b-[3px] bg-teal-50 p-8">

                    <CardBody className="mb-6 p-0 pt-6">
                        <Typography>
                            &quot;I found solution to all my design needs from Creative Tim. I use
                            them as a freelancer in my hobby projects for fun! And its really
                            affordable, very humble guys !!!&quot;
                        </Typography>
                    </CardBody>
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-4"
                    >
                        <Avatar
                            size="lg"
                            variant="circular"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                    Tania Andrew
                                </Typography>
                            </div>
                            <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                        </div>
                    </CardHeader>
                </Card>

                {/* testimonial card 4 */}
                <Card color="transparent" shadow={false} className="w-full border-amber-700 border-b-[3px] bg-amber-50 p-8">

                    <CardBody className="mb-6 p-0 pt-6">
                        <Typography>
                            &quot;I found solution to all my design needs from Creative Tim. I use
                            them as a freelancer in my hobby projects for fun! And its really
                            affordable, very humble guys !!!&quot;
                        </Typography>
                    </CardBody>
                    <CardHeader
                        color="transparent"
                        floated={false}
                        shadow={false}
                        className="mx-0 flex items-center gap-4 pt-0 pb-4"
                    >
                        <Avatar
                            size="lg"
                            variant="circular"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                    Tania Andrew
                                </Typography>
                            </div>
                            <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </Container>
    );
};

export default Testimonials;