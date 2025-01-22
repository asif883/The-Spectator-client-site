import Publishers from "../Components/Publishers";
import TopArticles from "../Components/TopArticles";

import Banner from "./Banner";
import Subscription from "./Subscription";
import UserCount from "./UserCount";

const Home = () => {
    return (
        <div>
             <>
                <Banner/>
                <Publishers/>
                <TopArticles/>
                <UserCount/>
                <Subscription/>
           </>
        </div>
    );
};

export default Home;