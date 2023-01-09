// alert ("Привет!")
// confirm ("Вы человек?")
// let number = prompt ("Введите  3х значное число:")
// let units = number%10
// let a = (number/10) - (units*0.1)
// let dozens = a%10
// let hundreds = (a/10) - (dozens*0.1)

// alert ("В введённом числе количество сотен равно: " + hundreds)
// alert ("В введённом числе количество десятков равно: " + dozens)
// alert ("В введённом числе количество едениц равно: " + units)

// let num1 = +prompt()
// let num2 = +prompt()
// let num3 = +prompt()
// let num4 = +prompt()
// let num5 = +prompt()
// let num6 = +prompt()
// let num7 = +prompt()

// let result = num1 + num2
// let result2 = num2 + num4
// let result3 = num5 + num6

//alert(`Наш результат: ${result}Наш результат: ${result2} Наш результат: ${result3}`)

// let name1 = prompt ("Как тебя зовут?")
// alert (`Классное имя: ${name1}`)

// let name1 = prompt ("Как тебя зовут?")
// let name2 = prompt ("Сколько тебе лет?")

// alert (`Тебя зовут: ${name1}, тебе ${name2}`)



//alert(`result ${+`stroka`}`)

//== нестрогое сравенине
//===строгое сравнение

// // Задача №1
// let nun1 = prompt ("Введите первое число")
// let nun2 = prompt ("Введите второе число")

// if (nun1>nun2){
//     alert(`первое число ${nun1} больше второго ${nun2}`)
// }else if (nun1<nun2){
//     alert(`первое число ${nun1} меньше второго ${nun2}`)
// }else{
//     alert("числа равны")
// }

// //Задача №2

// let min = prompt ("Введите число от 0 до 59")

// if (min>0 && min<15){
//     alert("введённое число попало в первую четверть часа")

// }else if (min>=15 && min<30){
//     alert("введённое число попало во вторую четверть часа")

// }else if (min>=30 && min<45){
//     alert("введённое число попало в третью четверть часа")

// }else if (min>=45 && min<60){
//     alert("введённое число попало в четвёртую четверть часа")
    
// }else{
//     alert("введённое число некорректно")
// }

// //Задача №3

// let lang = prompt ("Выберите язык, напишите \"ru\" или \"en\"")

// if (lang == "ru"){
//     let arr = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"];
//     alert(arr);
    
// }else if (lang == "en"){ 
//      let arr2 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//      alert(arr2);
// }else{

// alert("попробуйте ещё раз");
// }

// let number = +prompt("Введите номер игрока")
// switch (number) {
//     case 1:
//         console.log("Малком")
//         break;
//     case 2:
//         console.log("Клаудиньо")
//         break;

//     case 3:
//         console.log("Вендел")
//         break;

//     case 4:
//     console.log("Бокаев")
//     break;

//     case 5:
//     console.log("Одоевский")
//     break;

//     case 6:
//     console.log("Косьера")
//     break;

//     case 7:
//     console.log("Круговой")
//     break

// }

// let name1 = prompt("")
// let family = prompt("")

// switch ("") {
//     case name1:
//         console.log(family)
//         break;
//     case family:
//         console.log(name1)
//         break;
 
// }

// let name1 = prompt("")


// name1="Болгар" ? console.log("Виталий"): name1 = "Виталий" ? console.log("Болгар"): console.log("некорректные данные")



// let number = +prompt("Введите число")
// for(let i = 0; i < number; i++){
//     console.log(i)
// }



// let number = +prompt("Введите число")
// for(let i = number; i >0; i--){
    
//     console.log(i)
// }

// let number2 = +prompt("Введите число")

// while (number2>0){
//     console.log(number2*5)
//     number2 ++
// }


// let second = "24"
// function first () {
//     let second ="22"
//     alert("Функция сработала")

// }

// getReturn()
// calcData()
// createPicture()
// checkName(first,second)

// function checkName(first, second){
// let first = "Имя"
// let second = "Фамилия"
// console.log(first + "а конкретнее" + second)
// }

// checkName()

// function checkName(first, second){
//     if (first>50){
//         return true; 
//     }else {
//         return done ("hgjjhg")

//     }
// }

// let first = prompt()

// if (checkName(first)){
//     console.log("Yes");

// }



    // console.log(first + "а конкретнее" + second)
    // console.log("Просто текст")
    // return `Hello ${first} ${second}`
    // }

    // checkName("Name","Family")

    

// let first = prompt ("Сколько стоит товар?")
// function checkName(first){
//     if (first<200){
//         return  true
//     }else{
//         return false
//     }
// }

// if (checkName(first)){
//     console/log("Yes")
// } else{
//     console.log ("no ")
// }

//Домашняя работа:

// //Задача1

// let numOne = +prompt("Введите первое число");
// let numTwo = +prompt("Введите второе число");

// function calcSumm(numOne, numTwo){
//     let numSumm = numOne + numTwo;
//     return numSumm;
// }

// let funcRezult = calcSumm();

// calcSumm();
// alert (`Сумма равна: ${funcRezult}`)


// Д.З 19.12.22

// //Задача 1: Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.

// const massiv_1 = ['a', 'b', 'c'];
// const massiv_2 = [1 ,2, 3];
// const all_1 = massiv_1.concat(massiv_2);
// console.log(all_1);

// //Задача 2: Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

// let massiv_1 = ['a', 'b', 'c'];
// massiv_1.push(1, 2, 3);
// console.log(massiv_1);

// //Задача 3: Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

// let massiv_1 = [1 ,2, 3];
// console.log('massiv_1: ', massiv_1);
// let reversed = massiv_1.reverse();
// console.log('reversed: ', reversed);

// //Задача 4: Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

// let massiv_1 = [1 ,2, 3];
// console.log('massiv_1: ', massiv_1);
//  massiv_1.push(4, 5, 6);
// console.log('new massiv_1: ', massiv_1);

// //Задача 5: Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let massiv_1 = [1 ,2, 3];
//  console.log('massiv_1: ', massiv_1);
//  massiv_1.unshift(4, 5, 6);
//  console.log('new massiv_1: ', massiv_1);

// //Задача 6: Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

// let massiv_1 = ['js', 'css', 'jq'];
// console.log(' Первый элемент массива: ' , massiv_1[0]);

// // Задача 7: Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// let massiv_1 = ['js', 'css', 'jq'];
// let lastElement = massiv_1.pop();
// console.log(' Последний элемент массива: ' , lastElement);

// //Задача 8: Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]

// let massiv_1 = [1, 2, 3, 4, 5];
// console.log('Исходный массив: ', massiv_1);
// let newMassiv = massiv_1.slice(0,3);
// console.log('Новый массив: ', newMassiv);

// //Задача 9: Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

// let massiv_1 = [1, 2, 3, 4, 5];
//  console.log('Исходный массив: ', massiv_1);
//  let newMassiv = massiv_1.slice(3);
//  console.log('Новый массив: ', newMassiv);

// //Задача 10: Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

// let massiv_1 = [1, 2, 3, 4, 5];
//  console.log('Исходный массив: ', massiv_1);
//  massiv_1.splice(1, 2);
//  console.log('Новый массив: ', massiv_1);

// //Задача 11: Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

//  let massiv_1 = [1, 2, 3, 4, 5];
//  console.log('Исходный массив: ', massiv_1);
//  let newMassiv_1 = massiv_1.splice(1, 3);
//  console.log('Новый массив: ', newMassiv_1);

// //Задача 12: Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

//  let massiv_1 = [1, 2, 3, 4, 5];
//  console.log('Исходный массив: ', massiv_1);
//   massiv_1.splice(3, 0, 'a', 'b', 'c' );
//  console.log('Новый массив: ', massiv_1);

// //Задача 13: Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let massiv_1 = [1, 2, 3, 4, 5];
//  console.log('Исходный массив: ', massiv_1);
//   massiv_1.splice(1, 0, 'a', 'b' );
//   massiv_1.splice(6, 0, 'c' );
//   massiv_1.splice(8, 0, 'e' );
//  console.log('Новый массив: ', massiv_1);


//  const palindrome = str => {
//     str = str.toLowerCase()
//     return str === str.split('').reverse().join('')
//   }

//  str===str ? console.log('true'): console.log('false');


//  const newArr = [
//     { name: 'Vitaliy', age: 31 },
//     { name: 'Ori', age: 22 },
//     { name: 'Adi', age: 21 },
//     { name: 'Yulia', age: 25 },
//     { name: 'Katia', age: 22 },
  
//   ]

//   const mapStateToProps = state => (
//     {
//         list:state.list.filter(item => item.age.some(i=> i.includes(["25"]) )  ),
       
//     }
// );

//Домашнее задание от 30.12.22

const company = {
  head: 'Ivanov',
  manager: 'Petrov',
  cars: [
    { mark: 'Audi', price: 1500000, color: 'white' },
    { mark: 'BMW', price: 1800000, color: 'white' },
    { mark: 'Mercedes', price: 2500000, color: 'black' },
  
  ],
  stuff: [
    {role: 'cleaner', age: 45, name: 'Ivan'},
  ],

  adress: "Spb, Leninskiy avenue",
  
};

//Задача 1: напишите функцию для удаления переданного в параметры ключа из переданного объекта.

delete company.stuff;
 console.log(company);

//Задача 2: напишите функцию которая принимает объект и возвращает его длину.
 company.stuff.push({role:'salesman', age:25, name:'Aleks'});
 console.log(company);

 console.log(Object.keys(company).length);

 //Задача 3: напишите функцию которая принимает url а возвращает данные с сервера.
 const pokemon = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
pokemon.then((result)=> result.json())
.then((result)=> console.log(result));