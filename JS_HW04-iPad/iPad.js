        //按鈕綁click事件 findIpad
        let colorBtns, storageBtns, networkBtns;     
        let _color, _storage, _network;
        let accordionBtn = document.querySelectorAll('.accordion-button');
        let headingOne = document.querySelector('#headingOne');
        let headingTwo = document.querySelector('#headingTwo');
        let headingThree = document.querySelector('#headingThree');

        window.onload = function(){
            ResponseIpad();
            colorBtns = document.querySelectorAll('.color label');
            colorBtns.forEach(btn =>{
                btn.addEventListener('click', function(){
                    _color = btn.htmlFor;
                    findIpad();
                    displayImg();
                    btnOpen();

                    //accordion設定
                    accordionBtn[0].click();
                    headingOne.classList.remove('d-none');
                    let btn0 = ipadArray.filter(x => x.picture.includes(_color))[0];
                    accordionBtn[0].innerText = btn0.color;
                });
            });
            storageBtns = document.querySelectorAll('.storage label');
            storageBtns.forEach(btn =>{
                btn.addEventListener('click', function(){
                    _storage = btn.htmlFor;
                    displayAmount();
                    findIpad();
                    btnOpen();
                    
                    //accordion設定
                    accordionBtn[1].click();
                    headingTwo.classList.remove('d-none');
                    let btn1 = ipadArray.filter(x => x.storage == _storage)[0];
                    accordionBtn[1].innerText = btn1.storage;
                });
            });
            networkBtns = document.querySelectorAll('.network label');
            networkBtns.forEach(btn=>{
                btn.addEventListener('click', function(){
                    _network = btn.htmlFor;
                    findIpad();
                    btnOpen();

                    //accordion設定
                    accordionBtn[2].click();
                    headingThree.classList.remove('d-none');
                    let btn2 = ipadArray.filter(x => x.network == _network)[0];
                    if(btn2.network == 'Cellular'){
                        accordionBtn[2].innerText = `Wi-Fi + 行動網路`;
                    }
                    else{
                        accordionBtn[2].innerText = btn2.network;
                    }
                });
            });
        }
        
        //匯入資料
        let url = 'https://raw.githubusercontent.com/jessy8130/FileStorage/main/iPad.json';

        let ipadArray=[];
        function ResponseIpad(){
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                ipadArray = this.response.iPadAir;
            }
            xhr.responseType='json';
            xhr.open('GET',url);
            xhr.send();
        }


        //顏色顯示圖面
        let img = document.querySelector('.container .row:first-child img');
        function displayImg() {
            img.removeAttribute('src');
            img.setAttribute('src', `./iPad/${_color}.png`);
        }

        //找ipad
        //抓取按下去的資料
        //比對ipad 顯示金額
        let amount = document.querySelector('.price h2');
        function findIpad() {
            if(_color == undefined || _storage == undefined || _network == undefined){
                return;
            }
            else{
                let ipad = ipadArray.filter(x=> x.picture.includes(_color) && x.storage == _storage && x.network == _network);
                amount.innerText = `NT$ ${Intl.NumberFormat().format(ipad[0].price)}`;
            }
        }
        //storage選擇，network金額變動
        let networkAmount = document.querySelectorAll('.network .row .col-6 label .desc');
        function displayAmount() {
            let storageIpad = ipadArray.filter(x=> x.storage == _storage);
            let sm = storageIpad.filter(x => x.network == "Wi-Fi")[0];
            let lg = storageIpad.filter(x => x.network == "Cellular")[0];
            networkAmount.forEach((desc,index)=>{
                networkAmount[0].innerText = `NT$ ${Intl.NumberFormat().format(sm.price)}`;
                networkAmount[1].innerText = `NT$ ${Intl.NumberFormat().format(lg.price)}`;
            });
            
        }

        //按鈕開關設定
        let storage = document.querySelector('.storage');
        let network = document.querySelector('.network');
        let price = document.querySelector('.price');
        function btnOpen() {
            if(_color != undefined && _storage != undefined && _network != undefined)
            { price.classList.remove('d-none');}
            else if(_color != undefined && _storage != undefined)
            { network.classList.remove('disableSection');}
            else if(_color != undefined)
            { storage.classList.remove('disableSection');}
        }