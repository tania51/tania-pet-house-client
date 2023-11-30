

import Container from "../../components/Shared/Container/Container";
import SinglePet from "./SinglePet";
import useSortAllPet from "../../hooks/useSortAllPets";
import InfiniteScroll from "react-infinite-scroll-component";
import Title from "../../components/Shared/Title/Title";


const PetListing = () => {
    // const des = true;
    const [allSortPet] = useSortAllPet();
    console.log(allSortPet);

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
                    dataLength={allSortPet.length}
                    next={allSortPet.fetchMoreData}
                    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                    inverse={true} //
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    scrollableTarget="scrollableDiv"
                >
                    <div className="space-y-24 mt-20 mb-20">
                        <Container>
                        <div className="-mt-28 mb-6">
                                <Title heading="Pet Listing"></Title>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {
                                    allSortPet && allSortPet.map(aPet => <SinglePet key={aPet._id} aPet={aPet}></SinglePet>)
                                }
                            </div>
                        </Container>
                    </div>
                </InfiniteScroll>
            </div>

        </>
    );
};

export default PetListing;