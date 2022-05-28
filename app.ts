let text:string;
text='Hello World';
console.log(text);

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

//5.จงนำเอำ string HelloHello’ และ string worldworld’ มำต่อกัน
let message1='world';
let message2=`Hello ${message1}`;
console.log(message2);
