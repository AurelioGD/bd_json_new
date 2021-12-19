const fs = require("fs")
const { generatePathAbsoluteDb } = require("../../utils/pathGenerators")

const createDbFolder = (databaseName) => {
    fs.mkdirSync(generatePathAbsoluteDb(databaseName))
}

module.exports = createDbFolder