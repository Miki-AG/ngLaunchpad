angular.module('ngMApp')
  .directive('accordion', function() {
    return {
      template:
        '<ul class="accordion" ng-controller="AccordionCtrl">' +
          '<li ng-repeat="choice in menuChoice" class="parent-list-item">' +
            '<menu-toggle choice="choice"></menu-toggle>' +
          '</li>' +
        '</ul>'
    };
  })
  .controller('AccordionCtrl', function($scope, $http) {
    $http.get('/ng/lib/Accordion/data.json').success(function (data){
      $scope.menuChoice = data;
    });
  })
  .directive('menuToggle', function() {
    return {
      restrict: 'E',
      scope: {
        openChoice: '=',
        choice: '='
      },
      templateUrl: '/ng/lib/Accordion/toggle.tpl.html',
      link: function($scope, $element) {
        var controller = $element.parent().controller();

        $scope.isSelected = function() {
          if (controller.selectedChoice == null) {
            return false;
          } else {
            return controller.selectedChoice.name === this.choice.name;
          }
        };

        $scope.isOpen = function() {
          if (controller.openChoice == null) {
            return false;
          } else {
            return controller.openChoice.name === this.choice.name;
          }
        };
        $scope.toggle = function() {
          if (this.choice.subChoices) {
            if ($scope.isOpen()) {
              controller.openChoice = null;
            } else {
              controller.openChoice = this.choice;
              console.log(controller.openChoice.name);
            }
          } else {
            controller.selectedChoice = this.choice;
            controller.openChoice = null;
            controller.selectedSubchoice = null;
          }
        };

        var parentNode = $element[0].parentNode.parentNode.parentNode;
        if (parentNode.classList.contains('parent-list-item')) {
          var heading = parentNode.querySelector('h2');
          $element[0].firstChild.setAttribute('aria-describedby', heading.id);
        }
      }
    };
  })
  .directive('menuLink', function() {
    return {
      restrict: 'E',
      scope: {
        openedSection: '=',
        subchoice: '='
      },
      templateUrl: '/ng/lib/Accordion/link.tpl.html',
      link: function($scope, $element) {
        var controller = $element.parent().controller();

        $scope.isSelected = function() {
          if (controller.selectedSubchoice == null) {
            return false;
          } else {
            return controller.selectedSubchoice.name === this.subchoice.name;
          }
        };

        $scope.focusSection = function() {
          if (!$scope.isSelected()) {
            controller.selectedSubchoice = this.subchoice;
            controller.selectedChoice = null;
          }
          console.log(controller.selectedSubchoice.name);
          //controller.setTemplate(controller.selectedSubchoice);
          // set flag to be used later when
          // $locationChangeSuccess calls openPage()
          controller.autoFocusContent = true;
        };
      }
    };
  });