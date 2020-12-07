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
        book:'0',
        chapter:'',
        userId: 1,
        storyId: ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    */
    return queryInterface.bulkInsert('Subscriptions', [
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
        chapter: '340',
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
        chapter: '50',
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

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Subscriptions', null, {});
  }
};
