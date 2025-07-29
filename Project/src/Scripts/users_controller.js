const URL_Users = "http://localhost:3000/users"
import fetchMethods from "./Utilities/fetch.js";
/**
 * Fetch modular functions, exported for global use, modular format to avoid complexity 
 * and to create various methods to do fetching, having post, put, get and delete
 */


async function getUsers(email,pwd) {
    const Url_users = `${URL_Users}?email=${encodeURIComponent(email)}&passwordHash=${encodeURIComponent(pwd)}`;
    return await fetchMethods(Url_users, "GET",)
}


async function postUsers(Body) {
    return await fetchMethods(URL_Users, "POST", Body)
}

async function putUsers(id,  Body) {
    console.log(`URL_Users/${id}`);

    return await fetchMethods(`URL_Users/${id}`, "PATCH", Body)
}

async function deleteUsers(id) {
    console.log(`URL_Users/${id}`)
    return await fetchMethods(`URL_Users/${id}`, "DELETE")
}

export default {getUsers,postUsers,putUsers,deleteUsers}