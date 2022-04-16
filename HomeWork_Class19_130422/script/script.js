let count=0 , sum=0 ,avg;
function additeam(){
    let name=document.getElementById("Sname");
    let score=document.getElementById("Sscore");
    let table=document.getElementById("tablebody");
    ///////////
    let tablerow=document.createElement("tr");
    let tabledata1=document.createElement("td");
    let tabledata2=document.createElement("td");
    let namestudent=document.createElement("label");
    let scourstudent=document.createElement("label");
    if(name.value==""||name.value==null||score.value==""||score.value==null){
        alert("You have an empty value");
    }
    else{
        sum=sum+Number.parseInt(score.value);
        count=count+1
        avg=sum/count;
        let x=document.getElementById("numcount");
        x.innerHTML=count;
        let y=document.getElementById("numavg");
        y.innerHTML=avg;
        namestudent.textContent=name.value;
        scourstudent.textContent=score.value;
        tabledata1.appendChild(namestudent);
        tabledata2.appendChild(scourstudent);
        tablerow.appendChild(tabledata1);
        tablerow.appendChild(tabledata2);
        table.appendChild(tablerow);

        name.value="";
        score.value="";

    }
   
}