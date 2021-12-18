const path = require("path")

const generatePathAbsoluteDbPlusColl = (databaseName, collectionName) => path.join(__dirname, `../../databases/${databaseName}/${collectionName}.json`)

const generatePathRelativeDbPlusColl = (databaseName, collectionName) => `../../databases/${databaseName}/${collectionName}.json`

module.exports = {
    generatePathAbsoluteDbPlusColl,
    generatePathRelativeDbPlusColl
}