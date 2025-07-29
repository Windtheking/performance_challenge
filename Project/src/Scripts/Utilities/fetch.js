
/**
 * Especificial method for get, getting an individual or multiple value to make a comparisson
 */
export default async function fetchMethodsEspecialGet(url, method, data) {
  try {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (method !== "GET" && data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("There was a problem with the fetch method.");
    }

    const result = await response.json();

    if (method === "GET") {
      if (!result || result.length === 0) {
        alert("Usser not found or inexistent");
        return false;
      }
    }

    return result;
  } catch (error) {
    console.log("Error: " + error);
    return false;
  }
}