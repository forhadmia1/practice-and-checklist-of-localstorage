// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে। ,
setTimeout(() => {
    console.log('I am showing after 3.5s')
}, 3500);

// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও

// const inputAdd=()=>{
//     const input= prompt('Please input a number.')
//     const result = parseFloat(input) +200;
//     return result;
// }
// console.log(inputAdd());

// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 

// const doAgree = confirm('Will you show your website location?')
// if(doAgree){
//     console.log(location.href)
// }

// ৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো। 
/*
cookies are a text file with small pices of data.
cookies are used for improve your web experiences.
cookies are used for identify you and your network. cookies are stored your data like login info and previous browsing data. if you close the page and reopen then it call itself. there are different type of cookies magic cookie and http cookie. cookies are used for session management, personalization and tracing.
*/

// ৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )
/*
lacolstorage data does not expire.
sessionstorage data is cleared when the tab is ends.

the data localstorage persist until explecitly delete.
the data sessionstorage are available for current tab, if tab closed data is delete.

The storage capacity of local storage is 5MB/10MB.
The storage capacity of session storage is 5MB

when the browser closed and reopen the localstorage data is saved.
when the browser closed and reopen the sessionstorage data is cleared and create a new session.

*/

// ৬. জাভাস্ক্রিপ্ট এর কোড কিভাবে ব্রাউজারের মধ্যে রান করে। দরকার হলে গুগল বা ইউটিউবে সার্চ দিয়ে একটু ভালো করে দেখে রাখো। 
/*tBrowser যখন কোন javascript code পায় সে সেগুলোকে v8 engine এর কাছে পাঠায়। v8 engine source code গুলো নিয়ে parse করে abstract tree তৈরি করে। এবং just in time compiler কোড গুলকে machine code এ convert করে, তারপর code গুলো run হয়। এবং আমরা output দেখতে পাই। */

// ৭. জাভাস্ক্রিপ্ট এর কোন কোন জিনিস asynchronous সেটার একটা লিষ্ট গুগলে সার্চ দিয়ে বের করে ফেলো। এবং এই asynchronous বলতে কি বুঝায় সেটাও দেখে রাখো। 

/* asynchronous=
1. fetch
2.settimeout
3.setinterval
4. callback function
5. async await
6.promise

*/

// ৮. event loop লুপ কি জিনিস। এই রিলেটেড পুরা জিনিসটা আজকে অনেকেই বুঝবে না। তাও আরেকবার দেখে রাখবে। 
/*javascript একটি single thread programming language. call stack line by line কোড চেক করে এবং ফাংশন গুলকে call stack এ যোগ করে। যখন কোন ফাংশন এর কাজ শেষ হয় সেটা stack থেকে remove হয়ে যায়। যদি asynchronus ফাংশন হয় তাহলে সেটাকে call stack থেকে web api এ প্রক্রিয়াকরণের জন্য পাঠানো হয় এবং call stack অন্য ফাংশন নিয়ে কাজ করতে থাকে। web api এ কাজটি ফেরত পাঠানোর জন্য নির্দিষ্ট সময় পর্যন্ত অপেক্ষা করে। তারপর সেটা event queue তে জমা হয় এবং event loop ক্রমাগত দেখে call stack খালি কিনা। খালি থাকলে, event queue থেকে একটা করে ফাংশন call stack যোগ করে। যদি এটি না হয়, তাহলে বর্তমান ফাংশন কল প্রক্রিয়া চলতে থাকে। */

// ৯.১ একটা সিম্পল ওয়েবসাইট বানাও। সেখানে দুইটা ইনপুট ফিল্ড থাকবে। একটা ফিল্ডে লিখবে প্রোডাক্ট এর নাম। আর সেকেন্ড ইনপুট ফিল্ডে থাকবে প্রোডাক্ট এর প্রাইস। তারপর একটা বাটন থাকবে। সেই বাটনে চাপ দিলে। প্রোডাক্ট এর নাম আর দাম ব্রাউজারের লোকাল স্টোরেজে সেইভ হয়ে যাবে। এবং চাইলে একাধিক প্রোডাক্ট এবং সেটার দাম লোকাল স্টোরেজে সেইভ করতে পারবে। 
// ৯.২ যখন একটা প্রোডাক্ট এবং দাম লোকাল স্টোরেজে সেভ করবে। সেটা ওয়েবসাইট এ ও দেখাবে। এমনকি যদি ওয়েবসাইট নতুন করে লোড করে করে তাহলেও লোকাল স্টোরেজে এ সেভ হয়ে থাকা ডাটা থেকে বের করে এনে ওয়েবসাইট এ দেখাবে। 
const addToCart = ()=>{
    const name = document.getElementById('name');
    const nameValue = name.value;
    const price = document.getElementById('price');
    const priceValue = price.value;
    name.value='';
    price.value='';
    display(nameValue,priceValue)
    getCart();
    addStorage(nameValue, priceValue)
}

const display =(name,price)=>{
    const list = document.getElementById('list');
    const li = document.createElement('li')
    li.innerHTML=`<p>${name}: ${price}</p>`
    list.appendChild(li)
}

const getCart =()=>{
    const getcart = localStorage.getItem('cart');
    let cart;
    if(getcart){
       cart =JSON.parse(getcart); 
    }else{
        cart ={};
    }
    return cart;
}

const addStorage= (name,price)=>{
    const cartItem= getCart();
    cartItem[name]= price;
    const cartJson = JSON.stringify(cartItem);
    localStorage.setItem("cart",cartJson)
}

const showCart = ()=>{
    const cartItem= getCart()
    for(const item in cartItem){
        console.log(item)
        display(item, cartItem[item]);
    }
}
showCart();

const youtube = ()=>{
    location.assign('https://www.youtube.com/watch?v=W8AeMrVtFLY')
}

// ১১. stackoverflow নামে একটা ওয়েবসাইট আছে। সেখানে গিয়ে একাউণ্ট খুলবে। এবং মিনিমাম ৩০ মিনিট সেখানে স্পেন্ড করবে। দেখবে কিভাবে কি উত্তর দেয়। 
//done