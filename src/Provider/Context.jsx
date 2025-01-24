/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import app from "../../public/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export  const AuthContext= createContext(null);


const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)

const Context = ({children}) => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
      return setIsDarkMode(prevMode => !prevMode);
    };

    const [user, setUser] = useState (null);
    const [loading , setLoading] =useState(true)
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged( auth , currentUser=>{
            setUser(currentUser)
        
        if(currentUser){
            axios.post('https://newspaper-server-silk.vercel.app/authentication',{email: currentUser?.email})
            .then(data=>{
                if(data.data){
                    localStorage.setItem('access-token', data?.data?.token)
                    setLoading(false)
                }
            })
        }
        else{
            localStorage.removeItem('access-token')
            setLoading(false)
        }

    })

        return ()=>{
            unsubscribe()
        }
    }, [])


    const logIN =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    };
    
    const singUp= (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }
    
    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }
    const googleLogin =() =>{
        setLoading(true)
        return signInWithPopup( auth , googleProvider)
    }
    const authInfo= {
        user,
        loading,
        logIN,
        singUp,
        logOut,
        googleLogin,
        isDarkMode,
        toggleDarkMode
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;