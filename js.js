alert ("Привет!")
confirm ("Вы человек?")
let number = prompt ("Введите  3х значное число:")
let units = number%10
let a = (number/10) - (units*0.1)
let dozens = a%10
let hundreds = (a/10) - (dozens*0.1)

alert ("В введённом числе количество сотен равно: " + hundreds)
alert ("В введённом числе количество десятков равно: " + dozens)
alert ("В введённом числе количество едениц равно: " + units)
