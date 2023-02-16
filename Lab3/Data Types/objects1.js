let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  function sumSalaries(salaries){
    let arr = Object.values(salaries)
    return arr.reduce((prev,cur)=>prev+cur)
  }
  alert( sumSalaries(salaries) );