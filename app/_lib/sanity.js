import { createClient } from "next-sanity";


 export const client = createClient({
        projectId : process.env.NEXT_PUBLIC_PROJECT_ID,
        dataset : process.env.NEXT_PUBLIC_DATA_SET,
        apiVersion: "2023-03-04", // use current date (YYYY-MM-DD) to target the latest API version
        useCdn: true, // set to `false` to bypass the edge cache
        token: process.env.SANITY_TOKEN,
       ignoreBrowserTokenWarning:true,
       });

       export const clientConfig = {
              projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
              dataset: process.env.NEXT_PUBLIC_DATA_SET,
            }

        