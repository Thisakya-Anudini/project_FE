import { Link } from "react-router-dom";


export default function Header(){
    return(

        <header className=" h-[100px] bg-blue-500 flex justify-center items-center"> 
        <Link to ="/" className="text-white text-2xl font-bold">Home</Link>
        <Link to ="/products" className="text-white text-xl ml-5 font-bold">Products</Link>
        <Link to ="/reviews" className="text-white text-xl ml-5 font-bold">Reviews</Link>
        <Link to ="/cart" className="text-white text-xl ml-5 font-bold">Cart</Link>
        <Link to ="/orders" className="text-white text-xl ml-5 font-bold">Orders</Link>
        <Link to ="/about-us" className="text-white text-xl ml-5 font-bold">About Us</Link>

            
        </header>




    ) 


}