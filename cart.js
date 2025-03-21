const handleAddToCart=()=>{
    const productName = document.getElementById("productName");
    const productQuantity = document.getElementById("productQuantity");
    const pName = productName.value;
    const pQuantity = productQuantity.value;
    saveProductToLocalStorage(pName,pQuantity)
    // displayProduct(pName,pQuantity)
    displayProductFromLocalStorage()

    productName.value = ""
    productQuantity.value = ""
}

const displayProduct = (productName,productQuantity)=>{
    const productContainer = document.getElementById("productContainer")

    const li = document.createElement("li");
    li.innerText = `${productName}: ${productQuantity}`;
    productContainer.appendChild(li)
}


const getProductFromLocalStorage = ()=>{
    let cart= {};
    const getProduct = localStorage.getItem("cart");
    if(getProduct){
        cart = JSON.parse(getProduct)
    }
    return cart;
}


const saveProductToLocalStorage = (pName,pQuantity)=>{
    const cart = getProductFromLocalStorage();
    // console.log(cart)
    cart[pName]=pQuantity
    const cartString = JSON.stringify(cart);
    localStorage.setItem("cart",cartString)
}

const displayProductFromLocalStorage=()=>{
    const products = getProductFromLocalStorage();
    // console.log(products)
    for(const product in products){
        // console.log(product);
        displayProduct(product,products[product])
    }
}