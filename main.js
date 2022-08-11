var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click',removeItem);
function addItem(e){
    e.preventDefault();
   //GET INPUT VALUE
    var newItem = document.getElementById('item').value;
   //Create new item
   var li = document.createElement('li');
   li.className = 'list-group-item';
   li.appendChild(document.createTextNode(newItem));
   //Create del button
   var deleteBtn = document.createElement('button');
   deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
   deleteBtn.appendChild(document.createTextNode('X'));
   li.appendChild(deleteBtn);
   var editBtn = document.createElement('button');
   editBtn.className = 'btn btn-input btn-sm float-right edit'
   editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
   itemList.appendChild(li); 
}

//Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure')){
           var li = e.target.parentElement;
           itemList.removeChild(li);
        }
    }
}