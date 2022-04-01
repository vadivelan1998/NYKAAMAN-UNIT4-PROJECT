const app = require("./index");

const connect = require("./configs/db");

app.listen(5700, async () => {
  try {
    await connect();
    
    let data = [
      {
         img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/1/d1b81cahecom3_1.jpg",
         title:"HE Stay Fresh Combo",
         price:"MRP: ₹200",discountcost:"Rs179.00",discount:"14%",value:"600",category:["perfumes deodorants colognes"]
     },
     {
         img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/7/47761cahecom1_1.jpg",
         title:"HE Refreshing Combo",
         price:"MRP:₹495",discountcost:"Rs299.00",discount:"20%",value:"601",category:["perfumes deodorants colognes"]
     },
     {
       img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/f/7ff3f87tmc-web-1162__1_.jpg",
       title:"The Man Company Non-gas Body Perfume For Men - Vert",
         price:"MRP:₹245",discountcost:"Rs209.00",discount:"20%",value:"602",category:["perfumes deodorants colognes"]
     },
     {
       img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/2/a2597eaustra00000104_apr__1_.jpg",
       title:"HE Stay Fresh Combo",
             
         price:"MRP:₹445",discountcost:"Rs340",discount:"20%",value:"603",category:["perfumes deodorants colognes"]
     },
     {
       img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/2/a2597eaustra00000104_apr__1_.jpg",
       title:"HE Stay Fresh Combo",
         price:"MRP:₹385",discountcost:"Rs299.00",value:"604",category:["perfumes deodorants colognes"]
     },
     
     {
       img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/6/06f61c2parka00000054.jpg",
       title:"The Man Company Non-gas Body Perfume For Men - Vert",
         price:"MRP:₹4295",discount:"10%",discountcost:"Rs4,000.00",value:"605",category:["perfumes deodorants colognes"]
     },
     {
       img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/4/3440zx.jpg",
       title:"HE Stay Fresh Combo",
         price:"MRP:₹1495",discount:"20%",discountcost:"Rs999.00",value:"606",category:["perfumes deodorants colognes"]
     },
     {
       img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/0/6/06f61c2parka00000054.jpg",
       title:"The Man Company Non-gas Body Perfume For Men - Vert",
         price:"MRP:₹1199 ",discount:"20%",discountcost:"Rs2,799.00",value:"607",category:["perfumes deodorants colognes"]
     },
     {
       img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/d/1dbc7fdbeardo7_1.jpg",
       title:"HE Stay Fresh Combo",
         price:"MRP:₹945",discount:"20%",discountcost:"Rs799.00",value:"608",category:["perfumes deodorants colognes"]
     },
     {
       img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/6/d/6db549b8906106743617.jpg",
       title:"HE Stay Fresh Combo",
         price:"MRP:₹4999",discount:"20%",discountcost:"Rs3,799.00",value:"609",category:["perfumes deodorants colognes"]
     },
     
     {
       img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/2/323dbac8901248268806_1.jpg",
       title:"The Man Company Non-gas Body Perfume For Men - Kopar",
         price:"MRP:₹1595",discount:"20%",discountcost:"Rs799.00",value:"610",category:["perfumes deodorants colognes"]
     },
     {
       img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/2/42a2f87tmc-web-1192__1_.jpg",
       title:"The Man Company Non-gas Body Perfume For Men - Kopar",
         price:"MRP:₹1999",discount:"20%",discountcost:"Rs1299.00",value:"611",category:["perfumes deodorants colognes"]
     },
     {
       img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/7/17270a9layer00000023_nwi1.jpg",
       title:"The Man Company Non-gas Body Perfume For Men - Kopar",
         price:"MRP:₹295",discount:"10%",discountcost:"Rs200.00",value:"612",category:["perfumes deodorants colognes"]
     },
     {
       img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/5/0/50296f9beardo20.jpg",
       title:"The Man Company Non-gas Body Perfume For Men - Kopar",
         price:"MRP:₹250",discount:"20%",discountcost:"Rs199.00",value:"613",category:["perfumes deodorants colognes"]
     },
     {
       img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/b/fb30f87tmc-web-1161__1_.jpg",
       title:"The Man Company Non-gas Body Perfume For Men - Kopar",
         price:"MRP:₹1999",discount:"23%",discountcost:"Rs1799.00",value:"614",category:["perfumes deodorants colognes"]
     },
     
     {
       img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/a/1/a1bd0a9layer00000024_nwi1.jpg",
       title:"HE Stay Fresh Combo",
         price:"MRP:₹379",discount:"20%",discountcost:"Rs399.00",value:"615",category:["perfumes deodorants colognes"]
     },
     {
       img_url:"https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/5/25e2a5f8904153310936_1.jpg",
       title:"The Man Company Non-gas Body Perfume For Men - Kopar",
         price:"MRP:₹2150",discount:"20%",discountcost:"Rs1799.00",value:"616",category:["perfumes deodorants colognes"]
     }
     
     ]
       
      
      
  
    data=JSON.stringify(data)
    console.log(data)
    console.log("listening port 5700");
  } catch (error) {
    console.log(error.message);
  }
});
