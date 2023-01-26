class Carousel
{
    /**
     * @param {HTMLElement} element
     * @param {object} options
     * @param {object} options.slideToScroll Nombre ellement a faire defiler*
     * @param {object} options.slideVisible element visible dans un slide
     * @param {boolean} options.image pour agrandure les image
    */
    constructor(element, options)
    {
        this.element = element;
        this.options = Object.assign({},
            // permet d'ignisialiser les commende
            {
                slideToScroll : 1,
                slideVisible : 2,
                image : false
            },
            // permet de changer les valeurs que l'on veux
            options
        );

        // permet de voir le nombre d'element souheter a la fois


        let children = [].slice.call(element.children);

        this.courrentItem = 0;

        this.root = this.makeDiv('carousel');
        this.carouselContainer = this.makeDiv('carousel_container');

        // permet d'apliquer la taille au containeur

        this.root.appendChild(this.carouselContainer);
        this.element.appendChild(this.root);

        this.scalRoot = this.makeDiv('carouselScal');
        this.scalContent = this.makeDiv('carouselScalContent');

        // pour mettre tout les element dans dans le carouselEl
        this.items = children.map(el =>
        {
            let carouselIt = this.makeDiv('carousel_item');
            carouselIt.appendChild(el);

            this.carouselContainer.appendChild(carouselIt);

            if (this.options.image)
            {
                el.addEventListener('click', () =>
                {
                    this.img.src = el.src;
                    this.scalRoot.style.visibility = 'visible';
                });
            }

            return carouselIt;
        });

        this.setStyle();
        this.createNavigation();

        if (this.options.image)
        {

            this.img = document.createElement('img');

            this.imgScale()
            this.img.src = 'https://i.stack.imgur.com/Esppm.png';


            this.root.appendChild(this.scalRoot);
        }
    }

    /**
     * @param {string} className
     * @returns {HTMLElement}
     */
    makeDiv(className)
    {
        let div = document.createElement('div');
        div.setAttribute('class', className);
        return div;
    }

    setStyle()
    {
        let ratio = this.items.length / this.options.slideVisible;
        this.carouselContainer.style.width = `${ratio * 100}%`;

        this.items.forEach((els) => els.style.width = `${(100 / this.options.slideVisible) / ratio}%`);
    }

    createNavigation()
    {
        // pour changer slider
        let nextBTN = this.makeDiv('courasel_next');
        let prevBTN = this.makeDiv('courasel_prev');

        this.root.appendChild(nextBTN);
        this.root.appendChild(prevBTN);

        // le bind this permet de referencer le bon this
        nextBTN.addEventListener('click', this.next.bind(this));
        prevBTN.addEventListener('click', this.prev.bind(this));
    }

    next()
    {
        this.gotoItem(this.courrentItem + this.options.slideToScroll);
    }

    prev()
    {
        this.gotoItem(this.courrentItem - this.options.slideToScroll, false);
    }


    /**
     * pour deplacer le courasel vers l'element cybler
     * @param {number} index
     */
    gotoItem (index, next = true)
    {
        if (index < 0)
            index = this.items.length - this.options.slideVisible;
        if (index >= this.items.length || !this.items[this.courrentItem + this.options.slideVisible] && next)
            index = 0
        let translateX = index * -100 / this.items.length;
        this.carouselContainer.style.transform = `translate3d(${translateX}%, 0, 0)`;
        this.courrentItem = index;
    }

    /**
     * peremet de creer la boite qui contient l'image en grand
     */
    imgScale()
    {
        let scalImg     = this.makeDiv('carouselImg');
        let scalClose   = this.makeDiv('carouselClose');

        this.scalRoot.appendChild(this.scalContent);
        this.scalContent.appendChild(scalImg);
        this.scalContent.appendChild(scalClose);
        scalImg.appendChild(this.img);

        this.siezBoxScale(scalImg);

        window.addEventListener('resize', () => this.siezBoxScale(scalImg));
        scalClose.addEventListener('click', () => this.scalRoot.style.visibility = 'hidden');
    }

    /**
     *
     * @param {HTMLElement} box
     */
    siezBoxScale(box)
    {
        let windowsHeight = window.innerHeight - 60

        box.style.maxHeight = `${windowsHeight}px`
    }
}

const car = document.querySelectorAll('.carouselObject')

document.addEventListener("DOMContentLoaded", () => {

    for (const els of car )
    {
        new Carousel(els,
        {
            slideVisible : 3,
            image : true
        });
    }
});
