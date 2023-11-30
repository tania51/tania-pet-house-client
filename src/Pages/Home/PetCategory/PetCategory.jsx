import CustomBtn from "../../../components/Shared/Button/CustomBtn";
import CustomBtn2 from "../../../components/Shared/Button/CustomBtn2";
import Container from "../../../components/Shared/Container/Container";
import Title from "../../../components/Shared/Title/Title";
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";


const PetCategory = () => {
    return (
        <Container>
            <div>
                <Title heading="pet Categories" subHeading="Best buddies."></Title>

                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* card 1 */}
                    <Card className="mt-6 border rounded-sm hover:border-amber-700">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Cats
                            </Typography>
                            <Typography>
                                The cat is a very adorable animal. Cats can be kept as pets in our houses as well.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <CustomBtn btnContent="Read More"></CustomBtn>
                        </CardFooter>
                    </Card>
                    {/* card 2 */}

                    <Card className="mt-6 border rounded-sm hover:border-teal-700">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Dogs
                            </Typography>
                            <Typography>
                                The cat is a very adorable animal. Cats can be kept as pets in our houses as well.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <CustomBtn2 btnContent="Read More"></CustomBtn2>
                        </CardFooter>
                    </Card>

                    {/* card 3 */}
                    <Card className="mt-6 border rounded-sm hover:border-amber-700">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Rabbit
                            </Typography>
                            <Typography>
                                The cat is a very adorable animal. Cats can be kept as pets in our houses as well.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <CustomBtn btnContent="Read More"></CustomBtn>
                        </CardFooter>
                    </Card>

                    {/* card 4 */}

                    <Card className="mt-6 border rounded-sm hover:border-teal-700">
                        <CardBody>
                            <Typography variant="h5" color="blue-gray" className="mb-2">
                                Fish
                            </Typography>
                            <Typography>
                            Fish are great pets because they do not need training, playtime, or grooming.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <CustomBtn2 btnContent="Read More"></CustomBtn2>
                        </CardFooter>
                    </Card>

                </div>
            </div>
        </Container>
    );
};

export default PetCategory;