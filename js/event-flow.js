function showElement() {
    alert(this.innerHTML);
}

var el = document.getElementById('list');
    el.addEventListener('click' , showElement , false);
var el = document.getElementById('item');
    el.addEventListener('click' , showElement , false);
var el = document.getElementById('link');
    el.addEventListener('click' , showElement , false);
var el = document.getElementById('list2');
    el.addEventListener('click' , showElement , true);
var el = document.getElementById('item2');
    el.addEventListener('click' , showElement , true);
var el = document.getElementById('link2');
    el.addEventListener('click' , showElement , true);
