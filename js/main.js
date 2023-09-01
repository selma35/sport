 let myimg =document.getElementById('myimg')
 let myname = document.getElementById('myname')
 let mp =document.getElementById('myp')
 let btnm = document.getElementById('mybtnm')
 let btnme=document.getElementById('mybtn2') 



btnm.addEventListener('click', function() {
   
   myimg.src = 'https://digitalhub.fifa.com/transform/cd20ed69-7f1e-488b-b072-0b1b45b79042/Mohamed-Salah-Liverpool-2023-Getty';
   myname.innerHTML='Name: mohamed salah'
   mp.innerHTML='Position: CEO OF Meta'
});


btnme.addEventListener('click', function() {
   
   myimg.src = 'https://media.npr.org/assets/img/2023/06/07/ap23158571300352-8bf00455d3333eb01468ea9493463a56833a8c99-s1100-c50.jpg';
   myname.innerHTML='Name: messi'
   mp.innerHTML='Position: CEO OF Apple'
});
