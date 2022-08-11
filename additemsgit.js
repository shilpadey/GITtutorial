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
//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Hello';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';

//for(let i = 0; i < items.length; i++) {
  //items[i].style.backgroundColor = '#f4f4f4';
  //items[i].style.fontWeight = 'bold';
//}

//items[2].style.backgroundColor = 'green';

//GETELEMENTBYTAGNAME//
//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent = 'Hello';
//li[1].style.fontWeight = 'bold';
//li[1].style.backgroundColor = 'yellow';

//for(let i = 0; i < li.length; i++) {
  //li[i].style.backgroundColor = '#f4f4f4';
  //li[i].style.fontWeight = 'bold';
//}

//li[4].style.backgroundColor = 'green';


//QUERYSELECTOR//
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px #ccc';

//var input = document.querySelector('input');
//input.value = 'Hello World';

//var submit = document.querySelector('input[type="submit"]');
//submit.value = 'SEND';

//var item = document.querySelector('.list-group-item');
//item.style.color = 'red';

//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color = 'blue';

//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color = 'coral';
//secondItem.style.backgroundColor = 'green';

//var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.color = 'white';

//QUERYSELECTORALL//
//var titles = document.querySelectorAll('.title');
//console.log(titles);
//titles[0].textContent = 'Hello';

//var item = document.querySelectorAll('.list-group-item');
//console.log(item);
//item[1].style.color = 'green';

//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');


//for(let i = 0; i < odd.length; i++) {
 // odd[i].style.backgroundColor = 'green';
 // even[i].style.backgroundColor = '#f4f4f4';
//}

//TRAVERSING THE DOM
var itemList = document.querySelector('#items');
//PARENTNODE
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode);

//PARENTELEMENT
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentElement.parentElement);

//CHILDNODES
//console.log(itemList.childNodes)

//CHILDREN
//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor = 'yellow';

//FIRSTCHILD
//console.log(itemList.firstChild);
//FIRSTELEMENTCHILD
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello 1';

//LASTCHILD
//console.log(itemList.lastChild);
//LASTELEMENTCHILD
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Hello 4';

//NEXTSIBLING
//console.log(itemList.nextSibling);
//NEXTELEMENTSIBLING
//console.log(itemList.nextElementSibling);

//PREVIOUSSIBLING
//console.log(itemList.previousSibling);
//PREVIOUSELEMENTSIBLING
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color = 'green';

//Create new div
var newDiv = document.createElement('div');
console.log(newDiv);
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title','Hello Div');
var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);

var item = document.createElement('li');
console.log(item);
item.className = 'list';
var itemText = document.createTextNode('Hello');
item.appendChild(itemText);
var lists = document.querySelector('.list-group');
var li = document.querySelector('li');
console.log(item);
lists.insertBefore(item,li);
