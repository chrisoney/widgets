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
        title: 'The Gods Are Bastards',
        description: `Evil is rising.  The world is rent by strife.  The gods have turned away from us.  In times past, heroes of sword and sorcery have always risen to turn back the tide of darkness…  But what will become of us all, now that swords are obsolete, sorcery is industrialized, and heroism itself is considered a relic of the past?
        The times are changing…`,
        link: 'https://tiraas.net/',
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
        title: 'A Practical Guide To Evil',
        description: `The Empire stands triumphant.
        For twenty years the Dread Empress has ruled over the lands that were once the Kingdom of Callow, but behind the scenes of this dawning golden age threats to the crown are rising. The nobles of the Wasteland, denied the power they crave, weave their plots behind pleasant smiles. In the north the Forever King eyes the ever-expanding borders of the Empire and ponders war. The greatest danger lies to the west, where the First Prince of Procer has finally claimed her throne: her people sundered, she wonders if a crusade might not be the way to secure her reign. Yet none of this matters, for in the heart of the conquered lands the most dangerous man alive sat across an orphan girl and offered her a knife.
        Her name is Catherine Foundling, and she has a plan.`,
        link: 'https://practicalguidetoevil.wordpress.com/',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Defiance of the Fall',
        description: `As Zac was alone in the middle of the forest the world changed. The whole planet was introduced to the so-called multi-verse by an unfeeling System or God. A universe where all races and civilzations fought for power and dominion. 
        Seemingly forgotten by the System, Zac found himself stuck in the wilderness surrounded by deadly beasts. Alone, lost and without answers, he must find the means to survive and get stronger in this new cut-throat reality. `,
        link: 'https://www.royalroad.com/fiction/24709/defiance-of-the-fall',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Delve',
        description: `Delve is an isekai litrpg that follows an average guy who just happened to wake up in a forest one day. He wasn’t summoned to defeat the demon lord or to save the world or anything like that, at least as far as he can tell. The only creature there to greet him was a regular old squirrel.
        Soon enough, he meets other people, only to discover that he can’t speak the language, and that not everybody immediately trusts random pajama-wearing strangers they met in the middle of the wilderness. Things generally go downhill from there, at least until the blue boxes start appearing.
        Delve is a story about finding your way in a new, strange, and dangerous world. It’s about avoiding death, figuring out what the heck is going on, and trying to make some friends along the way. It’s not about getting home, so much as finding a new one.
        Did I mention that there will be math?`,
        link: 'https://www.royalroad.com/fiction/25225/delve',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Legend of Randidly Ghosthound',
        description: `As the system initializes, the world shifts. Geography is rearranged and mixed, and levels and stats are instituted across the globe. On that night, one young man was walking through an underground tunnel, his mind on the small problems of his easy life. Because of his location during the shift, he starts in a dungeon far above his level, with no knowledge or teacher, or Newbie Village to guide him. Without a class, he struggles simply to survive in this world changed by its new connection to the Nexus.
        But struggle he will, for he is Randidly Ghosthound, and this is only how his legend begins...`,
        link: 'https://www.royalroad.com/fiction/11209/the-legend-of-randidly-ghosthound',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'How to Avoid Death on a Daily Basis',
        description: `What if you were transported to a fantasy world with no special abilities, no OP weapons and no status screen to boost your stats? Never mind finding the dragon’s treasure or defeating the Demon Lord, you only need to worry about one thing—how to stay alive.
        A group of young Brits wake up in a strange, fantastical land with creatures from myth and legend. They are given archaic weapons they don't know how to use and told to do their best.
        Convinced it has to be some kind of virtual reality RPG, all the people summoned form parties and set off on their adventures, leaving behind the people nobody wants in their group.
        Story of my life, thinks Colin.`,
        link: 'https://www.royalroad.com/fiction/5288/how-to-avoid-death-on-a-daily-basis',
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
        title: 'Slime and Punishment',
        description: `Waking up in a white room, surrounded by bones wasn't how Chris planned on spending the rest of his life. He hadn't planned on ending up in an alien laboratory full of caged monsters either.
        Inducted into a world with strange blue screens that hint at a world of fantasy, magic, and danger, Chris must survive until the System whisks him away for the promised Tutorial. If help comes too late, Chris risks becoming something less than human, or something more...`,
        link: 'https://www.royalroad.com/fiction/28174/slime-and-punishment',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Deeper Darker',
        description: `Sci-fi dungeon crawler.
        Set in the far future when humanity has reached the stars and finds it is not the first to do so. Alien technology has been left behind by a long dead race. Ancient cities, abandoned starships, temples and fortified bunkers all contain artefacts and devices far in advance of what humans have been able to produce. Technology that feels more akin to magic, so powerful it can allow a single person to dominate a star system. But these relics of another time have been left well-defended and behind bewildering and impenetrable security measures. 
        There are those who are compatible with the alien technology, who can augment themselves to face the evermore extreme protocols in the depths of the alien ruins, and by doing so attain greater power. And there are those who just want to sell what they find to the highest bidder.
        The rewards are high, but you have to be prepared to go further and risk more to discover the greatest secrets of a civilisation that vanished long before the first human walked upright. Secrets that could irrevocably change humanity's future, or end it.`,
        link: 'https://www.royalroad.com/fiction/23290/deeper-darker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Inexorable Chaos',
        description: `What happens when a summoned hero completes their task given by those from up above? When a summoned hero returns back to earth after having saved the world, do they still get to live a normal life? 
        The answer is actually yes, they usually do. They get married to the one they love, have kids, and then death takes them away. 
        Of course, that is only usually. There are a select few who choose not to... think the same way. 
        Some of them find such a life boring, dull even. 
        They want to taste for adventure once more, feed their drive for exploration! Power, wealth, another life, they want it all. So, what do they do? Why, they do what Quasi does... 
        They sell themselves to the gods.`,
        link: 'https://www.royalroad.com/fiction/22546/inexorable-chaos',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Undermind',
        description: `Saskia thought her life was finally getting back on track after the accident. Then she got trolled.
        Now she's up a tree the size of a planet, and all who meet her either run screaming or attack on sight. If everyone would just calm down and stop trying to kill her for one moment, she might get a chance to explain that this has all been a horrible misunderstanding.`,
        link: 'https://www.royalroad.com/fiction/22019/undermind',
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
      {
        title: 'Blue Core',
        description: `Dungeon: A place full of monsters, traps, treasure, and death. Those are the Great Dungeons, with unplumbed depths below the roots of the mountains.
        That's not for me.
        Dungeon: A place of rape, torture, and death, to control and corral enemies and slaves. These are the Red Cores, from which the mage-kings draw their power.
        That's also not for me.
        I don't like monsters. I don't want adventurers. I want to stay well away from enemies and slaves.
        Fortunately, there are alternatives...`,
        link: 'https://www.royalroad.com/fiction/25082/blue-core',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'There Is No Epic Loot Here, Only Puns',
        description: `She became a dungeon core.
        Everything pointed Delta to murdering her way to success. People were just mana farms, right?
        No, that was wrong. Delta refused. Then everything became odd.`,
        link: 'https://www.royalroad.com/fiction/15935/there-is-no-epic-loot-here-only-puns',
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
