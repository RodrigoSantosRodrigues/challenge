const {
    jsonSuccess,
    jsonBadRequest
} = require('../util/http');
const categoryModel = require('../models/category.model');
const productModel = require('../models/product.model');
const { messages } = require('../mappers/messages');

async function createCategory(res, data) {
    if (!data) return jsonBadRequest(res, {error: messages['missingBody']});

    const created = await categoryModel.create(data);
    if (!created) return jsonBadRequest(res, {data: 'Error in create'});

    return jsonSuccess(
        res,
        {data: 'OK'}
    );
}

async function findCategory(res, id) {
    if (!id) return jsonBadRequest(res, {error: messages['missingId']});

    const category = await categoryModel.get(id);
    return jsonSuccess(
        res,
        {data: category}
    );
}

async function listCategory(res) {
    const categories = await categoryModel.get();
    return jsonSuccess(
        res,
        {data: categories}
    );
}

async function updateCategory(res, id, body) {
    if (!id) return jsonBadRequest(res, {error: messages['missingId']});
    if (!body) return jsonBadRequest(res, {error: messages['missingBody']});

    body.updated = new Date();
    const updated = await categoryModel.update(id, body);
    if (!updated) return jsonBadRequest(res, {data: 'Error in update'});

    return jsonSuccess(
        res,
        {data: 'OK'}
    );
}

async function deleteCategory(res, id) {
    if (!id) return jsonBadRequest(res, {error: messages['missingId']});

    const product = await productModel.getProductByCategoryId(id)
    if (product.length) return jsonBadRequest(res, {data: 'There is a product for this category'});

    await categoryModel.remove(id)
    return jsonSuccess(
        res,
        {data: 'OK'}
    );
}

module.exports = {
    createCategory,
    findCategory,
    listCategory,
    updateCategory,
    deleteCategory
}
