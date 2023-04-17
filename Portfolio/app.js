const sections=document.querySelectorAll('.section')
const sectbtns=document.querySelectorAll('.controlls')
const secbtn=document.querySelectorAll('.control')
const allsections=document.querySelector('.main-content')
let prog_text=document.getElementsByClassName('prog-text')
let prog_title=document.getElementsByClassName('prog-title')
let progress=document.getElementsByClassName('progress')
// let myspan=progress.querySelector('span')


function PageTransitions(){
    //button click active class
    for(let i=0;i<secbtn.length;i++){
        secbtn[i].addEventListener('click',function(){
            let currentbtn=document.querySelectorAll('.active-btn')
            currentbtn[0].className=currentbtn[0].className.replace('active-btn','')
            this.className+=' active-btn'
        })
    }
    allsections.addEventListener('click',(e)=>{
        const id=e.target.dataset.id
        if(id){
            sectbtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const current_element=document.getElementById(id)
            current_element.classList.add('active')
        }
    })
}

PageTransitions()

for(let i=0;i<prog_text.length;i++){
    let clname=prog_title[i]
    let num=parseInt(prog_text[i].innerHTML.slice(0,-1))
    let myspan=progress[i].querySelector('span')
    // myspan.classList.add(clname)
    let txt=num+'%'
    myspan.style.width=txt
    
}