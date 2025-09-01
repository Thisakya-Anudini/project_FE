import { Link } from "react-router"

export default function ProductCard(props) {// props are passed from the parent component. that means this component is a child component
    const product = props.product
    return (

        <Link to={"/overview/"+product.productId} state={product} className="w-[300px] h-[400px] shadow-2xl shrink-0 rounded-2xl mt-[40px] flex flex-col overflow-hidden">
            <img src={product.images[0]}  className="w-full h-[300px] object-cover" />
            <div className="w-full h-[100px] flex flex-col  p-[10px]">
                <span className="text-gray-500 text-[12px]">{product.productId}</span>
                <h1 className="text-lg font-bold">{product.name}{" "}
                    <span className="text-gray-500 text-[12px]">{product.category}</span>
                </h1>  
                    <div>
                        { 
                            product.labelledPrice > product.price ?(
                              <p>
                                <span className="line-through mr-[10px]">{product.labelledPrice} </span>
                                <span>{product.price.toLocaleString('en-US',{minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                              </p>
                            ):(
                              <p>
                                <span>{product.price} </span>
                                
                              </p>
                            )

                        }

                    </div>
                     

            </div>
        </Link>
    )
}