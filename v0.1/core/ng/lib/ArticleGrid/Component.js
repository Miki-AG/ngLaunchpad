angular.module('ngMApp')
  .directive('articleGrid', [function() {
    return {
      restrict: "E",
      templateUrl: '/build/ng/lib/ArticleGrid/article.grid.tpl.html',
      controller : 'ArticleGridCtrl',
      scope: {
          sidebarActive: "="
      }
    }
  }])
  .controller('ArticleGridCtrl', function($scope) {

    this.tiles = buildGridModel({
      icon: "avatar:svg-",
      title: "Svg-",
      background: ""
    });

    function buildGridModel(tileTmpl) {
      var it, results = [];

      for (var j = 0; j < 11; j++) {

        it = angular.extend({}, tileTmpl);
        it.icon = it.icon + (j + 1);
        it.title = it.title + (j + 1);
        it.span = {
          row: 1,
          col: 1
        };

        switch (j + 1) {
          case 1:
            it.title = 'Amor real';
            it.background = "red";
            it.span.row = it.span.col = 2;
            it.image = 'https://i.ytimg.com/vi/8y0sr9b6iuE/mqdefault.jpg';

            break;

          case 2:
            it.title = 'Pasion';
            it.background = "green";
            it.image = 'https://i.ytimg.com/vi_webp/DUNFyMoy5tA/mqdefault.webp';
            break;
          case 3:
            it.title = 'Manana es para siempre';
            it.background = "darkBlue";
            it.image = 'https://i.ytimg.com/vi_webp/AfEo0QZSFaQ/mqdefault.webp';
            break;
          case 4:
            it.title = 'Alborada';
            it.image = 'https://i.ytimg.com/vi/334UyOUVutI/mqdefault.jpg';
            it.background = "blue";
            it.span.col = 2;
            break;

          case 5:
            it.title = 'La usurpadora';
            it.image = 'https://i.ytimg.com/vi_webp/m7SNYzjJYT0/mqdefault.webp';
            it.background = "yellow";
            it.span.row = it.span.col = 2;
            break;

          case 6:
            it.title = 'Esmeralda';
            it.background = "pink";
            it.image = 'https://i.ytimg.com/vi/U-VqLNtNGBA/mqdefault.jpg';
            break;
          case 7:
            it.title = 'Abrazame muy fuerte';
            it.background = "darkBlue";
            it.image = 'https://i.ytimg.com/vi_webp/Hdw6H5L3R4U/mqdefault.webp';
            break;
          case 8:
            it.title = 'Maria la del barrio';
            it.background = "purple";
            it.image = 'https://i.ytimg.com/vi/IA5jY9CVwX4/mqdefault.jpg';
            break;
          case 9:
            it.title = 'La hija del mariachi';
            it.background = "deepBlue";
            it.image = 'https://i.ytimg.com/vi_webp/cOPiF7PN_6o/mqdefault.webp';
            break;
          case 10:
            it.title = 'Pasion de gavilanes';
            it.background = "lightPurple";
            it.image = 'https://i.ytimg.com/vi_webp/j7thr3uvXCo/mqdefault.webp';
            break;
          case 11:
            it.title = 'Marimar';
            it.background = "yellow";
            it.image = 'https://i.ytimg.com/vi_webp/nYMLgiYOCwI/mqdefault.webp';

            break;
        }

        results.push(it);
      }
      return results;
    }
  })
