import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth";
  import { firebaseApp } from "./firebase-config";
import { $ } from "@builder.io/qwik";
import { getFirestore,doc,setDoc,getDoc } from "firebase/firestore";
  
  const auth = getAuth(firebaseApp);
  const db= getFirestore(firebaseApp);
  
  
  // Email/Password Authentication
  export const loginWithEmail = $(async (email: string, password: string,) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userRef = doc(db,"users",user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            return ({ "success":true,"user":userSnap.data()})
        }else{
            return ({ "success":false,"error":"User not found"})
        }
    }catch(err:any){
        return ({ "success":false,"error":err.message})

    }
  });
  
  export const signUpWithEmail = $(async (email: string, password: string,username:string) => {
    try{

        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Store user data in Firestore
        await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            username: username,
            userId: user.uid,
            role: "user",
            createdAt: new Date(),
        })
        return{ "success":true,"user":user}
    }catch(err:any){
        return{ "success":false,"error":err.message}
    }
  });
  
  export const sendResetPasswordEmail = $(async (email: string) => {
    return sendPasswordResetEmail(auth, email);
  });
  
 
  
  // Google Sign-In
  export const googleSignIn = $(async () => {
    const provider = new GoogleAuthProvider();
    try{
        const result = await signInWithPopup(auth,provider);
        const user = result.user;

        return({ "success":true,"user":{
            email: user.email || "",
            username: user.displayName ||"",
            uid: user.uid ||"",
            role: "user",
        }})
    }catch(err:any){
       return({ "success":false,"error":err.message})
    }
    
  });

