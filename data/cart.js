export let cart =  [{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity : 2

},{
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity : 1
}];

//JSON.parse(localStorage.getItem('myCart'));

// if(!cart){
//     cart =  [{
//         productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//         quantity : 2
    
//     },{
//         productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
//         quantity : 1
//     }];
// }

//JSON.parse(localStorage.getItem('cart'));

// if(!cart){
//     cart = [{
//         productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//         quantity : 2
    
//     },{
//         productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
//         quantity : 1
//     }];
// }

//saveToStorage();

// function saveToStorage(){
//     localStorage.setItem('myCart' , JSON.stringify(cart));
// }

export function addToCart(id){
    let matchingItem;

    cart.forEach((item) =>{

        if(id===item.id){
            matchingItem = item;
        }
    })

    if(matchingItem){
        matchingItem.quantity+=1;
    }
    else{
        cart.push({
            id : id,
            quantity : 1
        })
    }

   // saveToStorage();
}

export function removeFromCart(productId){
    const newCart = [];

    cart.forEach((cartItem)=>{
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;

   // saveToStorage();
}