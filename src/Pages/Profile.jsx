import { useEffect, useState } from "react";
import useUserData from "../Hooks/useUserData";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import Swal from "sweetalert2";



const Profile = () => {
  const {email, name, imageURL} = useUserData()
  // console.log(email);
  const [articles , setArticles] = useState()
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
      fetch( `https://newspaper-server-silk.vercel.app/my-article/${email}`)
      .then(res => res.json())
      .then( data => {
        setArticles(data)
        setLoading(false)
      })
  })

  const isPremium = false; 
   
  const handleSubmit= (e) =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const imageURL = form.image.value

    const updateInfo ={ name, imageURL }
   

    axios.patch(`https://newspaper-server-silk.vercel.app/updateUser/${email}`, updateInfo)
    .then( res => {
      if(res.data.modifiedCount){
        Swal.fire({
            title: 'Success!',
            text: 'Your Profile has been Updated successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
    }
    window.location.reload()
    })
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {/* User Profile Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold text-gray-500">
            {
              imageURL ? <><img className='h-12 rounded-full border-2' src={imageURL} alt={name} /></>
              :
              <><img className='h-12 rounded-full border-2' src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" alt={name} /></>
            }
          
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-gray-800 capitalize">{name}</h1>
            <p className="text-gray-600">
              Articles Published: <span>
                {
                  loading ? <span className="loading loading-dots loading-md"></span>
                  :
                  <span className="font-bold">{articles?.length}</span>
                }
              </span>
            </p>
          </div>
        </div>
        <div>
        <div>
            
            <button className="" onClick={()=>document.getElementById('my_modal_5').showModal()}><FiEdit size={24}/></button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <form onSubmit={handleSubmit}>
                   <label className="label ">
                        <span className="label-text text-lg font-semibold"> Name</span>
                    </label>
                        
                    <input type="text" name="name"  placeholder="Your name"className="input input-bordered border border-gray-600 w-full" defaultValue={name} required />
                    
                   <label className="label ">
                        <span className="label-text text-lg font-semibold">Image URL</span>
                    </label>
                        
                    <input type="text" name="image" placeholder="image"className="input input-bordered border border-gray-600 w-full" required />
                    <input className="font-semibold p-3 w-full border border-gray-600 mt-3 rounded-lg bg-gray-800 text-gray-300" type="submit" value='Update' />
                 </form>

                    <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Cancel</button>
                    </form>
                    </div>
                </div>
            </dialog>
        </div>
       
          
        </div>
      </div>

      {/* Dropdown to Show Articles */}
      <div className="mt-6">
        
        <div className="">
          
           <h1 className="text-xl font-semibold">Your Articles</h1>
         
          <ul
            
          >
            {
              loading ? 
              <><span className="loading loading-dots loading-md"></span></>
              :
              <>
                {articles?.map((article, index) => (
              <li key={index} className="py-1 px-4 hover:bg-gray-100 rounded">
              {index + 1}: {article?.title}
              </li>
              ))}
              </>
            }
          </ul>
        </div>
      </div>

      {/* Premium Subscription Section */}
      {!isPremium && (
        <div className="mt-6 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg">
          <p className="text-gray-700">
            <strong>Not a premium user?</strong> Unlock exclusive content and features by subscribing!
          </p>
          <button className="mt-3 w-full bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600">
            Subscribe Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
