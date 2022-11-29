const dColumnBtn = document.getElementById("dColumnBtn");
const dGridBtn = document.getElementById("dGridBtn");
const theForm = document.getElementsByClassName('theForm');
const theHeader = document.querySelector('header');

function changeDisplayFColumn(e){
    e.preventDefault();
    theForm[0].style.flexDirection = 'column';
    theForm[0].style.justifyContent = 'flex-end';
}

function changeDisplayGrid(e){
    e.preventDefault();
    theForm[0].style.display = 'grid';
    theForm[0].style.gap = '25px';
    theForm[0].style.gridTemplateColumns = '250px 250px 250px';
}

dColumnBtn.addEventListener('click', changeDisplayFColumn);
dGridBtn.addEventListener('click', changeDisplayGrid);