import Articles from "./Articles";
import Banner from "./Banner";
import Nav from "./Header/Nav";
import Subscription from "./Subscription";
import UserCount from "./UserCount";


const Home = () => {
    return (
        <div>
            <Nav></Nav>
           <Banner></Banner>
           <Articles></Articles>
           <UserCount></UserCount>
           <Subscription></Subscription>
        </div>
    );
};

export default Home;