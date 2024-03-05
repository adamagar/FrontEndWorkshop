let salary;
 salary = undefined;

/* if(salary == null || salary == undefined) {
    salary = 0
}
*/

// salary = salary == null || salary == undefined ? 0: salary

salary = salary ?? 0
console.log(salary)