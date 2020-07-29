//resizing the grid of images 
//code from: https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
function resizeGridItem(item){
  grid = document.getElementsByClassName("grid")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
  item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
    resizeGridItem(allItems[x]);
  }
}

function resizeInstance(instance){
	item = instance.elements[0];
  resizeGridItem(item);
}

window.onload = resizeAllGridItems;
window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for(x=0;x<allItems.length;x++){
  imagesLoaded( allItems[x], resizeInstance);
}

//adds a "loaded" class for elements that animate upon load
window.addEventListener("load", () => {
	document.querySelector("body").classList.add("loaded");
})

//creates a modal gallery, images are are expanded on click 
//code from: https://www.tutorialspoint.com/how-to-create-a-modal-image-gallery-with-css-and-javascript
window.addEventListener("load", () => {
	var modalEle = document.querySelector(".modal");
	var modalImage = document.querySelector(".modal-content");
	var sidebar = document.getElementsByClassName("sidebar")[0];
	Array.from(document.querySelectorAll("img")).forEach(item => {
		item.addEventListener("click", event => {
		  modalEle.style.display = "block";
		  modalImage.src = event.target.src;
		  sidebar.style.zIndex = "1";
		});
	});

	var span = document.getElementsByClassName("close")[0];

	span.onclick = function() {
	  modalEle.style.display = "none";
	  sidebar.style.zIndex = "2";
	}
})