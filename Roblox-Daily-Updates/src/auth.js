// src/auth.js
import { auth } from '../src/config/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export const signupWithEmail = async (email, password, username) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(userCredential.user, {
            displayName: username,
        });


        await userCredential.user.reload(); // optional
        return userCredential.user;


    }
    catch (error) {
        console.error("Signup error:", error);
        throw error;
    }
};
