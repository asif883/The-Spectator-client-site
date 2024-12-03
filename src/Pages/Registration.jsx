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
        const role = 'publisher';

        const userInfo= {
            email,
            name,
            role 
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

            axios.post('http://localhost:5000/users', userInfo)
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
        <div className="flex flex-col lg:flex-row items-center max-w-7xl mx-auto">
            
            <div className="flex-1">
                <img src="https://i.ibb.co/HgT8cF9/20824341-6368592.jpg" alt="" />
            </div>
            
            <div className="text-center max-w-lg mt-16 shadow-xl rounded-lg pb-8 flex-1">
                <h1 className="text-4xl text-[#3A8CFB] font-bold">Register Now</h1>


                <form onSubmit={handleRegister}  className="card-body">
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text text-xl font-semibold">Name</span>
                            </label>
                                
                            <input type="text" name="name"  placeholder="Enter Your Name"className="input input-bordered border border-green-300" required />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Photo Url</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="Photo_url" className="input input-bordered border border-blue-300"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered border border-blue-300" required />
                        </div>
                        <div className="form-control relative">
                        <label className="label">
                            <span className=" label-text text-xl font-semibold">Password</span>
                        </label>
                      
                       <input type={showPassword? "text": "password"} 
                            name='password' 
                            placeholder="password" 
                            onChange={handleChange}
                            value={password}
                            className= "input input-bordered border border-blue-300" required />
                      
                            <span  className="absolute right-3 bottom-4 text-xl" onClick={()=>setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <IoIosEyeOff></IoIosEyeOff> : <IoMdEye></IoMdEye>
                                }
                            </span>
                       
                        </div>
                        
                        <div className="form-control mt-6">
                        <button className=" w-full border-2 mr-4  px-4  rounded-lg py-3 bg-[#3A8CFB] text-white  font-semibold">Register</button>
                        </div>
                        <label className="label mt-4">
                            <a className="label-text-alt text-lg">Already have an account? Please <Link to='/login' className="underline text-blue-600">Login</Link></a>
                        </label>
                 </form>
               <p>{message}</p>
            </div>
            
        </div>
    );
};

export default Registration;