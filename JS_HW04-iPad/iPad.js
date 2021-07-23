        //按鈕綁click事件 findIpad
        let colorBtns, storageBtns, networkBtns;     
        let _color, _storage, _network;  
        window.onload = function(){
            ResponseIpad();
            colorBtns = document.querySelectorAll('.color label');
            colorBtns.forEach(btn =>{
                btn.addEventListener('click', function(){
                    _color = btn.htmlFor;
                    findIpad();
                    displayImg();
                    btnOpen();
                    SetAccordion();
                });
            });
            storageBtns = document.querySelectorAll('.storage label');
            storageBtns.forEach(btn =>{
                btn.addEventListener('click', function(){
                    _storage = btn.htmlFor;
                    displayAmount();
                    findIpad();
                    btnOpen();
                    SetAccordion();
                });
            });
            networkBtns = document.querySelectorAll('.network label');
            networkBtns.forEach(btn=>{
                btn.addEventListener('click', function(){
                    _network = btn.htmlFor;
                    findIpad();
                    btnOpen();
                    SetAccordion();
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
                console.log(ipad[0]);
                amount.innerText = `NT$ ${Intl.NumberFormat().format(ipad[0].price)}`;
            }
        }
        //storage選擇，network金額變動
        let networkAmount = document.querySelectorAll('.network .row .col-6 label .desc');
        function displayAmount() {
            let storageIpad = ipadArray.filter(x=> x.storage == _storage);
            let sm = storageIpad.filter(x => x.network == "Wi-Fi")[0];
            let lg = storageIpad.filter(x => x.network == "Cellular")[0];
            console.log(storageIpad)
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

        //手風琴資料呈現
        let accordianBtn = document.querySelectorAll('.accordion-button');
        function SetAccordion(){
            accordianBtn.forEach((btn,index)=>{
            accordianBtn[0].innerText = _color;
            accordianBtn[1].innerText = _storage;
            accordianBtn[2].innerText = _network;
        });
        }