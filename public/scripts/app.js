/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
 .module('word-randomizer', ['ui.bootstrap'])
 .controller('TextsIndexController', TextsIndexController);

TextsIndexController.$inject = ['$http'];

function TextsIndexController ( $http ) {

  var vm = this;

  vm.newText = {};
  vm.newText = {
    text: ""
  };
  vm.randomizedText = {};
  vm.randomizedText = {
    text: ""
  };


  vm.shuffleText = function() {
    console.log(vm.newText);
    $http({
      method: 'POST',
      url: ('api/texts/'),
      data: vm.newText
    }).then(function showOneText(response) {
      console.log(response);
      vm.randomizedText.text = response.data;
    }, function error(response) {
      console.error(response);
    });
  };

}
