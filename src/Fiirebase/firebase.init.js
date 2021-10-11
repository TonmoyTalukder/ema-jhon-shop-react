import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* Steps for Authentication 
--------------

Step-1: Initial Set Up 
1. firebase: Create project
2. Create Web App
3. get configuration
4. initialize firebase 
5. enable auth method 
--------------

Step-2: setup components
1. Create Login Components
2. Create Register Component
3. Create Route for Login and Register
--------------

Step-3: set auth system
1. set up  sign in method
2. set up sign out method
3. user state
4. special observer : onAuthStateChanged
5. return necessary methods and states from useFirebase
--------------

Step-4: create auth context (useAuth)
1. create a auth context
2. create context provider
3. set context Provider context value
4. use auth provider
5. create useAuth provider
--------------

Step-5: create private rout
1. Create Private Route
2. Set Private Route
--------------

Step-6: Redirect After Login
1. after login redirect user to their desired destination
--------------

*/