// Tests for links methods
//
// https://guide.meteor.com/testing.html

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { Matricole } from './matricole.js';
import './methods.js';

if (Meteor.isServer) {
  describe('matricole methods', function () {
    beforeEach(function () {
      Matricole.remove({});
    });

    it('can add a new matricola', function () {
      const addMatricola = Meteor.server.method_handlers['matricole.insert'];

      addMatricola.apply({}, ['xxxxx', 'Euro PK', 'Nome del Cliente']);

      assert.equal(MAtricole.find().count(), 1);
    });
  });
}
