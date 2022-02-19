const { accessSync, constants } = require('fs');
const { generatePathAbsoluteFolderDatabases } = require("./../utils/pathGenerators")

const checkIfExistFolderWrapperDbs = () => {
    try {
        accessSync(generatePathAbsoluteFolderDatabases(), constants.R_OK | constants.W_OK);
        return true
    } catch (err) {
        return false
    }
}

module.exports = checkIfExistFolderWrapperDbs