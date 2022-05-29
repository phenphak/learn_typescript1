var text;
text = 'Hello World';
console.log(text);
console.log("---------------------------------------------------------------------------------------");
//template string 1
console.log("template string 1 test");
console.log("ทดลองสร้ำง string อะไรก็ได้มำ 1 ตัวและทดลองใช้ function length ที่หำควำมยำวของ string");
var message = new String("Hello");
console.log(message.length);
console.log("นำ string จำก ข้อที่ 1 มำ แล้วใช้ function charAt() เพื่อเข้ำถึง element แต่ละตัวของ string");
console.log(message.charAt(0));
console.log(message.charAt(1));
console.log(message.charAt(2));
console.log(message.charAt(3));
console.log(message.charAt(4));
console.log(message.charAt(5));
console.log("เช่นเดียวกับข้อที่ 2 ลองใช้ในรูปแบบที่เป็น [] (index) เพื่อเข้ำถึง element ของ string เช่นกัน");
console.log(message[0]);
console.log(message[1]);
console.log(message[2]);
console.log(message[3]);
console.log(message[4]);
console.log("ลองเปรียบเทียบดูว่ำ charAt() กับ [] (index) มีกำรทำงำนที่เหมือนกันหรือไม่ และมีข้อดีหรือข้อเสียอย่ำงไร");
console.log(message.charAt(20));
console.log(message[20]);
console.log("จงนำเอำ string Hello’ และ string world’ มำต่อกัน");
var message1 = 'world';
var message2 = "Hello ".concat(message1);
console.log(message2);
console.log("-------------------------------------------------------");
//template string 2
console.log("template string 2 test");
console.log("ทดลองเปลี่ยน string microsoft excel’ ให้เป็นตัวใหญ่ทั้งหมด");
console.log('microsoft excel'.toUpperCase());
console.log("ทดลองเปลี่ยน string GOOGLE AND APPLE’ ให้เป็นตัวเล็กทั้งหมด");
console.log('GOOGLE AND APPLE'.toLowerCase());
console.log("ทดลองเปลี่ยน string hello world’ โดยที่ให้ตัวอักษร h และ w เป็นตัวใหญ่");
var str = 'hello world';
str = 'H' + str[1] + str[2] + str[3] + str[4] + str[5] + 'W' + str[7] + str[8] + str[9] + str[10];
console.log(str);
console.log("------------------------------------------------------------");
//Number
console.log("Number 1");
console.log("ทดลองแปลงจำนวนตำมนี้ให้อยู่ในรูปแบบ e ");
var a = 1000000;
console.log(a == 1e6);
var b = 10000000;
console.log(b == 1e7);
var c = 43000000000;
console.log(c == 43e9);
var d = 0.000012;
console.log(d == 12e-6);
var e = 0.0000001234;
console.log(e == 1234e-10);
console.log("ทดลองแปลงจำนวน e ให้อยู่ในรูปแบบจำนวนปกติ");
var aa = 1e10;
console.log(aa == 10000000000);
var bb = 2e5;
console.log(bb == 200000);
var cc = 122e8;
console.log(cc == 12200000000);
var dd = 1e-8;
console.log(dd == 0.00000001);
var ee = 12e-5;
console.log(ee == 0.00012);
var num = 1.23456;
console.log(Math.floor(num * 100) / 100);
console.log("------------------------------------------------------------");
console.log("Number 2");
console.log("ทดลองประกาศเลขต่อไปนี้ให้อยู่ในรูปฐาน 8");
var a2 = 100;
console.log(a2.toString(8));
var b2 = 111;
console.log(b2.toString(8));
var c2 = 55;
console.log(c2.toString(8));
var d2 = 21;
console.log(d2.toString(8));
var e2 = 99;
console.log(e2.toString(8));
console.log("ทดลองประกาศเลขต่อไปนี้ให้อยู่ในรูปฐาน 16");
var aa2 = 100;
console.log(a2.toString(16));
var bb2 = 111;
console.log(b2.toString(16));
var cc2 = 55;
console.log(c2.toString(16));
var dd2 = 21;
console.log(d2.toString(16));
var ee2 = 99;
console.log(e2.toString(16));
console.log("ทดลองใช้ function math.round ในกำรปัดเศษจำนวนต่อไปนี้");
var aaa2 = 12.423;
console.log(Math.round(aaa2));
var bbb2 = 31313.135;
console.log(Math.round(bbb2));
var ccc2 = 42.809;
console.log(Math.round(ccc2));
console.log("-----------------------------------------------------");
console.log("ให้เขียน function random(min, max) ที่จะ random เลข float ตั้งแต่ min จนถึง max มำให้เรา (ไม่รวม m ax)");
function random(min, max) {
    var num = max - min;
    return Math.random() * num + min;
}
for (var i = 0; i < 5; i++) {
    console.log(random(50, 100));
}
console.log("-------------------------------------------------------------------");
//Boolean
console.log("1.ทดลองประกำศ A เป็น False B เป็น True และ C เป็น False");
var A = false;
var B = true;
var C = false;
console.log("2.จากข้อ 1 ถ้าเกิดนำมาเขียนในกรณี (A || (B && C)) คำตอบที่ได้คืออะไร");
var result = (A || (B && C));
console.log(result);
console.log("3.จากข้อ 1 ถ้าเกิดนำมาเขียนในกรณี (B || (A || C)) คำตอบที่ได้คืออะไร");
var result1 = (B || (A || C));
console.log(result1);
console.log("4.จากข้อ 1 ถ้าเกิดนำมาเขียนในกรณี 1.(B && (A || C)) คำตอบที่ได้คืออะไร");
var result3 = (B && (A || C));
console.log(result3);
//# sourceMappingURL=app.js.map