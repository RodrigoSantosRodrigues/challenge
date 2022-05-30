const {
    jsonSuccess,
    jsonBadRequest
} = require('../util/http');
const productModel = require('../models/product.model');
const categoryModel = require('../models/category.model');
const { messages } = require('../mappers/messages');

async function createProduct(res, data) {
    if (!data) return jsonBadRequest(res, {error: messages['missingBody']});

    const created = await productModel.create(data);
    if (!created) return jsonBadRequest(res, {data: 'Error in create'});

    return jsonSuccess(
        res,
        {data: 'OK'}
    );
}

async function findProduct(res, id) {
    if (!id) return jsonBadRequest(res, {error: messages['missingId']});

    const product = await productModel.get(id);
    return jsonSuccess(
        res,
        {data: product}
    );
}

async function findProductByCategoryName(res, category_name) {
    if (!category_name) return jsonBadRequest(res, {error: messages['missingCategoryName']});

    const category = await categoryModel.getCategoryByCategoryName(category_name)
    const product = await productModel.getProductByCategoryId(category.id);
    return jsonSuccess(
        res,
        {data: product}
    );
}

async function listProduct(res) {
    const categories = await productModel.get();
    return jsonSuccess(
        res,
        {data: categories}
    );
}

async function updateProduct(res, id, body) {
    if (!id) return jsonBadRequest(res, {error: messages['missingId']});
    if (!body) return jsonBadRequest(res, {error: messages['missingBody']});

    body.updated = new Date();
    const updated = await productModel.update(id, body);
    if (!updated)  return jsonBadRequest(res, {data: 'Error in update'});

    return jsonSuccess(
        res,
        {data: 'OK'}
    );
}

async function deleteProduct(res, id) {
    if (!id) return jsonBadRequest(res, {error: messages['missingId']});

    await productModel.remove(id);
    return jsonSuccess(
        res,
        {data: 'OK'}
    );
}

module.exports = {
    createProduct,
    findProduct,
    listProduct,
    updateProduct,
    deleteProduct,
    findProductByCategoryName
}
