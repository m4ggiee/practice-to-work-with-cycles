let str = '';
let num1 = 10;
let num2 = 20;

for (let i = 10; num1 <=i, i<= num2 ; i++){
    if(i===num2){
        str += `${i}.`
    } else{
        str += `${i} , `
    }

}

console.log(str);
