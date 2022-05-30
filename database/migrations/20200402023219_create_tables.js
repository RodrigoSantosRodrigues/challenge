exports.up = function(knex) {
    return knex.schema
        .createTableIfNotExists('category', table => {
            table.increments('id').primary().notNullable()
            table.string('name', 150).unique().notNullable()
            table.string('description', 150)
            table.datetime('created', 6).notNullable()
            table.datetime('updated', 6).notNullable()
        })
        .createTableIfNotExists('product', table => {
            table.increments('id').primary().notNullable()
            table.string('name', 150).notNullable()
            table.string('description', 150)
            table.integer('value', 11)
            table.integer('category_id').notNullable()
            table.datetime('created', 6).notNullable()
            table.datetime('updated', 6).notNullable()
            table.foreign('category_id').references('id').inTable('category')
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTable('category')
        .dropTable('product');
}
