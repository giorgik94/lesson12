// 1) დავალება------------------------------------------------

let  numbers = [5, 25, 89, 120, 36];

numbers.push('Javascript', 'Python');
console.log(numbers);

numbers.unshift ('html', 'css');
console.log(numbers);

console.log(numbers.length);

numbers.shift ();
numbers.pop ();
console.log(numbers);

numbers.splice (2,0,'ახალი ელემენტი');
console.log(numbers);

// 2) დავალება------------------------------------------------

let names = ['ფორთოხალი', 'ბანანი', 'მსხალი'];

console.log(names.length);

names.push ('ვაშლი', 'ანანასი');
console.log(names);

names.unshift ('საზამთრო');
console.log(names);

names.splice (2,0,'მანგო');
console.log(names);

names.shift ();
names.pop ();
console.log(names);
console.log(names.length);

// 3) დავალება------------------------------------------------

let user = {
    name: 'giorgi',
    userage: 27,
    gender: 'male'
}

for (let x of Object.keys(user)){
    console.log(x);
}

Object.keys(user).forEach (
    function (x) {
        console.log(x);
    }
)

Object.keys(user).forEach (
    x => {
        console.log(x);
    }
)

// 4) დავალება------------------------------------------------

let myUser = {
    name: 'Khatia',
    age: 29,
    gender: 'female'
}

for (let y of Object.values(myUser)) {
    console.log(y);
}

Object.values(myUser).forEach (
    function (item) {
        console.log(item);
    }
)

Object.values(myUser).forEach (
    item => {
        console.log(item);
    }
)

// 5) დავალება-------------------------------------------------

let array = [12, 25, 3, 6, 8, 14, 7, 23];

let newArray = array.map (
    function (x) {
        return x / 3;
    }
);
console.log(newArray);

let newArray2 = array.map (y => y / 3);
console.log(newArray2);

// 6) დავალება------------------------------------------------

let array3 = ['hello', 125, 'javscript', 'html', 43, 'css', 'css', 'boostrap', 88, 59, 'python'];

let result = array3.filter (
    function (item) {
        return typeof item === 'string'
    }
)
console.log(result);

let result2 = array3.filter (item => typeof item === 'number');
console.log(result2);