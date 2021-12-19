const generateDefaultDataCollection = (collectionName) => `{\n    "collectionName": "${collectionName}",\n    "data": []\n}`;

const generateDefaultDataConfigFile = (collectionName) => `{\n    "collectionName": "${collectionName}"\n}`;

module.exports = {
    generateDefaultDataCollection,
    generateDefaultDataConfigFile
}