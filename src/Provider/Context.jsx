import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import app from "../../public/Firebase.config";

export  const AuthContext= createContext(null);

const auth = getAuth(app)

const Context = ({children}) => {
    const [user, setUser] = useState (null);
    const [loading , setLoading] =useState(true)
    
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth , currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return() =>{
            unsubscribe()
        }
    },[])


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
    const authInfo= {
        user,
        loading,
        logIN,
        singUp,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;