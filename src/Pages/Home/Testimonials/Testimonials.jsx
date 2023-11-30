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
                            &quot;In January of 2014 I started volunteering at ARF. It was the greatest decision of my life!  I mentioned that if they ever got a tuxedo with a white-tipped tail, I would want him. Two weeks later, Piglet, now known as Roscoe, showed up. What a guy he turned out to be.&quot;
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
                            src="https://www.arfhamptons.org/wp-content/uploads/2015/04/Peter-Wells.jpg"
                            alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                -Peter Wells
                                </Typography>
                            </div>
                            <Typography color="blue-gray">Adopted Roscoe in June 2014.</Typography>
                        </div>
                    </CardHeader>
                </Card>

                {/* testimonial card 2 */}
                <Card color="transparent" shadow={false} className="w-full border-teal-700 border-b-[3px] bg-teal-50 p-8">

                    <CardBody className="mb-6 p-0 pt-6">
                        <Typography>
                            &quot;I had the most wonderful experience adopting a dog from ARF this summer. Biscuit is a year-old terrier mix and the absolute sweetest girl, and she came house-trained, too. Everyone who sees her loves her, and she has settled in perfectly to New York City life with weekends in the country.&quot;
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
                            src="https://www.arfhamptons.org/wp-content/uploads/2015/04/Bunny-and-Peanut.jpg"
                            alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                -Bunny Goodwin
                                </Typography>
                            </div>
                            <Typography color="blue-gray">Adopted Biscuit in June 2015.</Typography>
                        </div>
                    </CardHeader>
                </Card>

                {/* testimonial card 3 */}
                <Card color="transparent" shadow={false} className="w-full border-teal-700 border-b-[3px] bg-teal-50 p-8">

                    <CardBody className="mb-6 p-0 pt-6">
                        <Typography>
                            &quot;Thank you for the wonderful experience of adopting Daisy. She has been wonderful. She settled into our journey across the States like a pro, as if she were part of us from the very beginning. Just wanted to let you know that we are truly grateful for how well cared for she was and how much she will be loved here.&quot;
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
                            src="https://www.arfhamptons.org/wp-content/uploads/2015/04/Daisy-1-150x150.jpg"
                            alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                -Cyndi and Louella Voegeli
                                </Typography>
                            </div>
                            <Typography color="blue-gray">Adopted Daisy in August 2015.</Typography>
                        </div>
                    </CardHeader>
                </Card>

                {/* testimonial card 4 */}
                <Card color="transparent" shadow={false} className="w-full border-amber-700 border-b-[3px] bg-amber-50 p-8">

                    <CardBody className="mb-6 p-0 pt-6">
                        <Typography>
                            &quot;Over the last two years we have learned a lot from Beaker (like why he was named Rocket while at ARF!). We have certainly had some challenges, but he has made tremendous progress and has taught us to be more patient and to enjoy the small things in life. We could not be happier!&quot;
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
                            src="https://www.arfhamptons.org/wp-content/uploads/2015/04/Cheryl-and-Beaker-e1450285147301-150x150.jpg"
                            alt="tania andrew"
                        />
                        <div className="flex w-full flex-col gap-0.5">
                            <div className="flex items-center justify-between">
                                <Typography variant="h5" color="blue-gray">
                                -The Cheryl and Ben Rubinstei
                                </Typography>
                            </div>
                            <Typography color="blue-gray">Adopted Beaker in September 2013.</Typography>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </Container>
    );
};

export default Testimonials;