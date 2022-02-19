const { createCollection, createDatabase, addDoc } = require("./querys")

const main = () => {
    createDatabase("paquita")
    /* addDoc("paquita", "dulce", {
        id: "asdaswd",
        name: "Chocolate",
        description: "Esta bueno es un producto lacteo con exceso de calorias"
    }) */
}
main()