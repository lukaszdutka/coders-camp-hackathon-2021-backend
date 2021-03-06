import CollectionController from "./CollectionController.js";
const collection = new CollectionController();

// GET:
export const getAllCollections = (req, res) => {
    collection.getAllCollections(req, res);
};

export const getCollectionById = (req, res) => {
    collection.getCollectionById(req, res);
};

// POST:
export const createCollection = (req, res) => {
    collection.createCollection(req, res);
};

// PATCH:
export const updateCollection = (req, res) => {
    collection.updateCollection(req, res);
};
