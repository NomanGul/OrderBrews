import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth";
import { auth } from "../firebase.config";

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      console.log("🚀 ~ file: firebase.js:12 ~ .then ~ token:", token);
      // The signed-in user info.
      const user = result.user;
      console.log("🚀 ~ file: firebase.js:14 ~ .then ~ user:", user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      console.log("🚀 ~ file: firebase.js:18 ~ signInWithGoogle ~ error:", error);
    });
};
