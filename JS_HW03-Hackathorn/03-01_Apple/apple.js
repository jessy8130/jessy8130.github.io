let url = 'https://raw.githubusercontent.com/jessy8130/FileStorage/main/Apple.json';
fetch(url)
.then(response => response.json())
.then(result => {

    //Apple抓資料
    let phoneObject = result.iphone;
    let i12Object = result.iphone.i12pro;
    let i12maxObject = result.iphone.i12promax;
    let padObject =result.ipad.ipad;
    let watchObject =result.watch.watch;

    let itemChoose;
    // nav種類
    let aIphone = document.querySelector('.main-menu :nth-of-type(1)');
    aIphone.addEventListener('click', function(){
        aIphone.setAttribute('href', "./03-Apple.html");
        itemChoose = phoneObject;
    });
    let aIpad = document.querySelector('.main-menu :nth-of-type(2)');
    aIpad.addEventListener('click', function(){
        aIpad.setAttribute('href',"./03-iPad.html");
        itemChoose = padObject;
    });
    let aWatch = document.querySelector('.main-menu :nth-of-type(3)');
    aWatch.addEventListener('click', function(){
        aWatch.setAttribute('href', "./03-Watch.html");
        itemChoose = watchObject;
    });
    

    //選擇機型 iphone only
    let modelBtn = document.querySelectorAll('.model input');
    let img = document.querySelector('.container .row .col-12 .item-img img');
    let hPrice = document.querySelector('header .header-bottom .container .row span span');

    modelBtn[0].addEventListener('click', function(){
        itemChoose = i12Object;
        setModelItem();
    })

    modelBtn[1].addEventListener('click', function(){
        itemChoose = i12maxObject;
        setModelItem();
    })

    function setModelItem(){
        img.setAttribute('src', itemChoose.model.url);
        hPrice.innerText = itemChoose.model.price;
        storageSpan.forEach((item,index)=>{
            storageSpan[index].innerText = itemChoose.storage[index].price;
        });
    }

    
    //選擇顏色
    let appearanceBtn = document.querySelectorAll('.exterior input');
    appearanceBtn.forEach((colorRow,index)=>{
        appearanceBtn[index].addEventListener('click', function(){
            img.setAttribute('src', itemChoose.appearance[index].itemImg);
        });

    })

    //選擇容量
    let storageBtn = document.querySelectorAll('.storage input');
    let storageSpan = document.querySelectorAll('.storage .btn-group label span:last-child');
    let amountSpan = document.querySelector('.amount .money h2');
    storageBtn.forEach((storageRow,index)=>{
        storageBtn[index].addEventListener(
            'click', function(){
                hPrice.innerText = itemChoose.storage[index].price;
                amountSpan.innerText = 
                itemChoose.storage[index].price;
            }
        );
    });

})
.catch(ex =>{})
.finally(() =>{})