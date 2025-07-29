if (localStorage.getItem("Useremail") === null) {
    window.location.href = "http://127.0.0.1:5500/Project_root/src/pages/practice_login.html"
}

document.getElementById("logoutBtn").addEventListener("click", () =>{
    localStorage.removeItem("Useremail")
    window.location.href = "http://127.0.0.1:5500/Project_root/src/pages/practice_login.html"
});

const headerContainer = document.getElementById("welcomeMessage")
const divWithText = document.createElement("div")
const highTitle = document.createElement("h1")
highTitle.textContent = "Welcome " + localStorage.getItem("Useremail")
divWithText.appendChild(highTitle)
headerContainer.appendChild(divWithText)
divWithText.classList.add("MaximunHeader")