let num = parseInt(prompt(`Enter a number:`));
let count = 0; 

for(let i = 1; i<=num; i++ ){
    if(num%i===0 && i%2===0){
       
        count++
        
    }
}
console.log(`Кількість парних дільників числа ${num}: ${count}`);