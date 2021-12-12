const fs = require("fs")
const path = require("path")
const collectionErrors = require("../errors/collection")
const checkIfExistDataBase = require("./validations/checkIfExistDataBase")
const checkIfExistCollection = require("./validations/checkIfExistCollection")
const createDatabase = require("./createDatabase")

const createCollection = (databaseName, collectionName) => {
    if (!checkIfExistDataBase(databaseName)) createDatabase(databaseName)

    if (checkIfExistCollection(databaseName, collectionName)) return console.log(collectionErrors.alreadyExist)

    fs.writeFileSync(path.join(__dirname, `../../databases/${databaseName}/${collectionName}.json`), `{\n    "collectionName": "${collectionName}",\n    "data": []\n}`);
}

module.exports = createCollection