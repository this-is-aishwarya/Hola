export const myFunction = () => {
    let root = document.documentElement;
    let x = document.getElementById("img");
    let videoVal = document.getElementsByTagName("video");
    // let h1Val = document.h1;
    root.classList.toggle("dark-mode");
    x.classList.toggle("inverted");
    console.log("hogaya");
    // pictureVal.classList.toggle("inverted");
    videoVal.classList.toggle("inverted");
    // h1Val.classList.toggle("inverted");
  }
