const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
const environment = process.env.CONTENTFUL_ENVIRONMENT

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
  environment: environment
})

export async function fetchPage(id) {
  const entry = await client.getEntry(id)
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}

export async function fetchAsset(assetID) {
  const asset = await client.getAsset(assetID)
  if (asset) return asset;

  console.log('Error getting asset.');
}

export async function fetchExperts() {
  const entries = await client.getEntries({
    content_type: 'expert'
  })

  if (entries.items[0].fields) return entries.items;
  
  console.log(`Error getting Entry.`)
}

export async function fetchPublications() {
  const entries = await client.getEntries({
    content_type: 'publication'
  })

  if (entries.items[0].fields) return entries.items;
  
  console.log(`Error getting Entry.`)
}