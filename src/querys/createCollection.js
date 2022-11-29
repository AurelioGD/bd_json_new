const createCollectionFile = require("./../process/collection/createCollectionFile")
const collectionErrors = require("../errors/collection")
const { checkIfExistDataBase, checkIfExistCollection } = require("../validations")
const createDatabase = require("./createDatabase")

const createCollection = (databaseName="", collectionName="") => {
    if (!checkIfExistDataBase(databaseName)) createDatabase(databaseName)

    if (checkIfExistCollection(databaseName, collectionName)) return console.log(collectionErrors.alreadyExist)

    createCollectionFile(databaseName, collectionName)
}

module.exports = createCollection