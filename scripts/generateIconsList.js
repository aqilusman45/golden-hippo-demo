const fs = require('fs')
const path = require('path')
const icons = '/../icons'
const iconsJson = '/../constants/icons.json'

try {
  const iconStrings = fs
    .readdirSync(path.join(__dirname, icons))
    .filter((icon) => icon.includes('.svg'))
    .map((file) => `${file.substring(0, file.length - 4)}`)

  if (iconStrings === '') throw new Error('No icons to merge into sprite')

  fs.writeFileSync(
    path.join(__dirname, iconsJson),
    JSON.stringify({
      icons: iconStrings
    })
  )
} catch (error) {
  console.error(error)
}
