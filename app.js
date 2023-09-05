const saluteTextContainer = document.querySelector(".saluteTextContainer");
const saluteImgContainer = document.querySelector(".saluteImgContainer");
//這個querySelectorAll 是找全部一樣的,不是像上面找到一個
const jobTitleContainers = document.querySelectorAll(".jobTitleContainer");
const jobTitles = document.querySelectorAll(".jobTitle");


window.addEventListener("scroll", () => {
  let offsetY = window.scrollY
  saluteTextContainer.style.transform = `translateY(${offsetY * 0.1}px)`
  // 設置 'saluteImgContainer' 元素的水平和垂直平移效果，根據 'offsetY' 的值
  //水平移動的距離是 'offsetY * 0.4' 像素，垂直移動的距離是 'offsetY * 0.7' 像素
  saluteImgContainer.style.transform = `translate(${offsetY * 0.4}px , ${offsetY * 0.7}px)`
  jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`
  jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`
  jobTitles[0].style.transform = `translateX(calc(220vh - ${offsetY}px))`
  jobTitles[1].style.transform = `translateX(calc(-250vh + ${offsetY}px))`
  projecstTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`
})