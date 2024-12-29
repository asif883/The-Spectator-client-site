import { useEffect, useState } from "react";
import AllPublisher from "./AllPublisher";
import Articles from "./Articles";
import Banner from "./Banner";
// import Nav from "./Header/Nav";
import Subscription from "./Subscription";
import UserCount from "./UserCount";
import Loading from "./Loading";


const Home = () => {
    const [loading , setLoading] = useState(true)
    
        useEffect(()=>{
            fetch('https://newspaper-server-silk.vercel.app/articles')
            .then(res => res.json())
            .then(data=> {
                // console.log(data);
                setLoading(false)
            })
        },[])
    return (
        <div>
          
            {
                loading ? 
                <>
                <Loading/>
                </>
                :
                <>
                    <Banner></Banner>
                    <AllPublisher/>
                    <Articles></Articles>
                    <UserCount></UserCount>
                    <Subscription></Subscription>
                </>
            }
        </div>
    );
};

export default Home;