const fs = require("fs")
const { generatePathAbsoluteDb } = require("../../utils/pathGenerators")

const deleteDbFolder = (databaseName) => {
    return fs.rmdirSync(generatePathAbsoluteDb(databaseName))
}

module.exports = deleteDbFolder