    const ARROW_BACK = document.getElementById('arrow-back')
    const ARROW_NEXT = document.getElementById('arrow-next')
    const CONTAINER_IMAGES = document.getElementById('container-images-carousel')
    const IMAGES = document.querySelectorAll('#container-images-carousel img')
    
    let current_slide = 0;
    
    ARROW_NEXT.addEventListener('click', () => {
        
        current_slide++;
        
        if(current_slide > IMAGES.length - 1) {
            current_slide = 0;
        }
        
        carousel();
    })
    
    ARROW_BACK.addEventListener('click', () => {
        
        current_slide--;
        
        if(current_slide < 0) {
            current_slide = IMAGES.length - 1;
        }
        
        carousel();
    })

    function carousel() {

        CONTAINER_IMAGES.style.transform = `translateX(${-current_slide * IMAGES[0].offsetWidth}px)`;

    }