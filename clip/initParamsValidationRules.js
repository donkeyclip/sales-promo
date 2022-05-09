export default {
    baseColor: {
      label: "Base Color",
      type: "color",
      optional: true,
      default: "white",
    },
    secondaryColor: {
        label: "Secondary Color",
        type: "color",
        optional: true,
        default: "#9975e0",
    },
    backgroundColor: {
        label: "Background Color",
        type: "color",
        optional: true,
        default: "#284AC7",
    },
    colorWrapper: {
        label: "Color Wrapper",
        type: "color",
        optional: true,
        default: "white",
    },
    colorTag:{
        label: "Color Tag",
        type: "string",
        optional: true,
        default: "Colors",
    },
    shoppingBagIcon:{
        label: "Shopping Bag Icon",
        type: "string",
        optional: true,
        default:  "https://donkeyclip.github.io/sales-promo/demo/assets/shopping_bag_icon.png",
    },
    intro:{
        label: "Intro Info",
        type: "object",
        optional: true,
        props:{
            title1 : "string",
            title2: "array",
            company: "string"
        },
        default: {
          title1:"Smart",
          title2:["Sale","Promo"],
          company:"company"
        },
    },
    product1:{
        label: "1st Product",
        type: "object",
        optional: true,
        props:{
            name:"array",
            info:"string",
            colors:"array",
            price:"string",
            features:"array",
            img:"string"
        },
        default:{
          name:["Smart","Watch"],
          info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis viverra ligula ac cursus. Aliquam sit amet mi in ante molestie ultricies placerat sed est.",
          colors:["red","black","blue"],
          price:"235$",
          features:["Touch Screen","4G","Bluetooth","Camer"],
          img:"https://donkeyclip.github.io/sales-promo/demo/assets/smartwatch.png",
       },
    },
    product2:{
        label: "2nd Product",
        type: "object",
        optional: true,
        props:{
            name:"array",
            info:"string",
            colors:"array",
            price:"string",
            features:"array",
            img1:"string",
            img2:"string",
        },
        default:{
          name:["Smart","Phone"],
          info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis viverra ligula ac cursus. Aliquam sit amet mi in ante molestie ultricies placerat sed est.",
          colors:["pink","black","blue"],
          price:"313$",
          features:[ "Screen 6,0 inch","5G","Nfc","128/6"],
          img1: "https://donkeyclip.github.io/sales-promo/demo/assets/mobile-back.png",
          img2:  "https://donkeyclip.github.io/sales-promo/demo/assets/mobile-front.png",
       },
    },
    product3:{
        label: "3rd Product",
        type: "object",
        optional: true,
        props:{
            namea:"string",
            nameb:"string",
            info:"string",
            colors:"array",
            price:"string",
            features:"array",
            img:"string"
        },
        default:{
          namea:"Smart",
          nameb:"Band",
          info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean iaculis viverra ligula ac cursus. Aliquam sit amet mi in ante molestie ultricies placerat sed est.",
          colors:["violet","green","black"],
          price:"235$",
          features:["Touch Screen","4G","Bluetooth","Camer"],
          img:"https://donkeyclip.github.io/sales-promo/demo/assets/band.png",
       },
    },
};