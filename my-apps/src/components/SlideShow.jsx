// let i=0;
// let id;
// let arr=[{ images:"https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-03-23/20220322_IPL_Gen_1170x362_Set2-04c62f27-796f-4ddc-bd09-a4a7b7dd1c8b.jpg"},
//          { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1511/1161511-h-a103f5d4c916"},
//          { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hm_m1/sources/r1/cms/prod/6882/676882-m"},
//          { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hm_m1/sources/r1/cms/prod/7034/677034-m"},
//          { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4372/1124372-h-04b0f9e40986"},
//          { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/87/1100087-h-70e9725e4a9b"},


//         ]



//  id=function Slides(){

//     return(


    

//     setInterval(function(){
       
//          var slideshow=document.getElementById("slideshow")
//          slideshow.innerHTML=null
//         if(i===arr.length)
//         {
//             i=0;
//         }
//       var img=document.createElement("img")
     
//       img.src=arr[i].images
     
//       slideshow.append(img)
//       i=i+1
   
//     },2000)

//     )
   
// }


// //id()


// export default id

// import  { useState, useEffect } from 'react';
// import { photoSource } from './photo-source.js';

// let arr=[{ images:"https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-03-23/20220322_IPL_Gen_1170x362_Set2-04c62f27-796f-4ddc-bd09-a4a7b7dd1c8b.jpg"},
//          { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1511/1161511-h-a103f5d4c916"},
//          { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hm_m1/sources/r1/cms/prod/6882/676882-m"},
//          { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hm_m1/sources/r1/cms/prod/7034/677034-m"},
//          { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4372/1124372-h-04b0f9e40986"},
//          { images:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/87/1100087-h-70e9725e4a9b"},


//         ]

//  function Slideshow() {

// const [imgSource, setImgSource] = useState(0);

// useEffect(() => {
//   const intervalId = setInterval(() => {
//           if (imgSource <= 1) {
//             setImgSource(imgSource => imgSource + 1);
//           } else {
//             setImgSource(0);
//                 }
//           }, 10000);
//     return () => clearInterval(intervalId);
// }, []);


//  }

//  export default Slideshow
