function idvalidate(){
    let idnumber=[]
    let number=[1,2,1,2,1,2,1,2];
    sum=0;
    for(var i =0;i<8;i++){
        idnumber[i] =(document.getElementById("idnumber").value[i])*number[i];
    }
    for(var j=0;j<8;j++){
        if (idnumber[j]<10){
            sum=sum+idnumber[j]
        }
        else{
            sum=sum+(idnumber[j]%10)+1
        }
    }
     var finalnumber=10-(sum%10);
     if(finalnumber==document.getElementById("idnumber").value[8])
     alert(true)
     else{
         alert(false);
     }
    ///////////////////////////////////// email validate:
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value))
    {}
      else{
        alert("You have entered an invalid email address!")
        }
    /////////////////////////////////////// age :
    if(document.getElementById("email").value<0 ||document.getElementById("age").value>130) 
    alert("your age is incorrect")
    //////////////////////////////////// name:
    var l 
    l=document.getElementById("name").value.length
    if(l<2||l>9)
    {
        alert("your name is incorrect")
    }
}