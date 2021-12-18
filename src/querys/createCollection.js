const fs = require("fs")
const collectionErrors = require("../errors/collection")
const { checkIfExistDataBase, checkIfExistCollection } = require("../validations")
const { generateDefaultDataCollection } = require("../utils/defaultDataGenerators")
const { generatePathAbsoluteDbPlusColl } = require("../utils/pathGenerators")
const createDatabase = require("./createDatabase")

const createCollection = (databaseName, collectionName) => {
    if (!checkIfExistDataBase(databaseName)) createDatabase(databaseName)

    if (checkIfExistCollection(databaseName, collectionName)) return console.log(collectionErrors.alreadyExist)

    fs.writeFileSync(generatePathAbsoluteDbPlusColl(databaseName, collectionName), generateDefaultDataCollection(collectionName));
}

module.exports = createCollection