import { useState } from 'react'
import './style.css'





export default function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);
    const [error, setError] = useState(null);

    function handleClick() {
        setLoading(true);
        setError(null);
        fetch(`https://dummyjson.com/products?${count * 20}`)
            .then(res => res.json())
            .then(data => {
                if (data.products.length === 0) {
                    setDisableButton(true);
                }
                setProducts(prevProducts => [...prevProducts, ...data.products]);
                setCount(prevCount => prevCount + 1);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div className='load-more-container'>
            <h1>Load More Data</h1>
            <div className='product-container'>
                {error && <p>{error}</p>}
                {loading && <p>Loading...</p>}
                {products.map(item => (
                    <div className='product' key={item.id}>
                        <h2>{item.title}</h2>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.price}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>            
            <div className='button-container'>
            <button className='load-more-button' onClick={handleClick}>Load More</button>
            </div>
        </div>
    )
}