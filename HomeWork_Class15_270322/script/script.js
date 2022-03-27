//ex1:
var names = [], reversed = [] ,m=4;
for (var i = 0; i < 5; i++) {
    names[i] = prompt("Please enter the name");
}
document.write("the fisrt and the last name you enter: ", names[0], ",", names[4]);
alert("the fisrt and the last name you enter: " + names[0] + "," + names[4])
for (var j = 0; j < 5; j++) {
    alert(names[j], "/n");
}
for (var j = 0; j < 5; j++) {
    reversed[j] = names[m];
    m=m-1
   
}
alert(reversed);
//----------------------------------------------------------
//ex2:
var fruits = [];
for (var i = 0; i < 4; i++) {
    fruits[i] = prompt("enter the name of fruit");
}
alert(fruits[0]);
alert(fruits[1]);
alert(fruits[2]);
alert(fruits[3]);
for (var i=0;i<4;i++) {
    alert(fruits[i]);
}
//----------------------------------------------------------
//ex3:
var grades = [], count = 0, illegal = [];
for (var i = 0; i < 10; i++) {
    grades[i] = +prompt("הכניסו הציונים");
}
for (i = 0; i < 10; i++) {
    if (grades[i] >= 0 && grades[i] <= 100) {
        count = count + 1;
    }
    else {
        illegal[i] = [grades[i]];
    }
}
if (count == 10) {
    alert("כל הציונים חוקיים");
}
else {
    alert("לא כל הצינים חוקיים" + illegal);
}
//--------------------------------------------------------
//ex4:
var numbers = [], reversed = [], sum = 0, count = 0, avg = 0, max, min;
for (var i = 0; i < 20; i++) {
    numbers[i] = Math.floor(Math.random() * 101) + 1;
}
alert("המערך בסדר רגיל: " + numbers);
for (var j = 0; j < 20; j++) {
    reversed[20 - j] = numbers[j];
    count = count + 1;
    sum = sum + numbers[j];

}
alert("המערך בסדר הפוך : " + reversed);
avg = sum / count;
max = Math.max.apply(Math, numbers)
min = Math.min.apply(Math, numbers)
alert("סכום כל המספרים : " + sum);
alert("ממוצע כל המספרים : " + avg);
alert("המספר המקסימלי : " + max);
alert("המספר המינימלי : " + min);
//------------------------------------------------------------
//ex20:
var number,printed="";
number=+prompt("enter your number");
for(var i=0 ;i<number;i++){
    for(var j=1;j<=i+1;j++){
        printed+=j;
    }
    printed+="\n";
}
alert(printed);
//------------------------------------------------------------
//ex21:
var number,printed="";
number=+prompt("enter your number");
for(var i=0 ;i<number;i++){
    for(var j=1;j<=number;j++){
        printed+=j;
    }
    printed+="\n";
}
alert(printed);
//-------------------------------------------------------------
//ex22:
var arry = [], num; i = 0;
num = +prompt("enter your number");
while (num > 0) {
    while (num > 0) {
        arry[i] = num;
        num = num - 1;
        i = i + 1;

    }
    alert(arry);
    arry.length = 0;
    i = 0;
    num = +prompt("enter your number");

}
//---------------------------------------------------------
//אתגר שאלה 1 :
var num, str = "";
num = +prompt("enter your number");
for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j++) {
        str += "*";
    }
    str += "\n";
}
alert(str);
//--------------------------------------------------------
//אתגר שאלה 2  :
var num1, str = "", num2;
num1 = +prompt("enter your width");
num2 = +prompt("enter your Length");
for (var i = 0; i < num1; i++) {
    for (var j = 0; j < num2; j++) {
        str += "*";
    }
    str += "\n";
}
alert(str);

