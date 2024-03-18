const {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    getAuth
  } = require("firebase/auth");
  const { auth } = require("../firebase");

  const loginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };


const submmit = async () => {
    const dataUser = await loginWithGoogle()
    console.log(dataUser)
}