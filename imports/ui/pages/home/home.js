import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';
import '../../components/listaMatricole/listaMatricole.js';

// Funzione richiamate alla creazione del Template App_home
Template.App_home.created = function(){
  console.log('Created the home template');
};

// Funzione richiamate al rendering del Template App_home
Template.App_home.rendered = function(){
  console.log('Render the home template');
};

// Funzione richiamate alla distruzione del Template App_home
Template.App_home.destroyed = function(){
  console.log('Destroyed the home template');
};

// Definizione delle funzioni "helpers"
Template.App_home.helpers({
  exampleHelper: function(){
    return new Spacebars.SafeString('This text came from a helper with some <strong>HTML</strong>.');
  }
});
