// [
//     {
//         prodcutId: '12345',
//         quantity: 2,
//         price: 29.99,
//         name: 'Sample Product',
//         altNames: ['Sample Item', 'Example Product'],
//         image : 'https://example.com/sample-product.jpg',
//     },
//     {
//         productId: '67890',
//         quantity: 1,
//         price: 49.99,
//         name: 'Another Product',
//         altNames: ['Another Item', 'Different Product'],
//         image : 'https://example.com/another-product.jpg',
//     },
//     {
//         productId: '54321',
//         quantity: 3,
//         price: 19.99,
//         name: 'Third Product',
//         altNames: ['Third Item', 'Yet Another Product'],
//         image : 'https://example.com/third-product.jpg',
//     }
// ]






export function getCart(){
    let cartInString = localStorage.getItem("cart"); // try to get the cart from local storage as a string
    
    if(cartInString == null){// if cart is not in local storage
        cartInString = "[]"// create an empty array
        localStorage.setItem("cart", cartInString); // save the empty array to local storage
    }

    const cart = JSON.parse(cartInString);// convert the string to an array
    return cart;// return the array 
}

export function addToCart(product , quantity){   // add a product to the cart

    const cart = getCart()// load the cart

    const existingProductIndex = cart.findIndex((item)=>{    // check if the product is already in the cart
        return item.productId === product.productId;   // if it is, return the index
    })

    if(existingProductIndex == -1){// if the product is not in the cart      -1 means the product is not in the cart   , didn't find   an index  for similar  id
        cart.push(// add the product to the cart
            {
                productId: product.productId,
                quantity: quantity,
                price: product.price,
                name: product.name,
                altNames: product.altNames,
                image: product.images[0]
            }
        )
        localStorage.setItem("cart", JSON.stringify(cart));    // save the cart to local storage
    }else{
        const newQty = cart[existingProductIndex].quantity + quantity;// if the product is in the cart, add the new quantity to existing quantity
        if(newQty <= 0){  //check is new quantity is less than zero or zero , otherwise  quantity may be  negative  or zero 
            const newCart = cart.filter((item, index)=>{   // remove that product from the cart if so  and consider  other products
                return index !== existingProductIndex;  //  filter out the product
            })
            localStorage.setItem("cart", JSON.stringify(newCart)); // save the new cart to local storage

        }else{
            cart[existingProductIndex].quantity = newQty;// if the product is in the cart, update the quantity
            localStorage.setItem("cart", JSON.stringify(cart));// save the cart to local storage
        }
    }
}

export function getTotal(){//   calculate the total
    const cart = getCart(); // load the cart
    let total = 0;
    cart.forEach((item)=>{// loop through the cart and calculate the total
        total += item.quantity * item.price;  // add the quantity * price to the total
    })
    return total;
}