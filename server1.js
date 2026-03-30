const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/arman-store')
.then(async ()=>{
  console.log("MongoDB Connected");
  await seedProducts();
})
.catch(err=>console.log(err));

const Product = mongoose.model('Product',{
  name:String,
  price:Number,
  category:String,
  image:String
});

async function seedProducts(){
  await Product.deleteMany({});

  await Product.insertMany([

  // ================= TISSUES =================
  {name:"Premier Box Tissue (4in1)",price:240,category:"Tissues",image:"https://filebroker-cdn.lazada.com.my/kf/S13d7ce876ebb4ed086358d6f4b66a684C.jpg"},
  {name:"Jackson Flower Tissue",price:75,category:"Tissues",image:"https://5.imimg.com/data5/SELLER/Default/2022/4/FX/QL/XK/140506039/jackson-facial-tissue-paper-500x500.jpg"},

  // ================= TOILET ROLL =================
  {name:"Selpak Toilet Roll (9in1)",price:480,category:"Toilet Roll",image:"https://img.drz.lazcdn.com/static/lk/p/ff63794348375c553e71ea7fda69a793.jpg"},
  {name:"Selpak Toilet Roll (14+4)",price:960,category:"Toilet Roll",image:"https://m.media-amazon.com/images/I/41uc4eVG89L._AC_.jpg"},
  {name:"Selpak Toilet Roll (16in1)",price:1050,category:"Toilet Roll",image:"https://m.media-amazon.com/images/I/71iNnk7T98L._SL1500_.jpg"},
  {name:"Pesao Toilet Roll (10in1)",price:220,category:"Toilet Roll",image:"https://5.imimg.com/data5/SELLER/Default/2025/7/523758548/XC/AA/LK/29526494/paseo-toilet-paper-roll-500x500.jpeg"},
  {name:"Origami Toilet Roll (10in1)",price:250,category:"Toilet Roll",image:"http://rukmini1.flixcart.com/image/300/300/ksc46fk0/toilet-paper-roll/f/z/r/so-soft-3-ply-toilet-paper-tissue-roll-10-in-1-pack-of-2-20-original-imag5xqsrdt4hwzk.jpeg"},

  // ================= KITCHEN ROLL =================
  {name:"Selpak Kitchen Roll (2in1)",price:180,category:"Kitchen Roll",image:"https://media.naheed.pk/catalog/product/cache/ff36c7bc52e2e5dbc63cd67fba513679/1/1/1112362-1.jpg"},
  {name:"Selpak Kitchen Roll (3in1)",price:280,category:"Kitchen Roll",image:"https://media.naheed.pk/catalog/product/cache/ff36c7bc52e2e5dbc63cd67fba513679/1/1/1128592-1.jpg"},
  {name:"Selpak Kitchen Roll (4in1)",price:450,category:"Kitchen Roll",image:"http://rukmini1.flixcart.com/image/300/300/jqqy6q80/kitchen-roll/h/e/q/10-7-4-3-selpak-original-imafcz3jymxbdsfg.jpeg"},
  {name:"Selpak Kitchen Roll (6in1)",price:650,category:"Kitchen Roll",image:"https://m.media-amazon.com/images/I/41ntoadDnyL._AC_.jpg"},

  // ================= MOP =================
  {name:"Sony Mop",price:180,category:"Mop",image:"https://5.imimg.com/data5/SELLER/Default/2021/10/YX/AI/QE/52144457/sony-mop-white-and-colour-500x500.JPG"},
  {name:"Vento Mop",price:120,category:"Mop",image:"https://5.imimg.com/data5/SELLER/Default/2023/11/361946569/HV/HW/PT/3932361/cm0233-vento-round-mop-1000x1000.jpg"},
  {name:"Cotton King Mop",price:200,category:"Mop",image:"https://5.imimg.com/data5/SELLER/Default/2023/11/361953650/LS/XN/IB/3932361/9-cm0202-cotton-clip-mop-1000x1000.jpg"},
  {name:"Kent Mop",price:550,category:"Mop",image:"https://5.imimg.com/data5/JJ/NT/MY-909791/kent-mop-with-handle-1000x1000.jpg"},
  {name:"White Dry Clean Mop",price:180,category:"Mop",image:"https://dms.mydukaan.io/original/webp/media/e5649d22-b1cd-428b-9784-cf5305b8741c.jpg"},
  {name:"Sony Refill",price:150,category:"Mop",image:"https://5.imimg.com/data5/NU/GI/EM/SELLER-81061838/cotton-mop-refill-500x500.jpg"},

  // ================= WIPER =================
  {name:"Samarthya Wiper",price:200,category:"Wiper",image:"https://5.imimg.com/data5/ANDROID/Default/2023/1/GF/OP/BM/7061681/product-jpeg-1000x1000.jpg"},

  // ================= BROOM =================
  {name:"Jet Clean Broom",price:150,category:"Broom"},
  {name:"Mal Broom",price:130,category:"Broom"},
  {name:"Diamond Broom",price:150,category:"Broom"},
  {name:"Royal Broom",price:150,category:"Broom"},
  {name:"Rainbow Broom",price:70,category:"Broom"},

  // ================= ROOM FRESHNER =================
  {name:"Air First Lemon",price:100,category:"Room Freshner",image:"https://5.imimg.com/data5/SELLER/Default/2022/9/QT/TV/TK/133323768/airfirst-room-freshner1-1000x1000.jpg"},
  {name:"Air First Kiwi",price:100,category:"Room Freshner",image:"https://5.imimg.com/data5/SELLER/Default/2022/11/YB/GN/UP/159868936/air-first-kiwi-room-freshener-1000x1000.jpeg"},
  {name:"Air First Rose",price:100,category:"Room Freshner",image:"https://5.imimg.com/data5/SELLER/Default/2023/1/UX/CG/RJ/116732292/img20230114130634-500x500.jpg"},
  {name:"Air First Bloosom",price:100,category:"Room Freshner",image:"https://5.imimg.com/data5/SELLER/Default/2021/8/SN/OZ/CD/74330740/air-first-blossom-air-freshener-500x500.jpg"},
  {name:"Air First Blush Pink",price:100,category:"Room Freshner",image:"http://rukmini1.flixcart.com/image/300/300/k7tdj0w0/air-freshener/y/z/f/300-room-freshener-pink-blush-300-ml-pack-of-1-liquid-air-sure-original-imafpys36vmyzsuc.jpeg"},
  {name:"Air First Sandal",price:100,category:"Room Freshner",image:"https://5.imimg.com/data5/SELLER/Default/2023/1/AZ/QG/YK/9252574/sandal-freshener-1672653776611-1000x1000.jpg"},
  {name:"Air First Green Apple",price:100,category:"Room Freshner",image:"https://5.imimg.com/data5/LX/ZX/FL/SELLER-26706623/ginger-tea-room-air-freshener-500x500.jpg"},
  {name:"Air First Aqua",price:100,category:"Room Freshner",image:"https://5.imimg.com/data5/SELLER/Default/2024/7/434712896/RW/YK/LG/24351232/room04-1000x1000.jpg"},
  {name:"Airodo Fruity Punch",price:140,category:"Room Freshner",image:"http://airodo.in/cdn/shop/files/fruity_punch.jpg?v=1723092848"},
  {name:"Airodo Magic Rose",price:140,category:"Room Freshner",image:"https://5.imimg.com/data5/SELLER/Default/2023/9/346861288/KF/OB/DD/70884855/capture-500x500.jpg"},
  {name:"Airodo Citrus Blast",price:140,category:"Room Freshner",image:"https://5.imimg.com/data5/SELLER/Default/2025/1/485340870/IQ/GP/KX/132022751/airodo-air-freshener-room-fershner-with-dual-technology-spray-250ml-500x500.png"},
  {name:"Airodo Fragrance Cone Rose",price:150,category:"Room Freshner",image:"https://rukminim2.flixcart.com/image/300/300/xif0q/air-freshener/d/k/h/1-cone-air-freshener-rose-gel-airodo-original-imagte2gxef35wyy.jpeg?q=90"},
  {name:"Airodo Fragrance Cone Sandal",price:150,category:"Room Freshner",image:"http://airodo.in/cdn/shop/files/1_190317aa-6597-4c2f-ae01-97031b26a2f7.jpg?v=1716961570"},
  {name:"Airodo Fragrance Cone Jasmine",price:150,category:"Room Freshner",image:"http://airodo.in/cdn/shop/collections/1-05.jpg?v=1709104568"},
  {name:"Airodo Pocket Magic Rose",price:55,category:"Room Freshner",image:"https://m.media-amazon.com/images/I/41Rv7Vm3b-L.jpg"},
  {name:"Airodo Pocket Magic Rose",price:330,category:"Room Freshner",image:"https://m.media-amazon.com/images/I/41Rv7Vm3b-L.jpg"},
  {name:"Airodo Pocket Fruity Punch",price:55,category:"Room Freshner",image:"http://airodo.in/cdn/shop/files/c_c553e5bb-322f-43ab-83c8-0f2cf6948a5a.jpg?v=1721117754"},
  {name:"Airodo Pocket Fruity Punch",price:330,category:"Room Freshner",image:"http://airodo.in/cdn/shop/files/c_c553e5bb-322f-43ab-83c8-0f2cf6948a5a.jpg?v=1721117754"},

  // ================= HANDWASH =================
  {name:"Happy Hands Lemon (1L)",price:130,category:"Handwash"},
  {name:"Happy Hands Green Apple (1L)",price:130,category:"Handwash"},
  {name:"Happy Hands Rose (1L)",price:130,category:"Handwash"},
  {name:"Happy Hands Sandal (1L)",price:130,category:"Handwash"},
  {name:"Happy Hands Peech (1L)",price:130,category:"Handwash"},
  {name:"Happy Hands Rose (5L)",price:400,category:"Handwash"},

  // ================= FLOOR CLEANER =================
  {name:"Eco-G Lemongrass (1L)",price:140,category:"Floor Cleaner",image:"https://5.imimg.com/data5/SELLER/Default/2025/1/482978743/AP/XU/DC/37498434/1l-eco-g-lemon-grass-natural-floor-cleaner-500x500.jpeg"},
  {name:"Eco-G Lemongrass (5L)",price:480,category:"Floor Cleaner",image:"https://5.imimg.com/data5/SELLER/Default/2025/1/482978743/AP/XU/DC/37498434/1l-eco-g-lemon-grass-natural-floor-cleaner-500x500.jpeg"},
  {name:"Swoop Rose (1L)",price:120,category:"Floor Cleaner",image:"https://www.bigbasket.com/media/uploads/p/xl/40310345_1-swoop-disinfectant-floor-cleaner-rose.jpg"},
  {name:"Swoop Rose (5L)",price:450,category:"Floor Cleaner",image:"https://www.bigbasket.com/media/uploads/p/xl/40310345_1-swoop-disinfectant-floor-cleaner-rose.jpg"},
  {name:"Swoop Citrus (1L)",price:120,category:"Floor Cleaner",image:"https://www.bbassets.com/media/uploads/p/l/40310343_1-swoop-disinfectant-floor-cleaner-citrus.jpg"},
  {name:"Swoop Citrus (5L)",price:450,category:"Floor Cleaner",image:"https://www.bbassets.com/media/uploads/p/l/40310343_1-swoop-disinfectant-floor-cleaner-citrus.jpg"},
  {name:"Suhany Hine Mogra (1L)",price:100,category:"Floor Cleaner",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/489818289/VS/JW/QZ/82032574/1-l-suhany-shine-mogra-perfumed-floor-cleaner-1000x1000.jpg"},
  {name:"Suhany Hine Orange (1L)",price:100,category:"Floor Cleaner",image:"https://5.imimg.com/data5/SELLER/Default/2025/2/489814299/PY/IO/MC/82032574/suhany-shine-deo-soft-gentle-liquid-hand-wash-1000x1000.jpg"},

  // ================= CLEANING CLOTH =================
  {name:"Dusting Cloth",price:40,category:"Cleaning Cloth",image:"http://3.imimg.com/data3/NG/VU/MY-4313617/dusting-clothes.jpg"},
  {name:"Red Line Cloth Small",price:35,category:"Cleaning Cloth",image:"https://catalog.carlislefsp.com/images/1600x1600/344417.jpg"},
  {name:"Red Line Cloth Big",price:45,category:"Cleaning Cloth",image:"https://maximmart.com/images/detailed/1/MaximMart_Microfiber_Cloth_Red.jpg"},
  {name:"Check Box Brown Cloth",price:25,category:"Cleaning Cloth",image:"https://5.imimg.com/data5/SELLER/Default/2024/2/384323574/GC/KF/YA/118140290/check-cotton-glass-washing-cloth-1000x1000.jpeg"},
  {name:"Check Box Black Cloth",price:25,category:"Cleaning Cloth",image:"https://tiimg.tistatic.com/fp/1/008/441/soft-fabric-and-check-pattern-cotton-duster-cloth-for-household-use-148.jpg"},

  // ================= GLASS =================
  {name:"Brown Ripple Paper Glass 150ml",price:50,category:"Glass",image:"https://tiimg.tistatic.com/fp/1/008/190/220-ml-eco-friendly-biodegradable-disposable-paper-glass-034.jpg"},
  {name:"Brown Ripple Paper Glass 250ml",price:75,category:"Glass",image:"https://tiimg.tistatic.com/fp/1/008/190/220-ml-eco-friendly-biodegradable-disposable-paper-glass-034.jpg"},
  {name:"Brown Ripple Paper Glass 350ml",price:100,category:"Glass",image:"https://tiimg.tistatic.com/fp/1/008/190/220-ml-eco-friendly-biodegradable-disposable-paper-glass-034.jpg"},
  {name:"Black Ripple Paper Glass 250ml",price:125,category:"Glass",image:"https://5.imimg.com/data5/SELLER/Default/2022/12/UY/CS/PP/162565043/240ml-black-ripple-glass-1000x1000.jpg"},
  {name:"Black Ripple Paper Glass 350ml",price:150,category:"Glass",image:"https://5.imimg.com/data5/SELLER/Default/2022/12/UY/CS/PP/162565043/240ml-black-ripple-glass-1000x1000.jpg"},
  {name:"Plastic Glass 350ml",price:120,category:"Glass",image:"https://5.imimg.com/data5/SELLER/Default/2022/9/KL/XD/FL/24867118/disposable-plastic-glass-1000x1000.jpeg"},
  {name:"White Small Glass 65ml",price:17,category:"Glass",image:"https://5.imimg.com/data5/SELLER/Default/2023/7/323254766/ZC/OW/SO/190310409/plain-disposable-paper-cup-1000x1000.jpg"},
  {name:"White Small Glass 80ml",price:20,category:"Glass",image:"https://5.imimg.com/data5/SELLER/Default/2023/7/323254766/ZC/OW/SO/190310409/plain-disposable-paper-cup-1000x1000.jpg"},
  {name:"White Small Glass 100ml",price:25,category:"Glass",image:"https://5.imimg.com/data5/SELLER/Default/2023/7/323254766/ZC/OW/SO/190310409/plain-disposable-paper-cup-1000x1000.jpg"},
  {name:"White Small Glass 120ml",price:30,category:"Glass",image:"https://5.imimg.com/data5/SELLER/Default/2023/7/323254766/ZC/OW/SO/190310409/plain-disposable-paper-cup-1000x1000.jpg"},

  // ================= TOILET CLEANER =================
  {name:"Swoop Toilet Cleaner (500ml)",price:65,category:"Toilet Cleaner",image:"https://www.bigbasket.com/media/uploads/p/xl/40310337_1-swoop-disinfectant-toilet-cleaner.jpg"},
  {name:"Swoop Toilet Cleaner (5l)",price:380,category:"Toilet Cleaner",image:"https://www.bigbasket.com/media/uploads/p/xl/40310337_1-swoop-disinfectant-toilet-cleaner.jpg"},
  {name:"Clenzo (5L)",price:380,category:"Toilet Cleaner",image:"https://m.media-amazon.com/images/I/31kdsAG5bYL._SX300_SY300_QL70_ML2_.jpg"},

  // ================= DISHWASH =================
  {name:"Suhany Hine Dishwash (1l)",price:100,category:"Dishwash",image:"https://5.imimg.com/data5/SELLER/Default/2020/10/JB/TE/YK/98999073/img-20200721-wa0032-500x500.jpg"},
  {name:"Swoop Dishwash (500ml)",price:65,category:"Dishwash",image:"https://www.bigbasket.com/media/uploads/p/m/40310346_1-swoop-dishwash-gel-lemon.jpg"},
  {name:"Swoop Dishwash (5l)",price:450,category:"Dishwash",image:"https://www.bigbasket.com/media/uploads/p/m/40310346_1-swoop-dishwash-gel-lemon.jpg"},
  {name:"Sparkle Dishwash (5l)",price:350,category:"Dishwash",image:"https://sparkledishwash.com/wp-content/uploads/2022/11/Sparkle-Liq2.png"},

  // ================= CLEANING SPRAY =================
  {name:"Just Clean Spray (500ml)",price:80,category:"Cleaning Spray"},
  {name:"Just Clean Spray (5l)",price:250,category:"Cleaning Spray"},

  // ================= WIPES =================
  {name:"Little Angel Wipes",price:70,category:"Wipes",image:"https://m.media-amazon.com/images/I/51Ki1TwRU1L._SL1200_.jpg"},

  // ================= FOIL =================
  {name:"Freshy Foil Paper",price:450,category:"Foil Products",image:"https://m.media-amazon.com/images/I/61WAWn+XVcL._AC_.jpg"},
  {name:"Silver Container Half",price:250,category:"Foil Products",image:"https://5.imimg.com/data5/SELLER/Default/2020/9/YJ/WO/KJ/57707995/half-deep-aluminium-container-500x500.jpg"},
  {name:"Silver Container Full",price:280,category:"Foil Products",image:"https://m.media-amazon.com/images/I/71b5qKkgxWL._AC_SL1500_.jpg"},

  // ================= GARBAGE =================
  {name:"Garbage Bag Medium",price:60,category:"Garbage Bag",image:"http://kefamart.in/wp-content/uploads/2021/06/71c7jMrDOEL._SL1500_.jpg"},
  {name:"Garbage Bag Large",price:85,category:"Garbage Bag",image:"https://m.media-amazon.com/images/I/81NEHuj-CVL._SX679_.jpg"},
  {name:"Garbage Bag XL",price:185,category:"Garbage Bag",image:"https://images-eu.ssl-images-amazon.com/images/I/517q0y5ahhL.jpg"},

  // ================= WATER =================
  {name:"Bisleri 20L",price:100,category:"Liquid",image:"https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dw64fa956e/Product%20Images_Desktop/Bisleri/Bisleri20Litre/PDP/Bisleri_1000x1000_20Ltr_01.png"},
  {name:"Bisleri 1L",price:180,category:"Liquid",image:"https://5.imimg.com/data5/PT/EN/VA/SELLER-95281799/1l-bisleri-mineral-water-500x500.jpg"}

  ]);

  console.log("ALL PRODUCTS ADDED ✅");
}

app.get('/products', async (req,res)=>{
  res.json(await Product.find());
});

app.listen(3000, ()=>console.log("Server running"));