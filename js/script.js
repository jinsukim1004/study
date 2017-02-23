
    var tabLinks = new Array();
    var contentDivs = new Array();
    
 
    
    
    
    // 실시간검색어
    $(function() {                               
    var count = $('#rank-list li').length;
    var height = $('#rank-list li').height();

    function step(index) {
        $('#rank-list ol').delay(2000).animate({
            top: -height * index,
        }, 500, function() {
            step((index + 1) % count);
        });
    }

    step(1);
    });
    // 실시간검색어
    
    
    
    
$('.tab2 a').click(function(){
$(this).tab('show');
})

// Select tab by name
$('.tab2 a[href="#home"]').tab('show')

// Select first tab
$('.tab2 a:first').tab('show') 

// Select last tab
$('.tab2 a:last').tab('show') 

// Select fourth tab (zero-based)
$('.tab2 li:eq(3) a').tab('show')