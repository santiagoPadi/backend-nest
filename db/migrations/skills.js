exports.up = (knex) =>
  knex.schema.createTable('skills', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('unlock').notNullable();
    table.string('description', 1000).notNullable();
    table.string('level').nullable();
    table.timestamps(true, true);
    table
      .uuid('character_id')
      .references('id')
      .inTable('characters')
      .onDelete('CASCADE');
  });

exports.down = async (knex) => {
  await knex.schema.dropTable('skills');
  await knex.raw('DROP type skills;');
};
