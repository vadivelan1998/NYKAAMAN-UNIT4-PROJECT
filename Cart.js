var cart = JSON.parse(localStorage.getItem("cart"))||[];
console.log(cart);
var data=[
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nykab00000492_1.jpg",
    title: "Nykaa Wanderlust Body Lotion - Himalayan Hemp",
    striked_price: "₹200",
    price: "179.00",
    off: "14% Off",
    value:"500",category:["personal care","body lotion"]
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/g/bg1025.jpg",
    title: "Philips Showerproof Body Groomer for Men (BG1025/15)",
    striked_price: "435",
    price: "299",
    off: "20% Off",
    value:"501",category:["personal care","body groomer"]
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e5bdfed8901277014559.jpg",
    title: "Park Avenue Soap Cool Blue (Buy3 Get1 Free)",
    striked_price: "245",
    price: "209",
    off: "20% Off",
    value:"502",category:["personal care","soap"]
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/9/d9abb118886467049453_hero.jpg",
    title: "Brut Original All - In- one Hair & Body Shower Gel",
    striked_price: "445",
    price: "209",
    off: "20% Off",
    value:"503",category:["personal care","Hair & Body Shower Gel"]
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nyktbco000001asp.jpg",
    title: "The Beauty Co. Coconut Shell Activated Charcoal Teeth Whiten...",
    striked_price: "385",
    price: "299",
    off: "20% Off",
    value:"504",category:["personal care","Charcoal Teeth Whiten"],
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/7/f708a1512172_h-8901030818851.jpg",
    title: "Vaseline Intensive Care Deep Moisture Body Lotion",
    striked_price: "4295",
    price: "4000",
    off: "20% Off",
    value:"505",category:["personal care","Body Lotion"]
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/1/c10aae18901314311733_new1.jpg",
    title: "Colgate Pro-Clinical 150 Charcoal Battery Powered Toothbrush",
    striked_price: "1495",
    price: "999",
    off: "20% Off",
    value:"506",category:["personal care","Toothbrush"]
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8908010245669_n1.jpg",
    title: "Pee Safe Natural Intimate Wash For Men",
    striked_price: "1199",
    price: "799",
    off: "20% Off",
    value:"507",category:["personal care","Intimate Wash For Men"]
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8906084791198.jpg",
    title: "Beardo De-Tan Bodywash For Men",
    striked_price: "945",
    price: "799",
    off: "20% Off",
    value:"508",category:["personal care","Bodywash"]
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/0/70f1f498904245708467_1.jpg",
    title: "Nykaa Wanderlust Shower Gel",
    striked_price: "945",
    price: "799",
    off: "20% Off",
    value:"509",category:["personal care","Bodywash"]
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nymcfcom00076_1new.jpg",
    title: "MCaffeine Complete Coffee Face-Body-Hair Pampering Kit",
    striked_price: "299",
    price: "238",
    off: "20% Off",
    value:"510",category:["personal care","Pampering Kit"]
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/0/f0759704210201199441_1_.jpg",
    title: "Oral-B Vitality 100 Cross Action Electric Rechargeable Tooth...",
    striked_price: "1999",
    price: "1299",
    off: "20% Off",
    value:"511",category:["personal care","Electric Rechargeable Toothbrush"]
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/6/667a959797776127320_ap1.jpg",
    title: "Bombay Shaving Company Post-Shave Balm(100g)",
    striked_price: "250",
    price: "199",
    off: "20% Off",
    value:"512",category:["personal care","Post-Shave Balm"]
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/c/4c6e2d1phiaa00000010a__1_.jpg",
    title: "Philips Mg3747/15, 9-in-1, Face, Hair And Body - Multi Groom...",
    striked_price: "1999",
    price: "1799",
    off: "20% Off",
    value:"513",category:["personal care","trimmer"]
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/b/bb8f5ae4005808041619new.jpg",
    title: "NIVEA Body Lotion for Very Dry Skin, Nourishing Body Milk wi...",
    striked_price: "379",
    price: "399",
    off: "20% Off",
    value:"514",category:["personal care","Body Lotion"]
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/a/2abb2caNYKMCF0000002_1.jpg",
    title: "MCaffeine Naked & Raw Tan Removal Coffee Body Scrub",
    striked_price: "2150",
    price: "1799",
    off: "20% Off",
    value:"515",category:["personal care","Body Lotion"],
  },
  {
    img_url:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/f/9f8fb66bomba00000044_1.jpg",
    title: "Bombay Shaving Company Cordless Beard & Hair Trimmer for Men",
    striked_price: "2150",
    price: "1799",
    off: "20% Off",
    value:"516",category:["personal care","trimmer"],
  },
  {
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/a/0a8a5f38904245714895_1.jpg",
    title:"Nykaa Naturals Charcoal & Bamboo Deep Detox & Cleanse Paraben ",
    price:"200",discountcost:"Rs179.00",discount:"14%",category:["shampoo"],value:"300"
},
{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904223818706hgv_1.jpg",
    title:"Ustraa Hair Growth Vitalizer - Boost Hair Growth,",
    price:"495",discountcost:"Rs299.00",discount:"20%",category:["oil"],value:"301"
},
{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/e/beardo-hair-growth-oil.jpg",
    title:"Beardo Hair Growth Oil",
    price:"245",discountcost:"Rs209.00",discount:"20%",category:["oil"],value:"302"
},
{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/c/3c8aa038904311902621_1.jpg",
    title:"WOW Skin Science Anti Hair Fall Range",
    price:"445",discountcost:"Rs340",discount:"20%",category:["oil"],value:"303"
},
{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/2/e29eacd8906087771807ap__1_.jpg",
    title:"Mamaearth Onion Shampoo For Hair Growth & Hair Fall Control",
    price:"385",discountcost:"Rs299.00",category:["shampoo"],value:"304"
},

{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/4/9403d42MANMA00000009main.jpg",
    title:"Man Matters Ketoconazole Anti Dandruff Shampoo For Men",
    price:"295",discount:"10%",discountcost:"Rs200.00",category:["shampoo"],value:"305"
},
{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/k/a/kama-ayurveda-bringadi-intensive-hair-treatment-oil.jpg",
    title:"Kama Ayurveda Bringadi Thailam Intensive Hair Treatment Oil",
    price:"1495",discount:"20%",discountcost:"Rs999.00",category:["oil"],value:"306"
},
{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/f/7ff0a348906087771883_apr1.jpg",
    title:"Mamaearth Onion Oil For Hair Regrowth & Hair Fall Control",
    price:"1199 ",discount:"20%",discountcost:"Rs799.00",category:["oil"],value:"307"
},
{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/e/fe8558826118_S1-8901030704680.jpg",
    title:"Tresemme Keratin Smooth With Argan Oil Shampoo",
    price:"945",discount:"20%",discountcost:"Rs799.00",category:["shampoo"],value:"308"
},
{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/b/bb1f9e98904223818850_1.jpg",
    title:"Ustraa Anti Hair Fall Shampoo With Apple Cider Vinegar For Men",
    price:"999",discount:"20%",discountcost:"Rs799.00",category:["shampoo"],value:"310"
},

{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/d/2daa621dove_intshampoo_new_1.jpg",
    title:"Dove Intense Repair Hair Conditioner For Damaged And Frizzy Hair",
    price:"899",discount:"20%",discountcost:"Rs799.00",category:["conditioner"],value:"311"
},
{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/b/9b1ecaa11374_h-8901030707834.jpg",
    title:"Dove Intense Repair Hair Conditioner For Damaged And Frizzy Hair",
    price:"999",discount:"20%",discountcost:"Rs299.00",category:["conditioner"],value:"312"
},
{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/0/4045787384222_1.png",
    title:"Schwarzkopf BC Scalp Genesis Anti Dandruff Shampoo",
    price:"295",discount:"10%",discountcost:"Rs200.00",category:["shampoo"],value:"313"
},
{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/e/beardo_shampoo_2018.jpg",
    title:"Beardo Hair Fall Control Shampoo For Men",
    price:"250",discount:"20%",discountcost:"Rs199.00",category:["shampoo"],value:"314"
},
{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/5/65b458826215_S1_8901030751677.jpg",
    title:"Tresemme Keratin Smooth With Argan Oil Conditioner",
    price:"999",discount:"23%",discountcost:"Rs799.00",category:["conditioner"],value:"315"
},

{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/6/d6e958826119_S1-8901030704673.jpg",
    title:"Tresemme Hair Fall Defense Shampoo",
    price:"379",discount:"20%",discountcost:"Rs278.00",category:["shampoo"],value:"316"
},
{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/e/ee110b18901526004171_1.jpg",
    title:"LOreal Paris Total Repair 5 Shampoo 704ml With Conditioner 192.5ml",
    price:"150",discount:"20%",discountcost:"Rs99.00",category:["conditioner"],value:"318"
},

  {
      img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/e/2ea9cb7BEAAM00000010_YU1.jpg",
      title:"Ustraa Beard Growth Oil Advanced",
      price:"699",value :"100",category:["beared,oil"]
  },
  {
      img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/h/a/hair_serum_black_cap.jpg",
      title:"Beardo Hair Serum - With Argan Oil",
      price:"295",value :"101",category:["beared,oil"]
  },

  {
      img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/f/efc579a8904223818614_pr__1_.jpg",
      title:"Ustraa Beard Growth Oil",
      price:"399",value :"102",category:["beared,oil"]
  },

  {
      img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/e/beardo-hair-growth-oil.jpg",
      title:"Beardo Hair Growth Oil",
      price:"750",value :"103",category:["beared,oil"]
  },
  {
      img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/m/e/mens_beard.jpeg",
      title:"Beardo Godfather Beard Oil Lite",
      price:"350",value :"104",category:["beared,oil"]
  },
  {
      img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/b/3b6207c8901138837631_01.jpg",
      title:"Himalaya Men Face & Beard Wash",
      price:"175",value :"105",category:["beared"]
  },

  {
      img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904223815859.jpg",
      title:"Ustraa Beard Softener Balm Woody - Softens & Nourishes",
      price:"450",value :"106",category:["beared"]
  },
  {
      img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8906084790764_1_.jpg",
      title:"Beardo Beard Color For Men - Natural Black",
      price:"450",value :"107",category:["beared,color"]
  },
  {
      img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/b/3b6207c8901138837631_01.jpg",
      title:"Himalaya Men Face & Beard Wash",
      price:"175",value :"108",category:["beared"]
  },
  {
      img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/e/2ea9cb7BEAAM00000010_YU1.jpg",
      title:"Beardinator Anti Greying Beard Oil For Men",
      price:"349",value :"109",category:["beared,oil"]
  },
  {
      img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/m/n/mnardn264_.jpg",
      title:"Man Arden 7X Royal Oud Beard Oil",
      price:"399",value :"110",category:["beared,oil"]
  },

  {
      img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904223819000za_1_.jpg",
      title:"Ustraa Chrome - Lithium Powered Beard Trimmer",
      price:"2899",value :"111",category:["beared,trimmer"]
  },
  {
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/1/d1b81cahecom3_1.jpg",
    title:"HE Stay Fresh Combo",
    striked_price: "₹200",
      price: "179.00",
      off: "14% Off",value:"600",category:["perfumes deodorants colognes"]
},
{
    img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/7/47761cahecom1_1.jpg",
    title:"HE Refreshing Combo",
    striked_price: "435",
      price: "299",
      off: "20% Off",value:"601",category:["perfumes deodorants colognes"]
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/f/7ff3f87tmc-web-1162__1_.jpg",
  title:"The Man Company Non-gas Body Perfume For Men - Vert",
  striked_price: "245",
      price: "209",
      off: "20% Off",value:"602",category:["perfumes deodorants colognes"]
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/2/a2597eaustra00000104_apr__1_.jpg",
  title:"HE Stay Fresh Combo",
        
  striked_price: "445",
      price: "209",
      off: "20% Off",value:"603",category:["perfumes deodorants colognes"]
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/2/a2597eaustra00000104_apr__1_.jpg",
  title:"HE Stay Fresh Combo",
  striked_price: "385",
      price: "299",
      off: "20% Off",value:"604",category:["perfumes deodorants colognes"]
},

{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/6/06f61c2parka00000054.jpg",
  title:"The Man Company Non-gas Body Perfume For Men - Vert",
  striked_price: "4295",
      price: "4000",
      off: "20% Off",value:"605",category:["perfumes deodorants colognes"]
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/4/3440zx.jpg",
  title:"HE Stay Fresh Combo",
  striked_price: "1495",
      price: "999",
      off: "20% Off",value:"606",category:["perfumes deodorants colognes"]
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/6/06f61c2parka00000054.jpg",
  title:"The Man Company Non-gas Body Perfume For Men - Vert",
  striked_price: "1199",
      price: "799",
      off: "20% Off",value:"607",category:["perfumes deodorants colognes"]
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/d/1dbc7fdbeardo7_1.jpg",
  title:"HE Stay Fresh Combo",
  striked_price: "945",
      price: "799",
      off: "20% Off",value:"608",category:["perfumes deodorants colognes"]
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/d/6db549b8906106743617.jpg",
  title:"HE Stay Fresh Combo",
  striked_price: "945",
      price: "799",
      off: "20% Off",value:"609",category:["perfumes deodorants colognes"]
},

{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/2/323dbac8901248268806_1.jpg",
  title:"The Man Company Non-gas Body Perfume For Men - Kopar",
  striked_price: "299",
      price: "238",
      off: "20% Off",value:"610",category:["perfumes deodorants colognes"]
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/2/42a2f87tmc-web-1192__1_.jpg",
  title:"The Man Company Non-gas Body Perfume For Men - Kopar",
  striked_price: "1999",
      price: "1299",
      off: "20% Off",value:"611",category:["perfumes deodorants colognes"]
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/7/17270a9layer00000023_nwi1.jpg",
  title:"The Man Company Non-gas Body Perfume For Men - Kopar",
  striked_price: "250",
      price: "199",
      off: "20% Off",value:"612",category:["perfumes deodorants colognes"]
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/0/50296f9beardo20.jpg",
  title:"The Man Company Non-gas Body Perfume For Men - Kopar",
  striked_price: "1999",
      price: "1799",
      off: "20% Off",value:"613",category:["perfumes deodorants colognes"]
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/b/fb30f87tmc-web-1161__1_.jpg",
  title:"The Man Company Non-gas Body Perfume For Men - Kopar",
  striked_price: "379",
      price: "399",
      off: "20% Off",value:"614",category:["perfumes deodorants colognes"]
},

{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/1/a1bd0a9layer00000024_nwi1.jpg",
  title:"HE Stay Fresh Combo",
  striked_price: "2150",
      price: "1799",
      off: "20% Off",value:"615",category:["perfumes deodorants colognes"]
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/5/25e2a5f8904153310936_1.jpg",
  title:"The Man Company Non-gas Body Perfume For Men - Kopar",
  striked_price: "2150",
      price: "1799",
      off: "20% Off",value:"616",category:["perfumes deodorants colognes"]
}
,
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e52b28bamori00000006pa_1.jpg",
  title: "Amorite Waterproof Reusable Washable Pet Training Pads - Mar...",
  striked_price: "299",
  value: "70",
  category: ["puppy", ""],
  price: "238",
  off: "20% Off",
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/2/525149843917339016.jpg",
  title: "Wahl Color-Code Metal Guide Combs- for Cats and Dogs",
  striked_price: "₹1800",
  price: "1620",
  off: "10% off",
  value:"71"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/1/61e04984015110005230.jpg",
  title: "Wahl U-Clip Clipper Dog Grooming Kit",
  striked_price: "₹6000",
  price: "5100",
  off: "15% off",
  value:"72"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/5/45b7412am-7020-rb_0.jpg",
  title: "Amorite Waterproof Reusable Washable Heavy Duty Pet Training...",
  striked_price: "299",
  price: "238",
  off: "20% off",
  value:"73"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/e/ae667408906043142689_1.jpg",
  title: "Purepet Chicken Veg Puppy Dog Food",
  striked_price: "1199",
  price: "1188",
  off: "1%",
  value:"74"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/1/017249843917003009.jpg",
  title: "Wahl Four In One Dog Shampoo - Lavendor Chamomile",
  striked_price: "850",
  price: "765",
  off: "10% off",
  value:"75"
},
{
  img_url:
    "	https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/4/9441412am-7020-p_0.jpg",
  title: "Amorite Waterproof Reusable Washable Pee Pads For Dogs Train...",
  striked_price: "549",
  price: "438",
  off: "20% off",
  value:"76"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/a/aa322fb8906093814376_1.jpg",
  title: "Pet Life Anti Ticks Birds Bath",
  striked_price: "300",
  price: "280",
  off: "1 off",
  value:"77"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/8/48b39c28906067930682.jpg",
  title: "Amorite Waterproof Reusable Washable Pee Pads For Dogs",
  striked_price: "549",
  price: "438",
  off: "20% off",
  value:"78"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/6/a68049843917004228.jpg",
  title: "Pet Life Anti Ticks Birds Bath",
  striked_price: "300",
  price: "280",
  off: "1",
  value:"79"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/4/245249843917847146.jpg",
  title: "Captain Zack - The Shih Tzu Groom Box",
  striked_price: "9100",
  price: "8282",
  off: "1 of",
  value:"80"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/7/b7cca878904278593245_1.jpg",
  title: "Wahl Oatmeal Pet Shampoo - Coconut Lime Verbena- For",
  striked_price: "9000",
  price: "8000",
  off: "12%",
  value:"81"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/f/5fc0a878904278593665_1.jpg",
  title: "velu jskbcnxnxn",
  striked_price: "767",
  price: "669",
  off: "1 %",
  value:"82"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/1/61b47408906043142979-1.jpg",
  title: "Purepet Chicken & Veg Adult Dog Food (B1G1 Free)",
  striked_price: "1000",
  price: "799",
  off: "2 %",
  value:"83"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/4/f49149843917845548.jpg",
  title: "Wahl Nail Clipper Large For Cats and Dogs",
  striked_price: "550",
  price: "523",
  off: "2 % off",
  value:"84"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/3/c36b412am-7020-db_0.jpg",
  title: "Amorite Waterproof Reusable Washable Dog Bed Sheet For",
  striked_price: "299",
  price: "238",
  off: "2% off",
  value:"85"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/4/b4ac7408906043145659_1.jpg",
  title: "Purepet Fish And Rice Adult Dog Food",
  striked_price: "799",
  price: "699",
  off: "20 %",
  value:"86"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/c/2c856a319471.jpg",
  title: "Trixie Walker Care Comfort Protective Boots",
  striked_price: "1160",
  price: "1150",
  off: "2% off",
  value:"87"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/a/1a62e5f8906060215502.jpg",
  title: "Petlogix Organic Oatmeal Wash-for Cats and Dogs",
  striked_price: "234",
  price: "199",
  off: "2%",
  value:"88"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/4/24bf49843917003139.jpg",
  title: "Wahl Puppy Shampoo - Cornflower Aloe-for Dogs",
  striked_price: "860",
  price: "820",
  off: "2 %",
  value:"89"
},

{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e52b28bamori00000006pa_1.jpg",
  title: "Amorite Waterproof Reusable Washable Pet Training Pads - Mar...",
  striked_price: "299",
  price: "238",
  off: "20% Off",
  value:"90"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e52b28bamori00000006pa_1.jpg",
  title: "Amorite Waterproof Reusable Washable Pet Training Pads - Mar...",
  striked_price: "299",
  price: "238",
  off: "20% Off",
  value:"91"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e52b28bamori00000006pa_1.jpg",
  title: "Amorite Waterproof Reusable Washable Pet Training Pads - Mar...",
  striked_price: "299",
  price: "238",
  off: "20% Off",
  value:"92"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e52b28bamori00000006pa_1.jpg",
  title: "Amorite Waterproof Reusable Washable Pet Training Pads - Mar...",
  striked_price: "299",
  price: "238",
  off: "20% Off",
  value:"93"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e52b28bamori00000006pa_1.jpg",
  title: "Amorite Waterproof Reusable Washable Pet Training Pads - Mar...",
  striked_price: "299",
  price: "238",
  off: "20% Off",
  value:"94"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e52b28bamori00000006pa_1.jpg",
  title: "Amorite Waterproof Reusable Washable Pet Training Pads - Mar...",
  striked_price: "299",
  price: "238",
  off: "20% Off",
  value:"95"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e52b28bamori00000006pa_1.jpg",
  title: "Amorite Waterproof Reusable Washable Pet Training Pads - Mar...",
  striked_price: "299",
  price: "238",
  off: "20% Off",
  value:"96"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e52b28bamori00000006pa_1.jpg",
  title: "Amorite Waterproof Reusable Washable Pet Training Pads - Mar...",
  striked_price: "299",
  price: "238",
  off: "20% Off",
  value:"97",
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e52b28bamori00000006pa_1.jpg",
  title: "Amorite Waterproof Reusable Washable Pet Training Pads - Mar...",
  striked_price: "299",
  price: "238",
  off: "20% Off",
  value:"98"
},
{
  img_url:
    "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e52b28bamori00000006pa_1.jpg",
  title: "Amorite Waterproof Reusable Washable Pet Training Pads - Mar...",
  striked_price: "299",
  price: "238",
  off: "20% Off",
  value:"99"
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/0/8005610416038_wella_professionals_fusion_intense_repair_shampoo_250ml_epi.jpg",
  title:"Wella Professionals Fusion Intense Repair ",
  price:" 200",discountcost:"Rs179.00",discount:"14%",value:"384",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/0/4045787384222_1.png",
title:"Schwarzkopf BC Scalp Genesis Anti Dandruff Shampoo",
  price:"495",discountcost:"Rs299.00",discount:"20%",value:"385",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/_/3_4084500584648_wellaprofessionals_eimiextravolume_300ml_epi_1.jpg",
title:"Wella Professionals EIMI Extra ",
  price:"245",discountcost:"Rs209.00",discount:"20%",value:"386",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/1/615908425819_1_.jpg",
title:"TIGI Bed Head For Men Matte Separation Hair Wax",
      
  price:"445",discountcost:"Rs340",discount:"20%",value:"387",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/0/4045787232233_1.jpg",
title:"Schwarzkopf Professional Osis ",
  price:"385",discountcost:"Rs299.00",value:"388",Category:"perfumes,deodorants,colognes"
},

{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/0/4045787429558_1_1.png",
title:"Schwarzkopf Professional Bonacure Keratin ",
  price:"4295",discount:"10%",discountcost:"Rs4,000.00",value:"389",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/0/4045787384345.jpg",
title:"Schwarzkopf Professional Bonacure Scalp ",
  price:"1495",discount:"20%",discountcost:"Rs999.00",value:"390",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/s/a/safffffffffffffffffff.png",
title:"SP Balance Scalp Energy Serum",
  price:"1199 ",discount:"20%",discountcost:"Rs2,799.00",value:"391",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nykswp_bhmkms.jpg",
title:"Schwarzkopf Professional Bonacure Hyaluronic",
  price:"945",discount:"20%",discountcost:"Rs799.00",value:"392",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/0/e0cd67e4045787429558new1.jpg",
title:"Schwarzkopf Professional Bonacure Keratin",
  price:"4999",discount:"20%",discountcost:"Rs3,799.00",value:"393",category:["perfumes deodorants colognes"]
},

{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/c/7c3131b4015600084585_1.jpg",
title:"SP Clear Scalp Shampeeling",
  price:"1595",discount:"20%",discountcost:"Rs799.00",value:"394",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/0/4045787430011.jpg",
title:"Schwarzkopf Professional Boncaure",
  price:"1999",discount:"20%",discountcost:"Rs1299.00",value:"395",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/s/c/schwarzkopf-professional-osis_-sparkler-shine-spray.jpg",
title:"Schwarzkopf Professional Osis",
  price:"295",discount:"10%",discountcost:"Rs200.00",value:"396",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/i/n/int_os_hs_cgp_do_sessionlabel_superdryflex_500_0816_p1_skp.jpeg",
title:"Schwarzkopf Professional Osis",
  price:"250",discount:"20%",discountcost:"Rs199.00",value:"397",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/2/823a0dc4045787430646new1.jpg",
title:"Schwarzkopf Professional Bonacure ",
  price:"1999",discount:"23%",discountcost:"Rs1799.00",value:"398",category:["perfumes deodorants colognes"]
},


{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/2/22443374045787141382new_1.jpg",
title:"Schwarzkopf Professional Osis+ Magic Anti Frizz Shine Serum",
  price:"2150",discount:"20%",discountcost:"Rs1799.00",value:"399",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/1/d1b81cahecom3_1.jpg",
title:"HE Stay Fresh Combo",
price:"200",discountcost:"Rs179.00",discount:"14%",value:"600",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/7/47761cahecom1_1.jpg",
title:"HE Refreshing Combo",
price:"495",discountcost:"Rs299.00",discount:"20%",value:"601",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/f/7ff3f87tmc-web-1162__1_.jpg",
title:"The Man Company Non-gas Body Perfume For Men - Vert",
price:"245",discountcost:"Rs209.00",discount:"20%",value:"602",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/2/a2597eaustra00000104_apr__1_.jpg",
title:"HE Stay Fresh Combo",
    
price:"445",discountcost:"Rs340",discount:"20%",value:"603",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/2/a2597eaustra00000104_apr__1_.jpg",
title:"HE Stay Fresh Combo",
price:"385",discountcost:"Rs299.00",value:"604",category:["perfumes deodorants colognes"]
},

{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/6/06f61c2parka00000054.jpg",
title:"The Man Company Non-gas Body Perfume For Men - Vert",
price:"4295",discount:"10%",discountcost:"Rs4,000.00",value:"605",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/4/3440zx.jpg",
title:"HE Stay Fresh Combo",
price:"1495",discount:"20%",discountcost:"Rs999.00",value:"606",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/6/06f61c2parka00000054.jpg",
title:"The Man Company Non-gas Body Perfume For Men - Vert",
price:"1199 ",discount:"20%",discountcost:"Rs2,799.00",value:"607",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/d/1dbc7fdbeardo7_1.jpg",
title:"HE Stay Fresh Combo",
price:"945",discount:"20%",discountcost:"Rs799.00",value:"608",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/d/6db549b8906106743617.jpg",
title:"HE Stay Fresh Combo",
price:"4999",discount:"20%",discountcost:"Rs3,799.00",value:"609",category:["perfumes deodorants colognes"]
},

{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/2/323dbac8901248268806_1.jpg",
title:"The Man Company Non-gas Body Perfume For Men - Kopar",
price:"1595",discount:"20%",discountcost:"Rs799.00",value:"610",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/2/42a2f87tmc-web-1192__1_.jpg",
title:"The Man Company Non-gas Body Perfume For Men - Kopar",
price:"1999",discount:"20%",discountcost:"Rs1299.00",value:"611",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/7/17270a9layer00000023_nwi1.jpg",
title:"The Man Company Non-gas Body Perfume For Men - Kopar",
price:"95",discount:"10%",discountcost:"Rs200.00",value:"612",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/0/50296f9beardo20.jpg",
title:"The Man Company Non-gas Body Perfume For Men - Kopar",
price:"250",discount:"20%",discountcost:"Rs199.00",value:"613",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/b/fb30f87tmc-web-1161__1_.jpg",
title:"The Man Company Non-gas Body Perfume For Men - Kopar",
price:"1999",discount:"23%",discountcost:"Rs1799.00",value:"614",category:["perfumes deodorants colognes"]
},

{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/1/a1bd0a9layer00000024_nwi1.jpg",
title:"HE Stay Fresh Combo",
price:"379",discount:"20%",discountcost:"Rs399.00",value:"615",category:["perfumes deodorants colognes"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/5/25e2a5f8904153310936_1.jpg",
title:"The Man Company Non-gas Body Perfume For Men - Kopar",
price:"2150",discount:"20%",discountcost:"Rs1799.00",value:"616",category:["perfumes deodorants colognes"]
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e52b28bamori00000006pa_1.jpg",
title: "Amorite Waterproof Reusable Washable Pet Training Pads - Mar...",
striked_price: "299",
value: "850",
category: ["puppy", ""],
price: "238",
off: "20% Off",
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/2/525149843917339016.jpg",
title: "Wahl Color-Code Metal Guide Combs- for Cats and Dogs",
striked_price: "₹1800",
price: "1620",
off: "10% off",
value: "851",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/1/61e04984015110005230.jpg",
title: "Wahl U-Clip Clipper Dog Grooming Kit",
striked_price: "₹6000",
price: "5100",
off: "15% off",
value: "852",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/5/45b7412am-7020-rb_0.jpg",
title: "Amorite Waterproof Reusable Washable Heavy Duty Pet Training...",
striked_price: "299",
price: "238",
value: "853",
category: ["puppy", ""],
off: "20% off",
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/e/ae667408906043142689_1.jpg",
title: "Purepet Chicken Veg Puppy Dog Food",
striked_price: "1199",
price: "1188",
off: "1%",
value: "854",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/1/017249843917003009.jpg",
title: "Wahl Four In One Dog Shampoo - Lavendor Chamomile",
striked_price: "850",
price: "765",
off: "10% off",
value: "855",
category: ["puppy", ""],
},
{
img_url:
  "	https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/4/9441412am-7020-p_0.jpg",
title: "Amorite Waterproof Reusable Washable Pee Pads For Dogs Train...",
striked_price: "549",
price: "438",
off: "20% off",
value: "855",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/a/aa322fb8906093814376_1.jpg",
title: "Pet Life Anti Ticks Birds Bath",
striked_price: "300",
price: "280",
off: "1 off",
value: "856",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/8/48b39c28906067930682.jpg",
title: "Amorite Waterproof Reusable Washable Pee Pads For Dogs",
striked_price: "549",
price: "438",
off: "20% off",
value: "857",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/6/a68049843917004228.jpg",
title: "Pet Life Anti Ticks Birds Bath",
striked_price: "300",
price: "280",
off: "1",
value: "858",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/4/245249843917847146.jpg",
title: "Captain Zack - The Shih Tzu Groom Box",
striked_price: "9100",
price: "8282",
off: "1 of",
value: "859",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/7/b7cca878904278593245_1.jpg",
title: "Wahl Oatmeal Pet Shampoo - Coconut Lime Verbena- For",
striked_price: "9000",
price: "8000",
off: "12%",
value: "860",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/f/5fc0a878904278593665_1.jpg",
title: "velu jskbcnxnxn",
striked_price: "767",
price: "669",
off: "1 %",
value: "861",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/1/61b47408906043142979-1.jpg",
title: "Purepet Chicken & Veg Adult Dog Food (B1G1 Free)",
striked_price: "1000",
price: "799",
off: "2 %",
value: "862",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/4/f49149843917845548.jpg",
title: "Wahl Nail Clipper Large For Cats and Dogs",
striked_price: "550",
price: "523",
off: "2 % off",
value: "863",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/3/c36b412am-7020-db_0.jpg",
title: "Amorite Waterproof Reusable Washable Dog Bed Sheet For",
striked_price: "299",
price: "238",
off: "2% off",
value: "864",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/4/b4ac7408906043145659_1.jpg",
title: "Purepet Fish And Rice Adult Dog Food",
striked_price: "799",
price: "699",
off: "20 %",
value: "865",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/c/2c856a319471.jpg",
title: "Trixie Walker Care Comfort Protective Boots",
striked_price: "1160",
price: "1150",
off: "2% off",
value: "866",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/a/1a62e5f8906060215502.jpg",
title: "Petlogix Organic Oatmeal Wash-for Cats and Dogs",
striked_price: "234",
price: "199",
off: "2%",
value: "867",
category: ["puppy", ""],
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/4/24bf49843917003139.jpg",
title: "Wahl Puppy Shampoo - Cornflower Aloe-for Dogs",
striked_price: "860",
price: "820",
off: "2 %",
value: "868",
category: ["puppy", ""],
},

{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e52b28bamori00000006pa_1.jpg",
title: "Amorite Waterproof Reusable Washable Pet Training Pads - Mar...",
striked_price: "299",
price: "238",
value: "869",
category: ["puppy", ""],
off: "20% Off",
},
{
img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/5/e52b28bamori00000006pa_1.jpg",
title: "Amorite Waterproof Reusable Washable Pet Training Pads - Mar...",
striked_price: "299",
price: "238",
off: "20% Off",
value: "870",
category: ["puppy", ""],
},

{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/c/2c913e6ba-nk-q10-black_1.jpg",
title:"Boult Audio AirBass Q10 True Wireless Earbuds with 24H",
striked_price:"7888",
price:"778",
off:"10% off"
},
{

img_url:
  "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/6/867f6a2fireb00000001__1_.jpg",
title: "Fire-Boltt Spo2 Full Touch 1.4 Inch Smartwatch 8 Days",
striked_price: "3299",
price: "2038",
off: "20% Off",
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/a/8a5c980amaac00000015_1.jpg",
title:"Amazon All-new Fire TV Stick Lite with Alexa Voice Remote",
striked_price:"2499",
price:"2000",
off:"10% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/d/bd7cdc1wdbu6y0015bbk-wesn_1.jpg",
title:"WD Elements 1.5TB Portable External Hard Drive, USB 3.0,",
striked_price:"5739",
price:"2799",
off:"10% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/a/3af0debFurjaden_AJ08_Black_1.jpg",
title:"FUR JADEN AirJams GameX Bluetooth 5.2 Wireless Gaming",
striked_price:"3000",
price:"1299",
off:"20% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/2/628756ePOR-1404_1.jpg",
title:"Portronics Key4 Combo 2.4GHz Wireless Keyboard Mouse Set",
striked_price:"1999",
price:"1099",
off:"10% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/2/8272a79upr10k_co_1.jpg",
title:"URBN 10000 Mah Li-polymer Ultra Compact Power Bank",
striked_price:"2499",
price:"699",
off:"20% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/c/ac65335ambra00000020__1_.jpg",
title:"Ambrane Neobuds 33 Ear Buds Wireless With Mic Headphones",
striked_price:"1799",
price:"999",
off:"20 % off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/a/3ac5703SDSQUA4-064G-GN6MN_1.jpg",
title:"SanDisk Ultra microSD UHS-I Card 64GB, 120MB/s R",
striked_price:"1799",
price:"600",
off:"28% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/i/r/irnmnbsmm4440-1.jpg",
title:"Macmerise Bluetooth Speaker Ironman Helmet Funk Limited",
striked_price:"799",
price:"500",
off:"20% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/c/cc118d7nykboau000033__new.jpg",
title:"Boult Audio AirBass MuseBuds True Wireless Earbuds with",
striked_price:"5999",
price:"2000",
off:"30% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/9/3/938bb6d8908012122951__1_.jpg",
title:"Boult Audio Airbass Combuds Bluetooth Headset (Black)",
striked_price:"4999",
price:"2000",
off:"10% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/b/db4b7f8hammer_pulse_2__1_.jpg",
title:"HAMMER Pulse 2.0 SmartWatch 1.69 Screen Bluetooth Calling",
striked_price:"7999",
price:"6000",
off:"60% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/f/ef06335ambra00000019__1_.jpg",
title:"Ambrane Neobuds 33 Ear Buds Wireless With Mic Headphones",
striked_price:"1799",
price:"799",
off:"10% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/8/18ffa38fb_bsw003-grey_1.jpg",
title:"Fire-Boltt 360 SpO2 Full Touch Large Display Round Smart",
striked_price:"8000",
price:"3469",
off:"30% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/9/a9596798904336800506_1.jpg",
title:"Portronics Harmonic Twins II HD True Wireless Stereo",
striked_price:"6877",
price:"3409",
off:"10% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/5/05f0b6d8908012122968__1_.jpg",
title:"Boult Audio Airbass Combuds Bluetooth Headset (White)",
striked_price:"7999",
price:"3000",
off:"40% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/c/9/c9b3436nykboau000022_1.jpg",
title:"Boult Audio ProBass Curve Neckband in-Ear Wireless",
striked_price:"1000",
price:"700",
off:"30% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/c/bca26a2fireb00000002__1_.jpg",
title:"Fire-Boltt Spo2 Full Touch 1.4 Inch Smartwatch 8 Days",
striked_price:"5999",
price:"2999",
off:"50% off"
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nymcfcom00076_1new.jpg",
title:"MCaffeine Complete Coffee Face-Body-Hair Pampering Kit",
price:"200",discountcost:"Rs179.00",discount:"14%",value:"451",category:["body-kit"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/e/beaaa00000036_1_.png",
title:"Beardo Ultraglow Lotion And Ultraglow Facewash Combo (Pack Of 2)(100ml+100gm)",
price:"495",discountcost:"Rs299.00",discount:"20%",value:"452",category:["facewash"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/4/44561e74902430442626.jpg",
title:"Gillette Classic Sensitive Shave Foam - 418 g (33% extra)",
price:"245",discountcost:"Rs209.00",discount:"20%",value:"453",category:["cream"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/4/44561e74902430442626.jpg",
title:"Gillette Classic Sensitive Shave Foam - 418 g (33% extra)",
price:"445",discountcost:"Rs340",discount:"20%",value:"454",category:["cream"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/2/d2e5c694987176041814.jpg",
title:"Old Spice  After Shave Lotion Smell Like A Men(150ml)",
price:"385",discountcost:"Rs299.00",value:"455",category:["cream"]
},

{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430615563-1.jpg",
title:"Gillette Arctic Ice After Shave Splash- 50 ml",
price:"4295",discount:"10%",discountcost:"Rs4,000.00",value:"456",category:["lotion"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/1/f1a5144NYPLUMCOMB029_1.jpg",
title:"Plum Green Tea Daily C-T-M Kit",
price:"1495",discount:"20%",discountcost:"Rs999.00",value:"457",category:["kit"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8906009456386_1_.jpg",
title:"Bombay Shaving Company Shaving Cream(100g)",
price:"1199 ",discount:"20%",discountcost:"Rs2,799.00",value:"458",category:["lotion"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/1/31483f08906022452327_1.jpg",
title:"HipHop Hair Removal Cream for Men - 60g",
price:"945",discount:"20%",discountcost:"Rs799.00",value:"459",category:["lotion"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8907367006589asp.jpg",
title:"The Man Company Gift Set Cleanse Pack (Charcoal Shampoo + Face Wash + Body Wash) (3 Pcs)",
price:"4999",discount:"20%",discountcost:"Rs3,799.00",value:"460",category:["shampoo"]
},

{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/1/e10b4068901526005888_1.jpg",
title:"Garnier Oil Clear Facewash For Men - Pack Of 2(300gm)",
price:"1595",discount:"20%",discountcost:"Rs799.00",value:"461",category:["facewash"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/7/87e8d14BELAB00000079-A.jpg",
title:"Bella Vita Organic Nicolips Lip Scrub & Nicobalm Lip Balm Combo For Dry, Chapped & Dark Lips",
price:"1999",discount:"20%",discountcost:"Rs1299.00",value:"462",category:["lip-balm"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/9/29689398907367012825__2_z.jpg",
title:"The Man Company Cleanse & Moisturise Pack, Pack of 3(100ml+150gm)",
price:"295",discount:"10%",discountcost:"Rs200.00",value:"463",category:["cream"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/4/1478be48904311901679.jpg",
title:"WOW Apple Cider Vinegar Face Wash With Brush For Acne Reduction(150ml)",
price:"250",discount:"20%",discountcost:"Rs199.00",value:"464",category:["facewash"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/a/ea2c0308904311902669__1_.jpg",
title:"WOW Skin Science Brightening Vitamin C Face Wash With Brush For Hyperpigmentation(150ml)",
price:"1999",discount:"23%",discountcost:"Rs1799.00",value:"465",category:["facewash"]
},

{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/f/8fd84038901526005864_1.jpg",
title:"Garnier Men Turbo Bright Facewash - Pack Of 2(300gm)",
price:"379",discount:"20%",discountcost:"Rs399.00",value:"466",category:["facewach"]
},
{
img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/e/7e5f4048901526005871_1.jpg",
title:"Garnier Men Turbo Bright Facewash - Pack Of 2(300gm)",
price:"2150",discount:"20%",discountcost:"Rs1799.00",value:"467",category:["facewash"]
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/f/afdc27f8904330601529_1.jpg",
  title:"Bombay Shaving Company Fitkari After Shave Gel For Men(100gm)",
  price:"200",discountcost:"Rs179.00",discount:"14%",category:["lotion"],value:"101"
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/1/31483f08906022452327_1.jpg",
  title:"HipHop Hair Removal Cream for Men - 60g",
  price:"495",discountcost:"Rs299.00",discount:"20%",category:["cream"],value:"102"
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/4/44561e74902430442626.jpg",
  title:"Gillette Classic Sensitive Shave Foam - 418 g (33% extra)",
  price:"245",discountcost:"Rs209.00",discount:"20%",category:["cream"],value:"103"
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/4/44561e74902430442626.jpg",
  title:"Gillette Classic Sensitive Shave Foam - 418 g (33% extra)",
  price:"445",discountcost:"Rs340",discount:"20%",category:["cream"],value:"104"
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/2/d2e5c694987176041814.jpg",
  title:"Old Spice  After Shave Lotion Smell Like A Men(150ml)",
  price:"385",discountcost:"Rs299.00",category:["cream"],value:"105"
},

{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430615563-1.jpg",
  title:"Gillette Arctic Ice After Shave Splash- 50 ml",
  price:"4295",discount:"10%",discountcost:"Rs4,000.00",category:["lotion"],value:"106"
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/4/3440zx.jpg",
  title:"Park AvenueLather Shaving Cream (40% Extra)(84gm)",
  price:"1495",discount:"20%",discountcost:"Rs999.00",category:["lotion"],value:"107"
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8906009456386_1_.jpg",
  title:"Bombay Shaving Company Shaving Cream(100g)",
  price:"1199 ",discount:"20%",discountcost:"Rs2,799.00",category:["lotion"],value:"108"
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/1/31483f08906022452327_1.jpg",
  title:"HipHop Hair Removal Cream for Men - 60g",
  price:"945",discount:"20%",discountcost:"Rs799.00",category:["lotion"],value:"110"
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430586931.jpg",
  title:"Gillette Classic Regular Pre Shave Foam",
  price:"4999",discount:"20%",discountcost:"Rs3,799.00",category:["lotion"],value:"111"
},

{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8906009450797_1.jpg",
  title:"Biotique Bio Wild Grass Soothing Skin Care For Men(120ml)",
  price:"1595",discount:"20%",discountcost:"Rs799.00",category:["lotion"],value:"112"
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/0/a0002f68904330600119_apr1.jpg",
  title:"Alan Truman Atom 603 Home Trimming Sandsto...",
  price:"1999",discount:"20%",discountcost:"Rs1299.00",category:["lotion"],value:"113"
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430917520_1.jpg",
  title:"Bombay Shaving Company Charcoal Shaving Foam(266ml)",
  price:"295",discount:"10%",discountcost:"Rs200.00",category:["lotion"],value:"113"
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/6/667a959797776127320_ap1.jpg",
  title:"Bombay Shaving Company Post-Shave Balm(100g)",
  price:"250",discount:"20%",discountcost:"Rs199.00",category:["lotion"],value:"114"
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/4/04902430667432_82234668_productimage_outofpackage_front_center_1_old_spice.jpg",
  title:"Old Spice Original After Shave Lotion",
  price:"1999",discount:"23%",discountcost:"Rs1799.00",category:["lotion"],value:"115"
},

{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430615556-1.jpg",
  title:"Wild Stone Ultra Sensual After Shave",
  price:"379",discount:"20%",discountcost:"Rs399.00",category:["lotion"],value:"116"
},
{
  img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8904006302392__new1.jpg",
  title:"Gillette Skinguard Razo",
  price:"2150",discount:"20%",discountcost:"Rs1799.00",category:["lotion"],value:"117"
},

]
  var bagproducts=[];
  var bagproduct=[];
if(cart.length!==0){
    for(let i=0;i<cart.length;i++){
        for(let j=0;j<data.length;j++){
            if(cart[i]===data[j]["value"]){
                bagproduct.push(data[j]);
            }
        }
    }
}
console.log(bagproduct);
bagproducts=bagproduct;

var pr = 0;

var bigBox = document.getElementById("V-cart-products");

if (bagproducts.length == 0) {
    // document.getElementById("heading").style.display = "none" 
    document.getElementById("hide").style.display = "none"
    document.getElementById("V-total-details").style.display = "none"


    let image = document.createElement("img");
    image.setAttribute("id", "image-icon")
    let para = document.createElement("h4")
    para.innerText = "Your Shopping Bag is Empty"
    para.setAttribute("class", "para")

    let shopBtn = document.createElement("button");
    shopBtn.innerText = "Start Shopping"
    shopBtn.setAttribute("class", "shopBtn")
    bigBox.style.height = "500px"
    document.getElementById("cart-items").style.height = "100%"


    image.src = "https://cdn0.iconfinder.com/data/icons/flat-design-business-set-5/24/shopping-bag-grey-512.png"
    bigBox.append(image, para, shopBtn)
}
else {
    showProducts(bagproducts)
}





function showProducts(item) {
    bigBox.innerHTML=""; 

    item.forEach(function (el,index) {
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = el.img_url;
        var p = document.createElement("p");
        p.innerText = el.title;

        var hr = document.createElement("hr");

        var div2 = document.createElement("div");
        var lable = document.createElement("label")
        lable.textContent = "Quantity :"

        var i = document.createElement("i");
        i.setAttribute("class", "fas fa-trash-alt")
        i.setAttribute("id", "deleteItem");

        i.addEventListener("click", function () {
            makeDelete(index)
            // deleteItem(event)
        })


        var select = document.createElement("select");
        select.setAttribute("id", "selected");

        var opt1 = document.createElement("option")
        opt1.textContent = "1"

        var opt2 = document.createElement("option")
        opt2.textContent = "2"

        var opt3 = document.createElement("option")
        opt3.textContent = "3"
        var opt4 = document.createElement("option")
        opt4.textContent = "4"
        var opt5 = document.createElement("option")
        opt5.textContent = "5"

        select.append(opt1, opt2, opt3, opt4, opt5)
        div2.append(select);

        var p2 = document.createElement("h3");
        p2.setAttribute("id", "price")
        p2.innerText = el.price

        pr += +el.price

        select.addEventListener("change", function () {
            var p = +el.price;

            var qty_p = p * select.value
            p2.textContent = Math.floor(qty_p)

            pr += qty_p;
            document.getElementById("total").innerText = "₹" + Math.floor(pr) + " " + "/-"
            
             

            let discount = Math.floor(0.1 * Math.floor(pr));
            document.getElementById("bigDis").innerText = discount;

            let discounted_price = Math.floor(pr) - Math.floor(0.1 * Math.floor(pr));
            document.getElementById("subtotal").innerText = discounted_price;

            document.getElementById("shipping").innerText = "None";
            document.getElementById("grand").innerText = discounted_price;

            let total_price = document.getElementById("grand_total");
            total_price.innerText = discounted_price
            // console.log(pr)
        })
        div.append(img, p, i, hr, lable, div2, p2)
        bigBox.append(div)
    })
}


document.getElementById("total").innerText = "₹" + Math.floor(pr) + " " + "/-"
let discount = Math.floor(0.1 * pr);
document.getElementById("bigDis").innerText = discount;
// console.log(discount) 

let discounted_price = Math.floor(pr) - discount
document.getElementById("subtotal").innerText = discounted_price;

document.getElementById("shipping").innerText = "FREE";
document.getElementById("grand").innerText = discounted_price;


let total_price = document.getElementById("grand_total");
total_price.innerText = discounted_price

function makeDelete(index) {
    bagproducts.splice(index, 1)
    bagproduct.splice(index,1);
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));
   

    showProducts(bagproducts)
     location.reload();

}


// || localStorage.getItem("count")
 var count7 = 0 

 
function hide() {
    // if (count7 % 2 == 1) {

    //     document.getElementById("test").style.right = "0"
    //     document.getElementById("test").style.transition = "all 0.5s ease"
    // } 
    
    // else {
    //     console.log("yes")
    //     document.getElementById("test").style.right = "0"
    //     document.getElementById("test").style.transition = "all 0.5s ease"
    //     count++
    // }
    document.getElementById("test").style.right = "0"
    document.getElementById("test").style.left = "72%"
    document.getElementById("test").style.transition = "all 1s ease"
    // disableBodyScroll()
    

    // document.getElementById("test").style.opacity="1"

}


localStorage.setItem("count", count7);

function myFunction() {
    document.getElementById("test").style.right = "-80%"
    document.getElementById("test").style.left = "100%"
    document.getElementById("test").style.transition = "all 1s ease"
    enableBodyScroll()
}

// document.getElementById("openCart").addEventListener("click",()=>{
//     // window.location.href="cart.html"
//     hide();
// })


function disableBodyScroll(){
    const element = document.querySelector("body");
    element.classList.add("stop-scroll");
   }

   function enableBodyScroll(){
    const element = document.querySelector("body");
    element.classList.remove("stop-scroll");
   }
function deleteItem(event) {
    event.target.parentNode.remove();
}


document.getElementById("gotopayment666").addEventListener("click",function() {
    let ff=Math.floor(Math.floor(pr)-Math.floor(0.1*pr))
    localStorage.setItem("finalproduct",JSON.stringify(bagproducts));
    
    window.location.href="address.html"
    
})
console.log(document.getElementById("gotopayment666"))