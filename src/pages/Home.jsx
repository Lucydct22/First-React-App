import {useState, useEffect} from 'react';
import { Products } from '../components/Products';

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const data = await fetch('https://fakestoreapi.com/products')
      const products = await data.json();
      setProducts(products)
      setIsLoading(false);
    })();
  }, []);

  if(isLoading) return <p>Loading</p>

  console.log('products', products)

    return (
        <Products products={products} />
    )
}