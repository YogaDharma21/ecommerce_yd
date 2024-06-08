import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECTID as string,
    dataset: process.env.SANITY_STUDIO_DATASET as string,
  },
})
