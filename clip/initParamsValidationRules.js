export default {
    baseColor: {
      label: "Base Color",
      type: "color",
    },
    secondaryColor: {
        label: "Secondary Color",
        type: "color",
    },
    backgroundColor: {
        label: "Background Color",
        type: "color",
    },
    colorWrapper: {
        label: "Color Wrapper",
        type: "color",
    },
    colorTag:{
        label: "Color Tag",
        type: "string",
    },
    shoppingBagIcon:{
        label: "Shopping Bag Icon",
        type: "string",
    },
    intro:{
        label: "Intro Info",
        type: "object",
        props:{
            title1 : {type:"string"},
            title2: {
                type:"array",
                items:{
                    type:"string"
                }
            },
            company: {type:"string"}
        },
    },
    product1:{
        label: "1st Product",
        type: "object",
        props:{
            name: {
                type:"array",
                items:{
                    type:"string"
                }
            },
            info:{type:"string"},
            colors: {
                type:"array",
                items:{
                    type:"color"
                }
            },
            price:{type:"string"},
            features: {
                type:"array",
                items:{
                    type:"string"
                }
            },
            img:{type:"string"}
        },
    },
    product2:{
        label: "2nd Product",
        type: "object",
        props:{
            name: {
                type:"array",
                items:{
                    type:"string"
                }
            },
            info:"string",
            colors: {
                type:"array",
                items:{
                    type:"color"
                }
            },
            price:"string",
            features: {
                type:"array",
                items:{
                    type:"string"
                }
            },
            img1:"string",
            img2:"string",
        },
    },
    product3:{
        label: "3rd Product",
        type: "object",
        props:{
            namea:"string",
            nameb:"string",
            info:"string",
            colors: {
                type:"array",
                items:{
                    type:"color"
                }
            },
            price:"string",
            features: {
                type:"array",
                items:{
                    type:"string"
                }
            },
            img:"string"
        },
    },
};