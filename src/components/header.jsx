import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";


export default function Header(){
    return(

        <header className=" h-[100px] bg-blue-500 flex justify-center items-center gap-[30px]"> 
        <Link to ="/" className="text-white text-2xl font-bold">Home</Link>
        <Link to ="/products" className="text-white text-xl ml-5 font-bold">Products</Link>
        <Link to ="/reviews" className="text-white text-xl ml-5 font-bold">Reviews</Link>

        <Link to ="/about-us" className="text-white text-xl ml-5 font-bold">About Us</Link>
        <Link to ="/contact-us" className="text-white text-xl ml-5 font-bold">Contact Us</Link>
        <Link to ="/cart" className="absolute right-4">
                <BiCart className="text-white text-3xl  ml-3"/></Link>

      

            
        </header>




    ) 


}