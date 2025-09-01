import Header from "../../components/header";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./productPage";
import ProductOverviewPage from "./productOverview";


export default function ClientWebPage() {
    return (
        <div className="w-full h-screen max-h-screen">
            <Header/>
            <div className="w-full h-[calc(100%-100px)] ">
                <Routes>
                    <Route path="/" element={<h1 className="text-2xl text-center">Welcome to our website</h1>}/>
                    <Route path="/products" element={<ProductPage/>}/>
                    <Route path="/overview/:productId" element={<ProductOverviewPage/>}/>
                    <Route path="/reviews" element={<h1 className="text-2xl text-center">Reviews</h1>}/>
                    <Route path="/about-us" element={<h1 className="text-2xl text-center">About Us</h1>}/>
                    <Route path="/contact-us" element={<h1 className="text-2xl text-center">Contact Us</h1>}/>
                    <Route path="/*" element={<h1 className="text-2xl text-center"> 404 Not Found</h1>}/>


                    
                </Routes>
            </div>
        
        </div>
    );
}