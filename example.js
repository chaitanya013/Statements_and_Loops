// For Loops
for(let i= 0; i<5; i++){
    console.log('i in loop:', i);
}
console.log('loop finished');



const names = ['Naruto','sakura','sasuki','hinata'];

    // 'initialization'    'condition'      'expression'
for (i= 3;             i< names.length;          i++){
    // console.log(names[i]);

    // let html =`<div>${names[i]}</div>
    // <p>${names[0]}</p>`;
    // console.log(html);

    let result= `
    ${names[0]} Love ${names[1]} and ${names[1]} love ${names[2]} in the end ${names[3]} love ${names[0]} they bothe get married`;
    console.log(result)
}
console.log('--series completed--');


// While loops

let i = 0;

while(i<5){
    console.log('in loop:',i);
    i++;
}

const names= ['naruto', 'sasuki', 'hinata'];
let x= 0;
while(x<names.length){
    console.log(names[x]);
    x++;
}


// do while loops
let i= 0;

do{
    console.log('val of i is', i);
    i++;
} while(i<5);


// if statements

const age= 25;

if(age>20){
    console.log('u r over 20yrs old');
}

const ninjas= ['naruto','hinata','kakashi'];
if(ninjas.length>2){
    console.log("that's a lot of ninjas");
}



// if else statements
const password= 'pass';
if(password.length>8){
    console.log('ur password is valid');
}else{
    console.log('password error');
}


// elseif statement
const names= 'naruto';                          //naruto 
if(names.length>=6){
    console.log('ur name is correct');
}else if(names.length>=5){
    console.log('ur missing one word');
}else{
    console.log('total error');
}