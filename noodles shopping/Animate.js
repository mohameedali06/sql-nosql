
$(function(){
    $('.inpfield').focus(function(){
        $(this).css({background:'khaki'});
    
    });
    
    $('.inpfield').focus(function(){
        let currentelement=$(this);
        if(currentelement.attr('type')=='text')
        $(currentelement).css({border: '4px solid lightgrey'});
    
        if(currentelement.attr('type')=='password')
        $(currentelement).css({border:'4px solid grey'});
    
    });
    });