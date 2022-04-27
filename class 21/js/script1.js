//Ex1:
document.getElementById("Save").addEventListener("click", function () {
  let mail = document.getElementById("email").value;
  let finaldate = new Date();
  finaldate.setDate(finaldate.getDate() + 1);
  document.cookie =
    "Email=" + mail + ";" + "expires=" + finaldate.toUTCString();
});

document.getElementById("Load").addEventListener("click", function () {
  let loadmail = document.cookie;
  let cut = loadmail.split(/=|;| /);
  for (let i = 0; i < cut.length; i++) {
    if (cut[i] == "Email") {
      alert(cut[i + 1]);
    }
  }
});
//------------------------
//Ex 2:
document.getElementById("Savenumber").addEventListener("click", function () {
  let number = document.getElementById("number").value;
  let finaldate = new Date();
  finaldate.setDate(finaldate.getDate() + 1);
  document.cookie =
    "Number=" + number + ";" + "expires=" + finaldate.toUTCString();
});

document.getElementById("Loadnumber").addEventListener("click", function () {
  let loadnum = document.cookie;
  let cut = loadnum.split(/=|;| /);
  for (let i = 0; i < cut.length; i++) {
    if (cut[i] == "Number") {
      alert(cut[i + 1]);
    }
  }
});
//--------------------------
//Ex 3 :
let arry=[]
document.getElementById("SavaData").addEventListener("click", function () {
  let name = document.getElementById("name1").value;
  let num = document.getElementById("number1").value;
  let email1 = document.getElementById("email1").value;
  let validInput = true;
  if (name.length < 2 || name.length > 30 || name == "") {
    validInput = false;
  }
  if (num.length < 2 || num.length > 30 || num == "") {
    validInput = false;
  }
  if (email1.length < 2 || email1.length > 30 || email1 == "") {
    validInput = false;
  }
  if (validInput) {
    let obj = { Name: name, Number: num, Email: email1 };
    arry.push(obj);
    localStorage.setItem("lestdata",JSON.stringify(arry));
}
});
