/*multi-item carousel on gallery page*/


let items = document.querySelectorAll('[id^="recipeCarousel"] .carousel-item');

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next)
        {
            // wrap carousel by using first child
            next = items[0]
        }

        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});


/*contact tabs access*/

let tabLanTrigger = document.querySelector('#nav-Lan-tab');
let tab1 = new bootstrap.Tab(tabLanTrigger);

let tabAveTrigger = document.querySelector('#nav-Ave-tab');
let tab2 = new bootstrap.Tab(tabAveTrigger);

let tabFouTrigger = document.querySelector('#nav-Fou-tab');
let tab3 = new bootstrap.Tab(tabFouTrigger);



/* zipcode search*/

let zipLan = ['LE QUESNOY', 'AMFROIPRET', 'AUDIGNIES', 'BAVAY', 'BEAUDIGNIES', 'BELLIGNIES', 'BERMERIES', 'BETTRECHIES', 'BOUSIES', 'BRY', 'CROIX CALUYAU', 'ENGLEFONTAINE', 'ETH', 'LE FAVRIL', 'LA FLAMENGRIE', 'FONTAINE AU BOIS', 'FOREST EN CAMBRESIS', 'FRASNOY', 'GHISSIGNIES', 'GOMMEGNIES', 'GUSSIGNIES', 'HARGNIES', 'HECQ', 'HON HERGIES', 'HOUDAIN LEZ BAVAY', 'JENLAIN', 'JOLIMETZ', 'LANDRECIES', 'LOCQUIGNOL', 'LA LONGUEVILLE', 'LOUVIGNIES QUESNOY', 'MARESCHES', 'MAROILLES', 'MECQUIGNIES', 'NEUVILLE EN AVESNOIS', 'OBIES', 'ORSINVAL', 'POIX DU NORD', 'POTELLE', 'PREUX AU BOIS', 'PREUX AU SART', 'RAUCOURT AU BOIS', 'ROBERSART', 'RUESNES', 'SAINT WAAST', 'SALESCHES', 'SEPMERIES', 'TAISNIERES SUR HON', 'VENDEGIES AU BOIS', 'VILLEREAU', 'VILLERS POL', 'WARGNIES LE GRAND', 'WARGNIES LE PETIT'];
let lenLan = zipLan.length;

let zipAve = ['AVESNES SUR HELPE', 'AVESNELLES', 'BAS LIEU', 'BEAUREPAIRE SUR SAMBRE', 'BEAURIEUX', 'BERELLES', 'BEUGNIES', 'BOULOGNE SUR HELPE', 'CARTIGNIES', 'CHOISIES', 'CLAIRFAYTS', 'DAMOUSIES', 'DIMECHAUX', 'DIMONT', 'DOMPIERRE SUR HELPE', 'DOURLERS', 'ECCLES', 'ETROEUNGT', 'FELLERIES', 'FLAUMONT WAUDRECHIES', 'FLOURSIES', 'FLOYON', 'GRAND FAYT', 'HAUT LIEU', 'HESTRUD', 'LAROUILLIES', 'LEZ FONTAINE', 'LIESSIES', 'MARBAIX', 'PETIT FAYT', 'PRISCHES', 'RAINSARS', 'RAMOUSIES', 'SAINS DU NORD', 'SAINT AUBIN', 'SAINT HILAIRE SUR HELPE', 'SARS POTERIES', 'SEMERIES', 'SEMOUSIES', 'SOLRE LE CHATEAU', 'SOLRINNES', 'TAISNIERES EN THIERACHE', 'WATTIGNIES LA VICTOIRE'];
let lenAve = zipAve.length;

let zipFou = ['FOURMIES', 'ANOR', 'BAIVES', 'EPPE SAUVAGE', 'FERON', 'GLAGEON', 'MOUSTIER EN FAGNE', 'OHAIN', 'TRELON', 'WALLERS EN FAGNE', 'WIGNEHIES', 'WILLIES'];
let lenFou = zipFou.length;

function zipVerify() {
    let x = document.getElementById("zipCode").value;
    let y = document.getElementById("zipVille").value;

    let scroll = document.getElementById("mapclick");
    let z = y.toUpperCase();

    if (x >= 59000 && x <= 59999) {
        if (zipLan.includes(z))
        {
            document.getElementById("zipResult").innerHTML = ("Vous êtes rattaché à la Communauté de Communes du Pays de Mormal, veuillez vous rapprocher du Centre Social et Culturel de Landrecies.");
            tab1.show();
            scroll.scrollIntoView();
        }
        else if (zipAve.includes(z))
        {
            document.getElementById("zipResult").innerHTML = ("Vous êtes rattaché à la Communauté de communes Cœur de l'Avesnois, veuillez vous rapprocher du Centre Social et Culturel d'Avesnes-sur-Helpe.");
            tab2.show();
            scroll.scrollIntoView();
        }
        else if (zipFou.includes(z))
        {
            document.getElementById("zipResult").innerHTML = ("Vous êtes rattaché à la Communauté de communes du Sud Avesnois, veuillez vous rapprocher du Centre Social et Culturel de Fourmies.");
            tab3.show();
            scroll.scrollIntoView();
        }
        else
        {
            document.getElementById("zipResult").innerHTML = ("Votre commune n'est pas rattachée aux communautés de communes proposant cette BPJ");
        }

    }
    else
    {
        document.getElementById("zipResult").innerHTML = ("Le code postal rentré n'est pas situé dans le nord, redirigez vous vers la BPJ la plus proche de chez vous");
    }
}