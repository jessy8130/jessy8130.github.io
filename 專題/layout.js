let menuCheck = document.querySelector('#menu-check');
let bg = document.querySelector('.bg');
let body = document.querySelector('body');

//加入menu背景
menuCheck.addEventListener('click', function () {
    //若漢堡按下，加入背景
    if (menuCheck.checked) {
        bg.classList.add('bg-style');
        body.setAttribute('style', 'overflow:hidden;');
        bg.addEventListener('click', function () {
            menuCheck.click();
            event.stopImmediatePropagation();
        });
    }
    //漢堡關起，移除背景
    else {
        bg.classList.remove('bg-style');
        body.removeAttribute('style', 'overflow:hidden;');
    }
});

// 序號modal 關閉新增優惠modal
let discountAdd = document.querySelector('#discountAdd');
let discountModal = document.querySelector('#discountModal');
discountAdd.addEventListener('click', function(){
    discountModal = document.querySelector('#discountModal');
    discountModal.classList.add('d-none');
});

let ONdiscount = document.querySelectorAll('#ONdiscountModal button');
ONdiscount.forEach(button =>{
    button.addEventListener('click', function(){
        discountModal.classList.remove('d-none');
    })
});

//時間地點Modal on Modal
let changeDest = document.querySelector("#deliverModal .modal-body div:first-of-type button");
changeDest.addEventListener('click', function(){
    changeDest.parentNode.parentElement.offsetParent.classList.add('opacity-0');
});
let destModalBtn = document.querySelectorAll('#destModal button');
destModalBtn.forEach(button => {
    button.addEventListener('click',function(){
        changeDest.parentNode.parentElement.offsetParent.classList.remove('opacity-0');
    });
});
