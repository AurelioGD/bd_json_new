const fs = require("fs")
const { generateDefaultDataCollection } = require("../../utils/defaultDataGenerators")
const { generatePathAbsoluteGetConfigFile } = require("../../utils/pathGenerators")

const createCollectionFile = (databaseName) => {
    fs.writeFileSync(generatePathAbsoluteGetConfigFile(databaseName), generateDefaultDataCollection(databaseName));
}

module.exports = createCollectionFile