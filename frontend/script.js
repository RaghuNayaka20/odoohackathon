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

// ATTENDANCE DASHBOARD
const searchInput = document.getElementById("employeeSearch");
const statusFilter = document.getElementById("statusFilter");
const attendanceTableBody = document.getElementById("attendanceTableBody");

if (attendanceTableBody && searchInput && statusFilter) {
  const rows = Array.from(attendanceTableBody.querySelectorAll("tr"));

  function filterAttendanceRows() {
    const searchValue = searchInput.value.trim().toLowerCase();
    const selectedStatus = statusFilter.value;

    rows.forEach((row) => {
      const employeeName = row.querySelector("strong")?.textContent.toLowerCase() || "";
      const rowStatus = row.dataset.status || "";
      const statusBadge = row.querySelector(".status-badge")?.textContent.toLowerCase() || "";
      const matchesSearch = employeeName.includes(searchValue);
      const matchesStatus = selectedStatus === "all" || rowStatus === selectedStatus || statusBadge.includes(selectedStatus);
      row.style.display = matchesSearch && matchesStatus ? "" : "none";
    });
  }

  searchInput.addEventListener("input", filterAttendanceRows);
  statusFilter.addEventListener("change", filterAttendanceRows);
}

const markAttendanceButton = document.querySelector(".primary-button");
if (markAttendanceButton) {
  markAttendanceButton.addEventListener("click", function () {
    alert("Attendance marked successfully for today's session.");
  });
}

const actionButtons = document.querySelectorAll(".mini-action");
actionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    alert("Action opened successfully.");
  });
});