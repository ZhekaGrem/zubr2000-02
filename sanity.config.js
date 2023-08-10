import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
 import{schemaTypes} from'@/sanity-01/schemas-01/sanity';
 const config = defineConfig({
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