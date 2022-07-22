const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN
const environment = process.env.CONTENTFUL_ENVIRONMENT

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
  environment: environment
})

export async function fetchHome() {
  const entry = await client.getEntry('4U1GSbufjN9wm74xKKVGN0')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}

export async function fetchAboutUs() {
  const entry = await client.getEntry('veJf1fVmcVYSEqAMAMMV8')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}

export async function fetchExperts() {
  const entries = await client.getEntries({
    content_type: 'expert'
  })

  if (entries.items[0].fields) return entries.items;
  
  console.log(`Error getting Entry.`)
}

export async function fetchPublicationsPage() {
  const entry = await client.getEntry('4NUbbpLO2SZnw0VOXtQq2K')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}

export async function fetchPublications() {
  const entries = await client.getEntries({
    content_type: 'publication'
  })

  if (entries.includes.Asset[0].fields) return entries.includes.Asset
  
  console.log(`Error getting Entry.`)
}

export async function fetchContactUs() {
  const entry = await client.getEntry('ZaJdzDiEO5R2OjhxF90eu')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}

export async function fetchPageNotFound() {
  const entry = await client.getEntry('6A4SrAAreqG2puQWW8LKkE')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}