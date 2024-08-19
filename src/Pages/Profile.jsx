import { useContext } from "react";
import { AuthContext } from "../Provider/Context";


const Profile = () => {
    const { user} = useContext(AuthContext)

    return (
        <div className="max-w-3xl mt-10 mx-auto">
        <div className="text-center mb-5">
            <h1 className="text-3xl text-[#5BBC2E] font-bold">Welcome To Your Profile</h1>
        </div>
        <div>
            <div className="relative">
               < img className="rounded-xl border border-green-300 h-[400px] w-full" src="https://i.ibb.co/CVFh1hf/Telecommuting-pana.png" alt="" />


               <div className="absolute -bottom-9">
            
                {
                     user?.displayName ? <img className="border rounded-xl" src={user?.photoURL} alt={user?.email} />

                      : 
                     <img className="border rounded-xl h-40" src="https://i.ibb.co/yVMCWV5/images-3.png" alt={user?.email} />

                }
          
               </div>
            </div>

             <div className="mt-10">
               <h1 className="text-2xl font-bold ">Name: {user?.displayName}</h1>
               

            
            </div>

           
             
        </div>
        
    </div>
    );
};

export default Profile;