
export function AddProductForm1(props) {
    function handleSubmit(event) {
        event.preventDefault();

        // read the form data
        /*
        let name = event.target.name.value
        let brand = event.target.brand.value
        let category = event.target.category.value
        let unitPrice = event.target.unitPrice.value
        let quantity = event.target.quantity.value

        if (!name || !brand || !category || !unitPrice || !quantity) {
            alert("Please fill in all fields")
            return 
        }

        let product = { name, brand, category, unitPrice, quantity };
        */

        const formData = new FormData(event.target);
        let product = Object.fromEntries(formData.entries());

        if (!product.name || !product.brand || !product.category || !product.unitPrice || !product.quantity) {
            alert("Please fill in all fields")
            return 
        }

        console.log("new product: ", product)

        // clear the form
        event.target.reset()

        props.addProduct(product)
    }

    return (
        <form className="row mb-5 g-3" onSubmit={(event) => handleSubmit(event)}>
            <div className="col-md-4">
                <label className="form-label">Name</label>
                <input className="form-control" name="name" />
            </div>
            <div className="col-md-4">
                <label className="form-label">Brand</label>
                <input className="form-control" name="brand" />
            </div>
            <div className="col-md-4">
                <label className="form-label">Category</label>
                <input className="form-control" name="category" />
            </div>
            <div className="col-md-4">
                <label className="form-label">Unit Price</label>
                <input className="form-control" name="unitPrice" />
            </div>
            <div className="col-md-4">
                <label className="form-label">Quantity</label>
                <input className="form-control" name="quantity" defaultValue={1}/>
            </div>
            <div className="col-md-12">
                <button type="submit" className="btn btn-primary">Add</button>
            </div>
        </form>
    )
}