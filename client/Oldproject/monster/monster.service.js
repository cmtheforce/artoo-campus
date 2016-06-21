angular.module('artoo').service('MonsterSrv', function () 
{
    
    var monsters = [{
       
        id: 0,
        name: 'Pecora felice',
        category: 'Normale',
        exp: 20,
        level: 1,
        id_field: 1,
        hp: 100,
        mana: 20,
        attack: 10,
        defense: 5,
        gold: 25,     // soldi dati dopo la battaglia
        drop: [],    // oggetti dati dopo la battaglia
        MainAttack: ' ',        
        SecondAttack: ' ',
    },
    
    {
       
        id: 1,
        name: '  ',
        category: ' Azzannatore di hot-dog',
        exp: 20,
        level: 1,
        id_field: 1,
        hp: 100,
        mana: 20,
        attack: 10,
        defense: 5,
        gold: 25,     // soldi dati dopo la battaglia
        drop: [],    // oggetti dati dopo la battaglia
        MainAttack: ' ',        
        SecondAttack: ' ',
    },
    
    {
       
        id: 2,
        name: ' Diavolo del sabato sera ',
        category: 'Normale',
        exp: 20,
        level: 1,
        id_field: 1,
        hp: 100,
        mana: 20,
        attack: 10,
        defense: 5,
        gold: 25,     // soldi dati dopo la battaglia
        drop: [],    // oggetti dati dopo la battaglia
        MainAttack: ' ',        
        SecondAttack: ' ',
    },
    
    {
       
        id: 3,
        name: 'Piccolo buio',
        category: 'Normale',
        exp: 25,
        level: 2,
        id_field: 1,
        hp: 120,
        mana: 25,
        attack: 10,
        defense: 15,
        gold: 30,     // soldi dati dopo la battaglia
        drop: [],    // oggetti dati dopo la battaglia
        MainAttack: ' ',        
        SecondAttack: ' ',
    },
    
    {
       
        id: 4,
        name: ' Disoccupato ',
        category: 'Normale',
        exp: 25,
        level: 2,
        id_field: 1,
        hp: 120,
        mana: 25,
        attack: 10,
        defense: 15,
        gold: 30,     // soldi dati dopo la battaglia
        drop: [],    // oggetti dati dopo la battaglia
        MainAttack: ' ',        
        SecondAttack: ' ',
    },
    
     {
       
        id: 5,                      // boss 1 campo
        name: 'Tasse nere',
        category: 'Boss',
        exp: 25,
        level: 5,
        id_field: 1,
        hp: 240,
        mana: 50,
        attack: 20,
        defense: 15,
        gold: 300,     // soldi dati dopo la battaglia
        drop: [],    // oggetti dati dopo la battaglia
        MainAttack: ' ',        
        SecondAttack: ' ',
        SpecialAttack: ' ',
    },
    
    ];
    
    
    
});