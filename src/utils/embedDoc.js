const embedDoc = (collection, newDoc) => {
    const newData = [...collection.data, newDoc]

    const newCollection = { ...collection, data: newData }

    return newCollection
}

module.exports = embedDoc