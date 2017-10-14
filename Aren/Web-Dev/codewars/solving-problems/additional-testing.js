/**
 * Created by Aren on 10/2/2017.
 */

let hello = (x) => {
    console.log("Fuck");
    let y = x * x;
    return y;
};

let digitize = (n) => {

    let arr = Array.from(n.toString()).map(Number);
    arr.reverse();
    return arr;

};

function digitize2(n){
    return (n + '').split('').map(Number).reverse();
}

let removeSpace = (str) => {
    return String(str).replace(/\s/g,'');
};

function whitespaveremoval(str){
    return str.replace(/\s/g,"");
}


console.log(removeSpace("Hello World ! "));
console.log(whitespaveremoval("Hello World ! "));


function comp(array1, array2){
   var bool = true;
   if(array1 === null || array2 === null){
       return false;
   }
   if(array1.length !== array2.length){
       return false;
   }

   for(let i = 0; i < array1.length; i++){
       if(bool === false){
           return bool;
       }
       for(let j = 0; j < array2.length; j++){

           if((array1[i]*array1[i]) === array2[j]){

               array2[j] = -1;

               bool = true;
               break;
           }
           else{
               bool = false;
           }
       }
   }
   return bool;
}

// var aryaA = [76, 30, 3, 79, 3, 11, 14, 45];
// var aryaB = [5776, 900, 10, 6241, 9, 121, 196, 2025];

var aryaA = [2,3,3,3];
var aryaB = [9,9,4,4];

console.log(comp(aryaA,aryaB));


//---------------------


function order(words){
    if(words === ""){
        return "";
    }
    words = words.split(" ");

    let arya = new Array(words.length);

    for(let i = 0; i < words.length; i++){

        let tmp = words[i];

        for(let j = 0; j < words[i].length; j++){

            if(tmp[j] == 1){
                arya[0] = tmp;
            }
            else if(tmp[j] == 2){
                arya[1] = tmp;
            }
            else if(tmp[j] == 3){
                arya[2] = tmp;
            }
            else if(tmp[j] == 4){
                arya[3] = tmp;
            }
            else if(tmp[j] == 5){
                arya[4] = tmp;
            }
            else if(tmp[j] == 6){
                arya[5] = tmp;
            }
            else if(tmp[j] == 7){
                arya[6] = tmp;
            }
            else if(tmp[j] == 8){
                arya[7] = tmp;
            }
            else if(tmp[j] == 9){
                arya[8] = tmp;
            }
        }
    }

    let finalString = "";
    for(let k = 0; k < arya.length; k++){
        if(k != arya.length-1){
            finalString += arya[k] + " ";
        }
        else{
            finalString += arya[k];
        }
    }
    return finalString;
}

console.log(order("is2 Thi1s T4est 3a"));

console.log("-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-");

/*function dirReduc(arr){ //first attempt did not work

    for(let i = 0; i < arr.length; i++){
        console.log("current i value is: " + i);
        if(arr[i] == "NORTH"){
            let tmp = i;
            if(arr[i+1] == "SOUTH"){
                delete arr[i];
                delete arr[i+1];
            }
            else if(arr[i+1] == null){
                tmp++;
                while(arr[tmp+1] == null){
                    tmp++;
                }
                if(arr[tmp+1] == "SOUTH"){
                    delete arr[i];
                    delete arr[tmp+1];
                }
                console.log(arr);
            }

        }
        else if(arr[i] == "SOUTH"){
            let tmp = i;
            if(arr[i+1] == "NORTH"){
                delete arr[i];
                delete arr[i+1];
            }
            else if(arr[i+1] == null){
                tmp++;
                while(arr[tmp+1] == null){
                    tmp++;
                }
                if(arr[tmp+1] == "NORTH"){
                    delete arr[i];
                    delete arr[tmp+1];
                }
                console.log(arr);
            }
        }
        else if(arr[i] == "EAST"){
            let tmp = i;
            if(arr[i+1] == "WEST"){
                delete arr[i];
                delete arr[i+1];
            }
            else if(arr[i+1] == null){
                tmp++;
                while(arr[tmp+1] == null){
                    tmp++;
                }
                if(arr[tmp+1] == "WEST"){
                    delete arr[i];
                    delete arr[tmp+1];
                }
                console.log(arr);
            }
        }
        else if(arr[i] == "WEST"){
            let tmp = i;
            if(arr[i+1] == "EAST"){
                delete arr[i];
                delete arr[i+1];
            }
            else if(arr[i+1] == null){
                tmp++;
                while(arr[tmp+1] == null){
                    tmp++;
                }
                if(arr[tmp+1] == "EAST"){
                    delete arr[i];
                    delete arr[tmp+1];
                }
                console.log(arr);
            }
        }
    }
    console.log("final: " + arr);
}*/


function dirReduc(arr){

    for(let i = 0; i < arr.length; i++){

        if( (arr[i] == "NORTH" && arr[i+1] == "SOUTH") || (arr[i] == "SOUTH" && arr[i+1] == "NORTH") ){
            delete arr[i];
            delete arr[i+1];
        }
        else if( (arr[i] == "EAST" && arr[i+1] == "WEST")  || (arr[i] == "WEST" && arr[i+1] == "EAST") ){
            delete arr[i];
            delete arr[i+1];
        }
    }
    let exit = true;

    while(exit) {

        exit = false;

        for (let i = 0; i < arr.length; i++) {

            if ((arr[i] == "NORTH" && arr[i + 1] == null) || (arr[i] == "SOUTH" && arr[i + 1] == null)) {
                let tmp = i;
                tmp++;
                while (arr[tmp + 1] == null && tmp + 1 < arr.length) {
                    tmp++;
                    if (arr[i] == "NORTH" && arr[tmp + 1] == "SOUTH") {
                        delete arr[i];
                        delete arr[tmp + 1];
                        exit = true;
                    }
                    else if (arr[i] == "SOUTH" && arr[tmp + 1] == "NORTH") {
                        delete arr[i];
                        delete arr[tmp + 1];
                        exit = true;
                    }
                }
            }
            else if ((arr[i] == "EAST" && arr[i + 1] == null) || (arr[i] == "WEST" && arr[i + 1] == null)) {
                let tmp = i;
                tmp++;
                while (arr[tmp + 1] == null && tmp + 1 < arr.length) {
                    tmp++;
                    if (arr[i] == "EAST" && arr[tmp + 1] == "WEST") {
                        delete arr[i];
                        delete arr[tmp + 1];
                        exit = true;
                    }
                    else if (arr[i] == "WEST" && arr[tmp + 1] == "EAST") {
                        delete arr[i];
                        delete arr[tmp + 1];
                        exit = true;
                    }
                }
            }
        }
    }
    let newarr = [];
    let count = 0;

    for(let j = 0; j < arr.length; j++){

        if(arr[j] == null){

        }
        else{
            newarr[count] = arr[j];
            count++;
        }
    }
    return newarr;
}
//let arr = ["NORTH", "NORTH","EAST", "WEST", "SOUTH", "SOUTH"];
//let arr = ["NORTH", "SOUTH", "SOUTH","WEST"];


//let arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];

//let arr = ["NORTH", "EAST", "NORTH", "NORTH", "WEST"];


//console.log(dirReduc(arr));


function dirReduc(plan) {
    let arra = [];
    var opposite = {
        'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    return plan.reduce(function(dirs, dir){
        // console.log("dirs: "+dirs);
        // console.log("dir: "+dir);
        if (dirs[dirs.length - 1] === opposite[dir])
            dirs.pop();
        else
            dirs.push(dir);
        return dirs;
    }, arra);
}
let arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];
//console.log(dirReduc(arr));


function nbYear(p0, percent, aug, p) {
    percent /= 100;
    percent += 1;
    let year = 0;

    while( p0 < p ){

        p0 *= percent;
        p0 += aug;
        year++;

    }
    return year;
}

let nbYear2 = (p0,percent,aug,p) => {
    percent /= 100;
    percent += 1;
    let year = 0;

    while( p0 < p ){

        p0 *= percent;
        p0 += aug;
        year++;

    }
    return year;
};


//console.log(nbYear2(1000,2,50,1200));


function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

let f1 = new Fighter("a",10,2);
let f2 = new Fighter("b",8,3);


function declareWinner(fighter1, fighter2, firstAttacker) {

    if(firstAttacker == fighter1.toString()){
       while(true) {
           fighter2.health -= fighter1.damagePerAttack;
           if(fighter2.health < 1 ) return fighter1.toString();
           fighter1.health -= fighter2.damagePerAttack;
           if(fighter1.health < 1 ) return fighter2.toString();
       }
    }
    else if(firstAttacker == fighter2.toString()){
        while(true) {
            fighter1.health -= fighter2.damagePerAttack;
            if(fighter1.health < 1 ) return fighter2.toString();
            fighter2.health -= fighter1.damagePerAttack;
            if(fighter2.health < 1 ) return fighter1.toString();
        }
    }
}

console.log(declareWinner(f1,f2,"a"));













