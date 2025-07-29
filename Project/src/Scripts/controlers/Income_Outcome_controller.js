const URL_Events = "http://localhost:3000/Income_Outcome"
import fetchMethods from "../Utilities/fetch.js";
/**
 * Fetch modular functions, exported for global use, modular format to avoid complexity 
 * and to create various methods to do fetching, having post, put, get and delete
 */


async function getIncome_Outcome() {
    return await fetchMethods(URL_Events, "GET")
}


async function postIncome_Outcome(Body) {
    return await fetchMethods(URL_Events, "POST", Body)
}

async function putIncome_Outcome(id,  Body) {
    console.log(`URL_Users/${id}`);

    return await fetchMethods(`URL_Events/${id}`, "PATCH", Body)
}

async function deleteIncome_Outcome(id) {
    console.log(`URL_Users/${id}`)
    return await fetchMethods(`URL_Events/${id}`, "DELETE")
}

export default {getIncome_Outcome,postIncome_Outcome,putIncome_Outcome,deleteIncome_Outcome}