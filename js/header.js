window.addEventListener("load",function(){
    const openCate = this.document.querySelector(".open-cate")
    const cateBox = this.document.querySelector(".cate-box")
    const cateBack = this.document.querySelector(".cate-background")
    openCate.addEventListener("click",function(){
        cateBox.classList.toggle("active")
        cateBack.classList.toggle("active")
    })
    cateBack.addEventListener("click",function(){
        cateBack.classList.remove("active")
        cateBox.classList.remove("active")
    })
})