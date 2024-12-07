import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const PendingArticles = () => {
    const [articles , setArticles] = useState()

    useEffect(()=>{
        fetch('http://localhost:5000/articles')
        .then(res => res.json())
        .then( data => setArticles(data))
    },[])

    const handleApprove = (pendingArticle) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "The Article will added to main page!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, approve it"
          })
          .then((result) => {         
            if(result.isConfirmed){
                axios.patch(`http://localhost:5000/article/admin/${pendingArticle?._id}`)
                .then(res =>{
                    if(res.data.modifiedCount > 0){
                        Swal.fire({
                            title: "Article approved Successfully!",
                            text: `${pendingArticle?.name} Approved`,
                            icon: "success"
                          })
                    }
                window.location.reload()  
                })
            }
        })
    }

    return (
        <div>
            <div className="text-center my-10">
             <h2 className="text-4xl font-bold text-blue-400 mb-12">
              Pending Articles
           </h2>
            </div>
           
                    <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                        <tr className="font-semibold text-sm bg-blue-100">
                            <th >
                                Image
                            </th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Change Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                           articles?.map((pendingArticle) => pendingArticle.status === 'pending' &&    

                          <tr key={pendingArticle.id}>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                    src={pendingArticle?.image}
                             alt={pendingArticle.tags}/>
                          </div>
                           </div>
                               <div>
                                <div className="font-bold"></div>
                                <div className="text-sm opacity-50">{pendingArticle?.tags}</div>
                                </div>
                            </div>
                            </td>
                            <td>
                            {pendingArticle?.title}
                            <br />
                            <span className="badge badge-ghost badge-sm">{pendingArticle?.publisher}</span>
                            </td>
                            <td>Pending</td>
                            <th>
                            <button onClick={()=> handleApprove(pendingArticle)} className="btn btn-ghost btn-xs">Approve</button>
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

export default PendingArticles;