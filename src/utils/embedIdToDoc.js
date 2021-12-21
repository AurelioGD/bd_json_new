const rtg = require('random-token-generator');

const setupGenerator = {
    len: 20,
    string: true,
    strong: false,
    retry: false
}

const getId = () => {
    return new Promise((resolve, reject) => {
        rtg.generateKey(setupGenerator, (err, key) => {
            resolve(key)
        });
    })

}

const embedIdToDoc = async (newDoc) => {
    const id = await getId()
    return { id, ...newDoc }
}

module.exports = embedIdToDoc