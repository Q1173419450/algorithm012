/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let root = null;
    for(let i = 0; i < employees.length; i++) {
      if(employees[i].id == id) {
        root = employees[i];
      }
    }

    let ans = employees.importance;

    for(let i = 0; i < root.subordinates.length; i++) {
      ans += GetImportance(employees, root.subordinates[i]);
    }

    return ans
};

var GetImportance = function(employees, id) {
  let map = {};
  for(let i = 0; i < employees.length; i++) {
    map[employees[i].id] = employees[i];
  }
  
  let ans = 0;
  let queue = [map[id]];
  while (queue.length) {
    let node = queue.shift();
    ans += node.importance;
    for(let i = 0; i < node.subordinates.length; i++) {
      queue.push(map[node.subordinates[i]]);
    }
  }
  return ans;
}