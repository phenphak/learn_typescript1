let text;
text = "Hello World";
console.log(text);
console.log("---------------------------------------------------------------------------------------");
//template string 1
console.log("template string 1 test");
console.log("ทดลองสร้ำง string อะไรก็ได้มำ 1 ตัวและทดลองใช้ function length ที่หำควำมยำวของ string");
let message = new String("Hello");
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
let message1 = "world";
let message2 = `Hello ${message1}`;
console.log(message2);
console.log("-------------------------------------------------------");
//template string 2
console.log("template string 2 test");
console.log("ทดลองเปลี่ยน string microsoft excel’ ให้เป็นตัวใหญ่ทั้งหมด");
console.log("microsoft excel".toUpperCase());
console.log("ทดลองเปลี่ยน string GOOGLE AND APPLE’ ให้เป็นตัวเล็กทั้งหมด");
console.log("GOOGLE AND APPLE".toLowerCase());
console.log("ทดลองเปลี่ยน string hello world’ โดยที่ให้ตัวอักษร h และ w เป็นตัวใหญ่");
let str = "hello world";
str =
    "H" +
        str[1] +
        str[2] +
        str[3] +
        str[4] +
        str[5] +
        "W" +
        str[7] +
        str[8] +
        str[9] +
        str[10];
console.log(str);
console.log("------------------------------------------------------------");
//Number
console.log("Number 1");
console.log("ทดลองแปลงจำนวนตำมนี้ให้อยู่ในรูปแบบ e ");
let a = 1000000;
console.log(a == 1e6);
let b = 10000000;
console.log(b == 1e7);
let c = 43000000000;
console.log(c == 43e9);
let d = 0.000012;
console.log(d == 12e-6);
let e = 0.0000001234;
console.log(e == 1234e-10);
console.log("ทดลองแปลงจำนวน e ให้อยู่ในรูปแบบจำนวนปกติ");
let aa = 1e10;
console.log(aa == 10000000000);
let bb = 2e5;
console.log(bb == 200000);
let cc = 122e8;
console.log(cc == 12200000000);
let dd = 1e-8;
console.log(dd == 0.00000001);
let ee = 12e-5;
console.log(ee == 0.00012);
let num = 1.23456;
console.log(Math.floor(num * 100) / 100);
console.log("------------------------------------------------------------");
console.log("Number 2");
console.log("ทดลองประกาศเลขต่อไปนี้ให้อยู่ในรูปฐาน 8");
let a2 = 100;
console.log(a2.toString(8));
let b2 = 111;
console.log(b2.toString(8));
let c2 = 55;
console.log(c2.toString(8));
let d2 = 21;
console.log(d2.toString(8));
let e2 = 99;
console.log(e2.toString(8));
console.log("ทดลองประกาศเลขต่อไปนี้ให้อยู่ในรูปฐาน 16");
let aa2 = 100;
console.log(a2.toString(16));
let bb2 = 111;
console.log(b2.toString(16));
let cc2 = 55;
console.log(c2.toString(16));
let dd2 = 21;
console.log(d2.toString(16));
let ee2 = 99;
console.log(e2.toString(16));
console.log("ทดลองใช้ function math.round ในกำรปัดเศษจำนวนต่อไปนี้");
let aaa2 = 12.423;
console.log(Math.round(aaa2));
let bbb2 = 31313.135;
console.log(Math.round(bbb2));
let ccc2 = 42.809;
console.log(Math.round(ccc2));
console.log("-----------------------------------------------------");
console.log("ให้เขียน function random(min, max) ที่จะ random เลข float ตั้งแต่ min จนถึง max มำให้เรา (ไม่รวม m ax)");
function random(min, max) {
    let num = max - min;
    return Math.random() * num + min;
}
for (let i = 0; i < 5; i++) {
    console.log(random(50, 100));
}
console.log("-------------------------------------------------------------------");
console.log("Boolean");
console.log("1.ทดลองประกำศ A เป็น False B เป็น True และ C เป็น False");
let A = false;
let B = true;
let C = false;
console.log("2.จากข้อ 1 ถ้าเกิดนำมาเขียนในกรณี (A || (B && C)) คำตอบที่ได้คืออะไร");
let result = A || (B && C);
console.log(result);
console.log("3.จากข้อ 1 ถ้าเกิดนำมาเขียนในกรณี (B || (A || C)) คำตอบที่ได้คืออะไร");
let result1 = B || A || C;
console.log(result1);
console.log("4.จากข้อ 1 ถ้าเกิดนำมาเขียนในกรณี 1.(B && (A || C)) คำตอบที่ได้คืออะไร");
let result3 = B && (A || C);
console.log(result3);
console.log("--------------------------------------------------------------");
console.log("ตัวแปรและประเภทของข้อมูลอื่นๆ");
console.log("1.ทดลองใช้ typeof เพื่อเช็คประเภทของตัวแปรต่อไปนี้");
console.log(typeof false);
console.log(typeof "ABC");
console.log(typeof 113113);
console.log(typeof null);
console.log(typeof "");
console.log(typeof "13qed");
console.log("1.จงแปลงค่าของ String '230' ให้เป็น number แล้ว print ออกมา");
let number = Number("230");
console.log(number);
console.log("2. จงแปลงค่าจอง Number 230 ให้เป็น String แล้ว print ออกมา ");
let str2 = String(230);
console.log(typeof str2);
console.log(str2);
console.log("3. จงเขียน code เพื่อหา 3 ยกกำลัง 4 แล้ว print ออกมาก");
let value = Math.pow(3, 4);
console.log(value);
console.log("4. จงเขียน code เพื่อให้ ค่า x เท่ากับ 6 แล้วนำ x มาคูณ 20 โดยใช้การดำเนินการแบบย่อ");
let x = 6;
x *= 20;
console.log(x);
console.log("------------------------------------------------------------------------");
console.log("Object");
console.log("1.ประกาศ Object ชื่อ student โดยมี property อะไรก็ได้ 5 ชนิด (boolean, string,number,object");
let student = {
    name: "somjai",
    age: 15,
    isSingle: true,
    "computer skill": null,
    size: {
        weight: 35,
        height: 160
    }
};
console.log(student);
console.log("2.จากนั้น ทำกำร Clone Object โดยการใช้ Assign ออกมาให้เป็น student2 และทำการเปลี่ยน ค่า property อันนึงของ student2 ให้กลายเป็น null");
let student2 = student;
student2.age = null;
console.log(student2);
console.log("3.ทำการ วน loop ให้ print key และ value ของ student2 ทั้งหมดออกมา");
for (let str in student2) {
    console.log(str);
    console.log(student2[str]);
}
console.log("4.ทำการเพิ่ม property ของ student เป็น property ชื่อว่า isActive โดยมีค่าเป็น true");
student["isActive"] = true;
console.log(student);
console.log("5.ทำกำรลบ property isActive ทิ้งซะ");
delete student["isActive"];
console.log(student);
console.log("-------------------------------------------------------------------------");
console.log("1.ผลลัพธ์ของความยาว array คืออะไร");
let fruits = [" Apples", " Pear", " Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(fruits.length);
console.log("----------------------------------------------------------------------");
console.log("1.กำหนด String ทีประกอบไปด้วย “Apple, Cat, Zoo, Bird, Dog” ให้นำ String ทีประกอบไปด้วยคำ 5 คำแยกออกมาแล้วเก็บลงใน array ทีชื่อว่า input โดยต้องเรียงลำดับตามตัวอักษร");
let animalAndFruit = 'Apple,Cat,Zoo,Bird,Dog';
let input = animalAndFruit.split(',');
input.sort();
console.log(input);
console.log("2.มี Array ทีประกอบไปด้วย [123, 132, 423, 423, 12345, 5343, 52, 10904, 64] จงแสดงค่าจาก array ออกมาโดยที่ค่านั้นต้องขึ้นต้นด้วยเลข 1 เท่านั้น");
let arr = [123, 132, 423, 423, 12345, 5343, 52, 10904, 64];
let someArr = arr.sort();
let someArr1 = someArr.slice(0, 4);
console.log(someArr1);
console.log("3.[“Apple”, “Mango”, “Cat”, “Banana”]มี 1 element ทีไม่เข้าพวก จงใช้วิธีการ splice  และแทนทีค่านั้นด้วยคำว่า “Orange”  หลังจากนั้น ให้sort element ตำมล ำดับ Alphabet");
let fruit = ["Apple", "Mango", "Cat", "Banana"];
fruit.splice(2, 1, "Orange");
fruit.sort();
console.log(fruit);
console.log("4.ลองใช้ map");
let fruit2 = ["Apple", "Mango", "Cat", "Banana"];
let map = fruit2.map(item => item.length);
console.log(map);
console.log("5.ลองใช้ filter");
let filter = fruit2.filter(item => item.startsWith("A"));
console.log(filter);
console.log("6.ลองใช้ find");
let find = fruit2.find(item => item.endsWith("a"));
console.log(find);
console.log("7.ลองใช้ foreach");
let f = fruit2.forEach(function (item) {
    console.log(item);
});
console.log("-------------------------------------------------------------------");
console.log("จำนวนเฉพาะ");
console.log("1.ทดลองเขียน Arrow Function ในการรับค่า input เพื่อคำนวณหา พื้นที่ของสี่เหลี่ยมผืนผ้า");
let rectangle = (width, long) => width * long;
console.log(rectangle(5, 10));
console.log("2.ทดลองเขียน Arrow Function ในการรับค่า input เพื่อคำนวณหา จำนวนเฉพาะ");
let primeNumber = (num) => {
    if (num % 2 == 0 && num != 2) {
        console.log(`${num} : isn't prime number`);
    }
    else {
        console.log(`${num} : is prime number`);
    }
};
primeNumber(5);
//# sourceMappingURL=app.js.map