import sanityClient from '@sanity/client'
import  imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID || '6q9ogu0d'
const dataset = process.env.REACT_APP_SANITY_DATASET || 'production'

export const client = sanityClient({
  projectId,
  dataset,
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN || undefined,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);