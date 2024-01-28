import Container from "../../../components/Shared/Container/Container";
import Title from "../../../components/Shared/Title/Title";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { FaRegUser } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./LatestNews.css"


const LatestNews = () => {
    return (
        <div className="">
            <Container>
                <div className="pb-7">
                    <Title heading="Our News" subHeading="Latest News Update"></Title>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {/* card 1 */}
                    <Card className="space-y-2" shadow={false}>
                        <CardHeader shadow={false} floated={false} className="h-72 parent-img">
                            <img
                                src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Sleeping Cat"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-2 flex items-center gap-4">
                                <Typography color="gray" className="font-medium opacity-75">
                                    <div className="flex gap-2 items-center">
                                        <FaRegUser />
                                        <span>Adward Henrey</span>
                                    </div>
                                </Typography>
                                <Typography color="gray" className="font-medium opacity-75">
                                    <div className="flex gap-2 items-center">
                                        <IoMdNotificationsOutline className="text-xl" />
                                        <span>Feb 12, 2023</span>
                                    </div>
                                </Typography>
                            </div>

                            {/* heading */}
                            <div>
                                <Typography
                                    className="text-2xl text-teal-900 hover:text-amber-800 cursor-pointer font-extrabold py-1 pb-3"
                                >
                                    Working For Cat Adoption
                                </Typography>
                            </div>

                            <Typography
                                color="gray"
                                className="font-medium opacity-75"
                            >
                                I adopted Saphie, the Evil Genius, World’s Smartest Cat, from a bookstore which was going out of business.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                        <button className="text-teal-900 hover:text-amber-800 font-extrabold"><a href="#">Read More</a></button>
                        </CardFooter>
                    </Card>

                    {/* card 2 */}
                    <Card className="space-y-2" shadow={false}>
                        <CardHeader shadow={false} floated={false} className="h-72 parent-img">
                            <img
                                src="https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Dog"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-2 flex items-center gap-4">
                                <Typography color="gray" className="font-medium opacity-75">
                                    <div className="flex gap-2 items-center">
                                        <FaRegUser />
                                        <span>Charlie Luie</span>
                                    </div>
                                </Typography>
                                <Typography color="gray" className="font-medium opacity-75">
                                    <div className="flex gap-2 items-center">
                                        <IoMdNotificationsOutline className="text-xl" />
                                        <span>Mar 29, 2023</span>
                                    </div>
                                </Typography>
                            </div>

                            {/* heading */}
                            <div>
                                <Typography
                                    className="text-2xl text-teal-900 hover:text-amber-800 cursor-pointer font-extrabold py-1 pb-3"
                                >
                                    Working For Dog Adoption
                                </Typography>
                            </div>

                            <Typography
                                color="gray"
                                className="font-medium opacity-75"
                            >
                                It's scientifically proven to reduce stress levels and improve blood pressure, and no one can offer the unconditional love.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <button className="text-teal-900 hover:text-amber-800 font-extrabold"><a href="#">Read More</a></button>
                        </CardFooter>
                    </Card>

                    {/* card 3 */}
                    <Card className="space-y-2" shadow={false}>
                        <CardHeader shadow={false} floated={false} className="h-72 parent-img">
                            <img
                                src="https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Rabbit"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-2 flex items-center gap-4">
                                <Typography color="gray" className="font-medium opacity-75">
                                    <div className="flex gap-2 items-center">
                                        <FaRegUser />
                                        <span>John Downey</span>
                                    </div>
                                </Typography>
                                <Typography color="gray" className="font-medium opacity-75">
                                    <div className="flex gap-2 items-center">
                                        <IoMdNotificationsOutline className="text-xl" />
                                        <span>May, 2023</span>
                                    </div>
                                </Typography>
                            </div>

                            {/* heading */}
                            <div>
                                <Typography
                                    className="text-2xl text-teal-900 hover:text-amber-800 cursor-pointer font-extrabold py-1 pb-3"
                                >
                                    Working For Rabbit Adoption
                                </Typography>
                            </div>

                            <Typography
                                color="gray"
                                className="font-medium opacity-75"
                            >
                                With proper diet and medical care, rabbits can live eight-12 years or more—which is longer than many other small animal pets. 
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <button className="text-teal-900 hover:text-amber-800 font-extrabold"><a href="#">Read More</a></button>
                        </CardFooter>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default LatestNews;