import {HTMLClip,CSSEffect} from "@donkeyclip/motorcortex";
import { initParams } from "./initParams";

function saparateLetters(word){
  let letterDivs="";
  for(let i=0;i<word.length;i++){
    letterDivs +=`<div class="letter"> ${word[i]}</div>`
  }
  return letterDivs; 
}
export const clip = new HTMLClip({
  html: `
  <div class="container">
    <div class="textbox">
        <div class="text1">Smart</div>
        <div class="text2"> ${saparateLetters("Sale")} ${saparateLetters("Promo")}</div>
        <div class="text3"><p>company</p></div>
    </div>
    <div class="circle big-circle"></div>
    <div class="circle small-circle"></div>
    <div class="line line1"></div>
    <div class="line line2"></div>
    <div class="line line3"></div>
    <div class="line line4"></div>
    <div class="extra-container container2">
        <div class="informations">
            <div class="title"> ${saparateLetters("Smart")}<br>${saparateLetters("Watch")}</div>
            <div class="info"> Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. 
                                    Aenean iaculis viverra ligula ac cursus. 
                                    Aliquam sit amet mi in ante molestie ultricies 
                                    placerat sed est.
            </div>
            <div class="color-tag"> ${saparateLetters("Colors")}
                <div class="color red"></div>
                <div class="color black"></div>
                <div class="color blue"></div>
            </div>
            <div class="price-tag"><p>${saparateLetters("235$")}</p></div>
        </div>
        <div class="image"><div class="img"></div></div>
        <div class="features">
            <div class="feature">
                <div class="bullet b1"></div>
                <div class="f-text f1">Touch Screen</div>
            </div>
            <div class="feature">
                <div class="bullet b2"></div>
                <div class="f-text f2">4G</div>
            </div>
            <div class="feature">
                <div class="bullet b3"></div>
                <div class="f-text f3">Bluetooth</div>
            </div>
            <div class="feature">
                <div class="bullet b4"></div>
                <div class="f-text f4">Camer</div>
            </div>
        </div>
    </div>
    <div class="extra-container container3">
        <div class="features">
            <div class="feature">
                <div class="bullet b1"></div>
                <div class="f-text f1">Screen 6,0 inch</div>
            </div>
            <div class="feature">
                <div class="bullet b2"></div>
                <div class="f-text f2">5G</div>
            </div>
            <div class="feature">
                <div class="bullet b3"></div>
                <div class="f-text f3">Nfc</div>
            </div>
            <div class="feature">
                <div class="bullet b4"></div>
                <div class="f-text f4">128/6</div>
            </div>
        </div>
        <div class="image">
            <div class="img" id="back"></div>
            <div class="img" id="front"></div>
        </div>
        <div class="informations">
            <div class="title"> ${saparateLetters("Smart")}<br>${saparateLetters("Phone")} </div>
            <div class="info"> Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit. 
                                        Aenean iaculis viverra ligula ac cursus. 
                                        Aliquam sit amet mi in ante molestie ultricies 
                                        placerat sed est.
            </div>
            <div class="color-tag"> ${saparateLetters("Colors")}
            <div class="color red"></div>
            <div class="color black"></div>
            <div class="color blue"></div>
            </div>
            <div class="price-tag"><p>${saparateLetters("313$")}</p></div>
        </div>
    </div>
    <div class="extra-container container4">
        <div class="informations">
            <div class="title"> <div class="title1">Smart</div><br><div class="title2">Band</div> </div>
            <div class="info"> Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit. 
                                            Aenean iaculis viverra ligula ac cursus. 
                                            Aliquam sit amet mi in ante molestie ultricies 
                                            placerat sed est.
            </div>
            <div class="color-tag"> ${saparateLetters("Colors")}
                <div class="color red"></div>
                <div class="color black"></div>
                <div class="color blue"></div>
            </div>
            <div class="price-tag"><p>${saparateLetters("235$")}</p></div>
        </div>
        <div class="image"><div class="img"></div></div>
        <div class="features">
            <div class="feature">
                <div class="bullet b1"></div>
                <div class="f-text f1">Touch Screen</div>
            </div>
            <div class="feature">
                <div class="bullet b2"></div>
                <div class="f-text f2">4G</div>
            </div>
            <div class="feature">
                <div class="bullet b3"></div>
                <div class="f-text f3">Bluetooth</div>
            </div>
            <div class="feature">
                <div class="bullet b4"></div>
                <div class="f-text f4">Camer</div>
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
    text-align:center;
  }
  .text1 {
    position:absolute;
    top:35%;
    right:10%;
    transform: translate(50%,-65%);
    font-size: 30px;
    font-family: Lato;
    overflow: hidden;
    width:0%;
    opacity:0;
    color:{{initParams.baseColor}};
  }
  .text2{
    position:absolute;
    top:50%;
    left:50%;
    transform :translate(-50%,-50%);
    font-size: 60px;
    font-family: Lato;
    font-weight:bold;
    align-self:flex-start;
    white-space:nowrap;
    color:{{initParams.baseColor}};
  }
  .letter{
   display:inline-block;
   opacity:0;
  }
  .text3{
    position:absolute;
    top:55%;
    left:50%;
    transform :translateX(-50%);
    color:{{initParams.baseColor}};
    background-color: {{initParams.secondaryColor}};
    width:30px;
    height:30px;
    border-radius:8px;
    opacity:0;
  }
  .text3>p{
    position:absolute;
    font-size: 0px;
    font-family: Ubuntu;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    padding:0;
    margin:0;
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
  padding-right: 60px;
  padding-left: 60px;
  top:0%;
  width: 100%;
  height: 100%;
}

.informations{
  width:32%;
  font-family: Lato;
  position:absolute;
  top:10%;
}
.container3 .informations{
  top:-450px;
  right:40%;
  transform :translateX(60%);
}
.container4 .informations{
  height:80%;
  left:-400px;
}
.title{
  font-size: 60px;
  font-weight:bold;
  color:{{initParams.baseColor}};
}
.container4 .title1{
  opacity:0;
  position:absolute;
  left:-35px;
}
.container4 .title2{
  opacity:0;
  position:absolute;
  left:35px;
}
.info{
  opacity:0;
  font-size: 15px;
  margin-top:10px;
  color:{{initParams.baseColor}};
  height:35%;
  
}
.container4 .info{
  position:absolute;
  top:55%;
  transform:translateY(-45%);
}
.container3 .title, .container3 .info{
  text-align:right;
}
.color-tag{
  margin-top:10px;
  position:absolute;
  height:20px;
  font-size:15px;
  font-weight:bold;
  color:{{initParams.baseColor}};
}
.container3 .color-tag{
  left:60%;
}
.container4 .color-tag{
  top:63%;
  transform:translate(-37%);
  left:5%;
}
.color{
  position:absolute;
  top:50%;
  transform: translateY(-50%) scale(0);
  width:15px;
  height: 15px;
  border: 1px solid white;
  border-radius: 5px;
}
.red{
  left:110%;
  background-color: red;
}
.black{
  left:160%;
  background-color: black;
}
.blue{
  left:210%;
  background-color: blue;
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
.container2 .price-tag{
  position:absolute;
  top:115%;
}
.container3 .price-tag{
  position:absolute;
  left:70%;
  top:115%;
}
.container4 .price-tag{
  position:absolute;
  top:73%;
  transform:translate(-27%);
  left:5%;
}
.image{
  width:20%;
  position:absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
}

.container2 .img, .container4 .img{
  width:0px;
  height:0px;
  opacity:0;
}
.container2 .img{
  background:url({{initParams.smartwatchImg}});
  background-position:center;
  background-size:contain;
  background-repeat:no-repeat;
  transform: rotate(90deg);
}
.container4 .img{
  background:url({{initParams.bandImg}});
  background-position:center;
  background-size:contain;
  background-repeat:no-repeat;
}

.container3 .img{
  width:30px;
  height:20px;
  position:absolute;
  top:-300px;
  left:-120px;
  opacity:0;
}

#back{
  background:url({{initParams.smartphoneBack}});
  background-position:center;
  background-size:contain;
  background-repeat:no-repeat;
}

#front{
  background:url({{initParams.smartphoneFront}});
  background-position:center;
  background-size:contain;
  background-repeat:no-repeat;
}
.container2 .features{
  position:absolute;
  left:70%;
  top:50%;
  transform: translate(-30%,-50%);
}
.container3 .features{
  position:absolute;
  left:20%;
  top:-450px;
  transform: translateX(-80%);
}
.container4 .features{
  position:absolute;
  left:-30%;
  top:50%;
  transform: translate(-30%,-50%);
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
      src:
      "https://fonts.googleapis.com/css2?family=Lato&family=Ubuntu&display=swap"
    }
  ],
  host: document.getElementById("clip"),
  initParams: initParams[0].value,
  containerParams: {
    width: "800px",
    height: "450px",
  }
});

//first slide
const MyIncident1 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.5,
     top:"-35%",
     right:"-15%"
    },
  },
  {
    selector: ".big-circle",
    duration: 2220,
    easing:"easeOutQuad"
  }
);
const MyIncident2 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.5,
      transform:{scale:1},
    },
  },
  {
    selector: ".small-circle",
    duration: 2220,
    easing:"easeOutQuad"
  }
);
const MyIncident3a = new CSSEffect(
  {
    animatedAttrs: {
    width:"80px",
    top:"75px",
    left:"70px"
    },
  },
  {
    selector: ".line1",
    duration: 2220,
    easing:"easeOutQuad"
  }
);
const MyIncident3b = new CSSEffect(
  {
    animatedAttrs: {
    width:"80px",
    top:"95px",
    right:"610px"
    },
  },
  {
    selector: ".line2",
    duration: 2220,
    easing:"easeOutQuad"
  }
);
const MyIncident3c = new CSSEffect(
  {
    animatedAttrs: {
    width:"80px",
    bottom:"80px",
    left:"680px"
    },
  },
  {
    selector: ".line3",
    duration: 2220,
    easing:"easeOutQuad"
  }
);
const MyIncident3d = new CSSEffect(
  {
    animatedAttrs: {
    width:"80px",
    bottom:"60px",
    right:"60px"
    },
  },
  {
    selector: ".line4",
    duration: 2220,
    easing:"easeOutQuad"
  }
);
const MyIncident4 = new CSSEffect(
  {
    animatedAttrs: {
      right:"50%",
      opacity:1
    },
  },
  {
    selector: ".text1",
    duration:2220,
    easing:"easeOutQuad"
  }
);
const MyIncident4b = new CSSEffect(
  {
    animatedAttrs: {
      width:"100%",
    },
  },
  {
    selector: ".text1",
    duration:2000,
  }
);

const MyIncident5 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1
    },
  },
  {
    selector:".text2>.letter",
    delay:"@stagger(0, 2100)",
    duration: 300,
    easing: "linear",
  }
);
const MyIncident6 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      
    },
  },
  {
    selector: ".text3",
    duration:2220,
    easing: "linear",
  }
);
const MyIncident6b = new CSSEffect(
  {
    animatedAttrs: {
      width: "110px",
      padding:'5px',
      top:"65%"
    },
  },
  {
    selector: ".text3",
    duration:2220,
    easing: "linear",
  }
);

const MyIncident7 = new CSSEffect(
  {
    animatedAttrs: {
      fontSize:"25px"
    },
  },
  {
    selector: ".text3>p",
    duration: 2220,
    easing: "linear",
  }
);
//remove first slide
const MyIncident9a = new CSSEffect(
  {
    animatedAttrs: {
      fontSize:'900%',
      opacity:0
    },
  },
  {
    selector: ".text1,.text2,.text3",
    duration:1500,
    delay:550,
    easing: [1,0,1,0],
  }
);
const MyIncident9b = new CSSEffect(
  {
    animatedAttrs: {
     top:"10%"
    },
  },
  {
    selector: ".text1",
    duration:1500,
    delay:550,
    easing: [1,0,1,0],
  }
);
const MyIncident9c = new CSSEffect(
  {
    animatedAttrs: {
     top:"85%"
    },
  },
  {
    selector: ".text3",
    duration:1500,
    delay:550,
    easing: [1,0,1,0],
  }
);
const MyIncident9d = new CSSEffect(
  {
    animatedAttrs: {
     width:"200px",
     height:"50px",
    },
  },
  {
    selector: ".text3",
    duration:1500,
    delay:550,
    easing: [1,0,1,0],
  }
);

const MyIncident9e = new CSSEffect(
  {
    animatedAttrs: {
     fontSize:"30px"
    },
  },
  {
    selector: ".text3>p",
    duration:1500,
    delay:550,
    easing: [1,0,1,0],
  }
);
const MyIncident10a = new CSSEffect(
  {
    animatedAttrs: {
     top:"-45%",
     right:"-25%",
     opacity:0
    },
  },
  {
    selector: ".big-circle",
    duration: 2000,
    easing: [1,0,1,0],
  }
);
const MyIncident10b = new CSSEffect(
  {
    animatedAttrs: {
     top:"100%",
     left:"-20%",
     opacity:0
    },
  },
  {
    selector: ".small-circle",
    duration: 2000,
    easing: [1,0,1,0],
  }
);
const MyIncident10c = new CSSEffect(
  {
    animatedAttrs: {
    opacity:0,
     top:"-20px",
     left:"-120px"
    },
  },
  {
    selector: ".line1",
    duration: 2000,
    easing: [1,0,1,0],
  }
);
const MyIncident10d = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0,
     top:"0px",
     right:"800px"
    },
  },
  {
    selector: ".line2",
    duration: 2000,
    easing: [1,0,1,0],
  }
);
const MyIncident10e = new CSSEffect(
  {
    animatedAttrs: {
    opacity:0,
     bottom:"0px",
     left:"820px"
    },
  },
  {
    selector: ".line3",
    duration: 2000,
    easing: [1,0,1,0],
  }
);
const MyIncident10f = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0,
     bottom:"-20px",
     right:"-80px"
    },
  },
  {
    selector: ".line4",
    duration: 2000,
    easing: [1,0,1,0],
  }
);
//reset circle and lines
const MyIncident11 = new CSSEffect(
  {
    animatedAttrs: {
      top:"-200px",
      left:"-200px"
    },
  },
  {
    selector: ".big-circle",
    duration: 1
  }
);
const MyIncident11b = new CSSEffect(
  {
    animatedAttrs: {
      top:"100px",
      left:"400px",
      transform:{
        scale:0
      }
      
    },
  },
  {
    selector: ".small-circle",
    duration: 1
  }
);
const MyIncident12a = new CSSEffect(
  {
    animatedAttrs: {
      top:"70px",
      left:"400px"
    },
  },
  {
    selector: ".line1",
    duration: 1
  }
);

const MyIncident12b = new CSSEffect(
  {
    animatedAttrs: {
      top:"90px",
      right:"50px"
    },
  },
  {
    selector: ".line2",
    duration: 1
  }
);
const MyIncident12c = new CSSEffect(
  {
    animatedAttrs: {
      bottom:"100px",
      left:"300px"
    },
  },
  {
    selector: ".line3",
    duration: 1
  }
);
const MyIncident12d = new CSSEffect(
  {
    animatedAttrs: {
      bottom:"80px",
      right:"200px"
    },
  },
  {
    selector: ".line4",
    duration: 1
  }
);
//2nd slide
const MyIncident13 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.5,
      top:"-35%",
      left:"-25%"
    },
  },
  {
    selector: ".big-circle",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident13b = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.5,
      transform:{scale:1}
    },
  },
  {
    selector: ".small-circle",
    duration: 3839,
    easing:"easeOutQuad"
  }
);

const MyIncident14 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1
    },
  },
  {
    selector: ".container2 .info",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident14b = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1
    },
  },
  {
    selector: ".container2 .title>.letter",
    delay:"@stagger(0, 2700)",
    duration: 1000,
    easing:"easeOutQuad"
  }
);

//lines for 2nd slide
const MyIncident15a = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.3,
      left:"600px"
    },
  },
  {
    selector: ".line1",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident15b = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.3,
      right:"100px"
    },
  },
  {
    selector: ".line2",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident15c = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.3,
      left:"350px"
    },
  },
  {
    selector: ".line3",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident15d = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.3,
      right:"350px"
    },
  },
  {
    selector: ".line4",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
//bullets for 2nd slide
const MyIncident16 = new CSSEffect(
  {
    animatedAttrs: {
    width:"5px",
    height:"5px",
    borderRadius:"5px"
    },
  },
  {
    selector: ".container2 .bullet",
    delay:"@stagger(0, 1500)",
    duration: 600,
    easing:"easeOutQuad"
  }
);

//f-text for 2nd slide
const MyIncident17 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      marginLeft:"2px"
    },
  },
  {
    selector: ".container2 .f-text",
    delay:"@stagger(0, 1500)",
    duration: 1300,
    easing:"easeOutQuad"
  }
);

const MyIncident18= new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"200px",
      height:"200px",
      transform: { rotate: '15deg' },
    },
  },
  {
    selector: ".container2 .img",
    duration: 3300,
      easing:"easeOutQuad"
  }
);
//extra info for the 2nd slide
const MyIncident19= new CSSEffect(
  {
    animatedAttrs: {
      opacity:1
    },
  },
  {
    selector: ".container2 .color-tag>.letter",
    delay:"@stagger(0, 900)",
    duration: 700,
    easing:"easeOutQuad"
  }
);
const MyIncident19b= new CSSEffect(
  {
    animatedAttrs: {
      transform:{scale:1},
    },
  },
  {
    selector: ".container2 .color",
    delay:"@stagger(0, 500)",
    duration: 1500,
    easing:"easeOutQuad"
  }
);
const MyIncident20= new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"80px",
      height:"30px",
      borderRadius:"10px"
    },
  },
  {
    selector: ".container2 .price-tag",
    duration: 500,
    easing:"easeOutQuad"
  }
);
const MyIncident21 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1
    },
  },
  {
    selector: ".container2 .price-tag .letter",
    duration: 500,
    delay:"@stagger(500, 1000)",
      easing:"easeOutQuad"
  }
);
//remove 2nd slide
const MyIncident22 = new CSSEffect(
  {
    animatedAttrs: {
      top:"100%"
    },
  },
  {
    selector: ".container2",
    duration: 900,
    easing: [1,0,1,0.21],
  }
);
const MyIncident23a = new CSSEffect(
  {
    animatedAttrs: {
     opacity:0,
     top:"520px"
    },
  },
  {
    selector: ".line1",
    duration: 900,
    easing: [1,0,1,0.21],
  }
);
const MyIncident23b = new CSSEffect(
  {
    animatedAttrs: {
     opacity:0,
     top:"540px"
    },
  },
  {
    selector: ".line2",
    duration: 900,
    easing: [1,0,1,0.21],
  }
);
const MyIncident23c = new CSSEffect(
  {
    animatedAttrs: {
     opacity:0,
     bottom:"-350px"
    },
  },
  {
    selector: ".line3",
    duration: 900,
    easing: [1,0,1,0.21],
  }
);
const MyIncident23d = new CSSEffect(
  {
    animatedAttrs: {
     opacity:0,
     bottom:"-370px"
    },
  },
  {
    selector: ".line4",
    duration: 900,
    easing: [1,0,1,0.21],
  }
);
const MyIncident24a = new CSSEffect(
  {
    animatedAttrs: {
    top:"100%",
    opacity:0
    },
  },
  {
    selector: ".big-circle",
    duration: 900,
    easing: [1,0,1,0.21],
  }
);
const MyIncident24b = new CSSEffect(
  {
    animatedAttrs: {
    top:"550px",
    opacity:0
    },
  },
  {
    selector: ".small-circle",
    duration: 900,
    easing: [1,0,1,0.21],
  }
);
//reset circle and lines
const MyIncident25 = new CSSEffect(
  {
    animatedAttrs: {
      left:"100%",
      top:"-55%",
    },
  },
  {
    selector: ".big-circle",
    duration: 1
  }
);
const MyIncident25b = new CSSEffect(
  {
    animatedAttrs: {
      top:"150px",
      left:"200px",
      transform:{scale:0}
    },
  },
  {
    selector: ".small-circle",
    duration: 1
  }
);
const MyIncident26a = new CSSEffect(
  {
    animatedAttrs: {
      top:"-10px",
      left:"-10px",
    },
  },
  {
    selector: ".line1",
    duration: 1
  }
);

const MyIncident26b = new CSSEffect(
  {
    animatedAttrs: {
      top:"5px",
      right:"550px"
    },
  },
  {
    selector: ".line2",
    duration: 1
  }
);
const MyIncident26c = new CSSEffect(
  {
    animatedAttrs: {
      bottom:"150px",
      left:"350px"
    },
  },
  {
    selector: ".line3",
    duration: 1
  }
);
const MyIncident26d = new CSSEffect(
  {
    animatedAttrs: {
      bottom:"120px",
      right:"60px"
    },
  },
  {
    selector: ".line4",
    duration: 1
  }
);
//3rd slide
const MyIncident27 = new CSSEffect(
  {
    animatedAttrs: {
      left:"75%",
      top:"-30%",
      opacity:0.5
    },
  },
  {
    selector: ".big-circle",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident28 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.5,
      transform:{scale:1}
    },
  },
  {
    selector: ".small-circle",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident29a = new CSSEffect(
  {
    animatedAttrs: {
      top:"50px"
    },
  },
  {
    selector: ".container3 .informations",
    duration: 300,
    easing:"easeOutQuad"
  }
);
const MyIncident29b = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
    },
  },
  {
    selector: ".container3 .info",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident29c = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
    },
  },
  {
    selector: ".container3 .title>.letter",
    delay:"@stagger(0, 2700)",
    duration: 1000,
    easing:"easeOutQuad"
  }
);
//lines for 3rd slide
const MyIncident30a = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.3,
      top:"60px",
      left:"100px"
    },
  },
  {
    selector: ".line1",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident30b = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.3,
      top:"80px",
      right:"580px"
    },
  },
  {
    selector: ".line2",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident30c = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.3,
      bottom:"35px",
      left:"500px"
    },
  },
  {
    selector: ".line3",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident30d = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.3,
      bottom:"10px",
      right:"180px"
    },
  },
  {
    selector: ".line4",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
//features for 3rd slide
const MyIncident31 = new CSSEffect(
  {
    animatedAttrs: {
      top:"50%",
      transform:{translateY:"-50%"}
    },
  },
  {
    selector: ".container3 .features",
    duration: 300,
    easing:"easeOutQuad"
  }
);
//bullets for 3rd slide
const MyIncident32a = new CSSEffect(
  {
    animatedAttrs: {
    width:"5px",
    height:"5px",
    borderRadius:"5px"
    },
  },
  {
    selector: ".container3 .bullet",
    delay:"@stagger(0, 1500)",
    duration: 600,
    easing:"easeOutQuad"
  }
);

//f-text for 3rd slide
const MyIncident32b = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      marginLeft:"2px"
    },
  },
  {
    selector: ".container3 .f-text",
    delay:"@stagger(0, 1500)",
    duration: 1300,
    easing:"easeOutQuad"
  }
);

//3rd slide extra info
const MyIncident33= new CSSEffect(
  {
    animatedAttrs: {
      opacity:1
    },
  },
  {
    selector: ".container3 .color-tag>.letter",
    delay:"@stagger(0, 900)",
    duration: 700,
    easing:"easeOutQuad"
  }
);
const MyIncident33b= new CSSEffect(
  {
    animatedAttrs: {
      transform:{scale:1},
    },
  },
  {
    selector: ".container3 .color",
    delay:"@stagger(0, 500)",
    duration: 1500,
    easing:"easeOutQuad"
  }
);
const MyIncident34= new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"80px",
      height:"30px",
      borderRadius:"10px"
    },
  },
  {
    selector: ".container3 .price-tag",
    duration: 500,
    easing:"easeOutQuad"
  }
);
const MyIncident35 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1
    },
  },
  {
    selector: ".container3 .price-tag .letter",
    duration: 500,
    delay:"@stagger(500, 1000)",
    easing:"easeOutQuad"
  }
);
//3rd slide images
const MyIncident36 = new CSSEffect(
  {
    animatedAttrs: {
      width:"200px",
      height:"250px",
      top:"-150px",
      opacity:1
    },
  },
  {
    selector: ".container3 #front",
    duration: 600,
    easing:"easeOutQuad"
  }
);
const MyIncident37 = new CSSEffect(
  {
    animatedAttrs: {
      width:"200px", 
      height:"250px",
      top:"-150px",
      opacity:1,
    },
  },
  {
    selector: ".container3 #back",
    duration: 1
  }
);
const MyIncident38 = new CSSEffect(
  {
    animatedAttrs: {
      top:"-150px",
      left:"-140px",
      transform: { rotate: '-10deg' },
    },
  },
  {
    selector: ".container3 #back",
    duration: 900,
    easing:"easeOutQuad"
  }
);
//remove 3rd slide
const MyIncident39a = new CSSEffect(
  {
    animatedAttrs: {
      left:"100%"
    },
  },
  {
    selector: ".container3",
    duration: 900,
    easing: [1,0,1,0.21]
  }
);
const MyIncident39b = new CSSEffect(
  {
    animatedAttrs: {
      left:"1000px"
    },
  },
  {
    selector: ".small-circle",
    duration: 900,
    easing: [1,0,1,0.21]
  }
);
const MyIncident39c = new CSSEffect(
  {
    animatedAttrs: {
      left:"175%"
    },
  },
  {
    selector: ".big-circle",
    duration: 900,
    easing: [1,0,1,0.21],
  }
);
const MyIncident39d = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0,
      left:"900px"
    },
  },
  {
    selector: ".line1",
    duration: 900,
    easing: [1,0,1,0.21]
  }
);
const MyIncident39e = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0,
      right:"-220px"
    },
  },
  {
    selector: ".line2",
    duration: 900,
    easing: [1,0,1,0.21]
  }
);
const MyIncident39f = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0,
      left:"1300px"
    },
  },
  {
    selector: ".line3",
    duration: 900,
    easing: [1,0,1,0.21]
  }
);
const MyIncident39g = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0,
      right:"-620px"
    },
  },
  {
    selector: ".line4",
    duration: 900,
    easing: [1,0,1,0.21]
  }
);
//reset circle and lines
const MyIncident40 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0
    },
  },
  {
    selector: ".big-circle,.small-circle,.line",
    duration: 1
  }
);
const MyIncident41 = new CSSEffect(
  {
    animatedAttrs: {
      left:"-30%",
      top:"-75%"
    },
  },
  {
    selector: ".big-circle",
    duration: 1
  }
);
const MyIncident41b = new CSSEffect(
  {
    animatedAttrs: {
      top:"100px",
      left:"450px",
      transform:{scale:0}
    },
  },
  {
    selector: ".small-circle",
    duration: 1
  }
);
const MyIncident42a = new CSSEffect(
  {
    animatedAttrs: {
      top:"10px",
      left:"400px",
    },
  },
  {
    selector: ".line1",
    duration: 1
  }
);

const MyIncident42b = new CSSEffect(
  {
    animatedAttrs: {
      right:"100px",
    },
  },
  {
    selector: ".line2",
    duration: 1
  }
);
const MyIncident42c = new CSSEffect(
  {
    animatedAttrs: {
      bottom:"20px",
      left:"-10px"
    },
  },
  {
    selector: ".line3",
    duration: 1
  }
);
const MyIncident42d = new CSSEffect(
  {
    animatedAttrs: {
      bottom:"15px",
      right:"500px"
    },
  },
  {
    selector: ".line4",
    duration: 1
  }
);
//4th slide
const MyIncident43 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.5,
      top:"-35%",
      left:"-25%"
    },
  },
  {
    selector: ".big-circle",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident44 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.5,
      transform:{scale:1}
    },
  },
  {
    selector: ".small-circle",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident45a = new CSSEffect(
  {
    animatedAttrs: {
      left:"50px"
    },
  },
  {
    selector: ".container4 .informations",
    duration: 300,
    easing:"easeOutQuad"
  }
);
const MyIncident45b = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      left:"0px"
    },
  },
  {
    selector: ".container4 .title1,.container4 .title2",
    duration: 2000,
    easing:"easeOutQuad"
  }
);
const MyIncident45c = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1
    },
  },
  {
    selector: ".container4 .info",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
//lines for 4th slide
const MyIncident46a = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.3,
      top:"15px",
      left:"650px"
    },
  },
  {
    selector: ".line1",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident46b = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.3,
      top:"35px",
      right:"40px"
    },
  },
  {
    selector: ".line2",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident46c = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.3,
      bottom:"35px",
      left:"150px"
    },
  },
  {
    selector: ".line3",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident46d = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0.3,
      bottom:"15px",
      right:"550px"
    },
  },
  {
    selector: ".line4",
    duration: 3839,
    easing:"easeOutQuad"
  }
);
const MyIncident47 = new CSSEffect(
  {
    animatedAttrs: {
     left:"70%"
    },
  },
  {
    selector: ".container4 .features",
    duration: 300,
    easing:"easeOutQuad"
  }
);
//bullets for 4th slide
const MyIncident48a = new CSSEffect(
  {
    animatedAttrs: {
    width:"5px",
    height:"5px",
    borderRadius:"5px"
    },
  },
  {
    selector: ".container4 .bullet",
    delay:"@stagger(0, 1500)",
    duration: 600,
    easing:"easeOutQuad"
  }
);

//f-text for 4th slide
const MyIncident48b = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      marginLeft:"2px"
    },
  },
  {
    selector: ".container4 .f-text",
    delay:"@stagger(0, 1500)",
    duration: 1300,
    easing:"easeOutQuad"
  }
);

const MyIncident49 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"200px",
      height:"200px",
      transform: { rotate: '15deg' }
    },
  },
  {
    selector: ".container4 .img",
    duration: 3300,
    easing:"easeOutQuad"
  }
);
//extra info for the 4th slide
const MyIncident50 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1
    },
  },
  {
    selector: ".container4 .letter",
    delay:"@stagger(0, 900)",
    duration: 700,
    easing:"easeOutQuad"
  }
);
const MyIncident50b= new CSSEffect(
  {
    animatedAttrs: {
      transform:{scale:1},
    },
  },
  {
    selector: ".container4 .color",
    delay:"@stagger(0, 500)",
    duration: 1500,
    easing:"easeOutQuad"
  }
);
const MyIncident51= new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"80px",
      height:"30px",
      borderRadius:"10px"
    },
  },
  {
    selector: ".container4 .price-tag",
    duration: 500,
    easing:"easeOutQuad"
  }
);

//remove 4th slide
const MyIncident53 = new CSSEffect(
  {
    animatedAttrs: {
      fontSize:"0px",
      opacity:0
    },
  },
  {
    selector: ".container4 .title, .container4 .info,.container4 .color-tag, .container4 .price-tag .letter, .container4 .f-text",
    duration: 600,
    easing: [1,0,1,0.21],
  }
);

const MyIncident54 = new CSSEffect(
  {
    animatedAttrs: {
      top:"50%",
      left:"35%",
      width:"0%",
      height:"0%"
    },
  },
  {
    selector: ".container4",
    duration: 650,
    easing: [1,0,1,0.21],
  }
);
const MyIncident55 = new CSSEffect(
  {
    animatedAttrs: {
      width:"0px",
      height:"0px",
      opacity:0
    },
  },
  {
    selector: ".container4 .price-tag, .container4 .bullet, .container4 .color, .container4 .img, .container4 .informations",
    duration: 600,
    easing: [1,0,1,0.21]
  }
);
//4th slide remove circles
const MyIncident56 = new CSSEffect(
  {
    animatedAttrs: {
      top:"50%",
      left:"35%",
      transform:{scale:0},
      opacity:0
    },
  },
  {
    selector: ".small-circle , .big-circle",
    duration: 650,
    easing: [1,0,1,0.21]
  }
);
//4th slide remove lines
const MyIncident57a = new CSSEffect(
  {
    animatedAttrs: {
      top:"200px",
      left:"400px",
      width:"0%",
      height:"0%",
      opacity:0
    },
  },
  {
    selector: ".line1",
    duration:650,
    easing: [1,0,1,0.21]
  }
);
const MyIncident57b = new CSSEffect(
  {
    animatedAttrs: {
      top:"200px",
      right:"400px",
      width:"0%",
      height:"0%",
      opacity:0
    },
  },
  {
    selector: ".line2",
    duration: 650,
    easing: [1,0,1,0.21]
  }
);
const MyIncident57c = new CSSEffect(
  {
    animatedAttrs: {
      bottom:"200px",
      left:"400px",
      height:"0%",
      width:"0%",
      opacity:0
    },
  },
  {
    selector: ".line3",
    duration: 650,
    easing: [1,0,1,0.21]
  }
);
const MyIncident57d = new CSSEffect(
  {
    animatedAttrs: {
      bottom:"200px",
      right:"400px",
      width:"0%",
      height:"0%",
      opacity:0
    },
  },
  {
    selector: ".line4",
    duration: 650,
    easing: [1,0,1,0.21]
  }
);
const MyIncident58 = new CSSEffect(
  {
    animatedAttrs: {
      visibility: "visible",
      opacity:1
    },
  },
  {
    selector: "a",
    duration: 2000,
    easing: "linear"
  }
);
//1st slide 
  //circles
  clip.addIncident(MyIncident1, 0);
  clip.addIncident(MyIncident2, 0);
  //lines
  clip.addIncident(MyIncident3a, 0);
  clip.addIncident(MyIncident3b, 0);
  clip.addIncident(MyIncident3c, 0);
  clip.addIncident(MyIncident3d, 0);
  //text
  clip.addIncident(MyIncident4, 0);
  clip.addIncident(MyIncident4b,1300);
  clip.addIncident(MyIncident5, 0);
  clip.addIncident(MyIncident6, 0);
  clip.addIncident(MyIncident6b, 0);
  clip.addIncident(MyIncident7, 100);

//remove 1st slide
  //text
  clip.addIncident(MyIncident9a, 2320);
  clip.addIncident(MyIncident9b, 2320);
  clip.addIncident(MyIncident9c, 2320);
  clip.addIncident(MyIncident9d, 2320);
  clip.addIncident(MyIncident9e, 2320);
  //lines and circles
  clip.addIncident(MyIncident10a, 2320);
  clip.addIncident(MyIncident10b, 2320);
  clip.addIncident(MyIncident10c, 2320);
  clip.addIncident(MyIncident10d, 2320);
  clip.addIncident(MyIncident10e, 2320);
  clip.addIncident(MyIncident10f, 2320);

//reset positions(prepare for 2nd slide)
  //circles
  clip.addIncident(MyIncident11, 4460);
  clip.addIncident(MyIncident11b, 4460);
  //lines
  clip.addIncident(MyIncident12a, 4460);
  clip.addIncident(MyIncident12b, 4460);
  clip.addIncident(MyIncident12c, 4460);
  clip.addIncident(MyIncident12d, 4460);

//2nd slide
  //circles
  clip.addIncident(MyIncident13, 4461);
  clip.addIncident(MyIncident13b, 4461);
  //info
  clip.addIncident(MyIncident14, 4461);
  clip.addIncident(MyIncident14b, 4461);
  //lines
  clip.addIncident(MyIncident15a, 4461);
  clip.addIncident(MyIncident15b, 4461);
  clip.addIncident(MyIncident15c, 4461);
  clip.addIncident(MyIncident15d, 4461);
  //features
  clip.addIncident(MyIncident16, 4461);
  clip.addIncident(MyIncident17, 4461);
  //image
  clip.addIncident(MyIncident18, 4461);
  //extra-info
  clip.addIncident(MyIncident19, 4461);
  clip.addIncident(MyIncident19b, 4461);
  clip.addIncident(MyIncident20, 4461);
  clip.addIncident(MyIncident21, 4461);

//remove 2nd slide
  //container
  clip.addIncident(MyIncident22, 8300);
  //lines
  clip.addIncident(MyIncident23a, 8300);
  clip.addIncident(MyIncident23b, 8300);
  clip.addIncident(MyIncident23c, 8300);
  clip.addIncident(MyIncident23d, 8300);
  //circles
  clip.addIncident(MyIncident24a, 8300);
  clip.addIncident(MyIncident24b, 8300);

//reset positions(prepare for 3rd slide)
  //circles
  clip.addIncident(MyIncident25, 9201);
  clip.addIncident(MyIncident25b, 9201);
  //lines
  clip.addIncident(MyIncident26a, 9201);
  clip.addIncident(MyIncident26b, 9201);
  clip.addIncident(MyIncident26c, 9201);
  clip.addIncident(MyIncident26d, 9201);

//3rd slide
  //circles
  clip.addIncident(MyIncident27, 9202);
  clip.addIncident(MyIncident28, 9202);
  //info
  clip.addIncident(MyIncident29a, 9202);
  clip.addIncident(MyIncident29b, 9402);
  clip.addIncident(MyIncident29c, 9402);
  //lines
  clip.addIncident(MyIncident30a, 9202);
  clip.addIncident(MyIncident30b, 9202);
  clip.addIncident(MyIncident30c, 9202);
  clip.addIncident(MyIncident30d, 9202);
  //features
  clip.addIncident(MyIncident31, 9202);
  clip.addIncident(MyIncident32a, 9402);
  clip.addIncident(MyIncident32b, 9402);
  //extra-info
  clip.addIncident(MyIncident33, 9202);
  clip.addIncident(MyIncident33b, 9202);
  clip.addIncident(MyIncident34, 9202);
  clip.addIncident(MyIncident35, 9202);
  //images
  clip.addIncident(MyIncident36, 9202);
  clip.addIncident(MyIncident37, 11002);
  clip.addIncident(MyIncident38, 11003);

//remove 3rd slide
  clip.addIncident(MyIncident39a, 13041);
  //circles
  clip.addIncident(MyIncident39b, 13041);
  clip.addIncident(MyIncident39c, 13041);
  //lines
  clip.addIncident(MyIncident39d, 13041);
  clip.addIncident(MyIncident39e, 13041);
  clip.addIncident(MyIncident39f, 13041);
  clip.addIncident(MyIncident39g, 13041);

//reset posotions(prepare for 4th slide)
  clip.addIncident(MyIncident40, 13941);
  //circles
  clip.addIncident(MyIncident41, 13941);
  clip.addIncident(MyIncident41b, 13941);
  //lines
  clip.addIncident(MyIncident42a, 13941);
  clip.addIncident(MyIncident42b, 13941);
  clip.addIncident(MyIncident42c, 13941);
  clip.addIncident(MyIncident42d, 13941);

//4th slide
  //circles
  clip.addIncident(MyIncident43,13942);
  clip.addIncident(MyIncident44,13942);
  //info
  clip.addIncident(MyIncident45a,13942);
  clip.addIncident(MyIncident45b,14142);
  clip.addIncident(MyIncident45c,14142);
  //lines
  clip.addIncident(MyIncident46a,13942);
  clip.addIncident(MyIncident46b,13942);
  clip.addIncident(MyIncident46c,13942);
  clip.addIncident(MyIncident46d,13942);
  //features
  clip.addIncident(MyIncident47,13942);
  clip.addIncident(MyIncident48a,14142);
  clip.addIncident(MyIncident48b,14142);
  //image
  clip.addIncident(MyIncident49,13942);
  //extra-info
  clip.addIncident(MyIncident50,13942);
  clip.addIncident(MyIncident50b,13942);
  clip.addIncident(MyIncident51,13942);

//remove 4th slide
  //container
  clip.addIncident(MyIncident53, 18000);
  clip.addIncident(MyIncident54, 18000);
  clip.addIncident(MyIncident55, 18000);
  //circles
  clip.addIncident(MyIncident56, 18000);
  //lines
  clip.addIncident(MyIncident57a, 18000);
  clip.addIncident(MyIncident57b, 18000);
  clip.addIncident(MyIncident57c, 18000);
  clip.addIncident(MyIncident57d, 18000);
  clip.addIncident(MyIncident58, 18650);
 
