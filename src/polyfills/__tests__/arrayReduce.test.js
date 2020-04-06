import '../arrayReduce';

let count = [1, 2, 3, 4, 5].customReduce((acc, val) => acc + val, 0);
let countWithCondition = [1, 2, 3, 4, 5].customReduce((acc, val) => (val % 2 === 0 ? acc + val : acc), 0);
let objCount = [{x: 1}, {x: 2}, {x: 3}].customReduce((acc, val) => acc + val.x, 0);

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.customReduce(function(allNames, name) { 
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {});

test('customReduce', () => {
    expect(count).toEqual(15);
    expect(countWithCondition).toEqual(6);
    expect(objCount).toEqual(6);
    expect(countedNames).toEqual({ Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 });
});
