
import { useState } from "react";

import toast from "react-hot-toast";
import mediaUpload from "../utils/mediaUpload";






export default function TestPage() {

    const [file, setFile] = useState(null);
    function handleUpload(){
        mediaUpload(file)
        .then((url) => {
            console.log(url)

            
        }).catch((error) => {
            toast.error(error)
        })
    }
     



    return (
        <div className="w-full h-screen flex justify-center items-center">
            <input type="file" 
           // accept="image/*" 
            onChange={
                (e) => {
                                    
                 setFile(e.target.files[0])   
                    
                    
                    
                }
            }/>
            <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md cursor-pointer">Upload</button>
        </div>
    );

}
