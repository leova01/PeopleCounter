let group=document.getElementById("NumbersOnCount");
let ElementHtml=document.getElementById("count");
let count=0;

function increment() {
    count+=1;
    ElementHtml.innerText=count
};

function decrase() {
    count +=-1;
    ElementHtml.innerText=count
};

function save(){
    let countStr = count + " - "
    group.textContent += countStr
}


