
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

/* zipcode search*/

const zipInput = document.getElementById("zipCode");

zipInput.addEventListener('input', () => {
  zipInput.setCustomValidity('');
  zipInput.checkValidity();
});

zipInput.addEventListener('invalid', () => {
  if(zipInput.value === '') {
    zipInput.setCustomValidity("Veuillez saisir votre nom d'utilisateur !");
  } else {
    zipInput.setCustomValidity("Un nom d'utilisateur ne peut contenir que des lettres minuscules et majuscules, veuillez réessayer");
  }
});

let zipLan = [481,006,031,053,057,065,070,077,099,116,164,194,217,223,232,242,246,251,259,265,277,283,296,310,315,323,325,331,353,357,363,381,384,396,425,441,451,464,468,472,473,494,503,518,548,549,565,584,607,619,626,639,640];
let lenLan = zipLan.length;

function zipVerify() {
    let x = document.getElementById("zipCode").value;
    for (var i = 0; i < lenLan; i++) {
    console.log(sequence[i]);;
    }
}




