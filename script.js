const panels = document.querySelectorAll('.panel')
const active = document.querySelectorAll('.active')

panels.forEach(panel => {
    panel.addEventListener('mouseover', () =>{
        removeActiveClass()
        panel.classList.add('active')
        //fadeOutImage()
    })
})

panels.forEach(panel => {
    panel.addEventListener('onmouseoleave', () =>{
        removeActiveClass()
        console.log('you left the click zone')
    })
})

function removeActiveClass() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// function fadeOutImage() {
//     active.forEach(activ_img => {
//         activ_img.style.backgroundImage.animation = 'fadeOut 1s';
//     }

// )}
