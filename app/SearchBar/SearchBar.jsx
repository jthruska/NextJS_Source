import { useState, useEffect } from "react"
import "./SearchBar.css"


export default function SearchBar() {
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString] = useState("")
    useEffect(fetchAPIData, [searchString])

    function fetchAPIData() {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            const filtered = products.filter((el)=>{return el.title.toLowerCase().includes(searchString.toLowerCase())})
            const currentFilter = filtered.map((product, index) => {
                return (<div class="prodStyle" key={index}>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    <img style={{width:"100%"}} src={product.image} alt={product.title} />
                </div>)
            })
            setFilteredProducts(currentFilter)
        })
    }
    
    function handleChange(event) {
        setSearchString(event.target.value)
    }

    return <div>
        <p>The Search Bar!</p>
        <input type="text" value={searchString} onChange={handleChange} />
        <div style={{display:"flex", flexFlow: "row wrap"}}>{filteredProducts}</div>
    </div>
}