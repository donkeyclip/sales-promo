import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";
import { initParams } from "./initParams";

function saparateLetters(word) {
  let letterDivs = "";
  for (let i = 0; i < word.length; i++) {
    letterDivs += `<div class="letter"> ${word[i]}</div>`;
  }
  return letterDivs;
}
export const clip = new HTMLClip({
  html: `
  <div class="container">
    <div class="textbox">
        <div class="text1">{{initParams.intro.title1}}</div>
        <div class="text2"> ${saparateLetters(initParams[0].value.intro.title2a)} ${saparateLetters(initParams[0].value.intro.title2b)}</div>
        <div class="text3">{{initParams.intro.company}}</div>
    </div>
    <div class="circle big-circle"></div>
    <div class="circle small-circle"></div>
    <div class="line line1"></div>
    <div class="line line2"></div>
    <div class="line line3"></div>
    <div class="line line4"></div>
    <div class="extra-container container2">
        <div class="informations">
            <div class="title"> ${saparateLetters(initParams[0].value.product1.namea)}<br>${saparateLetters(initParams[0].value.product1.nameb)}</div>
            <div class="info"> {{initParams.product1.info}}
            </div>
            <div class="colors">
                <div class="color-tag"> ${saparateLetters("Colors")} </div>
                <div class="color" mc-for="key,item" mc-of="initParams.product1.colors" style="background-color:{{item}};"></div>
            </div>
            <div class="price-tag"><p>${saparateLetters(initParams[0].value.product1.price)}</p></div>
        </div>
        <div class="image"><div class="img"></div></div>
        <div class="features">
          <div class="feature" mc-for="key,item" mc-of="initParams.product1.features">
              <div class="bullet"></div>
              <div class="f-text">{{item}}</div>
          </div>
        </div>
    </div>
    <div class="extra-container container3">
        <div class="features">
          <div class="feature" mc-for="key,item" mc-of="initParams.product2.features">
              <div class="bullet"></div>
              <div class="f-text">{{item}}</div>
          </div>
        </div>
        <div class="image">
            <div class="img" id="back"></div>
            <div class="img" id="front"></div>
        </div>
        <div class="informations">
            <div class="title"> ${saparateLetters(
            initParams[0].value.product2.namea
            )}<br>${saparateLetters(initParams[0].value.product2.nameb)} </div>
            <div class="info">{{initParams.product2.info}}
            </div>
             <div class="colors">
                <div class="color-tag"> ${saparateLetters("Colors")} </div>
                <div class="color" mc-for="key,item" mc-of="initParams.product2.colors" style="background-color:{{item}};"></div>
            </div>
            <div class="price-tag"><p>${saparateLetters(initParams[0].value.product2.price)}</p></div>
        </div>
    </div>
    <div class="extra-container container4">
        <div class="informations">
            <div class="title"> 
              <div class="title1">{{initParams.product3.namea}}</div>
              <div class="title2">{{initParams.product3.nameb}}</div>
            </div>
            <div class="info">{{initParams.product3.info}}
            </div>
             <div class="colors">
                <div class="color-tag"> ${saparateLetters("Colors")} </div>
                <div class="color" mc-for="key,item" mc-of="initParams.product3.colors" style="background-color:{{item}};"></div>
            </div>
            <div class="price-tag"><p>${saparateLetters(initParams[0].value.product3.price)}</p></div>
        </div>
        <div class="image"><div class="img"></div></div>
        <div class="features">
          <div class="feature" mc-for="key,item" mc-of="initParams.product3.features">
              <div class="bullet"></div>
              <div class="f-text">{{item}}</div>
          </div>
        </div>
    </div>
    <a href="https://motorcortexjs.com/"><span>BUY NOW</span> <div class="img"></div></a>
</div>
`,
  css: `
  .container {
    background-color: {{initParams.backgroundColor}};
    width: 800px;
    height: 450px;
    position: relative;
  }
  .textbox{
    position:absolute;
    text-align:center;
    display:flex;
    flex-direction:column;
    align-items:center;
    top:50%;
    width:100%;
    transform:translateY(-50%);
    gap:30px;
  }
  .text1 {
    font-size: 30px;
    font-family: Lato;
    overflow: hidden;
    width:0%;
    opacity:0;
    color:{{initParams.baseColor}};
  }
  .text2{
    width:50%;
    font-size: 60px;
    font-family: Lato;
    font-weight:bold;
    white-space:nowrap;
    color:{{initParams.baseColor}};
  }
  .letter{
   display:inline-block;
   opacity:0;
  }
  .text3{
   
    transform : scale(0);
    color:{{initParams.baseColor}};
    background-color: {{initParams.secondaryColor}};
    font-size:25px;
    font-family:Ubuntu;
    padding:5px 10px;
    border-radius:8px;
    opacity:0;
  }
  .circle{
    display: block;
    background-color:#284AC7;
    border-radius:200px;
  }
  .big-circle{
    position:absolute;
    top:-70%;
    right:-30%;
    width:300px;
    height:300px;
    border: 20px solid #0A0144;
    opacity:0;
  }
.small-circle{
  position:absolute;
  top: 70%;
  right: 83%;
  width:90px;
  height:90px;
  border: 8px solid #0A0144;
  transform:scale(0);
  opacity:0;
  }
.line {
  width: 0px;
  background-color: #0A0144;
  height: 8px;
  border-radius: 15px;
  opacity:0.3;
}
.line1 {
  position: absolute;
  top: 90px;
  left: 150px;
}
.line2 {
  position: absolute;
  top: 120px;
  right: 560px;
}
.line3 {
  position: absolute;
  bottom: 110px;
  left:590px;
} 
.line4 {
  position: absolute;
  bottom: 80px;
  right:130px;
}
.extra-container{
  position:absolute;
  width: 800px;
  height: 450px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  gap:20px;
}

.informations{
  width:32%;
  font-family: Lato;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  gap:10px;
}

.container3 .informations{
  align-items:flex-end;
}

.colors{
  display:flex;
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  gap:5px;
}

.title{
  font-size: 60px;
  font-weight:bold;
  color:{{initParams.baseColor}};
}

.container4 .title{
  display:flex;
  flex-direction:column;
  gap:1px;
 
}
.container4 .title1{
  position:relative;
  left:-20%;
  opacity:0;
}
.container4 .title2{
  left:20%;
  opacity:0;
  position:relative;
}
.info{
  opacity:0;
  font-size: 15px;
  margin-top:10px;
  color:{{initParams.baseColor}};
}
.container3 .title, .container3 .info{
  text-align:right;
}
.color-tag{
  font-size:15px;
  font-weight:bold;
  color:{{initParams.baseColor}};
}
.color{
  width:15px;
  height: 15px;
  border: 1px solid {{initParams.colorWrapper}};
  border-radius: 5px;
  transform:scale(0);
}
.price-tag{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  margin-top:10px;
  color:{{initParams.baseColor}};
  background-color: {{initParams.secondaryColor}};
  width:0px;
  height:0px;
  opacity: 0;
}

.image{
  width:30%;
  height:100%;
  position:relative;
}

.container2 .img, .container4 .img{
  opacity:0;
  width:200px;
  height:200px;
  position:absolute;
  top:50%;
}
.container2 .img{
  background:url({{initParams.product1.img}});
  background-position:center;
  background-size:contain;
  background-repeat:no-repeat;
  transform: translateY(-50%) rotate(90deg) scale(0);
}
.container4 .img{
  background:url({{initParams.product3.img}});
  background-position:center;
  background-size:contain;
  background-repeat:no-repeat;
  transform: translateY(-50%) scale(0);
}

.container3 .img{
  position:absolute;
  top:-50%;
  width:200px;
  height:250px;
  opacity:1;
  transform: scale(0);
}

#back{
  background:url({{initParams.product2.img1}});
  background-position:center;
  background-size:contain;
  background-repeat:no-repeat;
}

#front{
  background:url({{initParams.product2.img2}});
  background-position:center;
  background-size:contain;
  background-repeat:no-repeat;
}
.features{
  width:20%;
  display:flex;
  flex-direction:column;
}

.feature{
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space:nowrap;
  gap: 10px;
  margin-bottom:5px;
  color:{{initParams.secondaryColor}};
}
.bullet{
  width:0%;
  height:0%;
  background-color: {{initParams.secondaryColor}};
  opacity:0.5;
}
.f-text{
  opacity:0;
  margin-left: 50px;
  font-family: Lato;
  font-size:12px;
  font-weight:bold;
  color:{{initParams.baseColor}};
}
a{
  display:inline-block;
  width:200px;
  height:50px;
  position:absolute;
  top:45%;
  left:50%;
  transform: translate(-50%,-55%);
  color:{{initParams.baseColor}};
  background-color: {{initParams.secondaryColor}};
  border-radius:200px;
  text-decoration:none;
  font-size: 25px;
  font-weight:bold;
  font-family: Ubuntu;
  visibility: hidden;
  box-shadow:0 0 5px #ff1cac;
  opacity:0;
}
a span{
  position:absolute;
  white-space: nowrap;
  top:50%;
  left:45%;
  transform: translate(-55%,-50%);
}
a .img{
  background:url({{initParams.shoppingBagIcon}});
  background-position:center;
  background-size:contain;
  background-repeat:no-repeat;
  width:45px;
  height:45px;
  position:absolute;
  top:50%;
  left:78%;
  transform: translate(-22%,-50%);
}
a:hover{
  box-shadow:0 0 25px #ff1cac;
}
  `,
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Lato&family=Ubuntu&display=swap",
    },
  ],
  host: document.getElementById("clip"),
  initParams: initParams[0].value,
  containerParams: {
    width: "800px",
    height: "450px",
  },
});

//first slide
const sl1BigCircle = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.5,
      top: "-35%",
      right: "-15%",
    },
  },
  {
    selector: ".big-circle",
    duration: 2220,
    easing: "easeOutQuad",
  }
);
const sl1SmallCircle = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.5,
      transform: { scale: 1 },
    },
  },
  {
    selector: ".small-circle",
    duration: 2220,
    easing: "easeOutQuad",
  }
);
const sl1Line1 = new CSSEffect(
  {
    animatedAttrs: {
      width: "80px",
      top: "75px",
      left: "70px",
    },
  },
  {
    selector: ".line1",
    duration: 2220,
    easing: "easeOutQuad",
  }
);
const sl1Line2 = new CSSEffect(
  {
    animatedAttrs: {
      width: "80px",
      top: "95px",
      right: "610px",
    },
  },
  {
    selector: ".line2",
    duration: 2220,
    easing: "easeOutQuad",
  }
);
const sl1Line3 = new CSSEffect(
  {
    animatedAttrs: {
      width: "80px",
      bottom: "80px",
      left: "680px",
    },
  },
  {
    selector: ".line3",
    duration: 2220,
    easing: "easeOutQuad",
  }
);
const sl1Line4 = new CSSEffect(
  {
    animatedAttrs: {
      width: "80px",
      bottom: "60px",
      right: "60px",
    },
  },
  {
    selector: ".line4",
    duration: 2220,
    easing: "easeOutQuad",
  }
);
const text1appear = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
      width: "100%",
    },
  },
  {
    selector: ".text1",
    duration: 2220,
    easing: "easeOutQuad",
  }
);

const text2appear = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
    },
  },
  {
    selector: ".text2>.letter",
    delay: "@stagger(0, 2100)",
    duration: 300,
    easing: "linear",
  }
);
const text3appear = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
      transform: { scale: 1 },
    },
  },
  {
    selector: ".text3",
    duration: 2220,
    easing: "linear",
  }
);

//remove first slide

const removeText = new CSSEffect(
  {
    animatedAttrs: {
      transform: { scale: 7 },
      opacity: 0,
    },
  },
  {
    selector: ".textbox",
    duration: 1500,
    delay: 550,
    easing: [1, 0, 1, 0],
  }
);

const remove1BigCircle = new CSSEffect(
  {
    animatedAttrs: {
      top: "-45%",
      right: "-25%",
      opacity: 0,
    },
  },
  {
    selector: ".big-circle",
    duration: 2000,
    easing: [1, 0, 1, 0],
  }
);
const remove1SmallCircle = new CSSEffect(
  {
    animatedAttrs: {
      top: "100%",
      left: "-20%",
      opacity: 0,
    },
  },
  {
    selector: ".small-circle",
    duration: 2000,
    easing: [1, 0, 1, 0],
  }
);
const remove1Line1 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
      top: "-20px",
      left: "-120px",
    },
  },
  {
    selector: ".line1",
    duration: 2000,
    easing: [1, 0, 1, 0],
  }
);
const remove1Line2 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
      top: "0px",
      right: "800px",
    },
  },
  {
    selector: ".line2",
    duration: 2000,
    easing: [1, 0, 1, 0],
  }
);
const remove1Line3 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
      bottom: "0px",
      left: "820px",
    },
  },
  {
    selector: ".line3",
    duration: 2000,
    easing: [1, 0, 1, 0],
  }
);
const remove1Line4 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
      bottom: "-20px",
      right: "-80px",
    },
  },
  {
    selector: ".line4",
    duration: 2000,
    easing: [1, 0, 1, 0],
  }
);
//reset circle and lines
const reset1BigCircle = new CSSEffect(
  {
    animatedAttrs: {
      top: "-200px",
      left: "-200px",
    },
  },
  {
    selector: ".big-circle",
    duration: 1,
  }
);
const reset1SmallCircle = new CSSEffect(
  {
    animatedAttrs: {
      top: "100px",
      left: "400px",
      transform: {
        scale: 0,
      },
    },
  },
  {
    selector: ".small-circle",
    duration: 1,
  }
);
const reset1Line1 = new CSSEffect(
  {
    animatedAttrs: {
      top: "70px",
      left: "400px",
    },
  },
  {
    selector: ".line1",
    duration: 1,
  }
);

const reset1Line2 = new CSSEffect(
  {
    animatedAttrs: {
      top: "90px",
      right: "50px",
    },
  },
  {
    selector: ".line2",
    duration: 1,
  }
);
const reset1Line3 = new CSSEffect(
  {
    animatedAttrs: {
      bottom: "100px",
      left: "300px",
    },
  },
  {
    selector: ".line3",
    duration: 1,
  }
);
const reset1Line4 = new CSSEffect(
  {
    animatedAttrs: {
      bottom: "80px",
      right: "200px",
    },
  },
  {
    selector: ".line4",
    duration: 1,
  }
);
//2nd slide
const sl2BigCircle = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.5,
      top: "-35%",
      left: "-25%",
    },
  },
  {
    selector: ".big-circle",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
const sl2SmallCircle = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.5,
      transform: { scale: 1 },
    },
  },
  {
    selector: ".small-circle",
    duration: 3839,
    easing: "easeOutQuad",
  }
);

const sl2Info = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
    },
  },
  {
    selector: ".container2 .info",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
const sl2Title = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
    },
  },
  {
    selector: ".container2 .title>.letter",
    delay: "@stagger(0, 2700)",
    duration: 1000,
    easing: "easeOutQuad",
  }
);

//lines for 2nd slide
const sl2Line1 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.3,
      left: "600px",
    },
  },
  {
    selector: ".line1",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
const sl2Line2 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.3,
      right: "100px",
    },
  },
  {
    selector: ".line2",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
const sl2Line3 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.3,
      left: "350px",
    },
  },
  {
    selector: ".line3",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
const sl2Line4 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.3,
      right: "350px",
    },
  },
  {
    selector: ".line4",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
//bullets for 2nd slide
const sl2Bullets = new CSSEffect(
  {
    animatedAttrs: {
      width: "5px",
      height: "5px",
      borderRadius: "5px",
    },
  },
  {
    selector: ".container2 .bullet",
    delay: "@stagger(0, 1500)",
    duration: 600,
    easing: "easeOutQuad",
  }
);

//f-text for 2nd slide
const sl2Features = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
      marginLeft: "2px",
    },
  },
  {
    selector: ".container2 .f-text",
    delay: "@stagger(0, 1500)",
    duration: 1300,
    easing: "easeOutQuad",
  }
);

const sl2Img = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
      transform: { rotate: "15deg", scale: 1 },
    },
  },
  {
    selector: ".container2 .img",
    duration: 3300,
    easing: "easeOutQuad",
  }
);
//extra info for the 2nd slide
const sl2ColorTag = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
    },
  },
  {
    selector: ".container2 .color-tag>.letter",
    delay: "@stagger(0, 900)",
    duration: 700,
    easing: "easeOutQuad",
  }
);
const sl2Colors = new CSSEffect(
  {
    animatedAttrs: {
      transform: { scale: 1 },
    },
  },
  {
    selector: ".container2 .color",
    delay: "@stagger(0, 500)",
    duration: 1500,
    easing: "easeOutQuad",
  }
);
const sl2PriceTagWrapper = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
      width: "80px",
      height: "30px",
      borderRadius: "10px",
    },
  },
  {
    selector: ".container2 .price-tag",
    duration: 500,
    easing: "easeOutQuad",
  }
);
const sl2PriceTag = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
    },
  },
  {
    selector: ".container2 .price-tag .letter",
    duration: 500,
    delay: "@stagger(500, 1000)",
    easing: "easeOutQuad",
  }
);
//remove 2nd slide
const removeContainer2 = new CSSEffect(
  {
    animatedAttrs: {
      top: "100%",
    },
  },
  {
    selector: ".container2",
    duration: 900,
    easing: [1, 0, 1, 0.21],
  }
);
const remove2Line1 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
      top: "520px",
    },
  },
  {
    selector: ".line1",
    duration: 900,
    easing: [1, 0, 1, 0.21],
  }
);
const remove2Line2 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
      top: "540px",
    },
  },
  {
    selector: ".line2",
    duration: 900,
    easing: [1, 0, 1, 0.21],
  }
);
const remove2Line3 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
      bottom: "-350px",
    },
  },
  {
    selector: ".line3",
    duration: 900,
    easing: [1, 0, 1, 0.21],
  }
);
const remove2Line4 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
      bottom: "-370px",
    },
  },
  {
    selector: ".line4",
    duration: 900,
    easing: [1, 0, 1, 0.21],
  }
);
const remove2BigCircle = new CSSEffect(
  {
    animatedAttrs: {
      top: "100%",
      opacity: 0,
    },
  },
  {
    selector: ".big-circle",
    duration: 900,
    easing: [1, 0, 1, 0.21],
  }
);
const remove2SmallCircle = new CSSEffect(
  {
    animatedAttrs: {
      top: "550px",
      opacity: 0,
    },
  },
  {
    selector: ".small-circle",
    duration: 900,
    easing: [1, 0, 1, 0.21],
  }
);
//reset circle and lines
const reset2BigCircle = new CSSEffect(
  {
    animatedAttrs: {
      left: "100%",
      top: "-55%",
    },
  },
  {
    selector: ".big-circle",
    duration: 1,
  }
);
const reset2SmallCircle = new CSSEffect(
  {
    animatedAttrs: {
      top: "150px",
      left: "200px",
      transform: { scale: 0 },
    },
  },
  {
    selector: ".small-circle",
    duration: 1,
  }
);
const reset2Line1 = new CSSEffect(
  {
    animatedAttrs: {
      top: "-10px",
      left: "-10px",
    },
  },
  {
    selector: ".line1",
    duration: 1,
  }
);

const reset2Line2 = new CSSEffect(
  {
    animatedAttrs: {
      top: "5px",
      right: "550px",
    },
  },
  {
    selector: ".line2",
    duration: 1,
  }
);
const reset2Line3 = new CSSEffect(
  {
    animatedAttrs: {
      bottom: "150px",
      left: "350px",
    },
  },
  {
    selector: ".line3",
    duration: 1,
  }
);
const reset2Line4 = new CSSEffect(
  {
    animatedAttrs: {
      bottom: "120px",
      right: "60px",
    },
  },
  {
    selector: ".line4",
    duration: 1,
  }
);
//3rd slide
const sl3BigCircle = new CSSEffect(
  {
    animatedAttrs: {
      left: "75%",
      top: "-30%",
      opacity: 0.5,
    },
  },
  {
    selector: ".big-circle",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
const sl3SmallCircle = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.5,
      transform: { scale: 1 },
    },
  },
  {
    selector: ".small-circle",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
const sl3Info = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
    },
  },
  {
    selector: ".container3 .info",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
const sl3Title = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
    },
  },
  {
    selector: ".container3 .title>.letter",
    delay: "@stagger(0, 2700)",
    duration: 1000,
    easing: "easeOutQuad",
  }
);
//lines for 3rd slide
const sl3Line1 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.3,
      top: "60px",
      left: "100px",
    },
  },
  {
    selector: ".line1",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
const sl3Line2 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.3,
      top: "80px",
      right: "580px",
    },
  },
  {
    selector: ".line2",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
const sl3Line3 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.3,
      bottom: "35px",
      left: "500px",
    },
  },
  {
    selector: ".line3",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
const sl3Line4 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.3,
      bottom: "10px",
      right: "180px",
    },
  },
  {
    selector: ".line4",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
//bullets for 3rd slide
const sl3Bullets = new CSSEffect(
  {
    animatedAttrs: {
      width: "5px",
      height: "5px",
      borderRadius: "5px",
    },
  },
  {
    selector: ".container3 .bullet",
    delay: "@stagger(0, 1500)",
    duration: 600,
    easing: "easeOutQuad",
  }
);

//f-text for 3rd slide
const sl3Features = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
      marginLeft: "2px",
    },
  },
  {
    selector: ".container3 .f-text",
    delay: "@stagger(0, 1500)",
    duration: 1300,
    easing: "easeOutQuad",
  }
);

//3rd slide extra info
const sl3ColorTag = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
    },
  },
  {
    selector: ".container3 .color-tag>.letter",
    delay: "@stagger(0, 900)",
    duration: 700,
    easing: "easeOutQuad",
  }
);
const sl3Colors = new CSSEffect(
  {
    animatedAttrs: {
      transform: { scale: 1 },
    },
  },
  {
    selector: ".container3 .color",
    delay: "@stagger(0, 500)",
    duration: 1500,
    easing: "easeOutQuad",
  }
);
const sl3PriceTagWrapper = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
      width: "80px",
      height: "30px",
      borderRadius: "10px",
    },
  },
  {
    selector: ".container3 .price-tag",
    duration: 500,
    easing: "easeOutQuad",
  }
);
const sl3PriceTag = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
    },
  },
  {
    selector: ".container3 .price-tag .letter",
    duration: 500,
    delay: "@stagger(500, 1000)",
    easing: "easeOutQuad",
  }
);
//3rd slide images
const sl3Img = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
      top: "50%",
      transform: { translateY: "-50%", scale: 1 },
    },
  },
  {
    selector: ".container3 #front,.container3 #back",
    duration: 600,
    easing: "easeOutQuad",
  }
);

const sl3ImgTransform = new CSSEffect(
  {
    animatedAttrs: {
      left: "-20px",
      transform: { rotate: "-10deg" },
    },
  },
  {
    selector: ".container3 #back",
    duration: 900,
    easing: "easeOutQuad",
  }
);
//remove 3rd slide
const removeContainer3 = new CSSEffect(
  {
    animatedAttrs: {
      left: "100%",
    },
  },
  {
    selector: ".container3",
    duration: 900,
    easing: [1, 0, 1, 0.21],
  }
);
const remove3SmallCircle = new CSSEffect(
  {
    animatedAttrs: {
      left: "1000px",
    },
  },
  {
    selector: ".small-circle",
    duration: 900,
    easing: [1, 0, 1, 0.21],
  }
);
const remove3BigCircle = new CSSEffect(
  {
    animatedAttrs: {
      left: "175%",
    },
  },
  {
    selector: ".big-circle",
    duration: 900,
    easing: [1, 0, 1, 0.21],
  }
);
const remove3Line1 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
      left: "900px",
    },
  },
  {
    selector: ".line1",
    duration: 900,
    easing: [1, 0, 1, 0.21],
  }
);
const remove3Line2 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
      right: "-220px",
    },
  },
  {
    selector: ".line2",
    duration: 900,
    easing: [1, 0, 1, 0.21],
  }
);
const remove3Line3 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
      left: "1300px",
    },
  },
  {
    selector: ".line3",
    duration: 900,
    easing: [1, 0, 1, 0.21],
  }
);
const remove3Line4 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
      right: "-620px",
    },
  },
  {
    selector: ".line4",
    duration: 900,
    easing: [1, 0, 1, 0.21],
  }
);
//reset circle and lines
const reset3Opacity = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0,
    },
  },
  {
    selector: ".big-circle,.small-circle,.line",
    duration: 1,
  }
);
const reset3BigCircle = new CSSEffect(
  {
    animatedAttrs: {
      left: "-30%",
      top: "-75%",
    },
  },
  {
    selector: ".big-circle",
    duration: 1,
  }
);
const reset3SmallCircle = new CSSEffect(
  {
    animatedAttrs: {
      top: "100px",
      left: "450px",
      transform: { scale: 0 },
    },
  },
  {
    selector: ".small-circle",
    duration: 1,
  }
);
const reset3Line1 = new CSSEffect(
  {
    animatedAttrs: {
      top: "10px",
      left: "400px",
    },
  },
  {
    selector: ".line1",
    duration: 1,
  }
);

const reset3Line2 = new CSSEffect(
  {
    animatedAttrs: {
      right: "100px",
    },
  },
  {
    selector: ".line2",
    duration: 1,
  }
);
const reset3Line3 = new CSSEffect(
  {
    animatedAttrs: {
      bottom: "20px",
      left: "-10px",
    },
  },
  {
    selector: ".line3",
    duration: 1,
  }
);
const reset3Line4 = new CSSEffect(
  {
    animatedAttrs: {
      bottom: "15px",
      right: "500px",
    },
  },
  {
    selector: ".line4",
    duration: 1,
  }
);
//4th slide
const sl4BigCircle = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.5,
      top: "-35%",
      left: "-25%",
    },
  },
  {
    selector: ".big-circle",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
const sl4SmallCircle = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.5,
      transform: { scale: 1 },
    },
  },
  {
    selector: ".small-circle",
    duration: 3839,
    easing: "easeOutQuad",
  }
);

const sl4Title = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
      left: "0px",
    },
  },
  {
    selector: ".container4 .title1,.container4 .title2",
    duration: 1000,
    easing: "easeOutQuad",
  }
);
const sl4Info = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
    },
  },
  {
    selector: ".container4 .info",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
//lines for 4th slide
const sl4Line1 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.3,
      top: "15px",
      left: "650px",
    },
  },
  {
    selector: ".line1",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
const sl4Line2 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.3,
      top: "35px",
      right: "40px",
    },
  },
  {
    selector: ".line2",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
const sl4Line3 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.3,
      bottom: "35px",
      left: "150px",
    },
  },
  {
    selector: ".line3",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
const sl4Line4 = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 0.3,
      bottom: "15px",
      right: "550px",
    },
  },
  {
    selector: ".line4",
    duration: 3839,
    easing: "easeOutQuad",
  }
);
//bullets for 4th slide
const sl4Bullets = new CSSEffect(
  {
    animatedAttrs: {
      width: "5px",
      height: "5px",
      borderRadius: "5px",
    },
  },
  {
    selector: ".container4 .bullet",
    delay: "@stagger(0, 1500)",
    duration: 600,
    easing: "easeOutQuad",
  }
);

//f-text for 4th slide
const sl4Features = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
      marginLeft: "2px",
    },
  },
  {
    selector: ".container4 .f-text",
    delay: "@stagger(0, 1500)",
    duration: 1300,
    easing: "easeOutQuad",
  }
);

const sl4Img = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
      transform: { rotate: "15deg", scale: 1 },
    },
  },
  {
    selector: ".container4 .img",
    duration: 3300,
    easing: "easeOutQuad",
  }
);
//extra info for the 4th slide
const sl4ColorTag = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
    },
  },
  {
    selector: ".container4 .color-tag>.letter",
    delay: "@stagger(0, 900)",
    duration: 700,
    easing: "easeOutQuad",
  }
);
const sl4Colors = new CSSEffect(
  {
    animatedAttrs: {
      transform: { scale: 1 },
    },
  },
  {
    selector: ".container4 .color",
    delay: "@stagger(0, 500)",
    duration: 1500,
    easing: "easeOutQuad",
  }
);
const sl4PriceTagWrapper = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
      width: "80px",
      height: "30px",
      borderRadius: "10px",
    },
  },
  {
    selector: ".container4 .price-tag",
    duration: 500,
    easing: "easeOutQuad",
  }
);

const sl4PriceTag = new CSSEffect(
  {
    animatedAttrs: {
      opacity: 1,
    },
  },
  {
    selector: ".container4 .price-tag .letter",
    duration: 500,
    delay: "@stagger(500, 1000)",
    easing: "easeOutQuad",
  }
);

//remove 4th slide
const removeContainer4 = new CSSEffect(
  {
    animatedAttrs: {
      transform: { scale: 0 },
    },
  },
  {
    selector: ".container4",
    duration: 600,
    easing: [1, 0, 1, 0.21],
  }
);
//4th slide remove circles
const remove4Circles = new CSSEffect(
  {
    animatedAttrs: {
      top: "50%",
      left: "35%",
      transform: { scale: 0 },
      opacity: 0,
    },
  },
  {
    selector: ".small-circle , .big-circle",
    duration: 650,
    easing: [1, 0, 1, 0.21],
  }
);
//4th slide remove lines
const remove4Line1 = new CSSEffect(
  {
    animatedAttrs: {
      top: "200px",
      left: "400px",
      width: "0%",
      height: "0%",
      opacity: 0,
    },
  },
  {
    selector: ".line1",
    duration: 650,
    easing: [1, 0, 1, 0.21],
  }
);
const remove4Line2 = new CSSEffect(
  {
    animatedAttrs: {
      top: "200px",
      right: "400px",
      width: "0%",
      height: "0%",
      opacity: 0,
    },
  },
  {
    selector: ".line2",
    duration: 650,
    easing: [1, 0, 1, 0.21],
  }
);
const remove4Line3 = new CSSEffect(
  {
    animatedAttrs: {
      bottom: "200px",
      left: "400px",
      height: "0%",
      width: "0%",
      opacity: 0,
    },
  },
  {
    selector: ".line3",
    duration: 650,
    easing: [1, 0, 1, 0.21],
  }
);
const remove4Line4 = new CSSEffect(
  {
    animatedAttrs: {
      bottom: "200px",
      right: "400px",
      width: "0%",
      height: "0%",
      opacity: 0,
    },
  },
  {
    selector: ".line4",
    duration: 650,
    easing: [1, 0, 1, 0.21],
  }
);
const appearCTAButton = new CSSEffect(
  {
    animatedAttrs: {
      visibility: "visible",
      opacity: 1,
    },
  },
  {
    selector: "a",
    duration: 2000,
    easing: "linear",
  }
);
//1st slide
//circles
clip.addIncident(sl1BigCircle, 0);
clip.addIncident(sl1SmallCircle, 0);
//lines
clip.addIncident(sl1Line1, 0);
clip.addIncident(sl1Line2, 0);
clip.addIncident(sl1Line3, 0);
clip.addIncident(sl1Line4, 0);
//text
clip.addIncident(text1appear, 0);
clip.addIncident(text2appear, 0);
clip.addIncident(text3appear, 0);

//remove 1st slide
//text
clip.addIncident(removeText, 2320);
//lines and circles
clip.addIncident(remove1BigCircle, 2320);
clip.addIncident(remove1SmallCircle, 2320);
clip.addIncident(remove1Line1, 2320);
clip.addIncident(remove1Line2, 2320);
clip.addIncident(remove1Line3, 2320);
clip.addIncident(remove1Line4, 2320);

//reset positions(prepare for 2nd slide)
//circles
clip.addIncident(reset1BigCircle, 4460);
clip.addIncident(reset1SmallCircle, 4460);
//lines
clip.addIncident(reset1Line1, 4460);
clip.addIncident(reset1Line2, 4460);
clip.addIncident(reset1Line3, 4460);
clip.addIncident(reset1Line4, 4460);

//2nd slide
//circles
clip.addIncident(sl2BigCircle, 4461);
clip.addIncident(sl2SmallCircle, 4461);
//info
clip.addIncident(sl2Info, 4461);
clip.addIncident(sl2Title, 4461);
//lines
clip.addIncident(sl2Line1, 4461);
clip.addIncident(sl2Line2, 4461);
clip.addIncident(sl2Line3, 4461);
clip.addIncident(sl2Line4, 4461);
//features
clip.addIncident(sl2Bullets, 4461);
clip.addIncident(sl2Features, 4461);
//image
clip.addIncident(sl2Img, 4461);
//extra-info
clip.addIncident(sl2ColorTag, 4461);
clip.addIncident(sl2Colors, 4461);
clip.addIncident(sl2PriceTagWrapper, 4461);
clip.addIncident(sl2PriceTag, 4461);

//remove 2nd slide
//container
clip.addIncident(removeContainer2, 8300);
//lines
clip.addIncident(remove2Line1, 8300);
clip.addIncident(remove2Line2, 8300);
clip.addIncident(remove2Line3, 8300);
clip.addIncident(remove2Line4, 8300);
//circles
clip.addIncident(remove2BigCircle, 8300);
clip.addIncident(remove2SmallCircle, 8300);

//reset positions(prepare for 3rd slide)
//circles
clip.addIncident(reset2BigCircle, 9201);
clip.addIncident(reset2SmallCircle, 9201);
//lines
clip.addIncident(reset2Line1, 9201);
clip.addIncident(reset2Line2, 9201);
clip.addIncident(reset2Line3, 9201);
clip.addIncident(reset2Line4, 9201);

//3rd slide
//circles
clip.addIncident(sl3BigCircle, 9202);
clip.addIncident(sl3SmallCircle, 9202);
//info
clip.addIncident(sl3Info, 9402);
clip.addIncident(sl3Title, 9402);
//lines
clip.addIncident(sl3Line1, 9202);
clip.addIncident(sl3Line2, 9202);
clip.addIncident(sl3Line3, 9202);
clip.addIncident(sl3Line4, 9202);
//features
clip.addIncident(sl3Bullets, 9402);
clip.addIncident(sl3Features, 9402);
//extra-info
clip.addIncident(sl3ColorTag, 9202);
clip.addIncident(sl3Colors, 9202);
clip.addIncident(sl3PriceTagWrapper, 9202);
clip.addIncident(sl3PriceTag, 9202);
//images
clip.addIncident(sl3Img, 9202);
clip.addIncident(sl3ImgTransform, 11003);

//remove 3rd slide
clip.addIncident(removeContainer3, 13041);
//circles
clip.addIncident(remove3SmallCircle, 13041);
clip.addIncident(remove3BigCircle, 13041);
//lines
clip.addIncident(remove3Line1, 13041);
clip.addIncident(remove3Line2, 13041);
clip.addIncident(remove3Line3, 13041);
clip.addIncident(remove3Line4, 13041);

//reset posotions(prepare for 4th slide)
clip.addIncident(reset3Opacity, 13941);
//circles
clip.addIncident(reset3BigCircle, 13941);
clip.addIncident(reset3SmallCircle, 13941);
//lines
clip.addIncident(reset3Line1, 13941);
clip.addIncident(reset3Line2, 13941);
clip.addIncident(reset3Line3, 13941);
clip.addIncident(reset3Line4, 13941);

//4th slide
//circles
clip.addIncident(sl4BigCircle, 13942);
clip.addIncident(sl4SmallCircle, 13942);
//info
clip.addIncident(sl4Title, 14142);
clip.addIncident(sl4Info, 14142);
//lines
clip.addIncident(sl4Line1, 13942);
clip.addIncident(sl4Line2, 13942);
clip.addIncident(sl4Line3, 13942);
clip.addIncident(sl4Line4, 13942);
//features
clip.addIncident(sl4Bullets, 14142);
clip.addIncident(sl4Features, 14142);
//image
clip.addIncident(sl4Img, 13942);
//extra-info
clip.addIncident(sl4ColorTag, 13942);
clip.addIncident(sl4Colors, 13942);
clip.addIncident(sl4PriceTagWrapper, 13942);
clip.addIncident(sl4PriceTag, 13942);

//remove 4th slide
//container
clip.addIncident(removeContainer4, 18000);
//circles
clip.addIncident(remove4Circles, 18000);
//lines
clip.addIncident(remove4Line1, 18000);
clip.addIncident(remove4Line2, 18000);
clip.addIncident(remove4Line3, 18000);
clip.addIncident(remove4Line4, 18000);
clip.addIncident(appearCTAButton, 18650);
