//EX 1 :
function calculatavg(arr)
{
   let avg ;
   let sum=0 ;
   for(let i=0 ;i<arr.length;i++){
       sum+=arr[i];
   }
   avg=sum/arr.length;
   return(avg);
}
let  array=[];
console.log(calculatavg([1,2,3,4,5]));
console.log(calculatavg([5,9,8,5,4]));
console.log(calculatavg([9,8,5,2,1,2]));

//-----------------------------------------------------------------
//Ex 2 :
function minnum(arr)
{
   let min ;
    min=arr[0];
   for(let i=0 ;i<arr.length;i++){
       if(arr[i]<min){
           min=arr[i]
       }
   }
   return(min);
}
let  array1=[];
console.log(minnum([1,2,3,4,5]));
console.log(minnum([5,9,8,5,4]));
console.log(minnum([9,8,5,2,-1,2]));
//-----------------------------------------------------------
//EX 3:
function maxstr(arr)
{
   let max ;
    max=arr[0].length;
   for(let i=0 ;i<arr.length;i++){
       if(arr[i].length>max){
           max=arr[i].length;
       }
   }
   return(max);
}
console.log(maxstr(["murjan","sadam","assadi"]));
console.log(maxstr(["layla","lylian","ahmad"]));
console.log(maxstr(["aaaa","shoo","blablabla"]));
//------------------------------------------------
//EX 4:
function maxword(arr)
{
   let max , word ;
    max=arr[0].length;
   for(let i=0 ;i<arr.length;i++){
       if(arr[i].length>max){
           word=arr[i];
       }
   }
   return(word);
}
console.log(maxword(["murjan","sadam","assadi"]));
console.log(maxword(["layla","lylian","ahmad"]));
console.log(maxword(["aaaa","shoo","blablabla"]));
//--------------------------------------------------
//Ex 5:
function maxnumavg(arr)
{
   let avg ;
   let sum=0 ,count=0 ;
   for(let i=0 ;i<arr.length;i++){
       sum+=arr[i];
   }
   avg=sum/arr.length;
   for(let j=0;j<arr.length;j++){
       if(arr[j]>=avg){
           count+=1
       }
   }
   return(count)
}
console.log(maxnumavg([1,2,3,4,5]));
console.log(maxnumavg([5,9,8,5,4]));
console.log(maxnumavg([9,8,5,2,1,2]));
//----------------------------------------------------------------
//Ex 6:
function prime(num) {
    
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count += 1
        }
    }
    if (num == 1) { return (true) };
     if (count == 2) {
        return (true);
    }
    
    else {
        return (false);
    }
}
console.log(prime(7));
console.log(prime(15));
console.log(prime(1));
//----------------------------------------------
//Ex 7:
function prime(num) {
    
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count += 1
        }
    }
    if (num == 1) { return (true) };
     if (count == 2) {
        return (true);
    }
    
    else {
        return (false);
    }
}
function allprime(arr){
    let count1=0 ;
    for(let i=0;i<arr.length;i++){
       if(prime(arr[i])==true) {
           count1+=1;
       }
    }
    if(count1==arr.length){
        return(true);
    }
    else{
        return(false);
    }
}
console.log(allprime([7,11,13,17]));
console.log(allprime([5,9,8,5,4]));
console.log(allprime([9,8,5,2,1,2]));



