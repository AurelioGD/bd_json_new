const checkIfExistDatabase = require("../validations/checkIfExistDataBase")
const checkIfExistFolderWrapperDbs = require("../validations/checkIfExistFolderWrapperDbs")
const databaseErrors = require("../errors/database")
const createCollectionConfigFile = require("../process/collection/createCollectionConfigFile")
const createDbFolder = require("../process/database/createDbFolder")
const createFolderWrapperDbs = require("../process/database/createFolderWrapperDbs")

const createDatabase = (databaseName) => {
    if(!checkIfExistFolderWrapperDbs()) createFolderWrapperDbs()

    if (checkIfExistDatabase(databaseName)) return console.log(databaseErrors.alreadyExist)

    createDbFolder(databaseName)

    createCollectionConfigFile(databaseName);
}

module.exports = createDatabase