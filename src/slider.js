var thumbnails = document.getElementById("thumbnails");
  var imgs = thumbnails.getElementsByTagName("img");
  var main = document.getElementById("main");

  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];

    img.addEventListener("click", function () {
      main.src = this.src;
    });
  }