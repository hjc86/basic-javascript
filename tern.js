console.log('ITEM COUNT')

let item;
let count;

function itemCount(item, count){
    (count > 1) ? console.log(`I have ${count} ${item}s`) :
    console.log(`I have ${count} ${item}`) ;  
};

itemCount('peas', 4);

console.log('PATTERNS EXERCISE')

let lineOne = '& & & & &';
let lineTwo= ' & & & & & ';

for (let i=1 ; i <= 10; i++){
    if (i % 2 !== 0){
        console.log(lineOne);
    } else {console.log(lineTwo);}

    (i % 2 !== 0) ? console.log(lineOne): console.log(lineTwo);
}
