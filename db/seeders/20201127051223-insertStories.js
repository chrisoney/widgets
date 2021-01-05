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
        title: '',
        description: ``,
        link: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    */
    return queryInterface.bulkInsert('Stories', [
      {
        title: 'The Gods Are Crazy',
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
        title: 'Endless Chaos',
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
        title: 'Dungeon Core',
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
      {
        title: 'Brian the Bard',
        description: `Brian is miserable.
        Most of his friends and fellow gamers have long ago moved away, leaving him stuck in a dreary life lamenting the loss of his favorite past time. And so he simply plods along with not much hope for escapism. With nowhere else to turn he finally breaks down and commits to try out some Online Gaming.
        Now, sucked into a fantasy world he will have to call upon all his GameMaster and Player experience not only to survive, but to become the hero, and ladies man, he has only played in his imagination.`,
        link: 'https://www.royalroad.com/fiction/15521/brian-the-drow-a-worldshapers-realmbreakers-litrpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Azarinth Healer',
        description: `A new world with nearly unlimited possibilities. A status, classes, magic and monsters. Sounds good? Well, for Ilea it didn't come quite as expected as for some other protagonists, nor was there a king or god to welcome her.
        The grand quest? Well, she might figure that out someday but for now, a new world with new food is prize enough. Her fists at the ready, she's prepared to punch and get punched, however long it takes and however many limbs she might have to regrow.
        A story I've started writing now quite a while ago. Transported to another world, somewhat standard fantasy setting with my beginner attempts to make it dark but funny. There are Litrpg elements here but I do hope it's not too heavy and annoying. The fights should be interesting and aren't just numbers vs numbers.`,
        link: 'https://www.royalroad.com/fiction/16946/azarinth-healer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Evil Overlord: The Makening',
        description: `If evil was easy, everybody would be doing it, and there would be more Dark Lords running around than you could shake a stick at. But the road to Utter Domination isn't easy, smooth or straight, as the boy who will one day become Gar the Pitiless will discover.`,
        link: 'https://www.royalroad.com/fiction/29540/evil-overlord-the-makening',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Savage Divinity',
        description: `A modern man finds himself reincarnated in the body of a young slave with no skills and quickly fading memories. Follow his journey to find normalcy while living in a savage world, filled with myth and legends, monsters and Demons. In a land where the strong rule, the weak serve, and bloodshed is a way of life, peace is a luxury few can afford.`,
        link: 'https://www.royalroad.com/fiction/5701/savage-divinity',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Wake of the Ravager',
        description: `On the world of Marconen, your first Break determines the trajectory of your life. Calvin chose magic. Without proper schooling or a mentor, the boy is dragged by the whims of fate across the face of the planet, blending together different schools of magic and powerful abilities to create something new.
        But there's a deeper secret behind his success. Why was he born an exile from his country? Why is his System so strange, and why does it keep talking to him?
        And as the march of time continues, something evil grows in power across the ocean.`,
        link: 'https://www.royalroad.com/fiction/25878/wake-of-the-ravager',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Humble Life of a Skill Trainer',
        description: `On the world of Marconen, your first Break determines the trajectory of your life. Calvin chose magic. Without proper schooling or a mentor, the boy is dragged by the whims of fate across the face of the planet, blending together different schools of magic and powerful abilities to create something new.
        But there's a deeper secret behind his success. Why was he born an exile from his country? Why is his System so strange, and why does it keep talking to him?
        And as the march of time continues, something evil grows in power across the ocean.`,
        link: 'https://www.royalroad.com/fiction/25878/wake-of-the-ravager',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ultimate Power: The Arcane Path',
        description: ` A college student was returning home after studying abroad for several years when the end of the world happened. A dragon appeared out of nowhere and attacked the plane he was in, thanks to an incredible amount of luck and his quick-thinking, he managed to survive the plane crash only to get stuck on a tropical island.
        A weird system took over the world and brought monsters to Earth. While nations collapsed and the world as a whole was being destroyed by ridiculous monsters, Leon was stuck in a godforsaken island with no chances of being rescued. What will happen to him? How will the world change while he is away? Will he even manage to return?`,
        link: 'https://www.royalroad.com/fiction/32458/unlimited-power-the-arcane-path',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Menocht Loop',
        description: `Ian Dunai entered a time loop filled with contagion and captives over three years ago. It turned him into a master of decemancy with domain over dead matter, but he still hasn't found a way to escape.
        Little does he know, he's just been stuck on layer one.`,
        link: 'https://www.royalroad.com/fiction/31514/the-menocht-loop',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Chrysalis',
        description: `Anthony has been reborn! Placed into the remarkable game-like world of Pangera.
        However, something seems a little off. What's with these skills? Bite? Dig?
        Wait....
        I've been reborn as a WHAT?!
        Follow Anthony as he attempts to adjust to his new life, to survive and grow in his new Dungeon home!`,
        link: 'https://www.royalroad.com/fiction/22518/chrysalis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Castle Kingside',
        description: `A puzzling encounter leaves Dimitry a beggar with a strange emblem on his wrist. Around him, the people suffer as ruthless organizations, opportunistic nobles, and an overly pious church vie for power in a land under constant siege by some unknown threat. He quickly learns the difficulty of life in this new world.
        Even upon acclimating to a ruthless society and finding his footing in the unsavory lands, Dimitry discovers that havens don't remain safe for long. He will have to manipulate limited resources and integrate modern scientific understanding with obscure magics to ensure the survival of a crumbling city.
        Can a displaced surgeon become the leader a struggling people need him to be?`,
        link: 'https://www.royalroad.com/fiction/27456/castle-kingside',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'This Quest Is Bullshit',
        description: `The Questing Stones have come to Nowherested, and Evelia Greene is finally ready to receive her life's quest.  Perhaps she'll be a great warrior, or a wealthy merchant, or a brilliant mage.  Perhaps her quest is simply to live a quiet life, constantly honing a craft to the heights of perfection.  
        Or perhaps the Questing Stones will grant her the legendary mission of popping over to the next village to pick up a loaf of bread.  
        Either way, adventure is out there, and Eve is determined to have one.  `,
        link: 'https://www.royalroad.com/fiction/33801/this-quest-is-bullshit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Just A Bystander',
        description: `Everyone wants to believe they are the hero of their own story. But in a world where prophecies are real, what happens if you're not the Chosen One?
        A budding arcanist named Caden enrols in the Academy, entering the same cohort as one of the legendary Chosen Ones, and finds himself caught in a tangle of fate that threatens to unravel the entire Empire. `,
        link: 'https://www.royalroad.com/fiction/32123/just-a-bystander',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Artificial Stupidity',
        description: `Born to die and be born again, Gell, the Jellyfae must discover her strange connection to the horrible monsters called humans, that speak with words she understands, but seem to want nothing but her death. Driven by a desire for safety and freedom, she ventures forth to Tread the Sky, and finds more worlds than one.`,
        link: 'https://www.royalroad.com/fiction/34030/artificial-jelly',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Gilded Hero',
        description: `To be summoned to another world, arriving in plane of existence filled with magic and potential! Already, you've been given the great privilege of becoming a [Hero] and the honored task of defeating the demon king! Some people might call that the opportunity of a lifetime!
        With the chance to learn to become a master of the sword, to grow more powerful than anyone on Earth could ever dream, what's not to love about being a hero? It's just like the King said: this is destiny calling! This is what you were born to become!
        Or... not.`,
        link: 'https://www.royalroad.com/fiction/29286/the-gilded-hero',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Stranger Than Fiction',
        description: `Faith is like ice-cream. It comes in all flavors. Greek, Norse, Sumerian, Christian— just name it and it's there. Adventures, on the other hand, are like credit cards. The first taste is free, but the price only goes up from there. Family heirlooms, now those are true evil. You get burdened with them for sentimental reasons even if they’re icky. 
        For Lukas Aguilar, it was a pendant. A small, weird metal nib that, while irritating, seemed harmless. Such convictions are put to test when a ruined goddess stretches her hands from beyond the Sands of Time and grasps his fate, blurring the line between fact and fiction. Now torn away from his former life on Earth, Lukas finds himself trapped in an underground cavern with no escape in sight and hundreds of questions...
        "Am I still alive? What is this place? Why am I here?"`,
        link: 'https://www.royalroad.com/fiction/37283/stranger-than-fiction',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Seaborn',
        description: `Domenic is a sailor who just wants a life at sea. A brewing war between nations turn the already dangerous seas into something perilous. Domenic is forced into an untenable position, one he escapes with his life – though there is a greater cost he’ll have to pay after his deal with the devil.
        Join Domenic as he explores the meaning and cost of both servitude and freedom!`,
        link: 'https://www.royalroad.com/fiction/30131/seaborn',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fantasy Science',
        description: `I loved Biology - always have, and always will. Unfortunately for me, years of fruitless research whittled away what little joy I had left in what I did. Escapism came in the form of reading isekai works, where the stresses of real life seemed so far away.
        Luckily, I was summoned to a fantasy world of magic, dragons, and other mythical beasts. I didn't even need to deal with the Demon Lord threat, since it seemed that my summoning was a mistake, and all they needed was the Hero who was coincidentally summoned together with me! There was no revenge subplot, no hidden trap directed against me, and they even paid me compensation for their mistake. At long last, I could finally do what I ever wanted to do - experiment for the fun of it!
        With my new class as a [Biologist], none of this fantasy world's mysteries will be left untouched. Even if the Demon Lord himself comes knocking, nothing will stop me from researching every nook and cranny there is to discover of the magical biology of this world!`,
        link: 'https://www.royalroad.com/fiction/33378/i-became-a-biologist-in-a-fantasy-world',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Loki's Downfall",
        description: `Earth is in turmoil. Fiction of travel to other worlds through the use of magic take on airs of prophecy as youngsters all around the world disappear. Amidst this turmoil, one New Yorker is caught in a traffic accident and chosen by Loki to travel to another world. The god's offer was not a fair one.
        But they came not as the Trickster's champion. Their purpose, a sinister one. One that will earn them the enmity of the world. A Heroic destiny is not in their future.
        Their only ally is the impartial and pervasive System. Unable to be purged, they came to stay.
        Thrown in a barbaric world where life is a dime a dozen, the intruder tries to survive and escape the wrath of the native deities. All the while burdened by divine curses imposed upon them by Loki.
        The silver lining is that they can come back. Again and again. Only to restart the chase.`,
        link: 'https://www.royalroad.com/fiction/34323/in-lokis-honor-rough-draft',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'A Journey of Black and Red',
        description: `Where am I? What is this! I... I don't remember anything. I am in chains? Why am I in chains?! And why am I so very...
        Thirsty.
        
        This is a story of vampires as I believe they should be, with their strengths and weaknesses, with their remnants of humanity and the beast inside.`,
        link: 'https://www.royalroad.com/fiction/26675/a-journey-of-black-and-red',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Leaves of Terranthir',
        description: `Leaves of Terranthir is a gamelit blend of ARPG, action, fantasy, and slice of life.
        It's inspired in part by some of my favourite games, borrowing in themes, sense of exploration, and aesthetics from the Soulsborne and soulslike genre, mixed heavily with arpg itemization from Diablo/PoE style games.
        While many may remember their Soulslike experiences as nothing more than suffering, I personally loved the sense of progression, to prevail over challenges and monsters that seemed impossible to defeat at first.
        If any of that seems interesting to you, do check out the first chapter and let me know what you think.
        Cheers, and thanks for reading.`,
        link: 'https://www.royalroad.com/fiction/35885/leaves-of-terranthir',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Onward to Providence',
        description: `Pylo was a woman of trade and travel!
        She had set out for a life of adventure and exchange with strange new life. She would make deals and exchanges with new fools and new civilizations. She would boldly swindle like no one had swindled before.`,
        link: 'https://www.royalroad.com/fiction/34353/onward-to-providence',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Melas',
        description: `A young woman finds herself dead and is given the chance to reincarnate in another world with cheat-like magic powers. She accepts, only to find that this world treats magic users the same way hers did— by hunting them down for heresy.`,
        link: 'https://www.royalroad.com/fiction/34798/melas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Perfect Run',
        description: `Ryan "Quicksave" Romano is an eccentric adventurer with a strange power: he can create a save-point in time and redo his life whenever he dies. Arriving in New Rome, the glitzy capital of sin of a rebuilding Europe, he finds the city torn between mega-corporations, sponsored heroes, superpowered criminals, and true monsters. It's a time of chaos, where potions can grant the power to rule the world and dangers lurk everywhere. 
        Ryan only sees different routes; and from Hero to Villain, he has to try them all. Only then will he achieve his perfect ending... no matter how many loops it takes.`,
        link: 'https://www.royalroad.com/fiction/36735/the-perfect-run',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Apocalypse: Generic System',
        description: `Jeb Trapper tried to kill himself. The gun jammed.
        Two months later the vet is participating in underground trials of ecstacy to treat his PTSD.
        Everything seemed to be going great until...
        
         >>>The System has Been Installed<<<
        
        Now he's got to choose the difficulty of his tutorial.`,
        link: 'https://www.royalroad.com/fiction/35669/apocalypse-generic-system',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Prophecy Approved Companion',
        description: `Qube is an NPC in an AI-driven VR-RPG who avoids her scripted death and blithely continues following the Player, trying to make sense of the normalised nonsense of Fantasy RPGs and accidentally glitching out the world in stranger and stranger ways as she seeks to be the very best Childhood Companion ever.
        It’s a loving parody of old school RPGs, high fantasy, and every gamer who has ever thought “what happens if I do this...”`,
        link: 'https://www.royalroad.com/fiction/35549/prophecy-approved-companion',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Primal Hunter',
        description: `On just another normal Monday, the world changed. The universe had reached a threshold humanity didn’t even know existed, and it was time to finally be integrated into the vast multiverse. A world where power is the only thing that one can truly rely on.
        Jake, a seemingly average office worker, finds himself thrust into this new world. Into a tutorial filled with dangers and opportunities. In a world that should breed fear and concern, an environment that makes his fellow coworkers falter, Jake instead finds himself thriving.
        Perhaps… Jake was born for this kind of world, to begin with.`,
        link: 'https://www.royalroad.com/fiction/36049/the-primal-hunter',
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
