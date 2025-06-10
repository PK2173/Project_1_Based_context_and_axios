import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/",
})

instance.interceptors.request.use(
    function(config){
        console.log(`Request made with ${config.method.toUpperCase()} method to ${config.url}`, config);
        return config;
    },
    function(error) {
        console.error("Error in request:", error);
        return Promise.reject(error);
    }
)

instance.interceptors.response.use(
    function(response) {
        console.log(`Response received with status ${response.status} from ${response.config.url}`, response);
        return response;
    },
    function(error) {
        console.error("Error in response:", error);
        return Promise.reject(error);
    }
)


export const getAllData = async () => {
    try {
        const response = await instance.get("/products");
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
export const getDataById = async (id
) => {
    try {
        const response = await instance.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data for ID ${id}:`, error);
        throw error;
    }
}
export const getDataByCategory = async (category) => {
    try {
        const response = await instance.get(`/products/category/${category}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data for category ${category}:`, error);
        throw error;
    }
}
export const getDataBySearch = async (query) => {
    try {
        const response = await instance.get(`/products/search?q=${query}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data for search query "${query}":`, error);
        throw error;
    }
}
export const postData = async (data) => {
    try {
        const response = await instance.post("/products", data);
        return response.data;
    } catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
}
export const putData = async (id, data) => {
    try {
        const response = await instance.put(`/products/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(`Error updating data for ID ${id}:`, error);
        throw error;
    }
}
export const deleteData = async (id) => {
    try {
        const response = await instance.delete(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting data for ID ${id}:`, error);
        throw error;
    }
}
export const patchData = async (id, data) => {
    try {
        const response = await instance.patch(`/products/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(`Error patching data for ID ${id}:`, error);
        throw error;
    }
}

export default instance;