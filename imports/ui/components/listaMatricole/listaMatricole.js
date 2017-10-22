import { Matricole } from '/imports/api/matricole/matricole.js';
import { Meteor } from 'meteor/meteor';
import './listaMatricole.html';

Template.listaMatricole.onCreated(function () {
  Meteor.subscribe('matricole.all');
});

Template.listaMatricole.helpers({
  matricole() {
    return Matricole.find({});
  },
});

Template.listaMatricole.events({
  'submit .info-matricola-add'(event) {
    event.preventDefault();

    const target = event.target;
    const matricola = target.matricola;
    const modello = target.modello;
    const cliente = target.cliente;

    Meteor.call('matricole.insert', matricola.value, modello.value, cliente.value,  (error) => {
      if (error) {
        alert(error.error);
      } else {
        matricola.value = '';
        modello.value = '';
        cliente.value = '';
      }
    });
  },
});
