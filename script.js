window.onload = function (){
var zoomer = function (){
    document.getElementById('img-zoomer-box')
      .addEventListener('mousemove', function(e) {
  
      var original = document.getElementById('img1'),
          magnified = document.getElementById('img2'),
          style = magnified.style,
          x = e.pageX - this.offsetLeft,
          y = e.pageY - this.offsetTop,
          imgWidth = original.width,
          imgHeight = original.height,
          xperc = ((x/imgWidth) * 100),
          yperc = ((y/imgHeight) * 100);
  
      if(x > (.01 * imgWidth)) {
        xperc += (.15 * xperc);
      };//lets user scroll past right edge of image
  
      if(y >= (.01 * imgHeight)) {
        yperc += (.15 * yperc);
      };//lets user scroll past bottom edge of image
  
      style.backgroundPositionX = (xperc - 9) + '%';
      style.backgroundPositionY = (yperc - 9) + '%';
  
      style.left = (x - 180) + 'px';
      style.top = (y - 180) + 'px';
  
    }, false);
  }();
 
}


// var nystories = document.querySelector("p").offsetTop;
// window.onscroll = function() {
//   if (window.pageYOffset > 0) {
//  var opac = (window.pageYOffset / nystories);
//     console.log(opac);
//   document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/times-square-perspective.jpg) no-repeat";
//   }
// }

// window.onload = function (){
//   var zoomer = function (){
//       document.getElementById('img-zoomer-box-1')
//         .addEventListener('mousemove', function(e) {
    
//         var original = document.getElementById('img3'),
//             magnified = document.getElementById('img4'),
//             style = magnified.style,
//             x = e.pageX - this.offsetLeft,
//             y = e.pageY - this.offsetTop,
//             imgWidth = original.width,
//             imgHeight = original.height,
//             xperc = ((x/imgWidth) * 100),
//             yperc = ((y/imgHeight) * 100);
    
//         if(x > (.01 * imgWidth)) {
//           xperc += (.15 * xperc);
//         };//lets user scroll past right edge of image
    
//         if(y >= (.01 * imgHeight)) {
//           yperc += (.15 * yperc);
//         };//lets user scroll past bottom edge of image
    
//         style.backgroundPositionX = (xperc - 9) + '%';
//         style.backgroundPositionY = (yperc - 9) + '%';
    
//         style.left = (x - 180) + 'px';
//         style.top = (y - 180) + 'px';
    
//       }, false);
//     }();
   
//   }
  
  