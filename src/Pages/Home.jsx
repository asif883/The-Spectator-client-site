import AllPublisher from "./AllPublisher";
import Articles from "./Articles";
import Banner from "./Banner";
// import Nav from "./Header/Nav";
import Subscription from "./Subscription";
import UserCount from "./UserCount";


const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
           <AllPublisher/>
           <Articles></Articles>
           <UserCount></UserCount>
           <Subscription></Subscription>
        </div>
    );
};

export default Home;