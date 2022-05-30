const categoryModel = require('../models/category.model');
const productModel = require('../models/product.model');
const { messages } = require('../mappers/messages');

async function createCategory(data) {
    if (!data) return {error: messages['missingBody']};

    const created = await categoryModel.create(data);
    if (!created) return {error: messages['errorCreate']};

    return {data: 'OK'}
}

async function findCategory(id) {
    if (!id) return {error: messages['missingId']};

    const category = await categoryModel.get(id);
    return {data: category}
}

async function listCategory() {
    const categories = await categoryModel.get();
    return {data: categories}
}

async function updateCategory(id, body) {
    if (!id) return {error: messages['missingId']};
    if (!body) return {error: messages['missingBody']};

    body.updated = new Date();
    const updated = await categoryModel.update(id, body);
    if (!updated) return {data: 'Error in update'};

    return {data: 'OK'}
}

async function deleteCategory(res, id) {
    if (!id) return {error: messages['missingId']};

    const product = await productModel.getProductByCategoryId(id)
    if (product.length) return {data: 'There is a product for this category'};

    await categoryModel.remove(id)
    return {data: 'OK'}
}

module.exports = {
    createCategory,
    findCategory,
    listCategory,
    updateCategory,
    deleteCategory
}
