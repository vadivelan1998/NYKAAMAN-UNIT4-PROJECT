const app = require("./index");

const connect = require("./configs/db");

app.listen(5700, async () => {
  try {
    await connect();
    // let data = [
    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/n/y/nymcfcom00076_1new.jpg",
    //     title: "MCaffeine Complete Coffee Face-Body-Hair Pampering Kit",
    //     price: "200",
    //     discountcost: "Rs179.00",
    //     discount: "14%",
    //     value: "451",
    //     category: ["body-kit"],
    //   },
    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/b/e/beaaa00000036_1_.png",
    //     title:
    //       "Beardo Ultraglow Lotion And Ultraglow Facewash Combo (Pack Of 2)(100ml+100gm)",
    //     price: "495",
    //     discountcost: "Rs299.00",
    //     discount: "20%",
    //     value: "452",
    //     category: ["facewash"],
    //   },
    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/4/44561e74902430442626.jpg",
    //     title: "Gillette Classic Sensitive Shave Foam - 418 g (33% extra)",
    //     price: "245",
    //     discountcost: "Rs209.00",
    //     discount: "20%",
    //     value: "453",
    //     category: ["cream"],
    //   },
    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/4/44561e74902430442626.jpg",
    //     title: "Gillette Classic Sensitive Shave Foam - 418 g (33% extra)",
    //     price: "445",
    //     discountcost: "Rs340",
    //     discount: "20%",
    //     value: "454",
    //     category: ["cream"],
    //   },
    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/d/2/d2e5c694987176041814.jpg",
    //     title: "Old Spice  After Shave Lotion Smell Like A Men(150ml)",
    //     price: "385",
    //     discountcost: "Rs299.00",
    //     value: "455",
    //     category: ["cream"],
    //   },

    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/4/9/4902430615563-1.jpg",
    //     title: "Gillette Arctic Ice After Shave Splash- 50 ml",
    //     price: "4295",
    //     discount: "10%",
    //     discountcost: "Rs4,000.00",
    //     value: "456",
    //     category: ["lotion"],
    //   },
    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/f/1/f1a5144NYPLUMCOMB029_1.jpg",
    //     title: "Plum Green Tea Daily C-T-M Kit",
    //     price: "1495",
    //     discount: "20%",
    //     discountcost: "Rs999.00",
    //     value: "457",
    //     category: ["kit"],
    //   },
    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8906009456386_1_.jpg",
    //     title: "Bombay Shaving Company Shaving Cream(100g)",
    //     price: "1199 ",
    //     discount: "20%",
    //     discountcost: "Rs2,799.00",
    //     value: "458",
    //     category: ["lotion"],
    //   },
    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/3/1/31483f08906022452327_1.jpg",
    //     title: "HipHop Hair Removal Cream for Men - 60g",
    //     price: "945",
    //     discount: "20%",
    //     discountcost: "Rs799.00",
    //     value: "459",
    //     category: ["lotion"],
    //   },
    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/9/8907367006589asp.jpg",
    //     title:
    //       "The Man Company Gift Set Cleanse Pack (Charcoal Shampoo + Face Wash + Body Wash) (3 Pcs)",
    //     price: "4999",
    //     discount: "20%",
    //     discountcost: "Rs3,799.00",
    //     value: "460",
    //     category: ["shampoo"],
    //   },

    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/1/e10b4068901526005888_1.jpg",
    //     title: "Garnier Oil Clear Facewash For Men - Pack Of 2(300gm)",
    //     price: "1595",
    //     discount: "20%",
    //     discountcost: "Rs799.00",
    //     value: "461",
    //     category: ["facewash"],
    //   },
    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/7/87e8d14BELAB00000079-A.jpg",
    //     title:
    //       "Bella Vita Organic Nicolips Lip Scrub & Nicobalm Lip Balm Combo For Dry, Chapped & Dark Lips",
    //     price: "1999",
    //     discount: "20%",
    //     discountcost: "Rs1299.00",
    //     value: "462",
    //     category: ["lip-balm"],
    //   },
    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/2/9/29689398907367012825__2_z.jpg",
    //     title:
    //       "The Man Company Cleanse & Moisturise Pack, Pack of 3(100ml+150gm)",
    //     price: "295",
    //     discount: "10%",
    //     discountcost: "Rs200.00",
    //     value: "463",
    //     category: ["cream"],
    //   },
    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/1/4/1478be48904311901679.jpg",
    //     title:
    //       "WOW Apple Cider Vinegar Face Wash With Brush For Acne Reduction(150ml)",
    //     price: "250",
    //     discount: "20%",
    //     discountcost: "Rs199.00",
    //     value: "464",
    //     category: ["facewash"],
    //   },
    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/e/a/ea2c0308904311902669__1_.jpg",
    //     title:
    //       "WOW Skin Science Brightening Vitamin C Face Wash With Brush For Hyperpigmentation(150ml)",
    //     price: "1999",
    //     discount: "23%",
    //     discountcost: "Rs1799.00",
    //     value: "465",
    //     category: ["facewash"],
    //   },

    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/8/f/8fd84038901526005864_1.jpg",
    //     title: "Garnier Men Turbo Bright Facewash - Pack Of 2(300gm)",
    //     price: "379",
    //     discount: "20%",
    //     discountcost: "Rs399.00",
    //     value: "466",
    //     category: ["facewach"],
    //   },
    //   {
    //     img_url:
    //       "https://images-static.nykaa.com/media/catalog/product/tr:w-200,h-200,cm-pad_resize/7/e/7e5f4048901526005871_1.jpg",
    //     title: "Garnier Men Turbo Bright Facewash - Pack Of 2(300gm)",
    //     price: "2150",
    //     discount: "20%",
    //     discountcost: "Rs1799.00",
    //     value: "467",
    //     category: ["facewash"],
    //   },
    // ];
    // data=JSON.stringify(data)
    // console.log(data)
    console.log("listening port 5700");
  } catch (error) {
    console.log(error.message);
  }
});
