function unique(arr) {
    let set = new Set
    for(let str of arr){
        set.add(str)
    }
    let unique = []
    set.forEach((value,valueAgain,set)=>{
        unique.push(value)
    });
    return unique;
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) );