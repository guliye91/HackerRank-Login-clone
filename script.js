const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-item-content');

function removeBg(){
    tabItems.forEach((item)=>{
        item.classList.remove('bg-color');
    })
}
function removeShow(){
    tabContents.forEach((content)=>{
        content.classList.remove('show');
    })
}

function selectElement(e){
    removeBg();
    removeShow();
    this.classList.add('bg-color');
    const content = document.querySelector(`#${this.id}-content`);
    content.classList.add('show');

}


tabItems.forEach((item)=>{
    item.addEventListener('click',selectElement)
})
