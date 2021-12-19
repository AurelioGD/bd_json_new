const fs = require("fs")
const { generatePathAbsoluteDbPlusColl } = require("../../utils/pathGenerators")

const overwriteCollectionFile = (databaseName, collectionName, newCollection) => fs.writeFileSync(generatePathAbsoluteDbPlusColl(databaseName, collectionName), JSON.stringify(newCollection))

module.exports = overwriteCollectionFile