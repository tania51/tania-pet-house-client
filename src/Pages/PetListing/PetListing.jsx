
import useAllPet from "../../hooks/useAllPet";
import Container from "../../components/Shared/Container/Container";
import SinglePet from "./SinglePet";


const PetListing = () => {
    const [allPet] = useAllPet();

    return (
        <div className="space-y-24 mt-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    allPet && allPet.map(aPet => <SinglePet key={aPet._id} aPet={aPet}></SinglePet>)
                }
            </div>
            </Container>
        </div>
    );
};

export default PetListing;