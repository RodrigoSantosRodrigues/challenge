const db = require('../../database');

async function create (data) {
    data.created = new Date();
    data.updated = new Date();
    return await db('category').insert(data);
}

async function get(id) {
    if (!id) return await db.select().from('category');
    return await db.select().from('category').where('id', id);
}

async function update(id, data) {
    return await db('category').update(data).where('id', id);
}

async function remove(id) {
    return await db('category').del().where('id', id);
}

async function getCategoryByCategoryName(category_name) {
    return await db.select().from('category').where('name', category_name).first()
}

module.exports = {
    create,
    get,
    update,
    remove,
    getCategoryByCategoryName
}
