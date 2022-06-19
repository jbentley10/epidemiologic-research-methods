const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchHome() {
  const entry = await client.getEntry('4U1GSbufjN9wm74xKKVGN0')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}

export async function fetchServices() {
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

  if (entries.items[0].fields) return entries.items
  
  console.log(`Error getting Entry.`)
}