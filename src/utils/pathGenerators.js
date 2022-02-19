const path = require("path")

const generatePathAbsoluteDbPlusColl = (databaseName, collectionName) => path.join(__dirname, `../../databases/${databaseName}/${collectionName}.json`)

const generatePathRelativeDbPlusColl = (databaseName, collectionName) => `../../databases/${databaseName}/${collectionName}.json`

const generatePathAbsoluteDb = (databaseName) => path.join(__dirname, `../../databases/${databaseName}`)

const generatePathAbsoluteGetConfigFile = (databaseName) => path.join(__dirname, `../../databases/${databaseName}/config.json`)

const generatePathAbsoluteFolderDatabases = () => path.join(__dirname, "../../databases")

module.exports = {
    generatePathAbsoluteDbPlusColl,
    generatePathRelativeDbPlusColl,
    generatePathAbsoluteDb,
    generatePathAbsoluteGetConfigFile,
    generatePathAbsoluteFolderDatabases
}