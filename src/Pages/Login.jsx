import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosEyeOff,IoMdEye  } from "react-icons/io";

import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/Context";
import Swal from "sweetalert2";



const Login = () => {
    const{logIN, googleLogin} = useContext(AuthContext)
    const [showPassword, setShowPassword] =useState(false)
    const[password, setPassword] =useState('');

    const location =useLocation();
    const navigate = useNavigate()

    const handleChange= (e)=>{
        setPassword(e.target.value)
    }

    const handleLogin =e=>{
        e.preventDefault()
        const form = new FormData (e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');
        


        logIN(email,password)
        .then(result =>{
            console.log(result.user);

            Swal.fire({
                title: 'Success!',
                text: 'Login Successful',
                icon: 'success',
                confirmButtonText: 'Ok'
              });

            navigate(location?.state ? location.state : '/');
        })
        .catch (error =>{
            console.error( error)

            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Try again'
              })
        })

     
    }

    const handleGoogleLogin =() =>{
        googleLogin()
        .then(()=>{
            navigate(location?.state ? location.state : '/')
        })
        
    }
    return (
        <div className="">
         
      <div className="max-w-md mx-auto mt-16 shadow-xl rounded-lg">
          <div className="text-center">
              <h1 className="text-4xl text-[#E82D85] font-bold font">Please Sing In</h1>
          </div>
      <form onSubmit={handleLogin}  className="card-body">
              <div className="form-control">
              <label className="label">
                  <span className=" text-xl font-semibold">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered border border-pink-300" required />
              </div>
              <div className="form-control relative">
                  <label className="label">
                      <span className="text-xl font-semibold">Password</span>
                  </label>
                
                 <input type={showPassword ? "text": "password"} 
                      name='password' 
                      placeholder="password" 
                      onChange={handleChange}
                      value={password}
                      className="text-black input input-bordered border border-pink-300" required/>
                
                      <span  className="text-black absolute right-3 bottom-4 text-xl" onClick={()=>setShowPassword(!showPassword)}>
                          {
                              showPassword ? <IoIosEyeOff></IoIosEyeOff> : <IoMdEye></IoMdEye>
                          }
                      </span>
                 
                  </div>
             
              <div className="form-control mt-6">
              <button  className="w-full mr-4  px-4  rounded-lg py-3 bg-[#E82D85] text-white  font-semibold">Sing In</button>
              </div>
              
              <label className="label">
                  <p className="text-gray-600 text-lg ">New here? Please <Link to='/register' className="underline text-[#E82D85] font-medium">Sing Up</Link></p>
              </label>
      </form>
      <div className="">
                    <h1 className="text-center font-semibold">Or, Login with</h1>
                  <div className="text-center mt-6 pb-8">
                      <button onClick={handleGoogleLogin} className="mr-3 border border-pink-300 p-1 rounded-xl">
                          <FcGoogle className="w-10 h-10" />
                      </button>
                     
                  </div>
              </div>
      </div>
  </div>
    );
};

export default Login;