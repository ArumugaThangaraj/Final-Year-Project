document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector(".login-form");
    const signupForm = document.querySelector(".signup-form");
    const popup = document.querySelector(".popup");
    const overlay = document.querySelector(".overlay");
    const userLogin = document.getElementById("userlogin");
    const signupBtn = document.getElementById("signup-link");
    const loginBtn = document.getElementById("login-link");
    const cancelBtn = document.querySelector(".cancel");

    userLogin.addEventListener("click", () => {
        showPopup();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });

    signupBtn.addEventListener("click", () => {
        showPopup();
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    });

    loginBtn.addEventListener("click", () => {
        showPopup();
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    });

    cancelBtn.addEventListener("click", () => hidePopup());

    function showPopup() {
        popup.style.display = "block";
        overlay.style.display = "block";
    }

    function hidePopup() {
        popup.style.display = "none";
        overlay.style.display = "none";
    }

    document.getElementById("signup-form").addEventListener("submit", async (event) => {
        event.preventDefault();
        const username = document.getElementById("signup-username").value;
        const password = document.getElementById("signup-password").value;
        
        console.log("Signup Attempt: ", username);
        alert("Signup successful!");
    });

    document.getElementById("login-form").addEventListener("submit", async (event) => {
        event.preventDefault();
        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        
        console.log("Login Attempt: ", username);
        alert("Login successful! ");
    });
});




