const checkIfExistDatabase = require("../validations/checkIfExistDataBase")
const databaseErrors = require("../errors/database")
const createCollectionConfigFile = require("../process/collection/createCollectionConfigFile")
const createDbFolder = require("../process/database/createDbFolder")

const createDatabase = (databaseName) => {
    if (checkIfExistDatabase(databaseName)) return console.log(databaseErrors.alreadyExist)

    createDbFolder(databaseName)

    createCollectionConfigFile(databaseName);
}

module.exports = createDatabase