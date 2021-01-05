const currentRecs = [
  {
    rating: 3,
    review: 'Long hiatuses, but a fun story overall',
    userId: 1, // Chris
    storyId: 1, // The Gods Are Bastards
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'Long time between chapters but the world building is top notch',
    userId: 1, // Chris
    storyId: 2, // Worth the Candle
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 5,
    review: 'Fantastic story, would always recommend.',
    userId: 1, // Chris
    storyId: 3, // The Wandering INn
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 5,
    review: 'One of my favorites',
    userId: 1, // Chris
    storyId: 4, // A Practical Guide to Evil
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'The writing is a bit verbose, but the story is interesting.',
    userId: 1, // Chris
    storyId: 5, // Defiance of the Fall
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 5,
    review: 'One of my favorite ongoing stories',
    userId: 1, // Chris
    storyId: 6, // Delve
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'The writer puts out a ton of great content, but the MC is kinda cringe.',
    userId: 1, // Chris
    storyId: 7, // The Legend of Randidly Ghosthound
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'Long hiatus but a really funny, dark story',
    userId: 1, // Chris
    storyId: 8, // How to Avoid Death on a Daily Basis
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 5,
    review: 'Fantastic worldbuilding even if the MC is annoying',
    userId: 1, // Chris
    storyId: 9, // He Who Fights With Monsters
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 3,
    review: 'Very long hiatus. Might be over',
    userId: 1, // Chris
    storyId: 10, // Slime & Punishment
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 5,
    review: `I don't really like space stories but the characters and worldbuilding more and make up for it not being my preference.`,
    userId: 1, // Chris
    storyId: 11, // Deeper Darker
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: `A ridiculous story that knows it's ridiculous`,
    userId: 1, // Chris
    storyId: 12, // Inexorable Chaos
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 0,
    review: `Really interesting worldbuilding. I can't wait until it starts up again`,
    userId: 1, // Chris
    storyId: 13, // Undermind
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 5,
    review: 'I put this on the backlog but I love this story.',
    userId: 1, // Chris
    storyId: 14, // Beastborne
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: `Some components are weird but I like the worldbuilding`,
    userId: 1, // Chris
    storyId: 15, // Blue Core
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: `Childish and fun`,
    userId: 1, // Chris
    storyId: 16, // There Is No Epic Loot Here, Only Puns
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 5,
    review: `I love the worldbuilding here and the characters are so much fun`,
    userId: 1, // Chris
    storyId: 17, // Dungeon Crawler Carl
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 3,
    review: `Some components are weird but I feel like the plot might be going somewhere cool. It's taking a while though.`,
    userId: 1, // Chris
    storyId: 18, // Brian the Drow
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'Overpowered MC but I think it addresses it rather well. I wish they would all stop smirking though.',
    userId: 1, // Chris
    storyId: 19, // Azarinth Healer
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 3,
    review: 'Very long hiatus but I have high hopes',
    userId: 1, // Chris
    storyId: 20, // Evil Overlord: The Makening
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'Hate the harem but love the plot',
    userId: 1, // Chris
    storyId: 21, // Savage Divinty
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 5,
    review: 'So much fun. One of my favorites',
    userId: 1, // Chris
    storyId: 22, // Wake of the Ravager
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'Rather slow but a very interesting take on how ',
    userId: 1, // Chris
    storyId: 23, // The Humble Life of a Skiller Trainer
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 1,
    review: 'Pretty cringe tbh.',
    userId: 1, // Chris
    storyId: 24, // Ultimate Power: The Arcane Path
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 3,
    review: 'Very slow but kind of interesting',
    userId: 1, // Chris
    storyId: 25, // The Menocht Loop
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'Fun but very short chapters',
    userId: 1, // Chris
    storyId: 26, // Chrysalis
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'I have high hopes for this one',
    userId: 1, // Chris
    storyId: 27, // Castle Kingside
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'Really fun story with some great humor',
    userId: 1, // Chris
    storyId: 28, // This Quest Is Bullshit
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'Very slow but an interesting take on magic',
    userId: 1, // Chris
    storyId: 29, // Just A Bystander
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'Childish but fun',
    userId: 1, // Chris
    storyId: 30, // Artificial Jelly
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'Dark but interesting. I hope it comes back soon.',
    userId: 1, // Chris
    storyId: 31, // The Gilded Hero
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 3,
    review: 'The rewrites will hopefully let the writing catch up with the idea',
    userId: 1, // Chris
    storyId: 32, // Stranger Than Fiction
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'Not my usual cup of tea but worth a read',
    userId: 1, // Chris
    storyId: 33, // Seaborn
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 3,
    review: 'Silly but fun. Is it still going, though?',
    userId: 1, // Chris
    storyId: 34, // I Became A [Biologist] In A Fantasy World
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 0,
    review: `This would be terrible if it wasn't relatively self aware`,
    userId: 1, // Chris
    storyId: 35, // In Loki's Honor
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 5,
    review: 'I hate vampires but absolutely love this story.',
    userId: 1, // Chris
    storyId: 36, // A Journey of Black and Red
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'Slow but worth the wait',
    userId: 1, // Chris
    storyId: 37, // Leaves of Terranthir
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 0,
    review: '',
    userId: 1, // Chris
    storyId: 38, // Onward to Providence
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 0,
    review: '',
    userId: 1, // Chris
    storyId: 39, // Melas
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 5,
    review: 'Really fun. This writer is hilarious',
    userId: 1, // Chris
    storyId: 40, // The Perfect Run
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 5,
    review: `Can't wait to see where this one goes`,
    userId: 1, // Chris
    storyId: 41, // Apocalypse: Generic System
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'A really fun take on gaming. Interested to see if the plot can keep going strong.',
    userId: 1, // Chris
    storyId: 42, // Prophecy Approved Companion
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    rating: 4,
    review: 'Nothing game-changing so far but I like the skill system',
    userId: 1, // Chris
    storyId: 43, // The Primal Hunter
    createdAt: new Date(),
    updatedAt: new Date()
  },
]

const currentSubs = [
  {
    book: '0',
    chapter: 'When the Student is Ready, part 1',
    userId: 1, // Chris
    storyId: 1, // The Gods Are Bastards
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: 'Food and Growth',
    userId: 1, // Chris
    storyId: 2, // Worth the Candle
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '7',
    chapter: 'Interlude – The Tribes of Izril',
    userId: 1, // Chris
    storyId: 3, // The Wandering INn
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: 'Rapt',
    userId: 1, // Chris
    storyId: 4, // A Practical Guide to Evil
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '497',
    userId: 1, // Chris
    storyId: 5, // Defiance of the Fall
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '124',
    userId: 1, // Chris
    storyId: 6, // Delve
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '1370',
    userId: 1, // Chris
    storyId: 7, // The Legend of Randidly Ghosthound
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '436',
    userId: 1, // Chris
    storyId: 8, // How to Avoid Death on a Daily Basis
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '341',
    userId: 1, // Chris
    storyId: 9, // He Who Fights With Monsters
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '64',
    userId: 1, // Chris
    storyId: 10, // Slime & Punishment
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '3',
    chapter: '10',
    userId: 1, // Chris
    storyId: 11, // Deeper Darker
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '145',
    userId: 1, // Chris
    storyId: 12, // Inexorable Chaos
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '4',
    chapter: '24',
    userId: 1, // Chris
    storyId: 13, // Undermind
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '3',
    chapter: '9',
    userId: 1, // Chris
    storyId: 14, // Beastborne
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: 'Day 180 - Blue',
    userId: 1, // Chris
    storyId: 15, // Blue Core
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '132',
    userId: 1, // Chris
    storyId: 16, // There Is No Epic Loot Here, Only Puns
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '113',
    userId: 1, // Chris
    storyId: 17, // Dungeon Crawler Carl
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '68',
    userId: 1, // Chris
    storyId: 18, // Brian the Drow
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '588',
    userId: 1, // Chris
    storyId: 19, // Azarinth Healer
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '20',
    userId: 1, // Chris
    storyId: 20, // Evil Overlord: The Makening
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '658',
    userId: 1, // Chris
    storyId: 21, // Savage Divinty
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '233',
    userId: 1, // Chris
    storyId: 22, // Wake of the Ravager
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '75',
    userId: 1, // Chris
    storyId: 23, // The Humble Life of a Skiller Trainer
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '156',
    userId: 1, // Chris
    storyId: 24, // Ultimate Power: The Arcane Path
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '105',
    userId: 1, // Chris
    storyId: 25, // The Menocht Loop
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '644',
    userId: 1, // Chris
    storyId: 26, // Chrysalis
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '95',
    userId: 1, // Chris
    storyId: 27, // Castle Kingside
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '53',
    userId: 1, // Chris
    storyId: 28, // This Quest Is Bullshit
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '0',
    chapter: '56',
    userId: 1, // Chris
    storyId: 29, // Just A Bystander
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '1',
    chapter: 'epilogue',
    userId: 1, // Chris
    storyId: 30, // Artificial Jelly
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book: '2',
    chapter: '1',
    userId: 1, // Chris
    storyId: 31, // The Gilded Hero
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book:'0',
    chapter:'0',
    userId: 1, // Chris
    storyId: 32, // Stranger Than Fiction
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book:'0',
    chapter:'38',
    userId: 1, // Chris
    storyId: 33, // Seaborn
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book:'0',
    chapter:'Selective Attention (2)',
    userId: 1, // Chris
    storyId: 34, // I Became A [Biologist] In A Fantasy World
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book:'26',
    chapter:'14',
    userId: 1, // Chris
    storyId: 35, // In Loki's Honor
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book:'0',
    chapter:'88',
    userId: 1, // Chris
    storyId: 36, // A Journey of Black and Red
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book:'0',
    chapter:'18',
    userId: 1, // Chris
    storyId: 37, // Leaves of Terranthir
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book:'0',
    chapter:'Loading 0.0',
    userId: 1, // Chris
    storyId: 38, // Onward to Providence
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book:'0',
    chapter:'24',
    userId: 1, // Chris
    storyId: 39, // Melas
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book:'0',
    chapter:'23',
    userId: 1, // Chris
    storyId: 40, // The Perfect Run
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book:'0',
    chapter:'23',
    userId: 1, // Chris
    storyId: 41, // Apocalypse: Generic System
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book:'0',
    chapter:'32',
    userId: 1, // Chris
    storyId: 42, // Prophecy Approved Companion
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    book:'0',
    chapter:'74',
    userId: 1, // Chris
    storyId: 43, // The Primal Hunter
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

currentFollows = [
  {
    followerId: 1,
    followingId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 1,
    followingId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    followerId: 1,
    followingId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

module.exports = { currentRecs, currentSubs, currentFollows };