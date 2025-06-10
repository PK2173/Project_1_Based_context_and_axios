// const axios = require("axios");
// axios.defaults.baseURL = "https://fakestoreapi.com/";
// let data = [{
//         "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "rating": {
//         "rate": 3.9,
//         "count": 120
//         }
//         },
//         {
//         "id": 2,
//         "title": "Mens Casual Premium Slim Fit T-Shirts ",
//         "price": 22.3,
//         "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//         "rating": {
//         "rate": 4.1,
//         "count": 259
//         }
//         },
//         {
//         "id": 3,
//         "title": "Mens Cotton Jacket",
//         "price": 55.99,
//         "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//         "rating": {
//         "rate": 4.7,
//         "count": 500
//         }
//         },
//         {
//         "id": 3,
//         "title": "Mens Cotton Jacket",
//         "price": 55.99,
//         "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//         "rating": {
//         "rate": 4.7,
//         "count": 500
//         }
//         },
//         {
//         "id": 3,
//         "title": "Mens Cotton Jacket",
//         "price": 55.99,
//         "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//         "rating": {
//         "rate": 4.7,
//         "count": 500
//         }
//         }]

// class createcrud {
//     constructor(id, title, price, description, category, image, rating, rate, count) {
//         this.id = id;
//         this.title = title;
//         this.price = price;
//         this.description = description;
//         this.category = category;
//         this.image = image;
//         this.rating = rating;
//         this.rate = rate;
//         this.count = count;        
//     }

//     async readAllData () {
//         try {
            
//             const response = await axios.get("https://fakestoreapi.com/products");
//             return response.data.map(item => new createcrud(
//                 item.id,
//                 item.title,
//                 item.price,
//                 item.description,
//                 item.category,
//                 item.image,
//                 item.rating.rate,
//                 item.rating.count
//             ));

//         } catch (error) {
//             console.error("Error reading all data:", error);
//             throw error;
            
//         }
//     }
// }

// let crud = new createcrud();
// crud.readAllData().then(data => {
//     console.log("Data fetched successfully:", data);
// }).catch(error => {
//     console.error("Error fetching data:", error);
// });

const axios = require("axios");

class CreateCrud {
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
            const response = await axios.get("https://fakestoreapi.com/products");
            return response.data.map(item => new CreateCrud(
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
            console.error("Error reading all data:", error.message);
            throw error;
        }
    }
}

// Test script to fetch and print product list
(async () => {
    try {
        const data = await CreateCrud.readAllData();
        console.log("Fetched Products:\n");

        data.forEach((item, index) => {
            console.log(`${index + 1}. ${item.title} - ₹${item.price}`);
        });

        console.log(`\nTotal Products: ${data.length}`);
    } catch (error) {
        console.error("Failed to fetch product data:", error);
    }
})();
