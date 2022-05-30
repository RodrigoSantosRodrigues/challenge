const db = require('../../database');


async function create (data) {
    data.created = new Date();
    data.updated = new Date();
    return await db('product').insert(data);
}

async function get(id) {
    if (!id) return await db.select().from('product');
    return await db.select().from('product').where('id', id);
}

async function update(id, data) {
    return await db('product').update(data).where('id', id);
}

async function remove(id) {
    return await db('product').del().where('id', id);
}

async function getProductByCategoryId(category_id) {
    return await db.select().from('product').where('category_id', category_id)
}

module.exports = {
    create,
    get,
    update,
    remove,
    getProductByCategoryId
}
