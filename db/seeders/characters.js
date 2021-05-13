// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v4: uuidv4 } = require('uuid');

exports.seed = async (knex) => {
  try {
    //characters
    await knex('characters').del();
    await knex('characters').insert([
      {
        id: '7ecfd035-1fa2-4a94-a868-a8257d544add',
        name: 'Barbara',
        vision: 'Hydro',
        weapon: 'Catalyst',
        nation: 'Mondstadt',
        affiliation: 'Church of Favonius',
        rarity: 4,
        constellation: 'Crater',
        birthday: '0000-07-05',
        description:
          'Every denizen of Mondstadt adores Barbara. However, she learned the word "idol" from a magazine.',
      },
    ]);
    //constellations
    await knex('constellation').del();
    await knex('constellation').insert([
      {
        id: uuidv4(),
        name: 'Gleeful Songs',
        unlock: 'Constellation Lv. 1',
        description: 'Barbara regenerates 1 Energy every 10s.',
        level: 1,
        character_id: '7ecfd035-1fa2-4a94-a868-a8257d544add',
      },
      {
        id: uuidv4(),
        name: 'Vitality Burst',
        unlock: 'Constellation Lv. 2',
        description:
          "Decreases the CD of Let the Show Begin by 15%.\nDuring the ability's duration, the current character gains 15% Hydro DMG Bonus.",
        level: 2,
        character_id: '7ecfd035-1fa2-4a94-a868-a8257d544add',
      },
      {
        id: uuidv4(),
        name: 'Star of Tomorrow',
        unlock: 'Constellation Lv. 3',
        description:
          'Increases the Level of Shining Miracle by 3.\nMaximum upgrade level is 15.',
        level: 3,
        character_id: '7ecfd035-1fa2-4a94-a868-a8257d544add',
      },
      {
        id: uuidv4(),
        name: 'Attentiveness be My Power',
        unlock: 'Constellation Lv. 4',
        description:
          "Every enemy hit by Barbara's Charged Attack regenerates 1 Energy for her. A maximum of 5 energy can be regenerated in this manner with any one Charged Attack.",
        level: 4,
        character_id: '7ecfd035-1fa2-4a94-a868-a8257d544add',
      },
      {
        id: uuidv4(),
        name: 'The Purest Companionship',
        unlock: 'Constellation Lv. 5',
        description:
          'Increase the Level of Let the Show Begin by 3.\nMaximum upgrade level is 15.',
        level: 5,
        character_id: '7ecfd035-1fa2-4a94-a868-a8257d544add',
      },
      {
        id: uuidv4(),
        name: 'Dedicating Everything to You',
        unlock: 'Constellation Lv. 6',
        description:
          'When Barbara is not on the field, and the character in play falls:\nAutomatically revives this character.\nFully regenerates this characters HP by 100%.\nThis effect can only occur once every 15 mins.',
        level: 6,
        character_id: '7ecfd035-1fa2-4a94-a868-a8257d544add',
      },
    ]);
    //skills
    await knex('skills').del();
    await knex('skills').insert([
      {
        id: uuidv4(),
        name: 'Whisper of Water',
        unlock: 'Normal Attack',
        description:
          'Normal Attack\nPerform up to 4 water splashes attacks that deal Hydro DMG.\nCharged Attack\nConsumes a certain amount of Stamina to deal AoE Hydro DMG after a short casting time.\nPlunging Attack\nGathering the might of Hydro, Barbara plunges towards the ground from mid-air, damaging all enemies in her path. Deals AoE Hydro DMG upon impact with the ground.',
        character_id: '7ecfd035-1fa2-4a94-a868-a8257d544add',
      },
      {
        id: uuidv4(),
        name: 'Glorious Season',
        unlock: 'Unlocked at Ascension 1',
        description:
          "The Stamina Consumption of characters within Let the Show Begin's Melody Loop is reduced by 12%.",
        level: 1,
        character_id: '7ecfd035-1fa2-4a94-a868-a8257d544add',
      },
    ]);
  } catch (error) {
    console.error(error);
  }
};
