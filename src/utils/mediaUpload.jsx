import { toast } from "react-hot-toast";
import { createClient } from "@supabase/supabase-js";


const url = "https://uborvfzxoppbimjiqftj.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVib3J2Znp4b3BwYmltamlxZnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxODIyNTMsImV4cCI6MjA3MTc1ODI1M30.M9zP7ohd_K7EYZi2zhk0kAO6_ZoVvB_4r654ClmV7yY";

// Initialize Supabase Client
const supabase = createClient(url, key);

export default function mediaUpload(file) {
    const promise = new Promise((resolve, reject) => {
        if (file == null) {
     
            toast.error("Please select a file to upload");
            return;
        }

        const timeStamp = new Date().getTime();
        const fileName = file.name + "_" + timeStamp;

        supabase.storage.from("images").upload(fileName, file, {
            cacheControl: "3600",
            upsert: false,
        })
        .then(() => {
            const { publicUrl } = supabase
                .storage
                .from("images")
                .getPublicUrl(fileName).data;

            console.log("File uploaded successfully", publicUrl);
            toast.success("File uploaded successfully");
            resolve(publicUrl);
        })
        .catch(() => {
            
            reject("File upload failed");
          
         
        });
    });

    return promise;
}