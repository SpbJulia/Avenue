const body = document.querySelector('body');
const bodyContent = body.innerHTML;
console.log(bodyContent);
body.style.backgroundColor = "rgb(181, 186, 189)";

const table = document.querySelector('table');
table.style.margin = 'auto';
table.style.border = '2px solid black';
table.style.borderCollapse = 'collapse';
table.style.textAlign = 'center';

const tr = document.querySelectorAll('tr');
tr.style.border = "2px solid black";
tr.style.borderCollapse = 'collapse';
tr.style.textAlign = 'center';


const td = document.querySelectorAll('td');
td.style.border = '2px solid black';
td.style.borderCollapse = 'collapse';
td.style.textAlign = 'center';
td.style.padding = '50px';

const header = document.querySelector('header');
header.style.fontWeight = 700;



