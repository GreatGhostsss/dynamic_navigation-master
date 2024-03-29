const pageBody = document.getElementById("content");
const nav1 = document.getElementById("manager");
const nav2 = document.getElementById("menuItems");
const nav3 = document.getElementById("menuItem2")
const secondParagraph = document.getElementById("secondParagraph");
const thirdParagraph = document.getElementById("thirdParagraph");

window.addEventListener("load", () => {
  nav1.classList.add("active");
});

pageBody.addEventListener('scroll', function() {
  document.querySelector("#dynamicItem").innerHTML = document.querySelector(".active").innerHTML;
  document.querySelector("#dynamicItem").style.fontSize = "5.5vh";
  // console.log(document.getElementsByClassName("active").innerHTML);
})

pageBody.addEventListener('scroll', () => {
  if (pageBody.scrollTop <= secondParagraph.offsetTop) {
    nav1.classList.add("active");
    nav2.classList.remove("active");
    nav3.classList.remove("active");
  } else if (pageBody.scrollTop >= secondParagraph.offsetTop && pageBody.scrollTop < thirdParagraph.offsetTop) {
    nav2.classList.add("active");
    nav1.classList.remove("active");
    nav3.classList.remove("active");
  } else if (pageBody.scrollTop >= thirdParagraph.offsetTop) {
    nav3.classList.add("active");
    nav1.classList.remove("active");
    nav2.classList.remove("active");
  } else {
    nav1.classList.remove("active");
  }
});

const widthFunk = () =>
  window.addEventListener("resize", function() {
    document.querySelector("#windowWidth").innerHTML = window.innerWidth;
  })
widthFunk();

window.addEventListener("resize", function() {
  if (window.innerWidth < 650) {
    document.querySelector("#nav").style.display = "none";
    document.querySelector("#dynamicItem").style.visibility = "visible";
  } else if (window.innerWidth > 650) {
    document.querySelector("#nav").style.display = "grid";
    document.querySelector("#dynamicItem").style.visibility = "hidden";
  } else {
    return
  }
});

const collapsedActive = () => {
  if (window.innerWidth < 650) {
    document.querySelector("#nav").style.display = "none";
    document.querySelector("#dynamicItem").style.visibility = "visible";
    document.querySelector("#dynamicItem").innerHTML = document.querySelector(".active").innerHTML;
    //this is where I put that #dynamicItem should always have something, even when a class of .active isn't on anything.
  } else {
    return
  }
}
collapsedActive();

const collapsedNoScroll = () => {
  document.querySelector("#dynamicItem").innerHTML = "First"
}
collapsedNoScroll();
