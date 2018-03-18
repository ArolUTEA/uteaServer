// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Matricole } from './matricole.js';

Meteor.methods({
  'matricole.insert'(matricola, modello, cliente) {
    check(cliente, String);
    check(modello, String);
    check(matricola, String);

    return Matricole.insert({
      matricola,
      modello,
      cliente,
      createdAt: new Date(),
    });
  },
});
