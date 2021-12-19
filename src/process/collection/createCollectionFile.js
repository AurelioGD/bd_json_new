const fs = require("fs")
const { generateDefaultDataCollection } = require("../../utils/defaultDataGenerators")
const { generatePathAbsoluteDbPlusColl } = require("../../utils/pathGenerators")

const createCollectionFile = (databaseName, collectionName) => fs.writeFileSync(generatePathAbsoluteDbPlusColl(databaseName, collectionName), generateDefaultDataCollection(collectionName));

module.exports = createCollectionFile 