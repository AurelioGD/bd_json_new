const databaseErrors = require("../errors/database")
const collectionErrors = require("../errors/collection")
const { checkIfExistDataBase, checkIfExistCollection } = require("../validations")
const { generatePathRelativeDbPlusColl } = require("../utils/pathGenerators")


const embedDoc = require("../utils/embedDoc")
const overwriteCollectionFile = require("../process/collection/overwriteCollectionFile")
const embedIdToDoc = require("../utils/embedIdToDoc")

const addDoc = async (databaseName, collectionName, newDoc) => {
    if (!checkIfExistDataBase(databaseName)) return console.log(databaseErrors.notExist)

    if (!checkIfExistCollection(databaseName, collectionName)) return console.log(collectionErrors.notExist)

    const collection = require(generatePathRelativeDbPlusColl(databaseName, collectionName))

    if (!newDoc.id) newDoc = await embedIdToDoc(newDoc)

    const newCollection = embedDoc(collection, newDoc)

    overwriteCollectionFile(databaseName, collectionName, newCollection)
}

module.exports = addDoc