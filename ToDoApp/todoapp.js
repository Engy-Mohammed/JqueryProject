$(document).ready(function(){
    $(".task").change(function () {
        var inputtask=$(this).val();
        console.log(inputtask);
       $("ul").append("<li>" +inputtask+ "<i class='fas fa-check'></i><i class='fas fa-trash'></i></li>");
       $(this).val('');
    });
    $('ul').on('click','.fa-trash',function(){
        $(this).parent('li').fadeOut(200);
    })
    $('ul').on('click','.fa-check',function(){
        $(this).parent('li').css('textDecoration','line-through');
    })
    $('ul').on('dblclick','.fa-check',function(){
        $(this).parent('li').css('textDecoration','none');
    })
});