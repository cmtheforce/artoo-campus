angular.module('artoo').directive('cssAdder', function(){
    
    return{
      restrict: 'AE',
      scope: {
        //   @ VUOL DIRE CHE E' UN VALORE
        // E' UN PARAMETRO CHE POSSO UTILIZZARE NEL LINK
        //  = E' UNA REFERENZA
        cssAdder: '=',
      },
      link: function (scope, elem){
          
          var options = scope.cssAdder || {};
          var color  = options.color || 'gray';
          var thickness = options.thickness || '1px';
          var typology = options.typology || 'solid';

          elem.css('border',[thickness, typology, color].join(' '));
      },
    };
});