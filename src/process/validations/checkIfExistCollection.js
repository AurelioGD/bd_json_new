const fs = require("fs")
const path = require("path")
const checkIfExistDataBase = require("./checkIfExistDataBase")

const checkIfExistCollection = (databaseName, collectionName) => {
    if (!checkIfExistDataBase(databaseName)) return false

    const checkout = fs.existsSync(path.join(__dirname, `../../../databases/${databaseName}/${collectionName}.json`))

    return checkout
}

module.exports = checkIfExistCollection