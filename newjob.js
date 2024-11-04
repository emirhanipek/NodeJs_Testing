// fonx.js
function fonx(users) {
    return users
      .filter(user => user.age > 18)                  
      .filter(user => user.job === "developer")        
      .map(user => user.name)                          
      .sort((a, b) => a.localeCompare(b))              
      .join(", ");                                     
  }
  
  
  module.exports = fonx;
  