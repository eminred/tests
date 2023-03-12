var name = 'Эмин';

if (name== 'Я') {
  console.log('да')
} else {
  console.log('нет')
}

if (10 > 5) {
  console.log ('да')
}

for(var i = 0; /*создаем переменную */
  i < 3;  /*проверка и выполнение кода в цикле консоли - выполнение кода, пока это часть истина*/
  i++ /*модификация после цикла*/
  ) {
    console.log(i)
  }
  
function sum(a, b) {
    var result = a + b;

    return result;
  }
  
var result = sum(2, 3);
console.log(result);


var someVar = 20;
var someOtherVar = 30;

function sum (a, b) {
  var result = a + b + someVar + someOtherVar;
  return result;
}

var result = sum(2,3);

console.log(result);


var a = 10;

function fn1(b, c) {
  function fn2(d, e) {
    return a + b + c + d + e;
  }
  return fn2(3, 4);
}
var result = fn1(1, 2);

console.log(result); 


if (10 > 100) {
  var a = 10
}

console.log(a);

// function Expression 

var sum = function (a, b) {
  return a + b;
}

// function declaration 


var result = sum(2, 3);

console.log(result);

function sum(a, b) {
  return a + b;
}

//
var result = sum(2, 3);

console.log(result);

var sum = function (a, b) {
  return a + b;
};

// 
var result = sum(2, 3);

console.log(result); 

function sum (a, b) {
  return a + b;
};
//

var sum = (a, b) => {
  return a + b;
}; 

var result = sum (10, 20);

console.log (result);
//
var sum = (a, b) => a + b;

var result = sum (10, 20);

console.log (result);

// 

var ar = [1, 2, 3, 4];

var newArray = ar.map(function(number) {
 return number * number;
});

console.log(ar);
console.log(newArray);

//

var ar = [1, 2, 3, 4];

var newArray = ar.map((number) =>  number * number);

console.log(ar);
console.log(newArray);

//

if (10 > 1) {
  var a = 10;
}
console.log (a);
//

if (10 > 1) {
  let a = 10
  console.log (a);
}

//


for(var i = 0; 
  i < 3; 
  i++
  ) {
    console.log(i)
  }

  console.log(i);

  //

  const a = 10;

  console.log(a);

// var a = 10; подвержены всплытие и могут изменять значения
// let a = 10; не подвержены всплытию; могут изменять значения
// const a = 10; не подвержены всплытию и не могут изменять значения

//Объекты 

var a = 10; 

a = 100; 

a = 'Иван'; 

a = 'Привет'; 

var obj = {
  name: 'Эмин',
  lastName: 'Самедов', 
  age: 31, 
  job: 'project'
}; 

console.log(obj.lastName);
console.log(obj.name);
console.log(obj.age) ;

// 2 способ 

console.log(obj ['lastName']);
console.log(obj ['name']);
console.log(obj ['age']);

//
var obj = {
  name: 'Эмин',
  lastName: 'Самедов', 
  age: 31, 
  job: 'project'
}; 

console.log(obj.name);

obj.name = 'Сади'
console.log(obj.name);

//

var obj = {
  name: 'Эмин',
  lastName: 'Самедов', 
  age: 31, 
}; 

console.log(obj.job);

obj.job = 'project';

console.log(obj.job);

//Массивы 


var array = [
  'Сергей',
  'Иван'
]; 

console.log(array[1]);

//замена значения

var array = [
  'Сергей',
  'Иван'
]; 

console.log(array[1]);

array[1] = 'Роман';

console.log(array[1]);

// размер массива

var array = [
  'Сергей',
  'Иван'
]; 

console.log(array.length);

//создание значения
var array = [
  'Сергей',
  'Иван'
]; 

console.log(array.length);
console.log(array[2]);
array.push('Дмитрий');
array.push('Роман');
console.log(array[2]);
console.log(array[3]);

//

var array = [
  'Сергей',
  'Иван'
]; 
array.push('Дмитрий');
array.push('Роман');

for (var i = 0; i < array.length; i++) {
  console.log(array[i])
}

//

var array = [
{
  name:'Сергей', 
  lastName:'Мелюков'
}, 
{
  name:'Иван', 
  lastName:'Петров'
}, 
{
  name:'Эмин', 
  lastName:'Самедов'
}, 
];

for (let i = 0; i < array.length; i++) {
  const name = array[i].name
  console.log(name)
}

//

var array = [
  {
    name:'Сергей', 
    lastName:'Мелюков'
  }, 
  {
    name:'Иван', 
    lastName:'Петров'
  }, 
  {
    name:'Эмин', 
    lastName:'Самедов'
  }, 
  ];
  
  for (var i = 0; i < array.length; i++) {
    var name = array[i].name
    console.log(name)
  };
  
  console.log(i);
  console.log(name);

  //

  var path = "/users/download/index.html"

  if (path = 'html') {
    console.log('да')
  } else {
    console.log('нет')
  }
  
  //
  if (path = 'html') {
    const path = "/users/download/index.html"
    console.log('true')
  } else {
    console.log('false')
  }

  //

  var workers = [
		{name:"John",salary:500},
		{name:"Mike",salary:1300},
		{name:"Linda",salary:1500}];


  for (let i = 1000; i < workers.salary; i++) {
    var name = workers[i].salary
    console.log(name)
  }

//
  
  var array = [
    {
      name:'Сергей', 
      salary: 500
    }, 
    {
      name:'Иван', 
      salary: 1200
    }, 
    {
      name:'Эмин', 
      salary: 1500
    }, 
    ];
    
    for (let i = 1000; i < array.salary; i++) {
      const name = array[i].name
      console.log(name)
    }  