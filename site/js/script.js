
			let items = document.querySelectorAll('[id^="recipeCarousel"] .carousel-item')

            items.forEach((el) => {
                const minPerSlide = 4
                let next = el.nextElementSibling
                for (var i=1; i<minPerSlide; i++) {
                    if (!next) {
                        // wrap carousel by using first child
        	           next = items[0]
      	         }
                    let cloneChild = next.cloneNode(true)
                    el.appendChild(cloneChild.children[0])
                    next = next.nextElementSibling
        }
})

		


function myFuLan() {
				  var x = document.getElementById("contLan");
				  var y = document.getElementById("contAve");
				  var z = document.getElementById("contFou");
				  if (x.style.display === "block") {
					x.style.display = "block";
					y.style.display = "none";
					z.style.display = "none";
					  
				}
				 else {
					y.style.display = "none";
					z.style.display = "none";
					x.style.display = "block";
					  
				}
			}
            
			function myFuAve() {
				  var x = document.getElementById("contAve");
				  var y = document.getElementById("contLan");
				  var z = document.getElementById("contFou");
				  if (x.style.display === "block") {
					x.style.display = "block";
					y.style.display = "none";
					z.style.display = "none";
					  
				}
				 else {
					y.style.display = "none";
					z.style.display = "none";
					x.style.display = "block";
					  
				}
			}
            
			function myFuFou() {
				  var x = document.getElementById("contFou");
				  var y = document.getElementById("contLan");
				  var z = document.getElementById("contAve");
				  if (x.style.display === "block") {
					x.style.display = "block";
					y.style.display = "none";
					z.style.display = "none";
					  
				}
				 else {
					y.style.display = "none";
					z.style.display = "none";
					x.style.display = "block";
					  
				}
			}