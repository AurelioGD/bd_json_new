const fs = require("fs")
const { generateDefaultDataConfigFile } = require("../../utils/defaultDataGenerators")
const { generatePathAbsoluteGetConfigFile } = require("../../utils/pathGenerators")

const createCollectionFile = (databaseName) => {
    fs.writeFileSync(generatePathAbsoluteGetConfigFile(databaseName), generateDefaultDataConfigFile(databaseName));
}

module.exports = createCollectionFile