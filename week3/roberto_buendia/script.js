function addOneToCounter() {
    document.getElementById("counter").innerText = 
    parseInt(document.getElementById("counter").innerText) + 1
}
function enlargeImg() {
    img = document.getElementById("img1")
    img.style.transform = "scale(1.5)"
    img.style.filter = "drop-shadow(0 0 20px rgba(255, 0, 0, 2))"
    setTimeout(function() {img.style.transform = "scale(1)"; img.style.filter = "none"}, 70)
}
function cps() {
   clicks = []
   const interval = 1000

   document.getElementById("im1").addEventListener("click")
}