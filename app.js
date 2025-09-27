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

async function handleLogin(email, password, errorMessageElement) {
  // Input validation
  if (!email || !password) {
    errorMessageElement.textContent = "Please enter both email and password.";
    return;
  }

  try {
    await logIn(email, password);
    // Redirect to profile page or display success message
    window.location.href = "/templates/profile.html";
  } catch (error) {
    errorMessageElement.textContent = error.message;
    if (error.code === 'auth/user-not-found') {
      window.location.href = "/templates/signup.html";
    }
  }
}

async function handleSignup(email, password, errorMessageElement) {
  // Input validation
  if (!email || !password) {
    errorMessageElement.textContent = "Please enter both email and password.";
    return;
  }

  try {
    await signUp(email, password);
    // Redirect to profile page or display success message
    window.location.href = "/templates/profile.html";
  } catch (error) {
    errorMessageElement.textContent = error.message;
  }
}

async function handleLogout() {
  try {
    await logOut();
    // Redirect to login page or display success message
    window.location.href = "/index.html";
  } catch (error) {
    // Display error message
    alert("Error logging out:" + error.message);
  }
}

function checkAuth() {
  // Check if user is logged in (only in browser)
  if (typeof window !== 'undefined') {
    auth.onAuthStateChanged(user => {
      if (!user) {
        // Redirect to login page
        window.location.href = "/index.html";
      }
    });
  }
}

// Event listeners for login, signup, and logout buttons
document.addEventListener('DOMContentLoaded', () => {
  // Login form submission
  const loginButton = document.getElementById('login-button');
  if (loginButton) {
    loginButton.addEventListener('click', async (event) => {
      event.preventDefault(); // Prevent form submission
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const errorMessageElement = document.getElementById('error-message');
      await handleLogin(email, password, errorMessageElement);
    });
  }

  // Signup form submission
  const signupButton = document.getElementById('signup-button');
  if (signupButton) {
    signupButton.addEventListener('click', async (event) => {
      event.preventDefault(); // Prevent form submission
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const errorMessageElement = document.getElementById('error-message');
      await handleSignup(email, password, errorMessageElement);
    });
  }

  // Logout button click
  const logoutButton = document.getElementById('logout-button');
  if (logoutButton) {
    logoutButton.addEventListener('click', async (event) => {
      event.preventDefault(); // Prevent form submission
      await handleLogout();
    });
  }

  // Check if user is logged in (only in browser)
  auth.onAuthStateChanged(user => {
    if (!user) {
      // Redirect to login page
      window.location.href = "/index.html";
    }
  });
});

// Export functions
export { signUp, logIn, logOut };