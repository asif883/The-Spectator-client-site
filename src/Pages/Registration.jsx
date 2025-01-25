import { useContext, useState } from "react";

import { IoIosEyeOff,IoMdEye  } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Context";
import Swal from "sweetalert2";
import axios from "axios";


const Registration = () => {
    const {singUp} = useContext(AuthContext)
    const[password, setPassword] =useState('');
    const [showPassword, setShowPassword] =useState(false)
    const [message , setMessage] = useState('')

    const handleChange= (e)=>{
        setPassword(e.target.value)
    };

    const handleRegister =e =>{
        e.preventDefault()

        const form = new FormData (e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const imageURL = form.get('imageURL');
        const role = 'publisher';

        const userInfo= {
            email,
            name,
            role,
            imageURL 
        }
        
         // console.log(userInfo);
        
            const regExp =/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
            if(password === ""){
                Swal.fire({
                    title: 'Error!',
                    text: 'Please enter a Strong Password',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                })
                
             } 
            else if(regExp.test(password)){
                
                setMessage('Password is Valid')
                
             } 
            else if(!regExp.test(password)){
                Swal.fire({
                    title: 'Error!',
                    text: 'Password is not Valid. Password Must have an Uppercase and Lowercase letter , Length must be at least 6 character',
                    icon: 'error',
                    confirmButtonText: 'Try again'
                })
                return
        }

        singUp(email, password)
        .then( () =>{

            axios.post('https://newspaper-server-silk.vercel.app/users', userInfo)
            .then((res) =>{
            // console.log(res.data)
            
            if(res.data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Registration Successful',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  }); 
            }
          })
        })      
        
          .catch (error =>{
            console.error( error.message)
            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Try again'
              })
            
        })  
    }
    return (
        <div className="max-w-7xl mx-auto">

            <div className="text-center mx-auto max-w-lg mt-16 shadow-2xl rounded-lg pb-8 flex-1">
                <h1 className="text-4xl text-[#E82D85] font-bold">Sing Up to Your Account</h1>

                <form onSubmit={handleRegister}  className="card-body">
                        <div className="form-control">
                            <label className="label ">
                                <span className="text-xl font-semibold">Name</span>
                            </label>
                                
                            <input type="text" name="name"  placeholder="Enter Your Name"className="input input-bordered border border-pink-300" required />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Photo Url</span>
                            </label>
                            <input type="text" name="imageURL" placeholder="Photo_url" className="input input-bordered border border-pink-300"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered border border-pink-300" required />
                        </div>
                        <div className="form-control relative">
                        <label className="label">
                            <span className=" text-xl font-semibold">Password</span>
                        </label>
                      
                       <input type={showPassword? "text": "password"} 
                            name='password' 
                            placeholder="password" 
                            onChange={handleChange}
                            value={password}
                            className= "input input-bordered border border-pink-300" required />
                      
                            <span  className="absolute right-3 bottom-4 text-xl" onClick={()=>setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <IoIosEyeOff></IoIosEyeOff> : <IoMdEye></IoMdEye>
                                }
                            </span>
                       
                        </div>
                        
                        <div className="form-control mt-6">
                        <button className=" w-full  mr-4  px-4  rounded-lg py-3 bg-[#E82D85] text-white  font-semibold">Sing Up</button>
                        </div>
                        <label className="label mt-4">
                            <a className="text-gray-600 text-lg">Already have an account? Please <Link to='/login' className="underline text-pink-600">Sing In</Link></a>
                        </label>
                 </form>
               <p>{message}</p>
            </div>
            
        </div>
    );
};

export default Registration;