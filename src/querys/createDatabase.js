const checkIfExistDatabase = require("../validations/checkIfExistDataBase")
const databaseErrors = require("../errors/database")
const fs = require("fs")
const path = require("path")

const createDatabase = (databaseName) => {
    if (checkIfExistDatabase(databaseName)) return console.log(databaseErrors.alreadyExist)

    fs.mkdirSync(path.join(__dirname, `../../databases/${databaseName}`))

    fs.writeFileSync(path.join(__dirname, `../../databases/${databaseName}/config.json`), `{\n    "name":"${databaseName}"\n}`);
}

module.exports = createDatabase