import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/loader";
import ImageSlider from "../../components/imageSlider";


export default function ProductOverviewPage() {
    const params = useParams();
    const [product, setProduct] = useState({});
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        if (status === "loading") {
            axios
                .get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + params.productId)
                .then((res) => {
                    setProduct(res.data);
                    setStatus("success");
                })
                .catch((error) => {
                    console.log(error);
                    setStatus("error");
                });
        }
    }, [status]);

    return (
        <div className="w-full h-full">
            {status === "loading" && <Loader />}

            {status === "success" && <div className="w-full h-full flex flex-row">
                    <div className="w-[50%] h-full flex flex-col justify center items-center mt-15">
                        <ImageSlider images={product.images} />
                    </div>

                    <div className="w-[50%] h-full flex flex-col items-center pt-[50px]">
                        <h1 className="text-2xl font-bold">{product.name}<span className="text-gray-500 font-normal">{"  "}{product.altNames.join(" | ")} </span></h1>
                        <p className="text-md mt-[20px]">{product.description}</p>
                        <div className="w-full flex flex-col items-center mt-[20px]">
                            {
                                product.labelledPrice > product.price ?(
                                    <div>
                                        <span className=" text-xl line-through font-semibold mr-[20px]">{product.labelledPrice.toLocaleString('en-US',{minimumFractionDigits: 2, maximumFractionDigits: 2})} </span>
                                        <span className="text-2xl font-bold ">{product.price.toLocaleString('en-US',{minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                                    </div>
                                )
                                :
                                (
                                    <div>
                                        <span className="text-3xl font-bold">{product.price.toLocaleString('en-US',{minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                                    </div>
                                )
                            }

                        </div>
                        <div className="w-full flex flex-row justify-center items-center mt-[20px]  gap-[20px]">
                            <button className="w-[200px] h-[50px] cursor-pointer rounded-xl shadow-2xl  text-white bg-blue-900 border-[3px] border-blue-900 hover:bg-white hover:text-blue-900">Buy Now</button>
                            <button className="w-[200px] h-[50px] cursor-pointer rounded-xl shadow-2xl text-white  bg-blue-500 border-[3px] border-blue-500 hover:bg-white hover:text-blue-900 ">Add to Cart</button>

                        </div>
                    </div>
                </div>
            }

            {status === "error" && <div>Error loading product data.</div>}
        </div>
    );
}
