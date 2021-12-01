import {HTMLClip,CSSEffect} from "@donkeyclip/motorcortex";

export const clip = new HTMLClip({
  html: `
  <div class="container">
    <div class="textbox">
        <div class="text1">Smart</div>
        <div class="text2">Sale Promo</div>
        <div class="text3"><p>envato</p></div>
    </div>
    <div class="circle big-circle"></div>
    <div class="circle small-circle"></div>
    <div class="line line1"></div>
    <div class="line line2"></div>
    <div class="line line3"></div>
    <div class="line line4"></div>
  
    <div class="extra-container container2">
        <div class="informations">
            <div class="title"> Smart Watch </div>
            <div class="info"> Lorem ipsum dolor sit amet, 
                                    consectetur adipiscing elit. 
                                    Aenean iaculis viverra ligula ac cursus. 
                                    Aliquam sit amet mi in ante molestie ultricies 
                                    placerat sed est.
            </div>
            <div class="color-tag"> Colors
                <div class="color red"></div>
                <div class="color black"></div>
                <div class="color blue"></div>
            </div>
            <div class="price-tag"><p>235$</p></div>
        </div>
        <div class="image"><img id="smartwatch-img" src="./images/smartwatch.png" alt="smartwatch-image"></div>
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
            <img id="back" src="./images/mobile-back.png" alt="smartphone-image">
            <img id="front" src="./images/mobile-front.png" alt="smartphone-image">
        </div>
        <div class="informations">
            <div class="title"> Smart Phone </div>
            <div class="info"> Lorem ipsum dolor sit amet, 
                                        consectetur adipiscing elit. 
                                        Aenean iaculis viverra ligula ac cursus. 
                                        Aliquam sit amet mi in ante molestie ultricies 
                                        placerat sed est.
            </div>
            <div class="color-tag"> Colors 
            <div class="color red"></div>
            <div class="color black"></div>
            <div class="color blue"></div>
            </div>
            <div class="price-tag"><p>313$</p></div>
        </div>
    </div>
    <div class="extra-container container4">
        <div class="informations">
            <div class="title"> Smart Band </div>
            <div class="info"> Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit. 
                                            Aenean iaculis viverra ligula ac cursus. 
                                            Aliquam sit amet mi in ante molestie ultricies 
                                            placerat sed est.
            </div>
            <div class="color-tag"> Colors
                <div class="color red"></div>
                <div class="color black"></div>
                <div class="color blue"></div>
            </div>
            <div class="price-tag"><p>235$</p></div>
        </div>
        <div class="image"><img id="band-img" src="./images/band.png" alt="smartwatch-image"></div>
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
</div>
`,
  css: `
  .container {
    background-color: #e7eefe;
    width: 800px;
    height: 450px;
    position: relative;
  }
  .textbox{
    position:absolute;
    top:30%;
    width:40%;
    left:30%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:15px;
    text-align:center;
  }
  .text1 {
    font-size: 30px;
    font-family: Lato;
    align-self:flex-end;
    width:0%;
    overflow: hidden;
  }
  .text2{
    font-size: 60px;
    font-family: Lato;
    font-weight:bold;
    align-self:flex-start;
    width:0%;
    overflow: hidden;
    white-space:nowrap;
  }
  .text3{
    font-size: 25px;
    font-family: Ubuntu;
    display:flex;
    justify-content:center;
    align-items: center;
    color: white;
    background-color: #0098ED;
    border-radius:10px;
    width:0%;
    height:30px;
  }
  p{
    font-size: 0px;
    font-family: Ubuntu;
    padding:0;
    margin:0;
  }
  .circle{
    display: block;
    background-color:#e7eefe;
    border-radius:200px;
  }
  .big-circle{
    position:absolute;
    top:-70%;
    right:-30%;
    width:300px;
    height:300px;
    border: 20px solid white;
    opacity:0;
  }
.small-circle{
  position:absolute;
  top: 70%;
  right: 83%;
  width:0;
  height:0;
  border: 3px solid white;
  opacity:0;
  }
.line {
  width: 0px;
  background-color: #0098ed;
  height: 8px;
  border-radius: 15px;
  opacity:0.3;
}
.line1 {
  position: absolute;
  top: 80px;
  left: 100px;
}
.line2 {
  position: absolute;
  top: 110px;
  right: 560px;
}
.line3 {
  position: absolute;
  bottom: 110px;
  left:560px;
} 
.line4 {
  position: absolute;
  bottom: 80px;
  right:120px;
}

.extra-container{
  position:absolute;
  padding-right: 60px;
  padding-left: 60px;
  top:0%;
  width: 100%;
  height: 100%;
  display:flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
}
.informations{
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: Lato;
}
.title{
  opacity:0;
  font-size: 60px;
  font-weight:bold;
}
.info{
  opacity:0;
  font-size: 15px;
}
.color-tag{
  display: flex;
  flex-direction: row;

  gap:5px;
  width:0%;
  opacity: 0;
}
.color{
  width: 15px;
  height: 15px;
  border-radius: 5px;
  border: 2px solid white;
}
.red{
  background-color: red;
}
.black{
  background-color: black;
}
.blue{
  background-color: blue;
}
.price-tag{
  display:flex;
    justify-content:center;
    align-items: center;
    color: white;
    background-color: #0098ED;
    border-radius:10px;
    width:0px;
    height:30px;
    opacity: 0;
}
.image{
  position:relative;
  width:20%;
}
.container2 img, .container4 img{
  width:0%;
  opacity:0;
}
.feature{
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space:nowrap;
  gap: 10px;
}
.bullet{
  opacity:0;
  width: 9px;
  height: 9px;
  border-radius: 5px;
  background-color: #0098ED;
}
.f-text{
  opacity:0;
  margin-left: 45px;
}
.container3{
  text-align:right;
}
.container3 .informations{
  align-items:flex-end;
}
.container3 .color-tag{
  justify-content:flex-end;
}
.container3 img{
  position:absolute;
  top:-150px;
  left:30px;
  width:60%;
  opacity:0;
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
  containerParams: {
    width: "800px",
    height: "450px",
  }
});

//first slide
const MyIncident1 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
     top:"-35%",
     right:"-15%"
    },
  },
  {
    selector: ".big-circle",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident2 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
     width:"90px",
     height:"90px",
     border:"8px solid white"
    },
  },
  {
    selector: ".small-circle",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident3 = new CSSEffect(
  {
    animatedAttrs: {
    width:"80px"
    },
  },
  {
    selector: ".line",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident4 = new CSSEffect(
  {
    animatedAttrs: {
      width:'100%'
    },
  },
  {
    selector: ".text1",
    duration:2000,
    easing: "linear",
  }
);

const MyIncident5 = new CSSEffect(
  {
    animatedAttrs: {
      width: "100%"
    },
  },
  {
    selector: ".text2",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident6 = new CSSEffect(
  {
    animatedAttrs: {
      width: "110px",
      padding:'5px'
    },
  },
  {
    selector: ".text3",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident7 = new CSSEffect(
  {
    animatedAttrs: {
      fontSize:'25px'
    },
  },
  {
    selector: ".text3>p",
    duration: 2000,
    easing: "linear",
  }
);
//remove first slide
const MyIncident8 = new CSSEffect(
  {
    animatedAttrs: {
      width:'100%',
      height:'100%',
      top:'0%',
      left:'0%'
    },
  },
  {
    selector: ".textbox",
    duration: 200,
    delay:400,
    easing: "linear",
  }
);
const MyIncident9 = new CSSEffect(
  {
    animatedAttrs: {
      fontSize:'1000%',
      opacity:0
    },
  },
  {
    selector: ".text1,.text2,.text3",
    duration: 200,
    easing: "linear",
  }
);
const MyIncident10 = new CSSEffect(
  {
    animatedAttrs: {
     opacity:0
    },
  },
  {
    selector: ".big-circle,.small-circle,.line",
    duration: 100,
    easing: "linear",
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
    duration: 100,
    easing: "linear",
  }
);
const MyIncident11b = new CSSEffect(
  {
    animatedAttrs: {
      top:"100px",
      left:"400px",
      width:"0%",
      height:"0%",
      border: "3px solid white"
    },
  },
  {
    selector: ".small-circle",
    duration: 100,
    easing: "linear",
  }
);
const MyIncident12 = new CSSEffect(
  {
    animatedAttrs: {
      top:"70px",
      left:"400px"
    },
  },
  {
    selector: ".line1",
    duration: 100,
    easing: "linear",
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
    duration: 100,
    easing: "linear",
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
    duration: 100,
    easing: "linear",
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
    duration: 100,
    easing: "linear",
  }
);
//2nd slide
const MyIncident13 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      top:"-35%",
      left:"-25%"
    },
  },
  {
    selector: ".big-circle",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident13b = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"90px",
      height:"90px",
      border:"8px solid white"
    },
  },
  {
    selector: ".small-circle",
    duration: 2000,
    easing: "linear",
  }
);

const MyIncident14 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1
    },
  },
  {
    selector: ".container2 .title,.container2 .info",
    duration: 2000,
    easing: "linear",
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
    duration: 2000,
    easing: "linear",
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
    duration: 2000,
    easing: "linear",
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
    duration: 2000,
    easing: "linear",
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
    duration: 2000,
    easing: "linear",
  }
);
//bullets for 2nd slide
const MyIncident16a = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
    width:"5px",
    height:"5px"
    },
  },
  {
    selector: ".container2 .b1",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident16b = new CSSEffect(
  {
    animatedAttrs: {
    opacity:1,
    width:"5px",
    height:"5px"
    },
  },
  {
    selector: ".container2 .b2",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident16c = new CSSEffect(
  {
    animatedAttrs: {
    opacity:1,
    width:"5px",
    height:"5px"
    },
  },
  {
    selector: ".container2 .b3",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident16d = new CSSEffect(
  {
    animatedAttrs: {
    opacity:1,
    width:"5px",
    height:"5px"
    },
  },
  {
    selector: ".container2 .b4",
    duration: 500,
    easing: "linear",
  }
);

//f-text for 2nd slide
const MyIncident17a = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      marginLeft:"2px"
    },
  },
  {
    selector: ".container2 .f1",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident17b = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      marginLeft:"2px"
    },
  },
  {
    selector: ".container2 .f2",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident17c = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      marginLeft:"2px"
    },
  },
  {
    selector: ".container2 .f3",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident17d = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      marginLeft:"2px"
    },
  },
  {
    selector: ".container2 .f4",
    duration: 500,
    easing: "linear",
  }
);
//reset image because i can't from css
const MyIncident18a= new CSSEffect(
  {
    animatedAttrs: {
      transform: { rotate: '90deg' },
    },
  },
  {
    selector: "#smartwatch-img",
    duration: 1,
    easing: "linear",
  }
);
const MyIncident18b= new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"100%",
      transform: { rotate: '15deg' },
    },
  },
  {
    selector: "#smartwatch-img",
    duration: 2000,
    easing: "linear",
  }
);
//extra info for the 2nd slide
const MyIncident19= new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"100%"
    },
  },
  {
    selector: ".container2 .color-tag",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident20= new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"80px"
    },
  },
  {
    selector: ".container2 .price-tag",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident21 = new CSSEffect(
  {
    animatedAttrs: {
      fontSize:'15px'
    },
  },
  {
    selector: ".container2 .price-tag>p",
    duration: 2000,
    easing: "linear",
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
    duration: 500,
    easing: "linear",
  }
);
const MyIncident23 = new CSSEffect(
  {
    animatedAttrs: {
     opacity:0
    },
  },
  {
    selector: ".small-circle,.line",
    duration: 100,
    easing: "linear",
  }
);
const MyIncident24 = new CSSEffect(
  {
    animatedAttrs: {
    top:"100%",
    opacity:0
    },
  },
  {
    selector: ".big-circle",
    duration: 500,
    easing: "linear",
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
    duration: 100,
    easing: "linear",
  }
);
const MyIncident25b = new CSSEffect(
  {
    animatedAttrs: {
      top:"150px",
      left:"200px",
      width:"0%",
      height:"0%",
      border: "3px solid white"
    },
  },
  {
    selector: ".small-circle",
    duration: 100,
    easing: "linear",
  }
);
const MyIncident26 = new CSSEffect(
  {
    animatedAttrs: {
      top:"-10px",
      left:"-10px",
    },
  },
  {
    selector: ".line1",
    duration: 100,
    easing: "linear",
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
    duration: 100,
    easing: "linear",
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
    duration: 100,
    easing: "linear",
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
    duration: 100,
    easing: "linear",
  }
);
//3rd slide
const MyIncident27 = new CSSEffect(
  {
    animatedAttrs: {
      left:"75%",
      top:"-30%",
      opacity:1
    },
  },
  {
    selector: ".big-circle",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident28 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"90px",
      height:"90px",
      border:"8px solid white"
    },
  },
  {
    selector: ".small-circle",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident29 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
    },
  },
  {
    selector: ".container3 .title,.container3 .info",
    duration: 2000,
    easing: "linear",
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
    duration: 2000,
    easing: "linear",
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
    duration: 2000,
    easing: "linear",
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
    duration: 2000,
    easing: "linear",
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
    duration: 2000,
    easing: "linear",
  }
);
//bullets for 3rd slide
const MyIncident31a = new CSSEffect(
  {
    animatedAttrs: {
    opacity:1,
    width:"5px",
    height:"5px"
    },
  },
  {
    selector: ".container3 .b1",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident31b = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
    width:"5px",
    height:"5px"
    },
  },
  {
    selector: ".container3 .b2",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident31c = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
    width:"5px",
    height:"5px"
    },
  },
  {
    selector: ".container3 .b3",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident31d = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
    width:"5px",
    height:"5px"
    },
  },
  {
    selector: ".container3 .b4",
    duration: 500,
    easing: "linear",
  }
);
//f-text for 3rd slide
const MyIncident32a = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      marginLeft:"2px"
    },
  },
  {
    selector: ".container3 .f1",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident32b = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      marginLeft:"2px"
    },
  },
  {
    selector: ".container3 .f2",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident32c = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      marginLeft:"2px"
    },
  },
  {
    selector: ".container3 .f3",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident32d = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      marginLeft:"2px"
    },
  },
  {
    selector: ".container3 .f4",
    duration: 500,
    easing: "linear",
  }
);
//3rd slide extra info
const MyIncident33= new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"100%"
    },
  },
  {
    selector: ".container3 .color-tag",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident34= new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"80px"
    },
  },
  {
    selector: ".container3 .price-tag",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident35 = new CSSEffect(
  {
    animatedAttrs: {
      fontSize:'15px'
    },
  },
  {
    selector: ".container3 .price-tag>p",
    duration: 2000,
    easing: "linear",
  }
);
//3rd slide images
const MyIncident36 = new CSSEffect(
  {
    animatedAttrs: {
      width:"100%",
      opacity:1
    },
  },
  {
    selector: ".container3 #front",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident37 = new CSSEffect(
  {
    animatedAttrs: {
      width:"100%",
      opacity:1,
    },
  },
  {
    selector: ".container3 #back",
    duration: 1,
    easing: "linear",
  }
);
const MyIncident38 = new CSSEffect(
  {
    animatedAttrs: {
      top:"-170px",
      left:"5px",
      transform: { rotate: '-10deg' },
    },
  },
  {
    selector: ".container3 #back",
    duration: 500,
    easing: "linear",
  }
);
//remove 3rd slide
const MyIncident39 = new CSSEffect(
  {
    animatedAttrs: {
      left:"100%"
    },
  },
  {
    selector: ".container3,.big-circle,.small-circle",
    duration: 700,
    easing: "linear",
  }
);
const MyIncident39b = new CSSEffect(
  {
    animatedAttrs: {
      opacity:0
    },
  },
  {
    selector: ".line",
    duration: 700,
    easing: "linear",
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
    duration: 1,
    easing: "linear",
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
    duration: 100,
    easing: "linear",
  }
);
const MyIncident41b = new CSSEffect(
  {
    animatedAttrs: {
      top:"100px",
      left:"450px",
      width:"0%",
      height:"0%",
      border: "3px solid white"
    },
  },
  {
    selector: ".small-circle",
    duration: 100,
    easing: "linear",
  }
);
const MyIncident42 = new CSSEffect(
  {
    animatedAttrs: {
      top:"10px",
      left:"400px",
    },
  },
  {
    selector: ".line1",
    duration: 100,
    easing: "linear",
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
    duration: 100,
    easing: "linear",
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
    duration: 100,
    easing: "linear",
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
    duration: 100,
    easing: "linear",
  }
);
//4th slide
const MyIncident43 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      top:"-35%",
      left:"-25%"
    },
  },
  {
    selector: ".big-circle",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident44 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"90px",
      height:"90px",
      border:"8px solid white"
    },
  },
  {
    selector: ".small-circle",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident45 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1
    },
  },
  {
    selector: ".container4 .title,.container4 .info",
    duration: 2000,
    easing: "linear",
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
    duration: 2000,
    easing: "linear",
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
    duration: 2000,
    easing: "linear",
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
    duration: 2000,
    easing: "linear",
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
    duration: 2000,
    easing: "linear",
  }
);
//bullets for 4th slide
const MyIncident47a = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
    width:"5px",
    height:"5px"
    },
  },
  {
    selector: ".container4 .b1",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident47b = new CSSEffect(
  {
    animatedAttrs: {
    opacity:1,
    width:"5px",
    height:"5px"
    },
  },
  {
    selector: ".container4 .b2",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident47c = new CSSEffect(
  {
    animatedAttrs: {
    opacity:1,
    width:"5px",
    height:"5px"
    },
  },
  {
    selector: ".container4 .b3",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident47d = new CSSEffect(
  {
    animatedAttrs: {
    opacity:1,
    width:"5px",
    height:"5px"
    },
  },
  {
    selector: ".container4 .b4",
    duration: 500,
    easing: "linear",
  }
);

//f-text for 4th slide
const MyIncident48a = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      marginLeft:"2px"
    },
  },
  {
    selector: ".container4 .f1",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident48b = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      marginLeft:"2px"
    },
  },
  {
    selector: ".container4 .f2",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident48c = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      marginLeft:"2px"
    },
  },
  {
    selector: ".container4 .f3",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident48d = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      marginLeft:"2px"
    },
  },
  {
    selector: ".container4 .f4",
    duration: 500,
    easing: "linear",
  }
);
const MyIncident49 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"100%",
      transform: { rotate: '15deg' }
    },
  },
  {
    selector: ".container4 img",
    duration: 2000,
    easing: "linear",
  }
);
//extra info for the 4th slide
const MyIncident50 = new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"100%"
    },
  },
  {
    selector: ".container4 .color-tag",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident51= new CSSEffect(
  {
    animatedAttrs: {
      opacity:1,
      width:"80px"
    },
  },
  {
    selector: ".container4 .price-tag",
    duration: 2000,
    easing: "linear",
  }
);
const MyIncident52 = new CSSEffect(
  {
    animatedAttrs: {
      fontSize:'15px'
    },
  },
  {
    selector: ".container4 .price-tag>p",
    duration: 2000,
    easing: "linear",
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
    selector: ".container4 .title, .container4 .info,.container4 .color-tag, .container4 .price-tag>p, .container4 .f-text",
    duration: 1000,
    easing: "linear",
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
    duration: 1000,
    easing: "linear",
  }
);
const MyIncident55 = new CSSEffect(
  {
    animatedAttrs: {
      width:"0%",
      opacity:0
    },
  },
  {
    selector: ".container4 .price-tag, .container4 .bullet",
    duration: 1000,
    easing: "linear",
  }
);
//4th slide remove circles
const MyIncident56 = new CSSEffect(
  {
    animatedAttrs: {
      top:"50%",
      left:"35%",
      width:"0%",
      height:"0%",
      border:"1px solid white"
    },
  },
  {
    selector: ".small-circle , .big-circle",
    duration: 1000,
    easing: "linear",
  }
);
//4th slide remove lines
const MyIncident57a = new CSSEffect(
  {
    animatedAttrs: {
      top:"200px",
      left:"400px",
      width:"0%",
      opacity:0
    },
  },
  {
    selector: ".line1",
    duration: 1000,
    easing: "linear",
  }
);
const MyIncident57b = new CSSEffect(
  {
    animatedAttrs: {
      top:"200px",
      right:"400px",
      width:"0%",
      opacity:0
    },
  },
  {
    selector: ".line2",
    duration: 1000,
    easing: "linear",
  }
);
const MyIncident57c = new CSSEffect(
  {
    animatedAttrs: {
      bottom:"200px",
      left:"400px",
      width:"0%",
      opacity:0
    },
  },
  {
    selector: ".line3",
    duration: 1000,
    easing: "linear",
  }
);
const MyIncident57d = new CSSEffect(
  {
    animatedAttrs: {
      bottom:"200px",
      right:"400px",
      width:"0%",
      opacity:0
    },
  },
  {
    selector: ".line4",
    duration: 1000,
    easing: "linear",
  }
);

clip.addIncident(MyIncident1, 0);
clip.addIncident(MyIncident2, 0);
clip.addIncident(MyIncident3, 0);
clip.addIncident(MyIncident4, 0);
clip.addIncident(MyIncident5, 0);
clip.addIncident(MyIncident6, 0);
clip.addIncident(MyIncident7, 0);
clip.addIncident(MyIncident8, 2000);
clip.addIncident(MyIncident9, 2600);
clip.addIncident(MyIncident10, 2600);

clip.addIncident(MyIncident11, 2700);
clip.addIncident(MyIncident11b, 2700);
clip.addIncident(MyIncident12, 2700);
clip.addIncident(MyIncident12b, 2700);
clip.addIncident(MyIncident12c, 2700);
clip.addIncident(MyIncident12d, 2700);

clip.addIncident(MyIncident13, 2900);
clip.addIncident(MyIncident13b, 2900);
clip.addIncident(MyIncident14, 2900);
clip.addIncident(MyIncident15a, 2900);
clip.addIncident(MyIncident15b, 2900);
clip.addIncident(MyIncident15c, 2900);
clip.addIncident(MyIncident15d, 2900);

clip.addIncident(MyIncident16a, 2900);
clip.addIncident(MyIncident16b, 3100);
clip.addIncident(MyIncident16c, 3300);
clip.addIncident(MyIncident16d, 3500);

clip.addIncident(MyIncident17a, 2900);
clip.addIncident(MyIncident17b, 3100);
clip.addIncident(MyIncident17c, 3300);
clip.addIncident(MyIncident17d, 3500);

clip.addIncident(MyIncident18a, 2899);
clip.addIncident(MyIncident18b, 2900);
clip.addIncident(MyIncident19, 2900);
clip.addIncident(MyIncident20, 2900);
clip.addIncident(MyIncident21, 2900);
clip.addIncident(MyIncident22, 5600);
clip.addIncident(MyIncident23, 5600);
clip.addIncident(MyIncident24, 5600);

clip.addIncident(MyIncident25, 6100);
clip.addIncident(MyIncident25b, 6100);
clip.addIncident(MyIncident26, 6100);
clip.addIncident(MyIncident26b, 6100);
clip.addIncident(MyIncident26c, 6100);
clip.addIncident(MyIncident26d, 6100);

clip.addIncident(MyIncident27, 6200);
clip.addIncident(MyIncident28, 6200);
clip.addIncident(MyIncident29, 6200);

clip.addIncident(MyIncident30a, 6200);
clip.addIncident(MyIncident30b, 6200);
clip.addIncident(MyIncident30c, 6200);
clip.addIncident(MyIncident30d, 6200);

clip.addIncident(MyIncident31a, 6200);
clip.addIncident(MyIncident31b, 6400);
clip.addIncident(MyIncident31c, 6600);
clip.addIncident(MyIncident31d, 6800);

clip.addIncident(MyIncident32a, 6200);
clip.addIncident(MyIncident32b, 6400);
clip.addIncident(MyIncident32c, 6600);
clip.addIncident(MyIncident32d, 6800);

clip.addIncident(MyIncident33, 6200);
clip.addIncident(MyIncident34, 6200);
clip.addIncident(MyIncident35, 6200);
clip.addIncident(MyIncident36, 6200);
clip.addIncident(MyIncident37, 8200);
clip.addIncident(MyIncident38, 8201);

clip.addIncident(MyIncident39, 9100);
clip.addIncident(MyIncident39b, 9100);

clip.addIncident(MyIncident40, 9800);
clip.addIncident(MyIncident41, 9800);
clip.addIncident(MyIncident41b, 9800);
clip.addIncident(MyIncident41b, 9800);
clip.addIncident(MyIncident42, 9800);
clip.addIncident(MyIncident42b, 9800);
clip.addIncident(MyIncident42c, 9800);
clip.addIncident(MyIncident42d, 9800);
clip.addIncident(MyIncident43, 9900);
clip.addIncident(MyIncident44, 9900);
clip.addIncident(MyIncident45, 9900);

clip.addIncident(MyIncident46a, 9900);
clip.addIncident(MyIncident46b, 9900);
clip.addIncident(MyIncident46c, 9900);
clip.addIncident(MyIncident46d, 9900);

clip.addIncident(MyIncident47a, 9900);
clip.addIncident(MyIncident47b, 10100);
clip.addIncident(MyIncident47c, 10300);
clip.addIncident(MyIncident47d, 10500);
clip.addIncident(MyIncident48a, 9900);
clip.addIncident(MyIncident48b, 10100);
clip.addIncident(MyIncident48c, 10300);
clip.addIncident(MyIncident48d, 10500);

clip.addIncident(MyIncident49, 9900);

clip.addIncident(MyIncident50, 9900);
clip.addIncident(MyIncident51, 9900);
clip.addIncident(MyIncident52, 9900);

clip.addIncident(MyIncident53, 12900);
clip.addIncident(MyIncident54, 12900);
clip.addIncident(MyIncident55, 12900);
clip.addIncident(MyIncident56, 12900);

clip.addIncident(MyIncident57a, 12900);
clip.addIncident(MyIncident57b, 12900);
clip.addIncident(MyIncident57c, 12900);
clip.addIncident(MyIncident57d, 12900);



