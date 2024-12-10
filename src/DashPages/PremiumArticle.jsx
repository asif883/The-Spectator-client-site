import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";



const PremiumArticle = () => {
    const [articles , setArticles] = useState()

    useEffect(()=>{
        fetch('http://localhost:5000/articles')
        .then(res => res.json())
        .then( data => setArticles(data.articles))
    },[])

    const handlePremium = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "This Article will be marked as Premium",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make it!"
          }).then((result) => {
            if (result.isConfirmed) {
            axios.patch(`http://localhost:5000/article/premium/${id}`)
            .then(res =>{
                // console.log(res.data);
                if(res.data.modifiedCount){
                    Swal.fire({
                        title: "Success!",
                        text: "The Article is Premium Now.",
                        icon: "success"
                      });
                }
                window.location.reload() 
             })
             
            }
             
          });
        
    }
    return (
        <div>
        <div className="text-center my-10">
         <h2 className="text-4xl font-bold text-blue-400 mb-2">
          Make Premium

       </h2>
       <p className="text-lg text-gray-600">Only You can make premium the approved articles</p>
        </div>
       
                <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="font-semibold text-sm bg-blue-100">
                        <th >
                            Image & Tag
                        </th>
                        <th>Title & Publisher</th>
                        <th>Status</th>
                        <th>Make Premium</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                       articles?.map((article) => article.status === 'approve' &&
                      <tr key={article.id}>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src={article?.image}
                         alt={article.tags}/>
                      </div>
                       </div>
                           <div>
                            <div className="font-bold"></div>
                            <div className="text-sm opacity-50">{article?.tags}</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        {article?.title}
                        <br />
                        <span className="badge badge-ghost badge-sm">{article?.publisher}</span>
                        </td>
                        <th className="capitalize">{article?.status}</th>
                        <th>
                            {
                                article?.isPremium === 'no' 
                                ?
                                <button onClick={() => handlePremium(article?._id)}>Click To Make Premium</button>
                                :
                                <button className="text-[#6A0DAD]" disabled>Premium</button>

                            }
                        </th>

                    </tr>
                        )
                    }
                    
                    
                    </tbody>
                </table>
                </div>
                    
    </div>
    );
};

export default PremiumArticle;