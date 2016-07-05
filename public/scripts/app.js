/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
 .module('portfolio', ['ui.bootstrap'])
 .controller('ProjectsIndexController', ProjectsIndexController);

ProjectsIndexController.$inject = ['$http'];

function ProjectsIndexController ( $http ) {

  var vm = this;

  vm.newText = [{}];
  vm.randomizedText = [{}];


  // vm.myProjects = [{
  //
  // }];
  // vm.currentProject = [{
  //   title: 'Night Out',
  //   short_description: 'This site allows you to make plans, but crowdsource out the details to your friends.',
  //   long_description: "A single-page app I developed which lets Users set up a general plan, and crowdsource out the details to their friends.  Users can write in options of what places they'd like to go, and then vote on those choices.",
  //   github_link: 'https://github.com/mradambeck/project-01',
  //   live_site_link: 'https://boiling-coast-72361.herokuapp.com/',
  //   image: 'images/portfolio/mac-mocks/nightout-mac-mock.jpg',
  //   thumbnail: 'images/portfolio/nightout-thumbnail.jpg',
  //   technologies: ['HTML','CSS','Bootstrap','Javascript','jQuery','Node','MongoDB'],
  //   active: true
  // }];
  //
  //
  // $http({
  //   method: 'GET',
  //   url: '/api/projects'
  // }).then(function successCallback(response) {
  //   vm.myProjects = response.data;
  //   console.log('getting data: ');
  //   console.log(response.data);
  // }, function errorCallback(response) {
  //   console.log('There was an error getting the data', response);
  // });
  //
  // vm.showProject = function(project) {
  //   $http({
  //     method: 'GET',
  //     url: ('api/projects/' + project._id)
  //   }).then(function showOneProject(response) {
  //     vm.currentProject[0] = response.data;
  //   });
  // };
  //
  // vm.usedTechnologies = {
  //   frontend: [ 'Javascript', 'ES6', 'Angular', 'jQuery', 'Bootstrap', 'SASS', 'HTML', 'CSS' ],
  //   backend: [ 'Ruby', 'Node', 'Rails', 'Express' ],
  //   databases: [ 'MongoDB', 'PostgreSQL' ]
  // };
}
