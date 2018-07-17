// console.log("hello iam index.js ");
define(["banner","table","topBar"],function(banner,table,topBar) {
    document.onclick = function(){
        banner()
    }
    document.onmousemove = function(){
        topBar()
    }
    table();
});