import EditorsChoice from "../Components/EditorsChoice";
import Publishers from "../Components/Publishers";
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
                {/* <Publishers/> */}
                <TopArticles/>
                <UserCounting/>
                <SubscriptionDeal/>
           </>
        </div>
    );
};

export default Home;