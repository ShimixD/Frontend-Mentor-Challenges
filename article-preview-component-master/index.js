const shareAfter = document.querySelector('.share-after')
const buttonShare = document.querySelector('.share')
const buttonResponsive = document.querySelector('#share')

buttonShare.addEventListener('click', () => {
    shareAfter.classList.toggle('share-active')

    if(shareAfter.classList.contains('share-active')){
        buttonResponsive.addEventListener('click', () => {
            shareAfter.classList.remove('share-active')
            shareAfter.style.display = 'none'
        })
        shareAfter.style.display = 'flex'
    } else {
        shareAfter.style.display = 'none'
    }
})