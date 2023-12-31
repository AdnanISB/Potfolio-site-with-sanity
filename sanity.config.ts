import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Next.js Site',

  projectId: 'erhngvaj',
  dataset: 'production',
  basePath: "/studio",
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
