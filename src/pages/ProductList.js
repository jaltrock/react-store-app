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
                    <span className="rounded border m-1 p-1">{props.quantity}</span>
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