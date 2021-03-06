const matter = require('gray-matter')
const changeCase = require('change-case')
const fs = require('fs')
const markdown = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
})

function convertMarkdownToJson (file) {
  const parsed = matter.read(file)

  const post = parsed.data

  post.content = parsed.content

  post.slug = changeCase.paramCase(post.title)

  delete post.layout

  post.content = markdown.render(post.content)

  return post
}

function getAllPostFilepaths () {
  const postsDir = './posts/'
  return fs.readdirSync(postsDir).map(post => `${postsDir}${post}`)
}

// blatantly stolen from http://stackoverflow.com/a/24742794

const reA = /[^a-zA-Z]/g
const reN = /[^0-9]/g
function sortAlphaNum (a, b) {
  const AInt = parseInt(a, 10)
  const BInt = parseInt(b, 10)

  if (isNaN(AInt) && isNaN(BInt)) {
    const aA = a.replace(reA, '')
    const bA = b.replace(reA, '')
    if (aA === bA) {
      const aN = parseInt(a.replace(reN, ''), 10)
      const bN = parseInt(b.replace(reN, ''), 10)
      return aN === bN ? 0 : aN > bN ? 1 : -1
    } else {
      return aA > bA ? 1 : -1
    }
  } else if (isNaN(AInt)) {
    // A is not an Int
    return 1 // to make alphanumeric sort first return -1 here
  } else if (isNaN(BInt)) {
    // B is not an Int
    return -1 // to make alphanumeric sort first return 1 here
  } else {
    return AInt > BInt ? 1 : -1
  }
}

const json = getAllPostFilepaths().map(post => convertMarkdownToJson(post))

fs.writeFile(
  './src/posts.json',
  JSON.stringify(json.sort((a, b) => sortAlphaNum(a.song, b.song))),
  'utf8',
  (err) => {
    if (err) console.error(err)
  }
)
