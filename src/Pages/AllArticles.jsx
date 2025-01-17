import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";

import Card from "./Card";
import SearchBar from "./Seacrh";
import Filter from "./Filter";

const AllArticles = () => {
    const [loading , setLoading] = useState(true)
    const [articles , setArticles] = useState([])
   
    const [search , setSearch] = useState("")
    console.log(search);
    const [publisher, setPublishers] =useState("")
    const [tag, setAllTags] = useState("")

    const [publishers, setPublisher] =useState([])
    const [tags, setTags] = useState([])

    useEffect(()=>{
         setLoading(true)
         const fetch = async()=>{
            const res = await  axios.get(`https://newspaper-server-silk.vercel.app/articles?title=${search}&publisher=${publisher}&tags=${tag}`)
             
            setArticles(res.data.articles)
            setPublisher(res.data.publishers)
            setTags(res.data.tag)
            setLoading(false)        
        }
         fetch()    
    },[search, publisher, tag])
    

    const handleSearch =(e)=>{
      e.preventDefault()
      setSearch(e.target.search.value)
      e.target.search.value=''
    }

    const handleReset =() =>{
      window.location.reload()
    }
    return (
        <div className="max-w-7xl mx-auto p-5">
            <div className="my-10 ">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
               All Articles
            </h2>
            </div>
            
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
         <div className="flex gap-2 flex-col-reverse md:flex-col">
         <SearchBar handleSearch={handleSearch}/>
         <button onClick={handleReset} className='px-6 py-3 border rounded-md border-blue-300  text-blue-400 mt-2'>Reset</button>
         </div>
         <Filter 
         publishers={publishers} 
         tags={tags}
         setPublishers={setPublishers}
         setAllTags={setAllTags}
         />
        </div>

          
        {
            loading ?( <Loading/>)
            :( <>
             {
              articles?.length === 0 ? 
             (<div>
                <h1 className="text-2xl text-red-500 font-bold text-center min-h-screen flex items-center justify-center">No Article found</h1>
               </div>) :

                   (<div className='grid gap-6 md:gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                   {
                   articles?.map((article) =>
                    article.status === 'approve' &&
            
                  <Card key={article?._id} article={article}></Card>)
                  }
                     </div>) 
                  }
                    </>)
          }




            
        </div>
    );
};

export default AllArticles;