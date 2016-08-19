# Word Randomizer

Inspired by the [cut-up technique](https://en.wikipedia.org/wiki/Cut-up_technique), a friend of mine needed a word randomizer for writing lyrics. I figured it'd be a quick and fun project, plus a way to save him some time.

### Prerequisites

- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [SASS](http://sass-lang.com/) - To compile the SCSS to CSS

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `sass --watch public/styles/styles.scss:public/styles/styles.css` to compile SCSS into CSS.

4. Run `nodemon` to serve the site.
