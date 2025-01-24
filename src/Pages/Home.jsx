import EditorsChoice from "../Components/EditorsChoice";
import PromotionalBanner from "../Components/PromotionalBanner";
import SubscriptionDeal from "../Components/SubscriptionDeal";
import TopArticles from "../Components/TopArticles";
import UserCounting from "../Components/UserConuting";
import Banner from "./Banner";



const Home = () => {
    return (
        <div>
             <>
                <Banner/>
                <EditorsChoice/>
                <PromotionalBanner/>
                <TopArticles/>
                <UserCounting/>
                <SubscriptionDeal/>
           </>
        </div>
    );
};

export default Home;