const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]
    }
    
    function destr (destrProp){
      let specialProp = [];
      for (let i =0; i < character.special.length; i++){
        const destrProp = character.special[i];
        specialProp.push({id, name, icon, description});
        console.log(specialProp)
      }
      return specialProp;
    }
    destr({id, name, icon, description = 'Описание недоступно'})
    