function buy_popup(token, site){//증서구입

    var $el = $("#buyLandLayer");        //레이어의 id를 $el 변수에 저장
    //var isDim = $el.prev().hasClass('dimBg');   //dimmed 레이어를 감지하기 위한 boolean 변수

    //isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();
    $('#dim-layer-buy').fadeIn();
    var $elWidth = $el.outerWidth(),//팝업의 넓이
        $elHeight = $el.outerHeight(),//팝업의 높이
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
    
    $el.find('#title').html(site.nameKr);
    $el.find('#value').html(site.fee/10000);
    $el.find('#buy').click(function(){
        //isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
    	$('#dim-layer-buy').fadeOut();
    	if(player[token].money>=site.fee){
        	subMoney(token,site.fee);
        	site.owner = token;
    	}
    	return false;
    	//-------------------
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
function build_popup(title){//건물 구입

    var $el = $("#buildLayer");        //레이어의 id를 $el 변수에 저장
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

function Loan_popup(){//대출

    var $el = $("#loanLayer");        //레이어의 id를 $el 변수에 저장
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
		$('#dim-layer-select').fadeOut();
    	
        return true;
    });
    $el.find('#cancel').click(function(){
    	$('#dim-layer-loan').fadeOut();
        return false;
    });

}

function Info_popup(title){//땅 클릭

    var $el = $("#informationLayer");        //레이어의 id를 $el 변수에 저장
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
function Gold_popup(){//황금카드

    var $el = $("#goldLayer");        //레이어의 id를 $el 변수에 저장
   
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
    $el.find("#cardImg").attr("src","/bluemarble/images/GoldKey/"+"fix.jpg");
    $('.dim-layer').click(function(){
    	
    	$('#dim-layer-gold').fadeOut();
    	drowKey();
        return true;
    });

}

function Sale_popup(){//매각

    var $el = $("#saleLayer");        //레이어의 id를 $el 변수에 저장
   
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

		$('#dim-layer-select').fadeOut();
        return true;
    });

}

function SelectLoanSale_popup(){//매각

    var $el = $("#saleLayer");        //레이어의 id를 $el 변수에 저장
   
    $('#dim-layer-select').fadeIn();
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
	$el.find('#loan').click(function() {
		Loan_popup();

		return true;
	});
	$el.find('#sale').click(function() {
		Sale_popup();

		return true;
	});

}