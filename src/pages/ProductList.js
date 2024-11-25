import { useState } from "react"

let products = [
    { name: "Samsung Galaxy 100", brand: "Samsung", category: "Phones", unitPrice:899, quantity:3 },
    { name: "iPhone14", brand: "Apple", category: "phones", unitPrice:949, quantity:2 },
    { name: "HP Envy 100", brand: "HP", category: "Computers", unitPrice:1199, quantity:1 }
]

export default function ProductList() {
    /*
    let productElements = []
    for (let i = 0; i < products.length; i++) {
        productElements.push(<ProductItem key={i} name={products[i].name}
        brand={products[i].brand}
        category={products[i].category}
        unitPrice={products[i].unitPrice}
        quantity={products[i].quantity} />)
    }
*/


return (
    <div className="container py-5">
        {
            products.map((product, idx) => {
                return (
                    <ProductItem key={idx} name={product.name}
                        brand={product.brand}
                        category={product.category}
                        unitPrice={product.unitPrice}
                        quantity={product.quantity} />
                )
            })
        }
        </div>
    )
}

function ProductItem(props) {
    return (
        <div className="row border-bottom align-items-center">
                <div className="col-4">
                    <h4>{props.name}</h4>
                    <p>
                        Brand: {props.brand}<br />
                        Category: {props.category}<br />
                        Unit Price: ${props.unitPrice}
                    </p>
                </div>
                <div className="col-2">
                    <Counter>{props.quantity}</Counter>
                </div>
                <div className="col-2">
                    <span>${props.unitPrice * props.quantity}</span>
                </div>
                <div className="col-4">
                    <button type="button" className="btn btn-danger btn-sm">Delete</button>
                </div>
        </div>
    )
}

function Counter(props) {
    //let quantity = props.children
    let [quantity, setQuantity] = useState(Number(props.children))

    function decrement() {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    function increment() {
        setQuantity(quantity + 1)
    }

    return (
        <div>
            <button type="button" 
            className="btn btn-outline-secondary btn-sm"
            onClick={decrement}> - </button>

            <span className="rounded-3 border p-1 m-2"> {quantity} </span>

            <button type="button" 
            className="btn btn-outline-secondary btn-sm"
            onClick={increment}> + </button>
        </div>
    )
}