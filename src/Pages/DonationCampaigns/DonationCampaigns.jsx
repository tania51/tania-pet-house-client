import Container from "../../components/Shared/Container/Container";
import Title from "../../components/Shared/Title/Title";
import useAllPet from "../../hooks/useAllPet";
import SingleDonationPet from "./SingleDonationPet";


const DonationCampaigns = () => {
    const [allPet] = useAllPet();

    return (
        <div className="mt-20">
            <Container>
                <Title heading="Donation campaigns"></Title>

                {/* donationCampaigns pets display with card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        allPet && allPet.map(aPet => <SingleDonationPet key={aPet._id} aPet={aPet}></SingleDonationPet>)
                    }
                </div>

            </Container>
        </div>
    );
};

export default DonationCampaigns;