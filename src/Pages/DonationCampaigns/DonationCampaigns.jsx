import InfiniteScroll from "react-infinite-scroll-component";
import Container from "../../components/Shared/Container/Container";
import Title from "../../components/Shared/Title/Title";
import useAllPet from "../../hooks/useAllPet";
import SingleDonationPet from "./SingleDonationPet";


const DonationCampaigns = () => {
    const [allPet] = useAllPet();

    return (
        <>
            <div
                id="scrollableDiv"
                style={{
                    height: 300,
                    overflow: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                {/*Put the scroll bar always on the bottom*/}
                <InfiniteScroll
                    dataLength={allPet.length}
                    next={allPet.fetchMoreData}
                    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                    inverse={true} //
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                >
                    <div>
                        <Container>
                            <div className="-mt-14 mb-6">
                                <Title heading="Donation campaigns"></Title>
                            </div>

                            {/* donationCampaigns pets display with card */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                                {
                                    allPet && allPet.map(aPet => <SingleDonationPet key={aPet._id} aPet={aPet}></SingleDonationPet>)
                                }
                            </div>

                        </Container>
                    </div>
                </InfiniteScroll>
            </div>

        </>
    );
};

export default DonationCampaigns;