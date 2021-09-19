const yaml = require("js-yaml")
const { readFileSync, writeFileSync } = require("fs")
const { join } = require("path")

// convert style name to FA class
function styleToClass(style) {
  switch (style) {
    case "solid":
      return "fas"
    case "regular":
      return "far"
    case "brands":
      return "fab"
    default:
      return "fa"
  }
}

const parsedData = yaml.load(
  readFileSync(
    join(
      __dirname,
      "",
      "../node_modules/@fortawesome/fontawesome-free/metadata/icons.yml",
    ),
  ),
  "utf8",
)
const keys = Object.keys(parsedData)
const data = [...Object.values(parsedData)].map((icon, index) => {
  // set name
  icon.name = keys[index]

  // set prefixes
  icon.prefixClasses = []
  icon.styles.forEach((style) => {
    icon.prefixClasses.push(styleToClass(style))
  })

  // set full icon class
  icon.classes = []
  icon.prefixClasses.forEach((prefix) => {
    icon.classes.push(prefix + " fa-" + icon.name)
  })

  // reset search
  icon.search = [...icon.search.terms, icon.name]

  // remove non-used
  delete icon.voted

  // return icon
  return icon
})

// insert to json file
writeFileSync("data.json", JSON.stringify(data))
