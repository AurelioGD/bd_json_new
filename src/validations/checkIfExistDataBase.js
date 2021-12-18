const fs = require("fs")
const path = require("path")

const checkIfExistDatabase = (databaseName) => fs.existsSync(path.join(__dirname, `../../databases/${databaseName}/config.json`))

module.exports = checkIfExistDatabase