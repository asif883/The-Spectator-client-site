import axios from "axios";
import { useEffect, useState } from "react";

const PendingArticles = () => {
    const [pendingArticles , setPendingArticles] = useState()

    useEffect(()=>{
        fetch('http://localhost:5000/all-pending-articles')
        .then(res => res.json())
        .then( data => setPendingArticles(data))
    },[])

    const handleApprove = (pendingArticle) =>{
        const title = pendingArticle.title
        const image = pendingArticle.image
        const tags = pendingArticle.tags
        const date = pendingArticle.date
        const description = pendingArticle.description
        const publisher = pendingArticle.publisher
        const user_email = pendingArticle.user_email
        const user_name = pendingArticle.user_name
        
        const approveArticleInfo= {title, image, tags, date, description, publisher, user_email, user_name}

        axios.post('http://localhost:5000/approve', approveArticleInfo)
        .then(res =>{
            console.log(res.data);
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
                        <tr>
                            <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row 1 */}
                        {
                             pendingArticles?.map((pendingArticle) =>
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