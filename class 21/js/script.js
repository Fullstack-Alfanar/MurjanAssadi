let books, Print, items;
books = [
  {
    Book_Id: "123",
    Book_Name: "mojh",
    Book_Author: "mom and dad",
    Book_Price: " 100000000",
  },
  {
    Book_Id: "123",
    Book_Name: "mojh",
    Book_Author: "mom and dad",
    Book_Price: "100000000 ",
  },
  {
    Book_Id: "123",
    Book_Name: "mojh",
    Book_Author: "mom and dad",
    Book_Price: " 100000000",
  },
];
Print = JSON.stringify(books);
console.log(Print);
items = JSON.parse(Print);
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}
//------------------
for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}
//------------
for (let i = 0; i < items.length; i++) {
  console.log(
    "Book ID: " +
      items[i].Book_Id +
      "\nBook Name: " +
      items[i].Book_Name +
      "\nBook Author :" +
      items[i].Book_Author +
      "\nBook Price :" +
      items[i].Book_Price +
      "\n----------------\n"
  );
}
//-------------------------------------
//EX 2
let myCat, print1, yourCat;
myCat = [{ Name: "Candy", Age: "1", Color: "black", Is_Sterile: "False" }];
print1 = JSON.stringify(myCat);
console.log(print1);
yourCat = JSON.parse(print1);
for (let i = 0; i < yourCat.length; i++) {
  console.log(
    "Name: " +
      yourCat[i].Name +
      "\nAge: " +
      yourCat[i].Age +
      "\nColor :" +
      yourCat[i].Color +
      "\nIs Sterile :" +
      yourCat[i].Is_Sterile +
      "\n----------------\n"
  );
}
