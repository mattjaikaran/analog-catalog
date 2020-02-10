import Discojs from 'discojs'

// DISCOGS API
const options = {
  userToken: process.env.USER_TOKEN,
  consumerKey: process.env.REACT_APP_PROD_DISCOGS_CONSUMER_KEY,
  consumerSecret: process.env.REACT_APP_PROD_DISCOGS_CONSUMER_SECRET,
  dgsUsername: process.env.DGS_USERNAME
}

const client = new Discojs(options)

// export const testgetreleases = async (query) => {
//   try {
//     const response = await client.searchRelease(query)
//     console.log(response.results)
//     const imgResults = response.results.filter(img => {
//       console.log(img)
//       const { id, thumb, format, title } = img
//       if (format.includes('Vinyl') && title.includes(values.albumName) && title.includes(values.artistName)) {
//         console.log('sup')
//       }
//       return null
//     })
//     return imgResults
//   } catch (err) {
//     console.log(err.message)
//   }
// }


const getReleases = async (query) => {
  try {
    const response = await client.searchRelease(query)
    return response.results.filter(img => console.log(img))
  } catch (err) {
    console.log(err.message)
  }
}

export default getReleases
