const pageBody=document.getElementById("content"),nav1=document.getElementById("manager"),nav2=document.getElementById("menuItems"),nav3=document.getElementById("menuItem2"),secondParagraph=document.getElementById("secondParagraph"),thirdParagraph=document.getElementById("thirdParagraph");window.addEventListener("load",()=>{nav1.classList.add("active")}),pageBody.addEventListener("scroll",function(){document.querySelector("#dynamicItem").innerHTML=document.querySelector(".active").innerHTML,document.querySelector("#dynamicItem").style.fontSize="5.5vh"}),pageBody.addEventListener("scroll",()=>{pageBody.scrollTop<=secondParagraph.offsetTop?(nav1.classList.add("active"),nav2.classList.remove("active"),nav3.classList.remove("active")):pageBody.scrollTop>=secondParagraph.offsetTop&&pageBody.scrollTop<thirdParagraph.offsetTop?(nav2.classList.add("active"),nav1.classList.remove("active"),nav3.classList.remove("active")):pageBody.scrollTop>=thirdParagraph.offsetTop?(nav3.classList.add("active"),nav1.classList.remove("active"),nav2.classList.remove("active")):nav1.classList.remove("active")});const widthFunk=()=>window.addEventListener("resize",function(){document.querySelector("#windowWidth").innerHTML=window.innerWidth});widthFunk(),window.addEventListener("resize",function(){if(window.innerWidth<650)document.querySelector("#nav").style.display="none",document.querySelector("#dynamicItem").style.visibility="visible";else{if(!(window.innerWidth>650))return;document.querySelector("#nav").style.display="block",document.querySelector("#dynamicItem").style.visibility="hidden"}});const collapsedActive=()=>{window.innerWidth<650&&(document.querySelector("#nav").style.display="none",document.querySelector("#dynamicItem").style.visibility="visible",document.querySelector("#dynamicItem").innerHTML=document.querySelector(".active").innerHTML)};window.innerWidth<650&&(document.querySelector("#nav").style.display="none",document.querySelector("#dynamicItem").style.visibility="visible",document.querySelector("#dynamicItem").innerHTML=document.querySelector(".active").innerHTML);