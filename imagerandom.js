// HEY! DON'T SNOOP MY CODE AROUND! YOU CREEP!
// Don't commit ctrl + c v pls. i dont want you to be that pls

var description = [
    "/assets/404-assets/2ad660d32ef1eca82bccc67e1ed9d37b.jpg",
    "/assets/404-assets/4a0dbe31ac5e309571b847c9ab38fd82.jpg",
    "/assets/404-assets/4a52b532f30a3bf17296f36e646293ed.jpg",
    "/assets/404-assets/12e7f3b98832c3af91047ff608ca3321.jpg",
    "/assets/404-assets/887f8f6d410727f2c088f525ad1ac62c.jpg",
    "/assets/404-assets/5154d75a21a735d1a16a7a89848c7632.jpg",
    "/assets/404-assets/6316e38cf81606f11ad6ad384c88627f.jpg",
    "/assets/404-assets/017396d453af1e6134c1b3704a8d9067.jpg",
    "/assets/404-assets/a0e53320cdea5666cfbe3735b2abed29.jpg",
    "/assets/404-assets/acb7d6519233b7d5e7adbe54119fc10e.jpg",
    "/assets/404-assets/cb161107224442a79f04356a86b63414.jpg",
    "/assets/404-assets/d02a71290d34394a69f48963efafa3d2.jpg",
    "/assets/404-assets/f2c1d20a8e7b577ee7febd464a0780b9.jpg",
    "/assets/404-assets/f3e3550e41f4253c0599a1f37a6690e1.jpg",
    "/assets/404-assets/f13f4c6f933adab9e8853d140ea627dc.jpg"
  ];
  
  // Randomizes the images order
  var size = description.length;
  var x = Math.floor(size * Math.random());
  document.getElementById("rickdaroll").src = description[x];