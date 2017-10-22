// Tests for the behavior of the links collection
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Matricole } from './matricole.js';

if (Meteor.isServer) {
  describe('matricole collection', function () {
    it('insert correctly', function () {
      const matrId = Matricole.insert({
        matricola: 'xxxxx',
        modello: 'Euro PK',
        cliente: 'Cliente con il suo Nome',
      });
      const added = Matricole.find({ _id: matrId });
      const collectionName = added._getCollectionName();
      const count = added.count();

      assert.equal(collectionName, 'matricole');
      assert.equal(count, 1);
    });
  });
}
