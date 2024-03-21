export  function destr (objectDestr){
  let specialProp = [];
  for (let i =0; i < objectDestr.special.length; i++){
    const {id, name, icon, description = 'Описание недоступно'} = objectDestr.special[i];
    specialProp.push({id, name, icon, description});
    
  }
  return specialProp;  
}


