import { useEffect, useState } from "react";
import useUserData from "../Hooks/useUserData";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const MyArticle = () => {
    const {email} = useUserData()
    // console.log(email);
    const [myArticles , setMyArticles] = useState()
    console.log(myArticles);

    useEffect(()=>{
        fetch( `http://localhost:5000/my-article/${email}`)
        .then(res => res.json())
        .then( data => setMyArticles(data))
    })
    const handleDelete = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert the article!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            axios.delete(`http://localhost:5000/articles/${id}`)
            .then(res =>{
                if(res.data.modifiedCount){
                    Swal.fire({
                        title: "Delete!",
                        text: "The Article deleted successfully.",
                        icon: "success"
                      });
                }
               window.location.reload() 
             })
             
            }
             
          });
        
    }
    return (
        <div className="max-w-7xl mx-auto min-h-screen">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800 my-10">My Articles</h1>
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
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Is Premium ?</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* row  */}
                        {
                           myArticles?.map((Article) => 
                          <tr key={Article.id}>
                            <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                <div className="mask mask-squircle h-12 w-12">
                                    <img
                                    src={Article?.image}
                             alt={Article.tags}/>
                          </div>
                           </div>
                               <div>
                                <div className="font-bold"></div>
                                <div className="text-sm opacity-50">{Article?.tags}</div>
                                </div>
                            </div>
                            </td>
                            <td>
                            {Article?.title}
                            <br />
                            <span className="badge badge-ghost badge-sm">{Article?.publisher}</span>
                            </td>
                            <td className="capitalize">
                               {Article?.status}
                            </td>
                            <td className="">
                               <Link to={`/update/${Article._id}`}>
                                <button>
                                    < GrDocumentUpdate size={24}/>
                                </button> 
                               </Link>
                            </td>
                            <td >
                               <button onClick={()=> handleDelete(Article?._id)}>
                                    < MdOutlineDelete size={28}/>
                                </button> 
                            </td>
                            <td className="capitalize">
                                {Article?.isPremium}
                            </td>
                        </tr>
                            )
                        }
                        
                        
                        </tbody>
                    </table>
                    </div>
        </div>
    );
};

export default MyArticle;