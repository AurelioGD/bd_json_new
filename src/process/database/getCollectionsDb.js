const fs = require("fs")
const { generatePathAbsoluteDb } = require("../../utils/pathGenerators")

const getCollectionsDb = (databaseName="") => {
    const collections = fs.readdirSync(generatePathAbsoluteDb(databaseName))
    return collections
}

module.exports = getCollectionsDb