//Ex 1 :
function firstname() {
  console.log("murjan");
}
function b(callback) {
  callback();
}
b(firstname);

//--------------------
//Ex 2 :
function cool(callback) {
  callback();
}
function rand() {
  console.log(Math.floor(Math.random() * 1000));
}
cool(rand);

//--------------
//Ex 3:
function nice(callback) {
    callback(42);
  }
function print(x){
    console.log(x);
}
nice(print);
//----------------
//Ex4:
function amazing (callback){
    const num=callback(42,128,37,81,66)
    console.log("Num:"+num);
}
function randomNum(a,b,c,d,e){
    let arry=[a,b,c,d,e];
    return arry [Math.floor(Math.random()*arry.length)]
}
amazing(randomNum);