' use strict '


// Old way
// html dan id isi bo'yicha elementlarni chaqirib olish
const box = document.getElementById('box')
// console.log(box);

// html dan tagname isi bo'yicha elementlarni chaqirib olish/. ! tagname har doim bizga massiv qaytaradi.1 ta dona elemtn bo'lsa ham.Buni o'zgartirib bo;lmaydi

const button = document.getElementsByTagName('button')
// console.log(button);

// Massiv ichidagi elementni olich uchun

const btn = document.getElementsByTagName("button")[0];
// console.log(btn);

// html dan className isi bo'yicha elementlarni chaqirib olish.Bu ham bizga massiv qaytaradi

const circles = document.getElementsByClassName('.circle')

// console.log(circles);


// New way

// Bu 1 ta element qaytaradi
const heart = document.querySelector('heart'); // bu bizga null qaytaradi.Chunki biz id, class yoki tagname bo'yicha chaqirish kerakligini aytmadik
// console.log(heart);

// Yuqoridagi xatoni tuztih

const heartsid = document.querySelector('#heart') // id bo'yicha

const heartsclass = document.querySelector('.heart') // class bo'yicha

const hearttag = document.querySelector('heart') // tag name bo'yicha

// Hamma elementni olish 

const hearts = document.querySelectorAll('.heart');

// Iteratsiya qilish forEach yordamida

// hearts.forEach((item)=>{
//     console.log(item);
// });

const wrapper = document.querySelector('.wrapper');// bu holatda querySele. butun document bo'yicha qidiradi
// console.log(wrapper);

const heartlar = wrapper.querySelector('.heart');
console.log(heartlar);