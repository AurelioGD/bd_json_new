const databaseErrors = require("../errors/database")
const collectionErrors = require("../errors/collection")
const checkIfExistDataBase = require("../validations/checkIfExistDataBase")
const checkIfExistCollection = require("../validations/checkIfExistCollection")
const { generatePathRelativeDbPlusColl } = require("../utils/pathGenerators")
const addDoc = (databaseName, collectionName, newDoc) => {
    if (!checkIfExistDataBase(databaseName)) return console.log(databaseErrors.notExist)

    if (!checkIfExistCollection(databaseName, collectionName)) return console.log(collectionErrors.notExist)

    const collection = require(generatePathRelativeDbPlusColl(databaseName, collectionName))



}

module.exports = addDoc