let url = 'https://raw.githubusercontent.com/jessy8130/FileStorage/main/Apple.json';
fetch(url)
.then(response => response.json())
.then(result => {

    //Apple抓資料
    let i12Object = result.iphone.i12pro;
    let i12maxObject = result.iphone.i12promax;
    let padObject =result.ipad.ipad;
    let watchObject =result.watch.watch;

    //nav種類
    // let itemChhose;
    // let aIphone = document.querySelector('.main-menu :nth-of-type(1)');
    // aIphone.addEventListener('click', function(){
    //     itemChoose = 
    // });
    

    let iphoneChoose;
    //選擇機型
    let modelBtn = document.querySelectorAll('.model input');
    let img = document.querySelector('.container .row .col-12 .item-img img');
    let hPrice = document.querySelector('header .header-bottom .container .row span span');
    
    modelBtn[0].addEventListener('click', function(){
        iphoneChoose = i12Object;
        setModelItem();
    })

    modelBtn[1].addEventListener('click', function(){
        iphoneChoose = i12maxObject;
        setModelItem();
    })

    function setModelItem(){
        img.setAttribute('src', iphoneChoose.model.url);
        hPrice.innerText = iphoneChoose.model.price;
        storageSpan.forEach((item,index)=>{
            storageSpan[index].innerText = iphoneChoose.storage[index].price;
        });
    }

    //選擇顏色
    let appearanceBtn = document.querySelectorAll('.exterior input');
    let appearenceIndex;
    let appearClick = appearanceBtn.forEach((colorRow,index)=>{
        appearenceIndex = index;
        appearanceBtn[index].addEventListener('click', function(){
            img.setAttribute('src', iphoneChoose.appearance[index].itemImg);
        });

    })

    //選擇容量
    let storageBtn = document.querySelectorAll('.storage input');
    let storageSpan = document.querySelectorAll('.storage .btn-group label span:last-child');
    let amountSpan = document.querySelector('.amount .money h2');
    storageBtn.forEach((storageRow,index)=>{
        storageBtn[index].addEventListener(
            'click', function(){
                hPrice.innerText = iphoneChoose.storage[index].price;
                amountSpan.innerText = 
                iphoneChoose.storage[index].price;
            }
        );
    });

})
.catch(ex =>{})
.finally(() =>{})