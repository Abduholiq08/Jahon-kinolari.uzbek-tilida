function changeStyle(styleName) {
    const gallery = document.querySelector('.gallery');
    gallery.classList.remove('style1','style2','style3');
    gallery.classList.add(styleName);
}