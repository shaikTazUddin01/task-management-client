import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { app } from '../../fireBase/firebase.config';

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    // google provider
    const provider=new GoogleAuthProvider()

    // Initialize Firebase Authentication and get a reference to the service
    const auth = getAuth(app)
    // set current user
    const [user, setUser] = useState([])
    const [loading,setloading]=useState(true)
    // create sign in auth
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // create sign up auth
    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
//crete google sign in
const googleSignIn=()=>{
    return signInWithPopup(auth,provider)
}

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setloading(false)
        })
        return () => unSubscribe()
    }, [auth])

    const authInFo = {
        auth,
        signup,
        signIn,
        user,
        googleSignIn,
        loading
    }
    return <AuthContext.Provider value={authInFo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;