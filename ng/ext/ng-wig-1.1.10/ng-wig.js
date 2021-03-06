/**
 * version: 1.1.10
 */
angular.module('ngWig', ['ngwig-app-templates']);

angular.module('ngWig').directive('ngWig', function () {

      return {
        scope: {
          content: '=ngWig'
        },
        restrict: 'A',
        replace: true,
        //templateUrl: 'ng-wig/views/ng-wig.html',

        templateUrl: 'http://localhost:8080/static/ng/TextEditor/ng-wig.html',


        link: function (scope, element, attrs) {

          scope.originalHeight = element.outerHeight();
          scope.editMode = false;
          scope.autoexpand = !('autoexpand' in attrs) || attrs['autoexpand'] !== 'off';
          scope.cssPath = scope.cssPath ? scope.cssPath : 'css/ng-wig.css';

          scope.toggleEditMode = function() {
            scope.editMode = !scope.editMode;
          };

          scope.execCommand = function (command, options) {
            if(command ==='createlink'){
              options = prompt('Please enter the URL', 'http://');
            }
            scope.$emit('execCommand', {command: command, options: options});
          };

          scope.styles = [
            {name: 'Normal text', value: 'p'},
            {name: 'Header 1', value: 'h1'},
            {name: 'Header 2', value: 'h2'},
            {name: 'Header 3', value: 'h3'}
          ];

          scope.style = scope.styles[0];
        }
      }
    }
);


angular.module('ngWig').directive('ngWigEditable', function () {
      function init(scope, $element, attrs, ctrl) {
        var document = $element[0].ownerDocument;

        $element.attr('contenteditable', true);

        //model --> view
        ctrl.$render = function () {
          $element.html(ctrl.$viewValue || '');
        };

        //view --> model
        function viewToModel() {
          ctrl.$setViewValue($element.html());
          //to support old angular versions
          if(angular.version.minor < 3){
            scope.$apply();
          }

        }

        $element.bind('blur keyup change paste', viewToModel);

        scope.$on('execCommand', function (event, params) {
          $element[0].focus();

            var ieStyleTextSelection = document.selection,
              command = params.command,
              options = params.options;

          if (ieStyleTextSelection) {
            var textRange = ieStyleTextSelection.createRange();
          }

          document.execCommand(command, false, options);

          if (ieStyleTextSelection) {
            textRange.collapse(false);
            textRange.select();
          }

          viewToModel();
        });
      }

      return {
        restrict: 'A',
        require: 'ngModel',
        replace: true,
        link: init
      }
    }
);

/**
 * No box-sizing, such a shame
 *
 * 1.Calculate outer height
 * @param   bool    Include margin
 * @returns Number  Height in pixels
 *
 * 2. Set outer height
 * @param   Number          Height in pixels
 * @param   bool            Include margin
 * @returns angular.element Collection
 */
if (typeof angular.element.prototype.outerHeight !== 'function') {

angular.element.prototype.outerHeight = function() {
  function parsePixels(cssString) {
    if (cssString.slice(-2) === 'px') {
      return parseFloat(cssString.slice(0, -2));
    }
    return 0;
  }

  var includeMargin = false, height, $element = this.eq(0), element = $element[0];

  if (arguments[0] === true || arguments[0] === false || arguments[0] === undefined) {
    if (!$element.length) {
      return 0;
    }

    includeMargin = arguments[0] && true || false;

    if (element.outerHeight) {
      height = element.outerHeight;
    } else {
      height = element.offsetHeight;
    }
    if (includeMargin) {
      height += parsePixels($element.css('marginTop')) + parsePixels($element.css('marginBottom'));
    }
    return height;

  } else {
    if (!$element.length) {
      return this;
    }

    height = parseFloat(arguments[0]);

    includeMargin = arguments[1] && true || false;

    if (includeMargin) {
      height -= parsePixels($element.css('marginTop')) + parsePixels($element.css('marginBottom'));
    }

    height -= parsePixels($element.css('borderTopWidth')) + parsePixels($element.css('borderBottomWidth')) +
        parsePixels($element.css('paddingTop')) + parsePixels($element.css('paddingBottom'));

    $element.css('height', height + 'px');
    return this;
  }
};

}

angular.module('ngwig-app-templates', ['ng-wig/views/ng-wig.html']);

angular.module("ng-wig/views/ng-wig.html", []).run(["$templateCache", "$http", function($templateCache, $http) {
}]);
