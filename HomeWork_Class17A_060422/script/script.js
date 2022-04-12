function ValidateEmail(mail) 
{
 var array=[],testarry=[] ,localarray=[], countA=0 ,domnarry=[],countfinal=0;//countA=>@ 
 array=mail.split("");
 if(array.length>65){//length mail
   testarry.push(false)
   
 }
for(var i=0;i<array.length;i++){
    if(array[i]=="@"){
        countA+=1;
    }
    if(array[i]==" "& (array[i-1]!='"'|| array[i+1]!='"')){  // spaces with out ""
        testarry.push(false);
    }
}
// local mail
if(countA==1){
for(var j=0 ;j<array.length;j++){
    if(array[j]!="@"){
    localarray.push(array[j]);}
    if(array[j]=="@")
    break;
    
}
// alert(localarray);
/////////////
if(countA>1){ ////countA=>@ if the mail have more @
    testarry.push(false);
}
if(countA==0){//(no @ character)
    testarry.push(false);
}
// the domain part of mail
for(var domain=0 ;domain<array.length;domain++){
    if(array[domain]=="@"){
        for(var subdomain=domain;subdomain<array.length;subdomain++){
            domnarry.push(array[subdomain]);}
        }    
}

}
// (Underscore is not allowed in domain part) 
for(var under=0;under<domnarry.length;under++){
    if(domnarry[under]=="_"){
        testarry.push(false);
    }
}
//////////////////
// none of the special characters in this local-part are allowed outside quotation marks
var character=["!","#","$","%","&","'","*","+","-","/","=","?","^","_","`","{","|","}","~"];
for(var m=0;m<localarray.length;m++){
    for(var k=0 ;k<character.length;k++){
        if(localarray[m]==character[k]){
            if (localarray[m-1]!='"'|| localarray[m+1]!='"'){  // spaces with out ""
                testarry.push(false);
            } 
        }
    }
}
//test invalid email addresses:
for(var final=0;final<testarry;final++){
    if(testarry[final]=false){
        countfinal=countfinal+1;
    }
}
if(countfinal==testarry.length){
    return true;
}
else{
    return false
}
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
var mail ;
mail='murjan.assadi@gmail.com'
x=ValidateEmail(mail)
alert(x);




//////////////////////////////////////////////////
//
// function Emailtovalidate(mail) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }