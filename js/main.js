const autput = document.querySelector('.autput')
const ok = document.querySelector('.ok')
ok.addEventListener('click', function ok(){
   const input = document.querySelector('.input').value
   let arr1 = input.split(',')
   arr1 = 
   arr1.map(function(element){
      return parseInt(element, 10)
   })
   let arr = []
   function ing(){
      for(i = arr1.length - 1; i >= 0; i--){
         if(arr1[i] > 0){
            arr.push(arr1[i])
            console.log(i);
         }else{

         }
      }
   }
   console.log(ing(arr1));
   console.log(arr);

   arr.reverse()
   autput.textContent = arr
})


//===============================================================


const autput1 = document.querySelector('.autput1')
const ok1 = document.querySelector('.ok1')
ok1.addEventListener('click', function ok(){
   const input1 = document.querySelector('.input1').value
   let arr = input1.split(',')
   arr = 
   arr.map(function(element){
      return parseInt(element, 10)
   })
   console.log(arr.sort((a,b)=>{return a - b }));  
   let maxMin = []
   maxMin.push(`Мінімальне: ${arr[0]}, Mаксимальне: ${arr[arr.length - 1]}`)
   console.log(arr);
   autput1.textContent = maxMin
})



//===============================================================

const autput2 = document.querySelector('.autput2')
const ok2 = document.querySelector('.ok2')
ok2.addEventListener('click', function ok(){
   const input2 = document.querySelector('.input2').value
   let arr = input2.split(',')
   arr = 
   arr.map(function(element){
      return parseInt(element, 10)
   })
   arr.sort((a,b)=>{return a - b }) 
   console.log(arr);
   let arr2 = new Set(arr)
   let arr3 = Array.from(arr2)
   console.log(arr3);
   autput2.textContent = arr3
})


const autput3 = document.querySelector('.autput3')
const ok3 = document.querySelector('.ok3')
ok3.addEventListener('click', function ok(){
   const input3 = document.querySelector('.input3').value
   const input4 = document.querySelector('.input4').value
   let arr1 = input3.split(',')
   arr1 = 
   arr1.map(function(element){
      return parseInt(element, 10)
   })
   let arr2 = input4.split(',')
   arr2 = 
   arr2.map(function(element){
      return parseInt(element, 10)
   })
   let arr = []
   arr.push(arr1)
   arr.push(arr2)
   console.log(arr);
   autput3.textContent = arr
})






