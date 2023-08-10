import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {post} from '@/sanity/schemas/post'
import {offer} from '@/sanity/schemas/offer'
import {schemaTypes} from '@/sanity/schemas/index'
 
 const config = defineConfig({
    name: "default",
    title: "ZUBR-2000-Admin",
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_DATA_SET,
    apiVersion: "2023-03-04",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {
      types: schemaTypes,
    },
    
})

export default config;