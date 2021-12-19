const { createCollection, createDatabase, addDoc } = require("./querys")
const main = () => {
    addDoc("xd", "pan", {
        id: 1,
        name: "concha"
    })
}
main()