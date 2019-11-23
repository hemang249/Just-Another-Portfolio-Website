document.getElementById('btn-knowmore').addEventListener('click',(e)=>{
	document.getElementById('about').scrollIntoView()
})

window.onscroll = () => makeSticky()

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function makeSticky() {
  const headerOffSet = header.offsetTop

  if (window.pageYOffset > headerOffSet) {
    header.classList.add("sticky")
  } else {
    header.classList.remove("sticky")
  }
} 