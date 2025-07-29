/**
 * Functions designed for protecting de redirections, 
 * if there is not a log in usser there will be no acceses
 * to the dashboard and will be rdirected to te login
 */
if (localStorage.getItem("Useremail") === null) {
    window.location.href = "http://127.0.0.1:5500/Project/src/pages/practice_login.html"
}

/**
 * Function for login out of sesion, this is meant to allow the protection 
 * to be effective and to make a more clean transition
 */
document.getElementById("logoutBtn").addEventListener("click", () =>{
    localStorage.removeItem("Useremail")
    window.location.href = "http://127.0.0.1:5500/Project/src/pages/practice_login.html"
});

let categories = ["food","service","Indulgence"]
const arrayTable = document.getElementById("categoryDisplay")

const arrayLocal = localStorage.getItem("Categories")

document.getElementById("newCategoryForm").addEventListener("submit", async(event) =>{
    event.preventDefault()
    const newCategory = document.getElementById("newCategory").value.trim()
    categories.push(newCategory)
    localStorage.setItem("Categories", categories)
    console.log(categories)
});

async function renderizeCategories(){
    Object.values(localStorage.Categories).forEach(categorie => {
        const UptDelcontainer = document.createElement("div")
        const fatherDivContainer = document.createElement("div")
        const divContainer = document.createElement("div")
        const deleteCategory = document.createElement("a")
        const editCategory = document.createElement("a")
        UptDelcontainer.append(deleteCategory,editCategory)
        fatherDivContainer.append(divContainer, UptDelcontainer)
        fatherDivContainer.classList.add("Fatherdivcontainer")
        UptDelcontainer.classList.add("UptDel")
        arrayTable.appendChild(fatherDivContainer)
        deleteCategory.textContent = "delete"
        editCategory.textContent = "edit"
        divContainer.textContent = categorie
    })
}

renderizeCategories()




