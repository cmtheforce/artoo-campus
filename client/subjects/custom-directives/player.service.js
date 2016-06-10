angular.module('artoo').service('PlayerSrv', function(){
    
    var dictionary = {
        fight: 'The player started a fight',
        potion: 'The player just drank a potion',
    };
    
    var logs = [];
    
    this.log = (code) => {
        var text = dictionary[code] || 'The player just made ad unknown action';
        var date = new Date();
        // logs.push(dictionary[code]);
        logs.push({text: text, date: date});
    };
    
    this.getLogs = () => {
        return logs;
    };
});