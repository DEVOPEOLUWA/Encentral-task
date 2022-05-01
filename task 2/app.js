let list = document.querySelector('.list');
let input  = document.getElementById('input').value;
let btn = document.querySelector('.submit');

  
btn.addEventListener('click',() => {


  if(input.value !== 1){
   
    sortName();

  }
   if(input.value !== 2){
   
    sortLast();

  }
   if(input.value !== 3){
    sortAge();
  }
  // else if(input.value > 3){
  //   alert('incorrect input')
  // }
})
   
 


// const byName = document.querySelector('.byName');
// byName.addEventListener('click',  () => {
//      byName.disabled = true;
//    sortName();
 
  
// })

let list_items  = [
 {
   firstname : 'Onome',
   lastname : 'Ehigiator',
    age: '45'
 },
 {
  firstname : 'Adegoke',
  lastname : 'Akeem-omosanya',
   age: '67'
 },
 {
  firstname : 'Bukola',
  lastname : 'Ehigiator',
   age: '66'
 },
 {
  firstname : 'Olufummi',
  lastname : 'Aremu',
   age: '34'

 },
 {
  firstname : 'Ifeanyichukwu',
  lastname : 'Ekwueme',
   age: '54'

 },
 {
  firstname : 'Isioma',
  lastname : 'Mustapha',
   age: '57'
 },
 {
  firstname : 'Ayebatari',
  lastname : 'Joshua',
   age: '25'

 },
 {
  firstname : 'Nnamdi' ,
  lastname : 'Olawale',
   age: '76'
 },
 {
  firstname : 'Lola',
  lastname : 'Abosede',
   age: '45'
 },
 {
  firstname : 'Emeka',
  lastname : 'Oyelude',
   age: '34'
 },
 {
  firstname : 'Aminu',
  lastname : 'Ogunbanwo',
   age: '67'
 },
 {
  firstname : 'Simisola',
  lastname : 'Ekwueme',
   age: '98'
 },{
  firstname : 'Ayebatari',
  lastname : 'Busari',
   age: '56'
 },{
  firstname : 'Chinyere',
  lastname : 'Uchechi',
   age: '52'
 },{
  firstname : 'Adeboye',
  lastname : 'Jamiu',
   age: '84'
 },{
  firstname : 'Titilayo',
  lastname : 'Kimberly',
   age: '56'
 },{
  firstname : 'Chimamanda',
  lastname : 'Ehigiator',
   age: '34'
 },{
  firstname : 'Bukola',
  lastname : 'Adegoke',
   age: '57'
 },
 {
  firstname : 'Cherechi',
  lastname : 'Elebiyo',
   age: '59'
 },
 {
  firstname : 'Titilayo',
  lastname : 'Afolabi',
   age: '90'
 },
];

function displayList(array = []){
  list.innerHTML = '';
  for(let i = 0; i < array.length;i++){
    let item = array[i];

   let  items = document.createElement('div');
   items.classList.add('list-item');


   let title = document.createElement('div');
   title.classList.add('item-title');
   title.innerText = item.firstname;
   items.appendChild(title);

   
   let item_2 =  document.createElement('div');
   item_2.classList.add('item-last');
   item_2.innerText = item.lastname;
   items.appendChild(item_2);

   let age =  document.createElement('div');
   age.classList.add('item-age');
   age.innerText = item.age
   items.appendChild(age);

   list.appendChild(items)
   
  }
}
 let desc = false;
 function sortName(){
   let array = sort_by_name(list_items,'firstname',desc);
   displayList(array);
   desc = !desc
 }
 function sortLast(){
  let array = sort_by_name(list_items,'lastname',desc);
  displayList(array);
  desc = !desc
}
function sortAge(){
  let array = sort_by_name(list_items,'age',desc);
  displayList(array);
  desc = !desc
}

function sort_by_name(array,sort,desc){
  array.sort(function(a,b){
    if ( a[sort] < b[sort]) return -1
    if ( a[sort] > b[sort]) return 1
    return 0
  });

  // if(desc){
  //   array.reverse()
  // }
return array;
  
}
 

displayList(list_items);
