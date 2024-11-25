import { useState } from "react"

let initialProducts = [
    { name: "Samsung Galaxy 100", brand: "Samsung", category: "Phones", unitPrice:899, quantity:3 },
    { name: "iPhone14", brand: "Apple", category: "phones", unitPrice:949, quantity:2 },
    { name: "HP Envy 100", brand: "HP", category: "Computers", unitPrice:1199, quantity:1 }
]

export default function ProductList() {
   let [products, setProducts] = useState(initialProducts)

   function deleteProduct(index) {
        let newProducts = [...products]
        newProducts.splice(index, 1)
        setProducts(newProducts)
   }

    return (
        <div className="container py-5">
            {
                products.map((product, idx) => {
                    return (
                        <ProductItem key={idx} name={product.name}
                            brand={product.brand}
                            category={product.category}
                            unitPrice={product.unitPrice}
                            quantity={product.quantity} 
                            index={idx}
                            deleteProduct={deleteProduct}/>
                    )
                })
            }
        </div>
    )
}

function ProductItem(props) {
    let [quantity, setQuantity] = useState(Number(props.quantity))
    function decrement() {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    function increment() {
        setQuantity(quantity + 1)
    }

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
                    <ControlledCounter decrement={decrement} increment={increment}>{quantity}</ControlledCounter>
                </div>
                <div className="col-2">
                    <span>${props.unitPrice * quantity}</span>
                </div>
                <div className="col-4">
                    <button type="button" 
                    className="btn btn-danger btn-sm"
                    onClick={() => props.deleteProduct(props.index)}>Delete</button>
                </div>
        </div>
    )
}

function ControlledCounter(props) {
    return (
        <div>
            <button type="button" 
            className="btn btn-outline-secondary btn-sm"
            onClick={props.decrement}> - </button>

            <span className="rounded-3 border p-1 m-2"> {props.children} </span>

            <button type="button" 
            className="btn btn-outline-secondary btn-sm"
            onClick={props.increment}> + </button>
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