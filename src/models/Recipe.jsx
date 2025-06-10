import axios from "../utils/axios";

class Recipe {
    constructor(id, title, price, description, category, image, rate, count) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rate = rate;
        this.count = count;
    }

    static async readAllData() {
        try {
            const response = await axios.get("/products");
            return response.data.map(item => new Recipe(
                item.id,
                item.title,
                item.price,
                item.description,
                item.category,
                item.image,
                item.rating?.rate,
                item.rating?.count
            ));
        } catch (error) {
            console.error("Error reading all data:", error);
            throw error;
        }
    }
    static async readDataByCategory(category) {
        try {
            const response = await axios.get(`/products/category/${category}`);
            return response.data.map(item => new Recipe(
                item.id,
                item.title,
                item.price,
                item.description,
                item.category,
                item.image,
                item.rating?.rate,
                item.rating?.count
            ));
        } catch (error) {
            console.error(`Error reading data for category ${category}:`, error);
            throw error;
        }
    }
    static async readDataById(id) {
        try {
            const response = await axios.get(`/products/${id}`);
            const item = response.data;
            return new Recipe(
                item.id,
                item.title,
                item.price,
                item.description,
                item.category,
                item.image,
                item.rating?.rate,
                item.rating?.count
            );
        } catch (error) {
            console.error(`Error reading data for ID ${id}:`, error);
            throw error;
        }
    }
}

export default Recipe;