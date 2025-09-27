// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Import MongoDB module
import { MongoClient } from 'mongodb';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr4HSHFyXgqcOiigCEXRT6GE2mxnyNRyc",
  authDomain: "htch-25.firebaseapp.com",
  projectId: "htch-25",
  storageBucket: "htch-25.firebasestorage.app",
  messagingSenderId: "231924737957",
  appId: "1:231924737957:web:e08419043e7a19372baa4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Check if user is logged in (only in browser)
if (typeof window !== 'undefined') {
  auth.onAuthStateChanged(user => {
    if (!user) {
      // Redirect to login page
      window.location.href = "/templates/login.html";
    }
  });
}

// MongoDB configuration
const uri = "mongodb+srv://kamcodes:kamiye123@hackcluster.awtl2c4.mongodb.net/?retryWrites=true&w=majority&appName=HackCluster";
const client = new MongoClient(uri);

// Firebase Authentication functions
async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User signed up:", user);
    // Save user data to MongoDB
    await saveUserToMongoDB(user);
    return user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
}

async function logIn(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("User logged in:", user);
    return user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

async function logOut() {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
}

// MongoDB connection function
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

// Functions to interact with MongoDB (e.g., save user data, get user data, get feed data)
async function saveUserToMongoDB(user) {
  try {
    const db = client.db("htch");
    const usersCollection = db.collection("users");
    await usersCollection.insertOne({
      uid: user.uid,
      email: user.email
    });
    console.log("User saved to MongoDB");
  } catch (error) {
    console.error("Error saving user to MongoDB:", error);
    throw error;
  }
}

// Call the connectToMongoDB function
connectToMongoDB();

// Export functions
export { signUp, logIn, logOut };