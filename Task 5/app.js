let btnOne = document.querySelector('.btn-1');
let btnTwo = document.querySelector('.btn-2');
let btnThree = document.querySelector('.btn-3');


btnThree.addEventListener('click',() =>{
  changeNumber(customer_Data);
})

btnTwo.addEventListener ('click', () =>{
 getAccountDetails(customer_Data);
})

btnOne.addEventListener('click',() =>{
getAccount(customer_Data);
});


const customer_Data = [
 {
  
   firstname : 'Onome',
   lastname : 'Ehigiator',
   accountNumber : '6152',
   accountBalance : '£2008',
   phoneNumber: '08148975238'

 },
 {
 firstname : 'Adegoke',
 lastname : 'Akeem-omosanya',
 accountNumber : '6952',
 accountBalance : '£4344',
 phoneNumber: '07015181324'
 },
{
 firstname : 'Bukola',
 lastname : 'Ehigiator',
 accountNumber : '8467',
 accountBalance : '£2723',
 phoneNumber: '07029300358'
},
{
 firstname : 'Olufummi',
 lastname : 'Aremu',
 accountNumber : '3976',
 accountBalance : '£4616',
 phoneNumber: '08010170877'

},
{
 firstname : 'Ifeanyichukwu',
 lastname : 'Ekwueme',
 accountNumber : '8965',
 accountBalance : '£3248',
 phoneNumber: '07021118253'

},
{
 firstname : 'Isioma',
 lastname : 'Mustapha',
 accountNumber : '8555',
 accountBalance : '£4511',
 phoneNumber: '09164393835'
},
{
 firstname : 'Ayebatari',
 lastname : 'Joshua',
 accountNumber : '8657',
 accountBalance : '£2790',
 phoneNumber: '07029300358'

},
{
 firstname : 'Nnamdi' ,
 lastname : 'Olawale',
 accountNumber : '3587',
 accountBalance : '£7321',
 phoneNumber: '07021899665'
},
{
 firstname : 'Lola',
 lastname : 'Abosede',
 accountNumber : '6805',
 accountBalance : '£2856',
 phoneNumber: '07062943330'
},
{
 firstname : 'Emeka',
 lastname : 'Oyelude',
 accountNumber : '6701',
 accountBalance : '£4086',
 phoneNumber: '08190576207'
}
]

function getAccount(x){
 let inputValue = document.getElementById('input').value;
let paragraph = document.querySelector('.paragraph');
paragraph.style.textAlign = 'center'
paragraph.style.color = '#7354fcs'
paragraph.style.transition = 'all .3s ease'
for(let i =0;i< x.length;i++){
 if(x[i].accountNumber == inputValue){
  paragraph.innerHTML = 'Dear ' + x[i].firstname  + ' your account balance is  ' + x[i].accountBalance
 }
 
}
return x
}


function getAccountDetails(x){
 let input = document.getElementById('input-2').value;
  let para = document.querySelector('.paragraph-2');
  let paraOne = document.querySelector('.paragraph-2a'); 
  let paraTwo = document.querySelector('.paragraph-2b');
  let paraThree = document.querySelector('.paragraph-2c');
  para.style.textAlign = 'center'
  paraOne.style.textAlign = 'center'
  paraTwo.style.textAlign = 'center'
  paraThree.style.textAlign = 'center'
  para.style.color = '#7354fcs'
  para.style.transition = 'all .3s ease'
  for(let i =0;i< x.length;i++){
   if(x[i].accountNumber == input){
    para.innerHTML = 'Your  account details is :  ' + x[i].accountNumber + ' is: '
    paraOne.innerHTML = 'firstName : ' + x[i].firstname;
    paraTwo.innerHTML = 'lastname : ' + x[i].lastname;
    paraThree.innerHTML = 'Phone-number : ' + x[i].phoneNumber;
   }
   
  }
  return x
  }




function changeNumber(x)
{
  let inputThree  = document.getElementById('input-3').value
  let inputFour  = document.getElementById('input-4').value
  let paras = document.querySelector('.paragraph-3'); 

  for(let i = 0;i < x.length ;i++){
    if(inputThree.length = 8){
    if(x[i].phoneNumber == inputThree){
      x[i].phoneNumber = inputFour
      paras.innerHTML = 'Your phone number has been updated'
    }
  }
  else{
   alert('number not valid!')
  }
}
}