// make message input RTL
document.getElementById('message-input').dir = 'auto';

// make all directions auto

function fix_directions() {
  $('.message_content').each(function() {
    $(this).attr('dir', 'auto');
    $(this).html($.trim($(this).html()));
  });
}

function bind(){
    $(this).unbind('DOMSubtreeModified.event1');
    setTimeout(function(){
        fix_directions();
        $('body').bind('DOMSubtreeModified.event1',DOMModificationHandler);
    },1000);
}

$('body').bind('DOMSubtreeModified.event1', bind);