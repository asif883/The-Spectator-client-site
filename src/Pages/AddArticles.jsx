import { useContext } from "react";
import { AuthContext } from "../Provider/Context";
import Select from 'react-select'


const AddArticles = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

    const {user} = useContext(AuthContext)

    const handleInfoAdd =()=>{

    }
    return (
        <div className="max-w-4xl mx-auto mt-10 p-8 shadow-xl  rounded-xl">
        <h1 className="text-center text-4xl text-[#3A8CFB] font-bold">Add A Article</h1>
  
        <form onSubmit={handleInfoAdd} className="mt-10" >
          <div className="flex gap-4 mb-2">
            <div className="flex-1">
            <label className="font-medium">Title:</label><br />
              <input className="input input-bordered border border-blue-500 w-full" type="text" id="job_title" name="job_title" required />
            </div>
  
             <div className="flex-1">
                <div className="flex-1">
                    <label className="font-medium">Tags:</label><br />
                    <input className="input input-bordered border border-blue-500  w-full" type="text" id="banner" name="banner"  required />
    
                </div>
             </div>
          </div>
          <div className="flex gap-4 mb-4">
           
                 
           </div>
       
           <div className="flex gap-4 mb-4">
               <div className="flex-1">
                  <label className="font-medium">Image:</label><br />
                  <input className="input input-bordered border border-blue-500  w-full" type="text" id="image" name="image" required />
               </div>

               <div className="flex-1 mb-2">
                     <label className="font-medium">Post Date:</label>  <br />
                     <input className="input w-full input-bordered border  border-blue-500 " type="date" name="date" id="date" />
            </div>
  
               
             
           </div>
           
           <div className="flex gap-4 mb-4">
                  
                 <div className="flex-1">
                   <label className="font-medium" >User Email:</label><br />
                   <input defaultValue={user?.email} className="input input-bordered border border-blue-500  w-full" type="email" id="user_email" name="user_email"  required />
                </div>
                <div className="flex-1">
                   
                  <label className="font-medium">User Name:</label><br />
                  <input defaultValue={user?.displayName} className="input input-bordered border border-blue-500  w-full" type="text" id="user_name" name="user_name"  required />
                  </div>
           </div>

            <div className="my-6">
                
             <label className="font-medium">Publisher:</label><br />       
              <Select className="rounded-xl border border-blue-500 w-full "  options={options}  name="publisher" id="publisher"
              required/>

            </div>
           
  
          <div>
              <label className="font-medium ">Description:</label><br />
              <textarea className="w-full rounded-lg border border-blue-500" id="job-description" name="job_description"  rows="4" required></textarea><br /><br />
  
              <input className="w-full border  p-3 btn bg-[#3A8CFB] text-lg font-medium text-white" type="submit" value="Add" />
          </div>
        </form>
      </div>
    );
};

export default AddArticles;