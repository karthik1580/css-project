function onSelectContainer(e) {
    // var _div = document.createElement('div');
    // _div.innerHTML ='<div class="customeCheck"><div class="custome--checkbox"><input type="checkbox" id="checkbox" /><label for="checkbox"></label></div></div>';
    // document.getElementById("test01").appendChild(_div);
    
    if(e.classList.length && e.classList[1] === 'isContainerChecked'){
        e.classList.remove("isContainerChecked");
        e.children[0].children[0].children[0].checked = false
    }else{
        e.classList.add("isContainerChecked");
        e.children[0].children[0].children[0].checked = true                
    }
}        

var lastScroll = 0;
var getDominOneDiv = document.getElementById("domin1");
var getDomin2Div = document.getElementById("domin2");
var getDomin3Div = document.getElementById("domin3");
$(window).scroll(function() { 
    
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0 && lastScroll <= currentScroll){
        lastScroll = currentScroll;
        myFixedFunction();
    }else{
        lastScroll = currentScroll;
        getDominOneDiv.classList.remove("fixedHeader");
        getDomin2Div.classList.remove("fixedHeader");
        getDomin3Div.classList.remove("fixedHeader");                
    }
    
});

function myFixedFunction() {
    var currentWindowsScroll = $(window).scrollTop();
    var headerOneOffset = getDominOneDiv.offsetTop;
    var headerSecondOffset = getDomin2Div.offsetTop;
    var headerThirdOffset = getDomin3Div.offsetTop;
 
    
    if (currentWindowsScroll >= headerOneOffset) {
        getDominOneDiv.classList.add("fixedHeader");
        getDomin2Div.classList.remove("fixedHeader");
        getDomin3Div.classList.remove("fixedHeader");
    }
    if ( currentWindowsScroll >= headerSecondOffset ) {
        getDominOneDiv.classList.remove("fixedHeader");
        getDomin2Div.classList.add("fixedHeader");
        getDomin3Div.classList.remove("fixedHeader");
    }
    if ( currentWindowsScroll >= headerThirdOffset ) {
        getDominOneDiv.classList.remove("fixedHeader");
        getDomin2Div.classList.remove("fixedHeader");
        getDomin3Div.classList.add("fixedHeader");
    } 
}