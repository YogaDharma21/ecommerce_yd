import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'ecommerceyd',

  projectId: process.env.SANITY_STUDIO_PROJECTID as string,
  dataset: process.env.SANITY_STUDIO_DATASET as string,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
