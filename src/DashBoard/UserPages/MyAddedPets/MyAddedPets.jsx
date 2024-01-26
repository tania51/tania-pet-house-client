import Title from "../../../components/Shared/Title/Title";
import useAddPets from "../../../hooks/useAddPets";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";


const MyAddedPets = () => {
    const [addPets] = useAddPets();
    console.log(addPets);

    return (
        <div>
            <div className="w-full flex justify-center -mt-5">
                <Title heading="My Added Pets"></Title>
            </div>
            <div className="mt-6 flex justify-center items-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        addPets && addPets.map(singlePet => <Card key={singlePet?._id} data-aos="zoom-in-up"  data-aos-duration="3000" className="w-full max-w-[48rem] flex-row mb-10">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-2/5 shrink-0 rounded-r-none"
                            >
                                <img
                                    src={singlePet?.image}
                                    alt="card-image"
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h6" color="gray" className="mb-1 uppercase">
                                    {singlePet?.category}
                                </Typography>
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    {singlePet?.name}
                                </Typography>
                                <Typography color="gray" className="mb-8 font-normal">
                                    <span className="font-extrabold">Age:</span> {singlePet?.age} <br />
                                    <span className="font-extrabold">Location:</span> {singlePet?.location} <br />
                                    <span className="font-extrabold">Description:</span> {singlePet?.short_des}
                                </Typography>
                            </CardBody>
                        </Card>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyAddedPets;