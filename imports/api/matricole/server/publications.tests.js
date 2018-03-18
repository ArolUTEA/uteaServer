// Tests for the matricole publications
//
// https://guide.meteor.com/testing.html

import { assert } from 'meteor/practicalmeteor:chai';
import { Matricole } from '../matricole.js';
import { PublicationCollector } from 'meteor/johanbrook:publication-collector';
import './publications.js';

describe('matricole publications', function () {
  beforeEach(function () {
    Matricole.remove({});
    Matricole.insert({
      matricola: 'xxxxx',
      modello: 'Euro PK',
      cliente: 'Nome del Cliente',
    });
  });

  describe('matricole.all', function () {
    it('sends all matricole', function (done) {
      const collector = new PublicationCollector();
      collector.collect('matricole.all', (collections) => {
        assert.equal(collections.matricole.length, 1);
        done();
      });
    });
  });
});
