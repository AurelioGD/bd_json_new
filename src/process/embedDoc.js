const embedDoc = (coll, newDoc) => {

    const data = [...coll.data]

    const newData = data.push(newDoc)

    const newCollection = { ...coll, data: newData }

    return newCollection

}

module.exports = embedDoc