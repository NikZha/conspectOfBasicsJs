let salaries = {

};

function topSalary(salaries) {
    let maxSalary = -1;
    let maxName = null
   for(let [name, salary] of Object.entries(salaries)){
    if(salary > maxSalary){
        [maxName, maxSalary] = [name, salary]
    }
   }
   return maxName; 
}

console.log(topSalary(salaries))