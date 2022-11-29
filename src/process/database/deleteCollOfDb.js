const fs = require("fs")
const { generatePathRelativeDbPlusColl } = require("../../utils/pathGenerators")

const deleteCollOfDb = (databaseName="", collectionName="") => {
    return fs.rmSync(generatePathRelativeDbPlusColl(databaseName, collectionName))
}

module.exports = deleteCollOfDb