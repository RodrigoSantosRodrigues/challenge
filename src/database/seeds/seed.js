const categoriesData = [
    {
        id: 1,
        name: 'Eletronics',
        description: 'Eletronics',
        created: new Date(),
        updated: new Date()
    },
    {
        id: 2,
        name: 'Cell Phones',
        description: 'Cell Phones',
        created: new Date(),
        updated: new Date()
    },
    {
        id: 3,
        name: 'Phones',
        description: 'Phones',
        created: new Date(),
        updated: new Date()
    },
    {
        id: 4,
        name: 'TV',
        description: 'TV',
        created: new Date(),
        updated: new Date()
    },
    {
        id: 5,
        name: 'Notebooks',
        description: 'Notebooks',
        created: new Date(),
        updated: new Date()
    },
    {
        id: 6,
        name: 'Test',
        description: 'Test',
        created: new Date(),
        updated: new Date()
    }
]

const productsData = [
    {
        id: 1,
        name: 'Watch',
        description: 'Eletronics watch',
        value: 600,
        category_id: 1,
        created: new Date(),
        updated: new Date()
    },
    {
        id: 2,
        name: 'Galaxy phone',
        description: 'Cell Phones galaxy',
        value: 2000,
        category_id: 2,
        created: new Date(),
        updated: new Date()
    },
    {
        id: 3,
        name: 'Phones sansung',
        description: 'Phones sansung',
        value: 1500,
        category_id: 2,
        created: new Date(),
        updated: new Date()
    },
    {
        id: 4,
        name: 'TV show',
        description: 'TV',
        value: 3000,
        category_id: 4,
        created: new Date(),
        updated: new Date()
    },
    {
        id: 5,
        name: 'Notebook',
        description: 'Notebook',
        value: 5000,
        category_id: 4,
        created: new Date(),
        updated: new Date()
    }
]

exports.seed = function(knex) {
    return knex('product').del()
        .then(() => {
            return knex('category').del();
        })
        .then(() => {
            return knex('category').insert(categoriesData);
        })
        .then(() => {
            return knex('product').insert(productsData);
        })
}
