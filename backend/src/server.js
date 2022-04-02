const app = require("./index");

const connect = require("./configs/db");
const port=process.env.PORT||5700
app.listen(port, async () => {
  try {
    await connect();
    let data = [
      {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/c/2c913e6ba-nk-q10-black_1.jpg",
            title:"Boult Audio AirBass Q10 True Wireless Earbuds with 24H",
            striked_price:"7888",
            price:"778",
            off:"10% off",
            value:"2012"
          },
          {
            
            img_url:
              "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/6/867f6a2fireb00000001__1_.jpg",
            title: "Fire-Boltt Spo2 Full Touch 1.4 Inch Smartwatch 8 Days",
            striked_price: "3299",
            price: "2038",
            off: "20% Off",
            
            value:"2013"
          },
          {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/a/8a5c980amaac00000015_1.jpg",
            title:"Amazon All-new Fire TV Stick Lite with Alexa Voice Remote",
            striked_price:"2499",
            price:"2000",
            off:"10% off",
            value:"2014"
          },
          {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/d/bd7cdc1wdbu6y0015bbk-wesn_1.jpg",
            title:"WD Elements 1.5TB Portable External Hard Drive, USB 3.0,",
            striked_price:"5739",
            price:"2799",
            off:"10% off",
            value:"2015"
          },
          {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/a/3af0debFurjaden_AJ08_Black_1.jpg",
            title:"FUR JADEN AirJams GameX Bluetooth 5.2 Wireless Gaming",
            striked_price:"3000",
            price:"1299",
            off:"20% off",
            value:"2016"
          },
          {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/2/628756ePOR-1404_1.jpg",
            title:"Portronics Key4 Combo 2.4GHz Wireless Keyboard Mouse Set",
            striked_price:"1999",
            price:"1099",
            off:"10% off",
            value:"2017"
          },
          {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/2/8272a79upr10k_co_1.jpg",
            title:"URBN 10000 Mah Li-polymer Ultra Compact Power Bank",
            striked_price:"2499",
            price:"699",
            off:"20% off",
            value:"2018"
          },
          {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/c/ac65335ambra00000020__1_.jpg",
            title:"Ambrane Neobuds 33 Ear Buds Wireless With Mic Headphones",
            striked_price:"1799",
            price:"999",
            off:"20 % off",
            
            value:"2019"
          },
          {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/a/3ac5703SDSQUA4-064G-GN6MN_1.jpg",
            title:"SanDisk Ultra microSD UHS-I Card 64GB, 120MB/s R",
            striked_price:"1799",
            price:"600",
            off:"28% off",
            value:"2020"
          },
          {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/i/r/irnmnbsmm4440-1.jpg",
            title:"Macmerise Bluetooth Speaker Ironman Helmet Funk Limited",
            striked_price:"799",
            price:"500",
            off:"20% off",
            value:"2021"
          },
          {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/c/cc118d7nykboau000033__new.jpg",
            title:"Boult Audio AirBass MuseBuds True Wireless Earbuds with",
            striked_price:"5999",
            price:"2000",
            off:"30% off",
            value:"2022"
          },
          {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/3/938bb6d8908012122951__1_.jpg",
            title:"Boult Audio Airbass Combuds Bluetooth Headset (Black)",
            striked_price:"4999",
            price:"2000",
            off:"10% off",
            value:"2023"
          },
          {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/b/db4b7f8hammer_pulse_2__1_.jpg",
            title:"HAMMER Pulse 2.0 SmartWatch 1.69 Screen Bluetooth Calling",
            striked_price:"7999",
            price:"6000",
            off:"60% off",
            value:"2024"
          },
          {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/f/ef06335ambra00000019__1_.jpg",
            title:"Ambrane Neobuds 33 Ear Buds Wireless With Mic Headphones",
            striked_price:"1799",
            price:"799",
            off:"10% off",
            value:"2025"
          },
          {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/8/18ffa38fb_bsw003-grey_1.jpg",
            title:"Fire-Boltt 360 SpO2 Full Touch Large Display Round Smart",
            striked_price:"8000",
            price:"3469",
            off:"30% off",
            value:"2026"
          },
          {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/9/a9596798904336800506_1.jpg",
            title:"Portronics Harmonic Twins II HD True Wireless Stereo",
            striked_price:"6877",
            price:"3409",
            off:"10% off",
            value:"2027"
          },
          {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/5/05f0b6d8908012122968__1_.jpg",
            title:"Boult Audio Airbass Combuds Bluetooth Headset (White)",
            striked_price:"7999",
            price:"3000",
            off:"40% off",
            value:"2028"
          },
           {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/9/c9b3436nykboau000022_1.jpg",
            title:"Boult Audio ProBass Curve Neckband in-Ear Wireless",
            striked_price:"1000",
            price:"700",
            off:"30% off",
            value:"2029"
          },
           {
            img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/c/bca26a2fireb00000002__1_.jpg",
            title:"Fire-Boltt Spo2 Full Touch 1.4 Inch Smartwatch 8 Days",
            striked_price:"5999",
            price:"2999",
            off:"50% off",
            value:"2030"
          },
          
      
      ]

       data=JSON.stringify(data)
       console.log(data)  
    console.log("listening port 5700");
  } catch (error) {
    console.log(error.message);
  }
});
