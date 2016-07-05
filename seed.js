// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require("./models");

var projectList =[];
projectList.push({
  title: 'Bleep / Bloop',
  short_description: 'Musical synthesizer / sequencer built in Javascript.',
  long_description: "This is a music sequencer built using Javascript's built-in audio functionality. Oscillators are built completely using Javascript, and timing is controlled using Javascript's setInterval(). The synth and all of the components are built out as ES6 Classes, to allow scalability and ability to easily interchange portions of the code. I really enjoyed working on this project as it presented a number of interesting problems that were unique and which I don't normally get to approach!",
  github_link: 'https://github.com/mradambeck/javascript-step-sequencer',
  live_site_link: 'https://stepsequencer.herokuapp.com/',
  image: 'images/portfolio/mac-mocks/bleepbloop-mac-mock.jpg',
  thumbnail: 'images/portfolio/bleepbloop-thumbnail.jpg',
  technologies: ['Javascript','ES6','Node','Angular','SASS','jQuery','Bootstrap','MongoDB','MEAN Stack'],
  order: 4,
  active: true
});

projectList.push({
  title: "What's the Fuss?!",
  short_description: 'App allowing you to report and see incidents in your surrounding area.',
  long_description: 'WTF is a group project I contributed to, which enables users to communicate sudden problems, emergencies or detours while walking or cycling. A user can post a new event or "thank" another user for their heads-up. Users, as well as incidents are fully CRUDable. I contributed to the design and much of the Front-End, setup the the map and geolocation functionality, implemented the likes, validations, defaults, as well as the user and event models and controllers.',
  github_link: 'https://github.com/mradambeck/wtf_app',
  live_site_link: 'http://whatsthefuss.herokuapp.com',
  image: 'images/portfolio/mac-mocks/wtf-mac-mock.jpg',
  thumbnail: 'images/portfolio/wtf-thumbnail.jpg',
  technologies: ['Ruby on Rails','jQuery','SASS','Bootstrap','Ruby','HTML','Google Maps API'],
  order: 3,
  active: true
});

projectList.push({
  title: 'Vagabond',
  short_description: 'A travel app, allowing Users to share their favorite things about specific cities.',
  long_description: 'A project I worked on with two teammates, built on Ruby on Rails. A CRUD app employing RESTful routing that allows Users to leave information about their favorite cities. Includes Authorization and Authentication for Users. A fun feature to setup was soft delete, where instead of actually removing a User and their posts from the database, it hides them, so that if they decide to rejoin, those posts are added back in.',
  github_link: 'https://github.com/mradambeck/vagabond_app',
  live_site_link: 'https://whispering-fortress-13524.herokuapp.com/',
  image: 'images/portfolio/mac-mocks/vagabond-mac-mock.jpg',
  thumbnail: 'images/portfolio/vagabond-thumbnail.jpg',
  technologies: ['Ruby on Rails','SASS','Bootstrap','Ruby','bcrypt','Friendly_id'],
  order: 2,
  active: true
});

projectList.push({
  title: 'Night Out',
  short_description: 'This site allows you to make plans, but crowdsource out the details to your friends.',
  long_description: "A single-page app I developed which lets Users set up a general plan, and crowdsource out the details to their friends.  Users can write in options of what places they'd like to go, and then vote on those choices.",
  github_link: 'https://github.com/mradambeck/project-01',
  live_site_link: 'https://boiling-coast-72361.herokuapp.com/',
  image: 'images/portfolio/mac-mocks/nightout-mac-mock.jpg',
  thumbnail: 'images/portfolio/nightout-thumbnail.jpg',
  technologies: ['HTML','CSS','Bootstrap','Javascript','jQuery','Node','MongoDB'],
  order: 1,
  active: true
});


db.Project.remove({}, function(err, projects){

  db.Project.create(projectList, function(err, projects){
    if (err) { return console.log('ERROR', err); }
    console.log("all projects:", projects);
    console.log("created", projects.length, "projects");
    process.exit();
  });

});
