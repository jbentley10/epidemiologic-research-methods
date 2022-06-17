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

export async function fetchAbout() {
  const entry = await client.getEntry('78TioQnXxl5Ru6zYR8RmHo')
  if (entry.fields) return entry
  
  console.log(`Error getting Entry.`)
}