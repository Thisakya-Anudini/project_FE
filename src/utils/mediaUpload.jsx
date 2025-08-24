const url = "https://xboibwswujlzqjcxjdtp.supabase.co"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhib2lid3N3dWpsenFqY3hqZHRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU5NDE4MTgsImV4cCI6MjA3MTUxNzgxOH0.7OMeqHqxqK0RouD6uXQqlyjcPuMz74xmb-PeHh3L5S8"

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(url,key)

export default function uploadFile(file){
    const promise  = new Promise(

        (resolve, reject)=>{

            if(file == null){
                reject("Please select a file to upload");
                return;
            }

            const timeStamp = new Date().getTime();
            const fileName = timeStamp+"-"+file.name

            supabase.storage.from("images").upload(fileName,file,{
                cacheControl: "3600",
                upsert: false
            }).then(
                ()=>{
                    const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
                    resolve(publicUrl)
                }
            ).catch(
                ()=>{
                    reject("Failed to upload file");
                }
            )
            

        }

    )
    return promise;
}

