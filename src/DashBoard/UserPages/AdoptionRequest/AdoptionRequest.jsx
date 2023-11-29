
import Title from "../../../components/Shared/Title/Title";
import { Card, Typography } from "@material-tailwind/react";
import useAdoptionRequestPets from "../../../hooks/useAdoptionRequestPets";


const AdoptionRequest = () => {
    const [adoptedRequestPets] = useAdoptionRequestPets();

   


    return (


        <div>
            <Title heading="Adoption Request Pet"></Title>
            <div>
                <Card className="h-full w-full overflow-scroll">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>

                                {/* user name */}
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        User Name
                                    </Typography>
                                </th>

                                {/* user email */}
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        User Email
                                    </Typography>
                                </th>

                                {/* user phone number */}
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        User Phone Number
                                    </Typography>
                                </th>

                                {/* Action Btn */}
                                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        Action
                                    </Typography>
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {adoptedRequestPets && adoptedRequestPets.map(({ _id, name, email, phn_Number, adopted }) => (
                                <tr key={name} className="even:bg-blue-gray-50/50">
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {email}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {phn_Number}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                            {/* <button onClick={() => setAdoptedBtn(!adopted)}>Adopted</button>
                                            {() => handleAdoptedPet(setAdoptedBtn(!adopted))} */}
                                            {adopted === true ? <button className="flex items-center gap-2 bg-teal-900 px-3 py-2 rounded text-white">Reject</button> : <button className="flex items-center gap-2 bg-amber-700 px-3 py-2 rounded text-white">Adopt</button>}
                                        </Typography>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    );
};

export default AdoptionRequest;