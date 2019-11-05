function buy_popup(el, title, value){//증서구입

    var $el = $(el);        //레이어의 id를 $el 변수에 저장
    //var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

    //isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();
    $('#dim-layer-buy').fadeIn();
    var $elWidth = ~~($el.outerWidth()),//팝업의 넓이
        $elHeight = ~~($el.outerHeight()),//팝업의 높이
        docWidth = $(document).width(),//브라우저 창 넓이
        docHeight = $(document).height(); //브라우저 창 높이

    // 화면의 중앙에 레이어를 띄운다.
    if ($elHeight < docHeight || $elWidth < docWidth) {
        $el.css({
            marginTop: -$elHeight /2,
            marginLeft: -$elWidth/2
        })
    } else {//팝업창이 화면보다 클경우 마진을 지움
        $el.css({top: 0, left: 0});
    }
    
    $el.find('#title').html(title);
    $el.find('#value').html(value);
    
    $el.find('#buy').click(function(){
        //isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
    	//구매 함수 호출
    	$('#dim-layer-buy').fadeOut();
        return true;
    });
    $el.find('#cancel').click(function(){
        //isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
    	$('#dim-layer-buy').fadeOut();
        return false;
    });
   /*
    $('.layer .dimBg').click(function(){
        $('.dim-layer').fadeOut();
        return false;
    });
    */
}
function build_popup(el, title){//건물 구입

    var $el = $(el);        //레이어의 id를 $el 변수에 저장
    $('#dim-layer-build').fadeIn();
    var $elWidth = ~~($el.outerWidth()),//팝업의 넓이
        $elHeight = ~~($el.outerHeight()),//팝업의 높이
        docWidth = $(document).width(),//브라우저 창 넓이
        docHeight = $(document).height(); //브라우저 창 높이

    // 화면의 중앙에 레이어를 띄운다.
    if ($elHeight < docHeight || $elWidth < docWidth) {
        $el.css({
            marginTop: -$elHeight /2,
            marginLeft: -$elWidth/2
        })
    } else {//팝업창이 화면보다 클경우 마진을 지움
        $el.css({top: 0, left: 0});
    }
    
    $el.find("#title").html(title);
    
    $el.find('#buy').click(function(){
    	//구매 함수 호출
    	$('#dim-layer-build').fadeOut();
    	
        return true;
    });
    $el.find('#cancel').click(function(){
    	$('#dim-layer-build').fadeOut();
        return false;
    });

}

function Loan_popup(el){//대출

    var $el = $(el);        //레이어의 id를 $el 변수에 저장
    $('#dim-layer-loan').fadeIn();
    var $elWidth = ~~($el.outerWidth()),//팝업의 넓이
        $elHeight = ~~($el.outerHeight()),//팝업의 높이
        docWidth = $(document).width(),//브라우저 창 넓이
        docHeight = $(document).height(); //브라우저 창 높이

    // 화면의 중앙에 레이어를 띄운다.
    if ($elHeight < docHeight || $elWidth < docWidth) {
        $el.css({
            marginTop: -$elHeight /2,
            marginLeft: -$elWidth/2
        })
    } else {//팝업창이 화면보다 클경우 마진을 지움
        $el.css({top: 0, left: 0});
    }
    
    $el.find('#buy').click(function(){
        
    	$('#dim-layer-loan').fadeOut();
    	
        return true;
    });
    $el.find('#cancel').click(function(){
    	$('#dim-layer-loan').fadeOut();
        return false;
    });

}

function Info_popup(el, title){//땅 클릭

    var $el = $(el);        //레이어의 id를 $el 변수에 저장
    $('#dim-layer-Info').fadeIn();
    var $elWidth = ~~($el.outerWidth()),//팝업의 넓이
        $elHeight = ~~($el.outerHeight()),//팝업의 높이
        docWidth = $(document).width(),//브라우저 창 넓이
        docHeight = $(document).height(); //브라우저 창 높이

    // 화면의 중앙에 레이어를 띄운다.
    if ($elHeight < docHeight || $elWidth < docWidth) {
        $el.css({
            marginTop: -$elHeight /2,
            marginLeft: -$elWidth/2
        })
    } else {//팝업창이 화면보다 클경우 마진을 지움
        $el.css({top: 0, left: 0});
    }

    $el.find("#title").html(title);
    $('.dim-layer').click(function(){
        
    	$('#dim-layer-Info').fadeOut();
    	
        return true;
    });

}
function Gold_popup(el){//황금카드

    var $el = $(el);        //레이어의 id를 $el 변수에 저장
   
    $('#dim-layer-gold').fadeIn();
    var $elWidth = ~~($el.outerWidth()),//팝업의 넓이
        $elHeight = ~~($el.outerHeight()),//팝업의 높이
        docWidth = $(document).width(),//브라우저 창 넓이
        docHeight = $(document).height(); //브라우저 창 높이

    // 화면의 중앙에 레이어를 띄운다.
    if ($elHeight < docHeight || $elWidth < docWidth) {
        $el.css({
            marginTop: -$elHeight /2,
            marginLeft: -$elWidth/2
        })
    } else {//팝업창이 화면보다 클경우 마진을 지움
        $el.css({top: 0, left: 0});
    }
    $('.dim-layer').click(function(){
    	
    	$('#dim-layer-gold').fadeOut();
    	
        return true;
    });

}

function Sale_popup(el){//매각

    var $el = $(el);        //레이어의 id를 $el 변수에 저장
   
    $('#dim-layer-sale').fadeIn();
    var $elWidth = ~~($el.outerWidth()),//팝업의 넓이
        $elHeight = ~~($el.outerHeight()),//팝업의 높이
        docWidth = $(document).width(),//브라우저 창 넓이
        docHeight = $(document).height(); //브라우저 창 높이

    // 화면의 중앙에 레이어를 띄운다.
    if ($elHeight < docHeight || $elWidth < docWidth) {
        $el.css({
            marginTop: -$elHeight /2,
            marginLeft: -$elWidth/2
        })
    } else {//팝업창이 화면보다 클경우 마진을 지움
        $el.css({top: 0, left: 0});
    }
    $el.find('#buy').click(function(){
        
    	$('#dim-layer-loan').fadeOut();
    	
        return true;
    });

}