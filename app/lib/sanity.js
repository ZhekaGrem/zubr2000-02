import { createClient } from "next-sanity";


 export const client = createClient({
        projectId : "g1jli16o",
        dataset : 'production',
        apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
        useCdn: true, // set to `false` to bypass the edge cache
        token: process.env.SANITY_TOKEN,
       ignoreBrowserTokenWarning:true,
       });

       export const clientConfig = {
              projectId: 'g1jli16o',
              dataset: 'production',
            }

        