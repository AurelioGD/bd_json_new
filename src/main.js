const { createCollection, createDatabase, addDoc, dropDatabase } = require("./querys")

const main = () => {
    dropDatabase("paquita")
}
main()