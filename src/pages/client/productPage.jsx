import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/loader";
import ProductCard from "../../components/productCard";







export default function ProductPage() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        if (isLoading) {
            axios
                .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
                .then((res) => {
                    setProducts(res.data);
                    setIsLoading(false);
                });
        }
       
    }, [isLoading]);





    return (
        <div className="w-full h-full">
            {
                isLoading? <Loader/> :

                <div className="w-full h-full  flex flex-row flex-wrap gap-[40px] justify-center items-center ">
                    {
                        products.map((product) => {
                            return (
                                <ProductCard key={product.productId} product={product}/>
                                
                            );
                        })
                    }
                </div>
            }
        </div>
    );
}
