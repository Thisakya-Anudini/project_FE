import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/loader";
import ImageSlider from "../../components/imageSlider";

export default function ProductOverviewPage() {
    const params= useParams();
    const [product, setProduct]=useState([]);
    const[status, setStatus]= useState("loading");//loading state,success state,error state are the  3 states in this page

    useEffect(() => {
        if (status==="loading") {
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
        <div className="w-full h-full ">
           {
                status=="loading"&&<Loader/>
           }
           {
                status=="success"&& <div className="w-full h-full flex flex-row">

                    <div className="w-[49%] h-full  flex flex-col justify-center items-center">
                        <ImageSlider images={product.images} /> 

                    </div>
                    
                    
                    <div className="w-[50%] h-full bg-red-500"></div>

                </div>
           }
           {
                status=="error"&&<div>error</div>
           }
         
        </div>
    );
}