# Word Randomizer

Inspired by the [cut-up technique](https://en.wikipedia.org/wiki/Cut-up_technique), a friend of mine needed a word randomizer for writing lyrics. I figured it'd be a quick project and a fun way to save him some time.

### Prerequisites

- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`
- [SASS](http://sass-lang.com/) - To compile the SCSS to CSS

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `sass --watch public/styles/styles.scss:public/styles/styles.css`