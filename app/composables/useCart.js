export default function useCart() {
  const cart = useState("cart", () => ({
    a: {
      name: "product",
      price: 10,
      amount: 0,
      img: "/Images/1.jpg",
      catagory: "women-clothing",
      id: "a",
    },
    b: {
      name: "product",
      price: 10,
      amount: 0,
      img: "/Images/2.jpg",
      catagory: "electronics",
      id: "b",
    },
    c: {
      name: "product",
      price: 10,
      amount: 0,
      img: "/Images/3.jpg",
      catagory: "jewelry",
      id: "c",
    },
    d: {
      name: "product",
      price: 10,
      amount: 0,
      img: "/Images/4.jpg",
      catagory: "electronics",
      id: "d",
    },
    e: {
      name: "product",
      price: 10,
      amount: 0,
      img: "/Images/D.png",
      catagory: "women-clothing",
      id: "e",
    },
    f: {
      name: "product",
      price: 10,
      amount: 0,
      img: "/Images/F.png",
      catagory: "men-clothing",
      id: "f",
    },
    g: {
      name: "product",
      price: 10,
      amount: 0,
      img: "/Images/G.png",
      catagory: "men-clothing",
      id: "g",
    },
    h: {
      name: "product",
      price: 10,
      amount: 0,
      img: "/Images/H.png",
      catagory: "men-clothing",
      id: "h",
    },
  }));

  function addToCart(product) {
    cart.value[product].amount += 1;
  }
  function deleteFromCart(product) {
    cart.value[product].amount = 0;
  }
  function checkIsImpty() {
    let imptyCounter = 0;
    let isImpty = true;
    for (let product in cart.value) {
      if (cart.value[product].amount == 0) {
        imptyCounter++;
      }
    }
    if (imptyCounter == Object.keys(cart.value).length) {
      isImpty = true;
    } else {
      isImpty = false;
    }
    return isImpty;
  }
  console.log(checkIsImpty());
  return { cart, addToCart, deleteFromCart, checkIsImpty };
}
