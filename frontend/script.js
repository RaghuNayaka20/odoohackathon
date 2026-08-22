// LOGIN

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    alert("Login successful!");

    console.log("Login Details:");
    console.log("Email:", email);
    console.log("Password:", password);
  });
}


// SIGNUP

const signupForm = document.getElementById("signupForm");

if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const employeeId = document.getElementById("employeeId").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const role = document.getElementById("role").value;

    if (employeeId === "" || email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    alert("Account created successfully!");

    console.log("Signup Details:");
    console.log("Employee ID:", employeeId);
    console.log("Email:", email);
    console.log("Role:", role);
  });
}