// Import the required modules
import { Injectable } from "@angular/core";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithRedirect,
    signInWithPopup,
} from "firebase/auth";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    // Firebase configuration
    private firebaseConfig = {
        apiKey: "AIzaSyBjwNgijczHzO5sTx8fhTyTA4Ly4htVm8k",
        authDomain: "quiktriv-app.firebaseapp.com",
        projectId: "quiktriv-app",
        storageBucket: "quiktriv-app.firebasestorage.app",
        messagingSenderId: "958272415049",
        appId: "1:958272415049:web:330d404a9d25dd94d76698",
        measurementId: "G-VBGFWF1S0G",
    };

    private app = initializeApp(this.firebaseConfig);
    private auth = getAuth(this.app);

    private googleProvider = new GoogleAuthProvider();

    // Observable to track the current user's state
    private userSubject = new BehaviorSubject<any>(null);
    public user$ = this.userSubject.asObservable();

    constructor() {
        // Monitor auth state changes
        onAuthStateChanged(this.auth, (user) => {
            this.userSubject.next(user);
        });
    }

    // Sign up a new user
    async signUp(email: string, password: string): Promise<any> {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                this.auth,
                email,
                password,
            );
            return userCredential.user;
        } catch (error) {
            console.error("Error during sign-up:", error);
            throw error;
        }
    }

    // Log in an existing user
    async logIn(email: string, password: string): Promise<any> {
        try {
            const userCredential = await signInWithEmailAndPassword(
                this.auth,
                email,
                password,
            );
            return userCredential.user;
        } catch (error) {
            console.error("Error during login:", error);
            throw error;
        }
    }

    // Log in with Google using redirect
    async logInWithGoogle(): Promise<void> {
        console.log("Logging in with Google");
        try {
            await signInWithPopup(this.auth, this.googleProvider);
        } catch (error) {
            console.error("Error during Google login:", error);
            throw error;
        }
    }

    // Log out the current user
    async logOut(): Promise<void> {
        try {
            await signOut(this.auth);
        } catch (error) {
            console.error("Error during logout:", error);
            throw error;
        }
    }

    // Get the current user
    getCurrentUser(): any {
        return this.auth.currentUser;
    }
}
