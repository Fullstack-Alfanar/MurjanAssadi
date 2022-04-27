let count = 0, sum = 0, avg;
function additeam(stdName, stdgrade) {

    let table = document.getElementById("tablebody");
    let x = document.getElementById("numcount");
    let y = document.getElementById("numavg");
    //------------------------
    let tablerow = document.createElement("tr");
    let tabledata1 = document.createElement("td");
    let tabledata2 = document.createElement("td");
    let namestudent = document.createElement("label");
    let scourstudent = document.createElement("label");
    //-------------------
    sum = sum + Number.parseInt(stdgrade);
    count++;
    avg = sum / count;
   //--------------------------
    x.innerHTML = count;
    y.innerHTML = avg;
    //---------------------
    namestudent.textContent = stdName;
    scourstudent.textContent = stdgrade;
    tabledata1.appendChild(namestudent);
    tabledata2.appendChild(scourstudent);
    tablerow.appendChild(tabledata1);
    tablerow.appendChild(tabledata2);
    table.appendChild(tablerow);

}

//-----------------------------------------------------------------------
let arr = [];
function CheckValues() {
    let name = document.getElementById("Sname");
    let score = document.getElementById("Sscore");
  
    if (!name.value == "" || name.value == null || score.value == "" || score.value == null) {
        let obj = {
            "stdName": name.value,
            "stdscore":Number.parseInt(score.value)
        };
        additeam(name.value, Number.parseInt(score.value));
        
        setItemTolocal(obj);
    }
    name.value = "";
    score.value = "";
}
//----------------------------------
function setItemTolocal(obj) {
    arr.push(obj);
    localStorage.setItem("names_score",JSON.stringify(arr));

}
//---------------------------------------
function getItemFromLocal() {
   if(localStorage.getItem("names_score")){
       arr=JSON.parse(localStorage.getItem("names_score"))
    for(let i=0 ; i<arr.length;i++){
        additeam(arr[i].stdName ,arr[i].stdscore)
    }
   }
}
getItemFromLocal();