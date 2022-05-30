const productModel = require('../models/product.model');
const categoryModel = require('../models/category.model');
const { messages } = require('../mappers/messages');

async function createProduct(data) {
    if (!data) return {error: messages['missingBody']};

    data.created = new Date();
    data.updated = new Date();
    const created = await productModel.create(data);
    if (!created) return {data: 'Error in create'};

    return {data: 'OK'};
}

async function createProductForCategory(category_name, data) {
    if (!category_name) return {error: messages['missingCategoryName']};

    const category = await categoryModel.getCategoryByCategoryName(category_name)
    const dataProduct  = data.map(item => (item = {
        ...item,
        category_id: category.id,
        created : new Date(),
        updated: new Date()
    }
    ))

    const product = await productModel.create(dataProduct);
    return {data: product}
}

async function findProduct(id) {
    if (!id) return {error: messages['missingId']};

    const product = await productModel.get(id);
    return {data: product}
}

async function findProductByCategoryName(category_name) {
    if (!category_name) return {error: messages['missingCategoryName']};

    const category = await categoryModel.getCategoryByCategoryName(category_name)
    const product = await productModel.getProductByCategoryId(category.id);
    return {data: product}
}

async function listProduct() {
    const categories = await productModel.get();
    return {data: categories}
}

async function updateProduct(id, body) {
    if (!id) return {error: messages['missingId']};
    if (!body) return {error: messages['missingBody']};

    body.updated = new Date();
    const updated = await productModel.update(id, body);
    if (!updated)  return {data: 'Error in update'};

    return {data: 'OK'}
}

async function deleteProduct(id) {
    if (!id) return {error: messages['missingId']};

    await productModel.remove(id);
    return {data: 'OK'}
}

module.exports = {
    createProduct,
    findProduct,
    listProduct,
    updateProduct,
    deleteProduct,
    findProductByCategoryName,
    createProductForCategory
}
