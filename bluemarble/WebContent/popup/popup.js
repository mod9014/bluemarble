function buy_popup(el, title, value){

    var $el = $(el);        //레이어의 id를 $el 변수에 저장
    //var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

    //isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();
    $('#dim-layer1').fadeIn();
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
    	$('#dim-layer1').fadeOut();
        return true;
    });
    $el.find('#cancel').click(function(){
        //isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
    	$('#dim-layer1').fadeOut();
        return false;
    });
   /*
    $('.layer .dimBg').click(function(){
        $('.dim-layer').fadeOut();
        return false;
    });
    */
}
function build_popup(el){

    var $el = $(el);        //레이어의 id를 $el 변수에 저장
    //var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

    //isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();
    $('#dim-layer2').fadeIn();
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
    
    let $content = $('.pop-conts');
    
    $el.find('#buy').click(function(){
        //isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
    	//구매 함수 호출
    	$('#dim-layer2').fadeOut();
    	
        return true;
    });
    $el.find('#cancel').click(function(){
        //isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
    	$('#dim-layer2').fadeOut();
        return false;
    });

}

function Loan_popup(el){

    var $el = $(el);        //레이어의 id를 $el 변수에 저장
    //var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

    //isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();
    $('#dim-layer2').fadeIn();
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
    
    let $content = $('.pop-conts');
    $content.empty();
    $content.append("<input type='checkbox' value='hotel'>호텔");
    $content.append("<input type='checkbox' value='building'>빌딩");
    $content.append("<input type='checkbox' value='villa1'>별장");
    $content.append("<input type='checkbox' value='villa2'>별장2채");
    
    $el.find('#buy').click(function(){
        //isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
    	//구매 함수 호출
    	$('#dim-layer2').fadeOut();
    	
        return true;
    });
    $el.find('#cancel').click(function(){
        //isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
    	$('#dim-layer2').fadeOut();
        return false;
    });

}