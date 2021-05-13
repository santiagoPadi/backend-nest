// eslint-disable-next-line @typescript-eslint/no-var-requires
const enums = require('../../src/constants/enums');

exports.up = (knex) =>
  knex.schema.createTable('characters', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.enu('vision', enums.eVision, {}).defaultTo('Dendro');
    table.string('weapon').notNullable();
    table.string('nation').notNullable();
    table.string('affiliation').notNullable();
    table.integer('rarity').notNullable();
    table.string('constellation').notNullable();
    table.string('birthday').notNullable();
    table.string('description', 1000).notNullable();
    table.timestamps(true, true);
  });

exports.down = async (knex) => {
  await knex.schema.dropTable('characters');
  await knex.raw('DROP type characters;');
};
