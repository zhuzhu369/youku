var header_menu = document.getElementById("header_menu");
var menu_divs = header_menu.getElementsByTagName("div");
var header = document.getElementById("header");
var banner_img = document.getElementById("banner_img");
var num = 0;
var timer = null;


for (var i = 0; i < menu_divs.length; i++) {
    
    var menu_div = menu_divs[i];
    menu_div.index = i;
    menu_div.onmouseover = function () {
        for (var j = 0; j < menu_divs.length; j++) {
            menu_divs[j].className = "";
        }
        this.className = "menu-active";
        banner_img.style.background = "url('." + this.index + ".jpg') no-repeat center center"; 
    };
}


var text_input = document.getElementById("text_input");
var sousuo_drop = document.getElementById("sousuo_drop");

text_input.addEventListener("focus", function () {
    sousuo_drop.style.display = "block";
});

document.onclick = function (event) {
    var event = event || window.event;
    var targetId = event.target ? event.target.id : event.srcElement.id;
    if (targetId != "sousuo_drop" && targetId != "text_input")
    {
        sousuo_drop.style.display = "none";
    }
};

var num = 0;
var result_arr = ["1","22","333","4444","55555","666666"];
for (var key in result_arr) {
    var that  = key;
    var xuhao = parseInt(key) + 1;
    num = key < 8 ? key = "0" + xuhao : xuhao;
    var data_in = "<span>" + num + "</span><p>" + result_arr[that] + "</p>";
    var div = document.createElement("div");
    div.innerHTML = data_in;
    sousuo_drop.appendChild(div);
}

var spans = sousuo_drop.getElementsByTagName("span");
for (var i = 0; i < 3; i++) {
    spans[i].className = "hot-word";
}
var divs = sousuo_drop.getElementsByTagName("div");
for (var i = 0; i < divs.length; i++) {
    var div = divs[i];
    div.addEventListener("mouseover", function() {
        for (var j = 0; j < divs.length; j++) {
            divs[j].className = "";
        }
        this.className = "div-hover";
    })
}