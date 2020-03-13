// Check if string is date format
const isDate = date => {
    try{
      new Date(date).toISOString();
      return true;
    }catch(e){ 
      return false; 
    }
}
  
  
