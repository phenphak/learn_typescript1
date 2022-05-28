let text:string;
text='Hello World';
console.log(text);

console.log("---------------------------------------------------------------------------------------");

//template string 1
console.log("template string 1 test")

//1.ทดลองสร้ำง string อะไรก็ได้มำ 1 ตัวและทดลองใช้ function length ที่หำควำมยำวของ string
let message=new String("Hello");
console.log(message.length);
//2.นำ string จำก ข้อที่ 1 มำ แล้วใช้ function charAt() เพื่อเข้ำถึง element แต่ละตัวของ string
console.log(message.charAt(0));
console.log(message.charAt(1));
console.log(message.charAt(2));
console.log(message.charAt(3));
console.log(message.charAt(4));
console.log(message.charAt(5));
//3.เช่นเดียวกับข้อที่ 2 ลองใช้ในรูปแบบที่เป็น [] (index) เพื่อเข้ำถึง element ของ string เช่นกัน
console.log(message[0]);
console.log(message[1]);
console.log(message[2]);
console.log(message[3]);
console.log(message[4]);
//4.ลองเปรียบเทียบดูว่ำ charAt() กับ [] (index) มีกำรทำงำนที่เหมือนกันหรือไม่ และมีข้อดีหรือข้อเสียอย่ำงไร
console.log(message.charAt(20));
console.log(message[20]);

//5.จงนำเอำ string Hello’ และ string world’ มำต่อกัน
let message1='world';
let message2=`Hello ${message1}`;
console.log(message2);

console.log("-------------------------------------------------------")

//template string 2
console.log("template string 2 test")
//1.ทดลองเปลี่ยน string microsoft excel’ ให้เป็นตัวใหญ่ทั้งหมด
console.log('microsoft excel'.toUpperCase());
//2.ทดลองเปลี่ยน string GOOGLE AND APPLE’ ให้เป็นตัวเล็กทั้งหมด
console.log('GOOGLE AND APPLE'.toLowerCase())
//3.ทดลองเปลี่ยน string hello world’ โดยที่ให้ตัวอักษร h และ w เป็นตัวใหญ่
let str='hello world';
str='H'+str[1]+str[2]+str[3]+str[4]+str[5]+'W'+str[7]+str[8]+str[9]+str[10];
console.log(str);

console.log("------------------------------------------------------------");

//Number
console.log("Number");
//1.ทดลองแปลงจำนวนตำมนี้ให้อยู่ในรูปแบบ e
let a= 1000000;
console.log(a == 1e6);
let b=10000000;
console.log(b==1e7);
let c=43000000000;
console.log(c==43e9);
let d=0.000012;
console.log(d==12e-6);
let e=0.0000001234;
console.log(e==1234e-10);
//2.ทดลองแปลงจำนวน e ให้อยู่ในรูปแบบจำนวนปกติ
let aa=1e10;
console.log(aa==10000000000);
let bb=2e5;
console.log(bb==200000);
let cc=122e8;
console.log(cc==12200000000)
let dd=1e-8;
console.log(dd==0.00000001)
let ee=12e-5;
console.log(ee==0.00012);


