import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from './sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'Heavy Metal Tested Blog',

  projectId: 'tx8g7o6u',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema.types,
  },
}) 