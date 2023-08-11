import {defineCliConfig} from 'sanity.cli';

export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_DATA_SET
  }
})
