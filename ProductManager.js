class ProductManager {
    constructor() { 
        this.products = [];
        this.id = 1;
    }

    addProduct(title,description,price,url,code,stock){
        if (title && description && price && url && code && stock) {
            const verificationCode = this.products.some(product => product.code === code)
            if (verificationCode){
                console.error("ERROR: El codigo se repite")
            } else {
                let id = this.id++;
                const newProduct = {id, title, description, price, url, code, stock};
                this.products.push(newProduct);
            }
        } else {
            console.error("ERROR: Completar todos los campos")
        }
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        const productID = this.products.find(product => product.id === id);
        if (!productID){
            return console.error("Not found")
        } else {
            return console.log("Producto con el ID solicitado: ", productID)
        }
    }
}

const pManager = new ProductManager()

pManager.addProduct("Perfume", "de mujer", 500, "url", 123, 25);
pManager.addProduct("Desodorante", "en aerosol p/H", 350, "url", 124, 25);
pManager.addProduct("Perfume", "de hombre", 600, "url", 125, 25);
pManager.addProduct("Labiales", "Ultra Matte", 500, "url", 126, 25);
pManager.getProductById(22);



console.log((pManager));


