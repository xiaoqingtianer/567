define(function() {
    return function Pop(content){
        if(Pop.elem == undefined){
            Pop.elem = $("<div class='wrap'><div class='content'>"+content+"</div></div>");
            $("body").append(Pop.elem);
            $("body").on("click",".wrap",function(){
                $(this).hide();
            })
        }else{
            return Pop.elem.toggle();
        }
    }
});