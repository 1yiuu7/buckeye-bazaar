
const items = {
    "scott": {
        "title": "復興山城：AI 資安的守護者",
        "description": "復興高中的精神象徵！這不只是一張校徽，更是我們 AI 資安學程勇往直前的標誌。在群山環繞的優美環境中，我們不僅吃著象徵好運的「御飯糰」，更在專業實驗室中培養未來的科技領袖！",
        "thumbnail": "static/img/fhsh_logo.png",
        "cost": 500,
        "content": "ih\x1a\\_nq__h\x1amcjm"
    },
    "email": {
        "title": "全台最美：復興山城夜景",
        "description": "每天踏進校門，迎接你的是半山腰特有的壯闊視野。在這裡，我們的高度不只是海拔，更是視野的廣度！夜晚寫 code 累了，只要抬頭就能看見台北最迷人的萬家燈火，這是屬於資安學員的專屬浪漫。",
        "thumbnail": "static/img/fhsh_gate.jpg",
        "cost": 69,
        "content": "siol\x1amiof(\x1ab[h^\x1acn\x1aip_l"
    },
    "together": {
        "title": "戶外英文：與世界接軌的夕陽課",
        "description": "誰說資安高手只能待在冷氣房？在美麗的夕陽下，我們將課堂搬到戶外。用流利的英文與全球技術同步，是成為頂尖專家的標配。在最chill的氛圍下學習，讓你贏在國際競爭的起跑點！",
        "thumbnail": "static/img/outdoor_english.jpg",
        "cost": 0,
        "content": "loh"
    },
    "robot": {
        "title": "青年舉政：高中生 VS 企業大對決",
        "description": "實力，連業界都驚嘆！這是我們與各大企業同台競技、挺進決賽的榮耀時刻。作為全場唯二的學生組，我們證明了只要有熱忱與技術，高中生也能用 AI 解決社會問題，改變世界！",
        "thumbnail": "static/img/competition.jpg",
        "cost": 20,
        "content": "q_\x1aqcff\x1al_nolh"
    },
    "walkways": {
        "title": "國防實戰：戰場資訊決策體驗",
        "description": "直擊國防大學！了解現代戰爭中，資訊如何轉化為制勝關鍵。在 AI 資安學程，我們不僅學程式碼，更學習在壓力下做出精準判斷，體驗頂尖軍事科技的決策魅力。帥氣程度百分百！",
        "thumbnail": "static/img/military_camp.jpg",
        "cost": 1500,
        "content": "sio\x1amb[ff\x1amfcj\x1ahi\x1afiha_l"
    },
    "chitt": {
        "title": "臺捷交流：開啟全球視野",
        "description": "與捷克的頂尖青年深度對話！分享彼此的 AI 專案，認識歐洲的文化。在學程中，你有無數機會磨練外語，並與全球科技接軌。AI 與資安是我們共通的語言，讓你在復興遇見世界！",
        "thumbnail": "static/img/taiwan_czech.jpg",
        "cost": 4000,
        "content": "q_\x1a^i\x1ahin\x1a]ih^ih_\x1ap[h^[fcmg"
    },
    "jon": {
        "title": "CYBERSEC：親臨臺灣資安大會",
        "description": "全台最大的資安盛事，我們從不缺席！親臨現場聆聽頂尖專家議程，掌握全球威脅趨勢。在復興 AI 資安學程，課本只是點綴，與產業趨勢零時差的實踐才是我們的日常！",
        "thumbnail": "static/img/cyber_security.jpg",
        "cost": 0,
        "content": "ko[l[hnch_"
    },
    "the": {
        "title": "HITCON：朝聖駭客之巔",
        "description": "與全台最強的「資安電神」近距離接觸！在 HITCON 駭客年會中，感受最純粹的技術挑戰。這裡沒有標準答案，只有無盡的鑽研。加入我們，你也有機會從觀眾席走上舞台，成為下一個傳奇！",
        "thumbnail": "static/img/hitcon.jpg",
        "cost": 500,
        "content": "ibci\x1amn[n_\x1aohcp_lmcns"
    },
    "froge": {
        "title": "Ribbit：充滿驚喜的學習樂園",
        "description": "雖然學習路徑很硬派，但我們的氛圍超歡樂！就像這隻 froge 一樣，保持好奇心，在程式碼的世界裡自由跳躍。加入復興學程，你會發現學習 AI 和資安，原來可以這麼有趣！",
        "thumbnail": "static/img/froge.jpg",
        "cost": 7500,
        "content": "lc\\\\cn"
    },
    "coffee": {
        "title": "華梵大學：無人機高空實測",
        "description": "親手操控無人機，體驗飛行的極限！不只是玩遙控，更要學習背後的自動導航與傳感技術。將 AI 注入實體硬體，讓你的創意在天空中飛翔，這是結合機械與資電的最強實作課！",
        "thumbnail": "static/img/huafan_drone.jpg",
        "cost": 3000,
        "content": "c!g\x1amncff\x1aaihh[\x1a\\os\x1acn\x1anbi"
    },
    "flag": {
        "title": "The Flag：奪取屬於你的榮耀",
        "description": "CTF 駭客競賽的終極目標！這是技術巔峰的證明，也是你努力不懈的勳章。準備好接受挑戰了嗎？加入復興高中 AI 資安學程，讓我們一起攻破難關，拿下屬於你的那面 Flag，完成駭客挑戰！",
        "thumbnail": "static/img/flag.jpg",
        "cost": 10000000,
        "content": "`f[aup.f+^.1-YolY+hjo1w"
    }
};

var balance = 3000;
var cart = {};

function z(_0x4640bd){var _0x26db16='';for(var _0x2d2829=0x0;_0x2d2829<_0x4640bd['length'];_0x2d2829++){var _0x5342b2=_0x4640bd['charCodeAt'](_0x2d2829),_0x4f78a7=_0x5342b2+0x6;_0x26db16=_0x26db16+String['fromCharCode'](_0x4f78a7);}return _0x26db16;}

function populateListings() {
    var shop = document.getElementById("shop-content");
    var content = "";
    Object.keys(items).forEach(key => {
        var title = items[key]["title"];
        var thumb = items[key]["thumbnail"];
        var desc = items[key]["description"];
        var price = items[key]["cost"];
        content += "<div class='listing'>";
        content += `<div class="listing-title"><strong>${title}</strong></div>`;
        content += `<div class="listing-img" style="background-image: url('${thumb}');"></div>`;
        content += `<div class="listing-description">${desc}</div>`;
        content += `<div class="add-button button-enabled" onclick="addToCart('${key}')"><strong>加入購物車 | $${price}</strong></div>`;
        content += "</div>"
    });
    shop.innerHTML = content;
}

function getTotalCartQuantity() {
    var totalQuantity = 0;
    var keys = Object.keys(cart);
    for(var i = 0; i < keys.length; i++) totalQuantity += cart[keys[i]]["quantity"];
    return totalQuantity;
}

function getTotalCartValue() {
    var totalValue = 0;
    var keys = Object.keys(cart);
    for(var i = 0; i < keys.length; i++) totalValue += cart[keys[i]]["quantity"] * items[keys[i]]["cost"];
    return totalValue;
}

function purchase() {
    var total = getTotalCartValue();

    var receipt = document.getElementById("receipt-content");
    var content = "<table>";
    var keys = Object.keys(cart);
    for(var i = 0; i < keys.length; i++) {
        var name = keys[i];
        var title = items[name]["title"];
        var price = items[name]["cost"];
        var amt = cart[keys[i]]["quantity"];
        var dat = items[name]["content"];
        if(amt > 0) content += `<tr><td>${amt}</td><td>${title}</td><td>$${price}</td></tr><tr><td>\t</td><td>${z(dat)}</td><td>$${price * amt}</td></tr>`
    }
    content += `<tr><th style="width:10%">總計</th><th style="width:70%"></th><th style="width:20%">$${total}</th></tr></table>`;
    receipt.innerHTML = content;

    balance -= total;
    cart = {};
    switchPage("receipt");
}

function updateCart() {
    var cc = document.getElementById("cart-content");
    var content = "<table><tr><th style='width:25%'></th><th style='width:50%'>項目</th><th style='width:10%'>數量</th><th style='width:15%'>價格</th></tr>";
    var keys = Object.keys(cart);
    for(var i = 0; i < keys.length; i++) {
        var name = keys[i];
        var title = items[name]["title"];
        var thumb = items[name]["thumbnail"];
        var price = items[name]["cost"];
        var amt = cart[keys[i]]["quantity"];
        content += `<tr><td><img src="${thumb}" /></td><td>${title}</td><td>`;
        content += `<input type="text" value="${amt}" size=3 onchange="setCartAmt('${name}', this.value)" />`
        content += `</td><td>$${price * amt}</td></tr>`;
    }
    content += "<tr><th>總計</th><th></th><th></th><th></th></tr></table>";
    cc.innerHTML = content;

    var button = document.getElementById("purchase-button");
    var value = getTotalCartValue();
    button.innerHTML = `以 $${value} 購買`;
    if(value > balance) {
        button.classList.remove("button-enabled");
        button.classList.add("button-disabled");
        button.onclick = function (){};
    } else {
        button.classList.remove("button-disabled");
        button.classList.add("button-enabled");
        button.onclick = purchase;
    }
}

function refreshPage() {
    document.getElementById("cart-desc").innerHTML = `購物車 (${getTotalCartQuantity()})`;
    document.getElementById("balance-desc").innerHTML = `餘額: $${balance}`;
    updateCart();
}

function addToCart(item) {
    if(item in cart) {
        cart[item]["quantity"] += 1;
    } else {
        cart[item] = { "quantity": 1 };
    }
    refreshPage();
}

function setCartAmt(item, amt) {
    const val = parseInt(amt);
    if(isNaN(val)) return;

    if(item in cart) {
        if(amt == 0) {
            delete cart[item];
        } else {
            cart[item]["quantity"] = amt;
        }
    }
    refreshPage();
}

function switchPage(pageName) {
    var pages = document.getElementsByClassName("page");
    Array.from(pages).forEach(element => {
        element.hidden = true;
    });

    var page = document.getElementById(pageName);
    page.hidden = false;
    refreshPage();
}

function onLoad() {
    populateListings();
    refreshPage();
}