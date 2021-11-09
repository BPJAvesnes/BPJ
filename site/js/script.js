
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
});

		


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
			};
            
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
			};
            
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
			};

/* zipcode search*/

let zipLan = [481,006,031,053,057,065,070,077,099,116,164,194,217,223,232,242,246,251,259,265,277,283,296,310,315,323,325,331,353,357,363,381,384,396,425,441,451,464,468,472,473,494,503,518,548,549,565,584,607,619,626,639,640];
let lenLan = zipLan.length;

let zipAve = [036,035,050,061,062,066,078,093,134,147,148,169,174,175,177,181,186,218,226,233,240,241,270,290,306,333,342,347,374,461,474,490,493,525,529,534,555,562,563,572,573,583,649];
let lenAve = zipAve.length;

let zipFou = [249,012,045,198,229,261,420,445,601,633,659,661];
let lenFou = zipFou.length;

function zipVerify() {
    let x = document.getElementById("zipCode").value;
    if ( x >= 59000 && x <= 59999) {
        if (zipLan.includes(x - 59000)) {
            document.getElementById("zipResult").innerHTML = ("Vous êtes rattaché à la Communauté de Commune du Pays de Mormal, veuillez vous rapprocher du Centre Social et Culturel de Landrecies");
        } else if (zipAve.includes(x - 59000)){
            document.getElementById("zipResult").innerHTML = ("Vous êtes rattaché à la Communauté de communes Cœur de l'Avesnois, veuillez vous rapprocher du Centre Social et Culturel d'Avesnes-sur-Helpe");
            } else if (zipFou.includes(x - 59000)) {
            document.getElementById("zipResult").innerHTML = ("Vous êtes rattaché à la Communauté de communes du Sud Avesnois, veuillez vous rapprocher du Centre Social et Culturel de Fourmies");
                } else {
                    document.getElementById("zipResult").innerHTML =  ("Votre commune n'est pas rattachée aux communautés de communes proposant la BPJ");
            }
            
    } else {
        document.getElementById("zipResult").innerHTML =  ("Le code postal rentré n'est pas situé dans le nord, redirigez vous vers la BPJ la plus proche de chez vous");
    }
}




