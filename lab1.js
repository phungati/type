function sort(arr, compareFn) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (compareFn(arr[i], arr[j]) > 0) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var people = [
    { name: "Tiến", age: 25 },
    { name: "Hoàng", age: 30 },
    { name: "Nam", age: 20 },
];
sort(people, function (a, b) { return b.age - a.age; });
console.log(people);