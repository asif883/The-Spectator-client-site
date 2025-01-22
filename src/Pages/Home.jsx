import TopArticles from "../Components/TopArticles";
// import AllPublisher from "./AllPublisher";
// import Articles from "./Articles";
import Banner from "./Banner";
import Subscription from "./Subscription";
import UserCount from "./UserCount";

const Home = () => {
    return (
        <div>
             <>
                 <Banner></Banner>
                 {/* <AllPublisher/> */}
                 {/* <Articles></Articles> */}
                 <TopArticles/>
                 <UserCount></UserCount>
                 <Subscription></Subscription>
           </>
        </div>
    );
};

export default Home;