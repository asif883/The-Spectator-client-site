import { useEffect, useState } from "react";
import useUserData from "../Hooks/useUserData";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateArticle = () => {
    const {id} = useParams()
    console.log(id);

    const [publishers , setPublisher] = useState()
    useEffect(()=>{
      fetch('http://localhost:5000/all-publisher')
      .then(res => res.json())
      .then(data => setPublisher(data))
    }, [])

    const { name, email } = useUserData()

    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value
        const image = form.image.value
        const tags = form.tags.value
        const date = form.date.value
        const description = form.description.value
        const publisher = form.publisher.value
        const user_email = form.user_email.value
        const user_name = form.user_name.value

        const UpdateArticleInfo= {title, image, tags, date, description, publisher, user_email, user_name}

        console.log(UpdateArticleInfo);

        axios.patch(`http://localhost:5000/updateArticle/${id}` , UpdateArticleInfo)
        .then( res =>{
            if(res.data.modifiedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Your article has been Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  });
            }
        })
    }
    return (
        <div className="max-w-4xl mx-auto mt-10 p-8 shadow-2xl  rounded-xl bg-blue-50">
        <h1 className="text-center text-4xl text-[#3A8CFB] font-bold">Update Article</h1>
  
        <form onSubmit={handleUpdate} className="mt-10" >
          <div className="flex gap-4 mb-2">
            <div className="flex-1">
            <label className="font-medium">Title:</label><br />
              <input className="input  w-full" type="text" id="title" name="title" required />
            </div>
  
             <div className="flex-1">
                <div className="flex-1">
                    <label className="font-medium">Tags:</label><br />
                    <input className="input w-full" type="text" id="tags" name="tags"  required />
    
                </div>
             </div>
          </div>
          <div className="flex gap-4 mb-4">
           
                 
           </div>
       
           <div className="flex gap-4 mb-4">
               <div className="flex-1">
                  <label className="font-medium">Image:</label><br />
                  <input className="input   w-full" type="text" id="image" name="image" required />
               </div>

               <div className="flex-1 mb-2">
                     <label className="font-medium">Post Date:</label>  <br />
                     <input className="input w-full" type="date" name="date" id="date" required/>
            </div>
  
               
             
           </div>
           
           <div className="flex gap-4 mb-4">
                  
                 <div className="flex-1">
                   <label className="font-medium" >User Email:</label><br />
                   <input defaultValue={email} className="input  border   w-full" type="email" id="user_email" name="user_email"  required />
                </div>
                <div className="flex-1">
                   
                  <label className="font-medium">User Name:</label><br />
                  <input defaultValue={name} className="input  border   w-full" type="text" id="user_name" name="user_name"  required />
                  </div>
           </div>

            <div className="my-6">
                
             <label className="font-medium">Publisher:</label><br />
             <select className="select  rounded-xl border  w-full" name="publisher" id="publisher" required>
              <option disabled selected>Choose one</option>
              
              {
                 publishers?.map((publisher ) => <option key={publisher?.id}>{publisher?.name}</option> )
            }
            </select>

            </div>
           
  
          <div>
              <label className="font-medium ">Description:</label><br />
              <textarea className="w-full rounded-lg border" id="description" name="description"  rows="4" required></textarea><br /><br />
  
              <input className="w-full rounded-xl border-2 border-blue-300 p-3 hover:bg-[#3A8CFB] text-lg font-medium text-blue-500 hover:text-white" type="submit" value="Update" />
          </div>
        </form>
      </div>
    );
};

export default UpdateArticle;