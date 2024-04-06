let a = `I'm MỘT STRING
 - CHUỖI`;                   
console.log(a);
console.log( 4 + 5 + 'a'); // in ra 9a 
console.log ('a' + 5 + 4); // in ra a54 
// vi th1 jvs se hieu la ta dang cong 1 so voi 1 chuoi = 4+5+a=9+a
//th2 la no cong 1 chuoi voi so = a5 + 4 = a54

//string length 
let text = `we love "Mercedes" cars `; //DÙNG ``
console.log(text.length) //7 

//STRING METHOD 
let txt = "HELLO WORLD"; 
//length 
console.log(txt.length) ;

//extracting string parts 
//slice() 
// ví dụ ta muốn lấy ra thằng world trong hello world 



//replace 
// muốn thay thằng hello bằng hi 
txt=txt.replace("HELLO", "HI");
console.log(txt) ;

//split() 
let str="Hello, My name is 22, and you?"; 
console.log(str.split(','));