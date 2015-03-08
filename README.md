# Ember-devise-auth-demo

Ember.js demonstration of user registration and session management between Ember.js and Rails. 
Thanks to [Simple Labs](http://simplabs.com/) for the [Ember Simple Auth](https://github.com/simplabs/ember-simple-auth) library with Devise support for authentication, authorization, and session management. 

This project is written to work with [Devise Ember Auth Demo](https://github.com/michaeldeitcher/devise_ember_auth_demo). Please clone and run this project locally to test. I hope to host a test server soon so you don't have to do this.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone git@github.com:michaeldeitcher/ember_devise_auth_demo.git` this repository
* `cd ember_devise_auth_demo`
* `npm install`
* `bower install`

## Running / Development without local Rails server
* `ember s --proxy http://devise-ember-auth-demo.herokuapp.com` 
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running / Development with local Rails server
* Install and run Rails server on port 3000: [Devise Ember Auth Demo](https://github.com/michaeldeitcher/devise_ember_auth_demo)
* `ember server --proxy http://localhost:3000`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

