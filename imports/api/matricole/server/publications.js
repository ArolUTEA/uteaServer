// All matricole-related publications

import { Meteor } from 'meteor/meteor';
import { Matricole } from '../matricole.js';

Meteor.publish('matricole.all', function () {
  return Matricole.find();
});
