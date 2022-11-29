const checkIfExistDatabase = require("../validations/checkIfExistDataBase")
const databaseErrors = require("../errors/database")
const deleteDbFolder = require("../process/database/deleteDbFolder")
const getCollectionsDb = require("../process/database/getCollectionsDb")
const deleteCollOfDb = require("../process/database/deleteCollOfDb")

const dropDatabase = (databaseName = "") => {
    if (!checkIfExistDatabase(databaseName)) return console.log(databaseErrors.notExist)

    const collections = getCollectionsDb(databaseName)

    collections.forEach(collectionName=> {
        deleteCollOfDb(databaseName, collectionName)
    })

    deleteDbFolder(databaseName)
}

module.exports = dropDatabase