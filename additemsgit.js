//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[14]);
//document.all[10].textContent = 'ITEM';
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//GETELEMENTID//
//console.log(document.getElementById('header-title'))
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'ITEM';
//headerTitle.textContent = 'Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello</h3>'
//header.style.borderBottom = 'solid 3px #000'

//var addItems = document.all[14];
//console.log(addItems.innerText);
//addItems.textContent = 'ADD ITEMS';
//addItems.style.color = 'green';
//console.log(addItems.innerText);

//GETELEMENTSBYCLASSNAME//
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for(let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = '#f4f4f4';
  items[i].style.fontWeight = 'bold';
}

items[2].style.backgroundColor = 'green';

