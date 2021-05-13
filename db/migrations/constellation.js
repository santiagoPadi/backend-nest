exports.up = (knex) =>
  knex.schema.createTable('constellation', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('unlock').notNullable();
    table.string('description', 1000).notNullable();
    table.string('level').notNullable();
    table
      .uuid('character_id')
      .references('id')
      .inTable('characters')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });

exports.down = async (knex) => {
  await knex.schema.dropTable('constellation');
  await knex.raw('DROP type constellation;');
};
