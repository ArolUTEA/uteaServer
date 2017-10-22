// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Matricole } from '../../api/matricole/matricole.js'

Meteor.startup(() => {
  // if the Matricole collection is empty
  if (Matricole.find().count() === 0) {
    const data = [
      {
        matricola: '12345',
        modello: 'Euro PK',
        cliente: 'Piripicchio Water Company',
        createdAt: new Date(),
      },
      {
        matricola: 'B2345',
        modello: 'Eagle VA',
        cliente: 'Francois Vineyard',
        createdAt: new Date(),
      },
      {
        matricola: '34512',
        modello: 'Quasar',
        cliente: 'John Doe Universal Beverage',
        createdAt: new Date(),
      },
      {
        matricola: '23451',
        modello: 'Labomac',
        cliente: 'Australian Cangaroo University',
        createdAt: new Date(),
      },
    ];
    data.forEach(matricola => Matricole.insert(matricola));
  }

  // if the Links collection is empty
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }
});
