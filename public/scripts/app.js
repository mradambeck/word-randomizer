/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
 .module('word-randomizer', [])
 .controller('TextsIndexController', TextsIndexController)
 .config(['$compileProvider',
    function ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|tel|file|blob):/);
    }
  ]);

TextsIndexController.$inject = ['$http'];

function TextsIndexController ( $http ) {

  var vm = this;

  vm.newText = {};
  vm.newText = {
    text: "",
    lineBreaks: 'true'
  };
  vm.randomizedText = {};
  vm.randomizedText = {
    text: ""
  };



  vm.shuffleText = function() {
    // console.log(vm.newText);
    $http({
      method: 'POST',
      url: ('api/texts/'),
      data: vm.newText
    }).then(function showOneText(response) {
      newText = response.data;
      vm.randomizedText.text = newText;

    }, function error(response) {
      console.error(response);
    });
  };


}
