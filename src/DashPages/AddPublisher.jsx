import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddPublisher = () => {
    const {
        handleSubmit,
        register,
        formState:{errors}
    }= useForm()

    const handleAddPublisher =(data)=>{
            const name = data.name
            const logo = data.logo
            const description = data.description

            const publisherInfo= {
                name, logo, description
            }
            console.log(publisherInfo);
          axios.post('http://localhost:5000/publisher' , publisherInfo)
          .then(res =>{
            if(res.data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Publisher Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  }); 
            }
        window.location.reload()  
        })  
    }
    return (
        <div> 
        <div className='text-center my-8'>
                <h1 className="text-3xl font-bold text-blue-400">Add Publisher</h1>
            </div>
      <form onSubmit={handleSubmit(handleAddPublisher)}>
        <div className=''>
          <div className="">
                    <label className="label ">
                        <span className="label-text text-xl font-semibold">Publisher Name</span>
                    </label>
                        
                    <input type="text"  placeholder="Enter Publisher name"className="input input-bordered border border-blue-300 w-full" {...register('name' ,{required: true})} />
                    {
                        errors.name && ( 
                            <p className='text-red-500 text-sm font-light'>Name is required</p>
                        )
                    }
                   
            </div>
             <div className="">
                    <label className="label ">
                        <span className="label-text text-xl font-semibold">Publisher Logo</span>
                    </label>
                        
                    <input type="text"  placeholder="Publisher Logo"className="input input-bordered border border-blue-300 w-full" {...register('logo' ,{required: true})} />
                    {
                        errors.logo && ( 
                            <p className='text-red-500 text-sm font-light'>Logo is required</p>
                        )
                    }
                   
            </div>
        </div>
        <div className="">
                    <label className="label ">
                        <span className="label-text text-xl font-semibold">Description</span>
                    </label>
                    <textarea
                        placeholder="Description"
                        className="textarea textarea-bordered textarea-lg w-full border-blue-300" {...register('description')}></textarea>
                    
                       
                   
            </div>

            <button type='submit' className='w-full border-2 mt-4  px-4  rounded-lg py-3 bg-[#60A5FA] text-white  font-semibold'>Add Product</button>
          
           
      </form>
    </div>

    );
};

export default AddPublisher;