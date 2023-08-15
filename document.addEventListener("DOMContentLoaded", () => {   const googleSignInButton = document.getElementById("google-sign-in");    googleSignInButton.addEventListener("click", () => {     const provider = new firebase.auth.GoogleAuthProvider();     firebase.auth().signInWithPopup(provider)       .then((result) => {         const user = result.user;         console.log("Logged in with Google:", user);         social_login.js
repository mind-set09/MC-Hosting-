document.addEventListener("DOMContentLoaded", () => {
  const googleSignInButton = document.getElementById("google-sign-in");

  googleSignInButton.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log("Logged in with Google:", user);
        // Handle user data as needed (e.g., update UI)
      })
      .catch((error) => {
        console.error("Google sign-in error:", error);
      });
  });
});
