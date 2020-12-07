'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});

      {
        title: title,
        description: description,
        link: link,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    */
    return queryInterface.bulkInsert('Stories', [
      {
        title: 'The Wandering Inn',
        description: `An inn is a place to rest, a place to talk and share stories, or a place to find adventures, a starting ground for quests and legends.
        In this world, at least. To Erin Solstice, an inn seems like a medieval relic from the past. But here she is, running from Goblins and trying to survive in a world full of monsters and magic. She’d be more excited about all of this if everything wasn’t trying to kill her.
        But an inn is what she found, and so that’s what she becomes. An innkeeper who serves drinks to heroes and monsters–
        Actually, mostly monsters. But it’s a living, right?
        This is the story of the Wandering Inn.
        `,
        link: 'https://wanderinginn.com/',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'He Who Fights With Monsters',
        description: `Jason wakes up in a mysterious world of magic and monsters. He’ll face off against cannibals, cultists, wizards, monsters, and that’s just the first day. He’s going to need courage, he’s going to need wit and he’s going to need some magic powers of his own. But first, he’s going to need pants.
        Follow Jason as he makes a place for himself in a world that is strange, yet sometimes strangely familiar. He’ll meet crime lords and aristocrats, gods and monsters on his path from would-be victim to heroic adventurer. At least, he tries to be heroic. It’s hard to be good when all your powers are evil.`,
        link: 'https://www.royalroad.com/fiction/26294/he-who-fights-with-monsters',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Worth the Candle',
        description: `A teenager struggling after the death of his best friend finds himself in a fantasy world - one which seems to be an amalgamation of every Dungeons and Dragons campaign they ever played together. Now he's stuck trying to find the answers to why he's there and what this world is trying to say. The most terrifying answer might be that this world is an expression of the person he was back on Earth.`,
        link: 'https://www.royalroad.com/fiction/25137/worth-the-candle',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Dungeon Crawler Carl",
        description: `A man. His ex-girlfriend's cat. A sadistic game show unlike anything in the universe: a dungeon crawl where survival depends on killing your prey in the most entertaining way possible.
        In a flash, every human-erected construction on Earth—from Buckingham Palace to the tiniest of sheds—collapses in a heap, sinking into the ground.
        The buildings and all the people inside have all been atomized and transformed into the dungeon: an 18-level labyrinth filled with traps, monsters, and loot. A dungeon so enormous, it circles the entire globe.
        Only a few dare venture inside. But once you're in, you can't get out. And what's worse, each level has a time limit. You have but days to find a staircase to the next level down, or it's game over. In this game, it's not about your strength or your dexterity. It's about your followers, your views. Your clout. It's about building an audience and killing those goblins with style.
        You can't just survive here. You gotta survive big.
        You gotta fight with vigor, with excitement. You gotta make them stand up and cheer. And if you do have that "it" factor, you may just find yourself with a following. That's the only way to truly survive in this game—with the help of the loot boxes dropped upon you by the generous benefactors watching from across the galaxy.
        They call it Dungeon Crawler World. But for Carl, it's anything but a game.`,
        link: 'https://www.royalroad.com/fiction/29358/dungeon-crawler-carl-book-2-carls-doomsday-scenario',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "BeastBorne",
        description: `A new Founder Marked with otherworldly power. An epic quest to build a Sanctum settlement. A fabled class that wields monstrous magics.`,
        link: 'https://www.amazon.com/Beastborne-Founder-Portal-Fantasy-Chronicles-ebook/dp/B08BYZ1BGD',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
