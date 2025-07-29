const URL_Events = "http://localhost:3000/events"
import fetchMethods from "./Utilities/fetch.js";
/**
 * Fetch modular functions, exported for global use, modular format to avoid complexity 
 * and to create various methods to do fetching, having post, put, get and delete
 */


async function getUsers() {
    return await fetchMethods(URL_Events, "GET")
}


async function postUsers(Body) {
    return await fetchMethods(URL_Events, "POST", Body)
}

async function putUsers(id,  Body) {
    console.log(`URL_Users/${id}`);

    return await fetchMethods(`URL_Events/${id}`, "PATCH", Body)
}

async function deleteUsers(id) {
    console.log(`URL_Users/${id}`)
    return await fetchMethods(`URL_Events/${id}`, "DELETE")
}

export default {getUsers,postUsers,putUsers,deleteUsers}