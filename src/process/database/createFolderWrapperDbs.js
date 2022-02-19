const fs = require("fs")
const { generatePathAbsoluteFolderDatabases } = require("../../utils/pathGenerators")

const createFolderWrapperDbs = () => {
    fs.mkdirSync(generatePathAbsoluteFolderDatabases())
}

module.exports = createFolderWrapperDbs