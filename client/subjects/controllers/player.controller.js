//POSSO ANCHE UTILIZZARE IL NONNO CHE E' SINGLETON (SEMPRE UN UNICA ISTANCE) $rootScope
angular.module('artoo').controller('PlayerCtrl', ($scope) => {
    
    $scope.player = {
        name: 'Buzzurro',
        hp : 100,
        exp: 17,
        level : 2,
        race : 'Gnome',
    }
    
    $scope.isDead = () => {
        return ($scope.player.hp) ? 'No' : 'Yes';
    }
    
    $scope.takeDamage = (damage) => {
        $scope.player.hp = ($scope.player.hp <= damage) ? 0 : $scope.player.hp - damage;
    }
    
    $scope.levelUp = () => {
        $scope.player.level = $scope.player.level + 1;
    }
    
    $scope.gainExp = (expTaken) => {
        //UTILIZZO QUESTO VALORE PER NON FAR VEDERE
        var totalExp = $scope.player.exp + expTaken;
        
        if(totalExp >= 100){
            $scope.levelUp();
            totalExp -= 100;
        }
        
        $scope.player.exp = totalExp;
    }
    
});