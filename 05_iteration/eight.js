// ================================
// reduce → reduces array to ONE value
// acc → accumulator (result holder)
// curr → current element
// 0   → initial value of accumulator

const myNums = [1, 2, 3]

// ✔ Traditional reduce (for understanding flow)
// ✔ acc starts from 0, curr moves through array
// ✔ return updates acc each time

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)


// ================================
// reduce with ARROW FUNCTION
// ================================
// ✔ Short & preferred in real projects
// ✔ Implicit return
// ✔ Final output → single number (sum)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal)


// ================================
// reduce with ARRAY OF OBJECTS
// ================================
// ✔ Very common interview & real-world use
// ✔ acc holds total price
// ✔ item.price is added each iteration

const shoppingCart = [
    { itemName: "js course", price: 2999 },
    { itemName: "py course", price: 999 },
    { itemName: "mobile dev course", price: 5999 },
    { itemName: "data science course", price: 12999 },
]

// ================================
// Total price calculation using reduce
// ================================
// ✔ Returns single value (total cost)
// ✔ Cleaner than loop or forEach

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0)

console.log(priceToPay)
