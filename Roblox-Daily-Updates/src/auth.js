// src/auth.js
import { auth } from '../src/config/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const signupWithEmail = async (email, password, username) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)


    //add username to Firebase Auth profile
    await updateProfile(userCredential.user, {
        displayName: username
    })

}
