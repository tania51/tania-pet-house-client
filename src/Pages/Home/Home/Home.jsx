import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import CallToAction from "../CallToAction/CallToAction";
import LatestNews from "../LatestNews/LatestNews";
import PetCategory from "../PetCategory/PetCategory";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="space-y-24">
                <PetCategory></PetCategory>
                <CallToAction></CallToAction>
                <AboutUs></AboutUs>
                <Testimonials></Testimonials>
                <LatestNews></LatestNews>
            </div>
        </div>
    );
};

export default Home;