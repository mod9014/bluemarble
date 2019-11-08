
function Red(){
	const HOTEL = 250000; //땅의 호텔 가격
	const BUILDING = 150000; //땅의 빌딩 가격
	const VILLA1 = 50000; //땅의 빌라 가격
	const VILLA2 = 50000; //땅의 빌라 가격
}

function Yellow(){
	const HOTEL = 500000;
	const BUILDING = 300000; 
	const VILLA1 = 100000;
	const VILLA2 = 100000;
}
function Green(){
	const HOTEL = 750000;
	const BUILDING = 450000; 
	const VILLA1 = 150000;
	const VILLA2 = 150000;
}
function Blue(){
	const HOTEL = 1000000;
	const BUILDING = 600000; 
	const VILLA1 = 200000;
	const VILLA2 = 200000;
}
function Taipei(){
	const TAIPEI = 50000; //땅 가격
	const BUILD_VALUE = new Red();
}
function Beijing(){
	const BEIJING = 80000;

}
function Manila(){
	const MANILA = 80000;

}
function Singapore(){
	const SINGAPORE = 100000;

}
function Cairo(){
	const TAIPEI = 100000;
	
}
function Istanbul(){
	const ISTANBUL = 120000;
	
}
//--------------------------------
function Athens(){
	const ATHENS = 140000;
	//const HOTEL = 500000;
	//const BUILDING = 300000; 
	//const VILLA1 = 100000;
	//const VILLA2 = 100000;
}
function Copenhagen(){
	const COPENHAGEN = 160000;

}
function Stockholm(){
	const STOCKHOLM = 160000;

}
function Bern(){
	const BERN = 180000;

}
function Berlin(){
	const BERLIN = 180000;

}
function Ottawa(){
	const OTTAWA = 200000;

}
//---------------------------
function Buenosares(){
	const BUENOSARES = 220000;
	//const HOTEL = 750000;
	//const BUILDING = 450000; 
	//const VILLA1 = 150000;
	//const VILLA2 = 150000;
}
function Saopaulo(){
	const SAOPAULO = 240000;

}
function Sydney(){
	const SYDNEY = 240000;

}
function Hawaii(){
	const HAWAII = 260000;

}
function Lisbon(){
	const LISBON = 260000;

}
function Madrid(){
	const MADRID = 280000;

}
function Tokyo(){
	const TOKYO = 300000;
	//const HOTEL = 1000000;
	//const BUILDING = 600000; 
	//const VILLA1 = 200000;
	//const VILLA2 = 200000;

}
function Paris(){
	const PARIS = 320000;

}
function Rome(){
	const ROME = 320000;

}
function London(){
	const LONDON = 350000;

}
function NewYork(){
	const NEWYORK = 350000;

}

let site = {
		1:  {
	         //시작지점
		},
	    2 : { // 타이베이
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         villaValue1 : 10000,
	         villaValue2 : 30000,
	         buildingValue : 90000,
	         hotelValue : 250000,         

	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare = 2000
	            }
	            return fare;
	         }
		} ,
		3 : {
	      //골드키
		},
		4 : { // 베이징
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         villaValue1 : 20000,
	         villaValue2 : 60000,
	         buildingValue : 180000,
	         hotelValue : 450000,         

	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare = 4000
	            }
	            return fare;
	         }
		} ,
		5 : { // 마닐라
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         villaValue1 : 20000,
	         villaValue2 : 60000,
	         buildingValue : 180000,
	         hotelValue : 450000,         

	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare=4000
	            }
	            return fare;
	         }
		},
		6 : {
	      hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         villaValue1 : 20000,
	         villaValue2 : 60000,
	         buildingValue : 180000,
	         hotelValue : 450000,         

	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare = 300000
	            }
	            return fare;
	         }
		},
		7 : { // 싱가포르
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         villaValue1 : 30000,
	         villaValue2 : 90000,
	         buildingValue : 270000,
	         hotelValue : 550000,         

	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare=6000
	            }
	            return fare;
	         }
		} ,
		8 : {
	      //골드키
		},
		9 : { // 카이로
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         villaValue1 : 30000,
	         villaValue2 : 90000,
	         buildingValue : 270000,
	         hotelValue : 550000,         

	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare = 6000
	            }
	            return fare;
	         }
		},
		10 : { // 이스탄불
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         villaValue1 : 40000,
	         villaValue2 : 100000,
	         buildingValue : 300000,
	         hotelValue : 600000,         

	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare = 8000
	            }
	            return fare;
	         }
		},
		11 : {
	   	// 무인도
		},
		12 : { // 아테네
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         hotelValue : 750000,
	         buildingValue : 450000,
	         villaValue1 : 50000,
	         villaValue2 : 150000,
	         
	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare = 10000
	            }
	            return fare;
	         }
		},
		13 : { // 코펜하겐
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         hotelValue : 900000,
	         buildingValue : 500000,
	         villaValue1 : 60000,
	         villaValue2 : 180000,
	         
	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare = 12000
	            }
	            return fare;
	         }
		},
		15 :  { // 스톡홀름
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         hotelValue : 900000,
	         buildingValue : 500000,
	         villaValue1 : 60000,
	         villaValue2 : 180000,
	         
	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare = 12000
	            }
	            return fare;
	         }
		},
		16 :  { // 콩고드 여객기
		         hotel : false,
		         building : false,
		         villa1 : false,
		         villa2 : false,
		         hotelValue : 900000,
		         buildingValue : 500000,
		         villaValue1 : 60000,
		         villaValue2 : 180000,
		         
		         getFare: function() {
		            let fare = 0;
		            let count = 0;
		            if(this.hotel){
		               fare += this.hotelValue;
		               count++;
		            }
		            if(this.building) {
		               fare += this.buildingValue;
		               count++;
		            }
		            if(this.villa1) {
		               fare += this.villaValue1;
		               count++;
		            }
		            if(this.villa2) {
		               fare += this.villaValue2;
		               count++;
		            }
		            if(count == 0) {
		               fare=300000
		            }
		            return fare;
		         }
		},
		17 : { // 베른
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         hotelValue : 950000,
	         buildingValue : 550000,
	         villaValue1 : 70000,
	         villaValue2 : 200000,
	         
	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare=14000
	            }
	            return fare;
	         }
		},
		18 : {
			// 황금열쇠
		},
		19 : { // 베를린
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         hotelValue : 950000,
	         buildingValue : 550000,
	         villaValue1 : 70000,
	         villaValue2 : 200000,
	         
	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare = 14000
	            }
	            return fare;
	         }
		   },
		20 : { // 오타와
		         hotel : false,
		         building : false,
		         villa1 : false,
		         villa2 : false,
		         hotelValue : 1000000,
		         buildingValue : 600000,
		         villaValue1 : 80000,
		         villaValue2 : 220000,
		         
		         getFare: function() {
		            let fare = 0;
		            let count = 0;
		            if(this.hotel){
		               fare += this.hotelValue;
		               count++;
		            }
		            if(this.building) {
		               fare += this.buildingValue;
		               count++;
		            }
		            if(this.villa1) {
		               fare += this.villaValue1;
		               count++;
		            }
		            if(this.villa2) {
		               fare += this.villaValue2;
		               count++;
		            }
		            if(count == 0) {
		               fare = 16000
		            }
		            return fare;
		         }
		},
		21 : {
			// 사회복지기금 접수처
		},
		22: { // 콩고
		   	hotel : false,
		   	building : false,
		   	villa1 : false,
		   	villa2 : false,
		   	hotelValue : 1050000,
		   	buildingValue : 700000,
		   	villaValue1 : 90000,
		   	villaValue2 : 250000,
		   	
		   	getFare: function() {
		   		let fare = 0;
		   		let count = 0;
		   		if(this.hotel){
		   			fare += this.hotelValue;
		   			count++;
		   		}
		   		if(this.building) {
		   			fare += this.buildingValue;
		   			count++;
		   		}
		   		if(this.villa1) {
		   			fare += this.villaValue1;
		   			count++;
		   		}
		   		if(this.villa2) {
		   			fare += this.villaValue2;
		   			count++;
		   		}
		   		if(count == 0) {
		   			fare = 20000
		   		}
		   		return fare;
		   	}
		},
		23: { 
			// 황금키
		},
		24: { // 상파울루
		   	hotel : false,
		   	building : false,
		   	villa1 : false,
		   	villa2 : false,
		   	hotelValue : 1100000,
		   	buildingValue : 750000,
		   	villaValue1 : 100000,
		   	villaValue2 : 300000,
		   	
		   	getFare: function() {
		   		let fare = 0;
		   		let count = 0;
		   		if(this.hotel){
		   			fare += this.hotelValue;
		   			count++;
		   		}
		   		if(this.building) {
		   			fare += this.buildingValue;
		   			count++;
		   		}
		   		if(this.villa1) {
		   			fare += this.villaValue1;
		   			count++;
		   		}
		   		if(this.villa2) {
		   			fare += this.villaValue2;
		   			count++;
		   		}
		   		if(count == 0) {
		   			fare = 18000
		   		}
		   		return fare;
		   	}
		},
		25: { // 시드니
		   	hotel : false,
		   	building : false,
		   	villa1 : false,
		   	villa2 : false,
		   	hotelValue : 1100000,
		   	buildingValue : 750000,
		   	villaValue1 : 100000,
		   	villaValue2 : 300000,
		   	
		   	getFare: function() {
		   		let fare = 0;
		   		let count = 0;
		   		if(this.hotel){
		   			fare += this.hotelValue;
		   			count++;
		   		}
		   		if(this.building) {
		   			fare += this.buildingValue;
		   			count++;
		   		}
		   		if(this.villa1) {
		   			fare += this.villaValue1;
		   			count++;
		   		}
		   		if(this.villa2) {
		   			fare += this.villaValue2;
		   			count++;
		   		}
		   		if(count == 0) {
		   			fare = 20000
		   		}
		   		return fare;
		   	}
		},
		26: { // 부산
		   	hotel : false,
		   	building : false,
		   	villa1 : false,
		   	villa2 : false,
		   	hotelValue : 450000,
		   	buildingValue : 180000,
		   	villaValue1 : 20000,
		   	villaValue2 : 40000,
		   	
		   	getFare: function() {
		   		let fare = 0;
		   		let count = 0;
		   		if(this.hotel){
		   			fare += this.hotelValue;
		   			count++;
		   		}
		   		if(this.building) {
		   			fare += this.buildingValue;
		   			count++;
		   		}
		   		if(this.villa1) {
		   			fare += this.villaValue1;
		   			count++;
		   		}
		   		if(this.villa2) {
		   			fare += this.villaValue2;
		   			count++;
		   		}
		   		if(count == 0) {
		   			fare = 600000
		   		}
		   		return fare;
		   	}
		},
		27: { // 하와이
		   	hotel : false,
		   	building : false,
		   	villa1 : false,
		   	villa2 : false,
		   	hotelValue : 1150000,
		   	buildingValue : 800000,
		   	villaValue1 : 110000,
		   	villaValue2 : 330000,
		   	
		   	getFare: function() {
		   		let fare = 0;
		   		let count = 0;
		   		if(this.hotel){
		   			fare += this.hotelValue;
		   			count++;
		   		}
		   		if(this.building) {
		   			fare += this.buildingValue;
		   			count++;
		   		}
		   		if(this.villa1) {
		   			fare += this.villaValue1;
		   			count++;
		   		}
		   		if(this.villa2) {
		   			fare += this.villaValue2;
		   			count++;
		   		}
		   		if(count == 0) {
		   			fare = 22000
		   		}
		   		return fare;
		   	}
		},
		28: { // 리스본
		   	hotel : false,
		   	building : false,
		   	villa1 : false,
		   	villa2 : false,
		   	hotelValue : 1150000,
		   	buildingValue : 800000,
		   	villaValue1 : 110000,
		   	villaValue2 : 330000,
		   	
		   	getFare: function() {
		   		let fare = 0;
		   		let count = 0;
		   		if(this.hotel){
		   			fare += this.hotelValue;
		   			count++;
		   		}
		   		if(this.building) {
		   			fare += this.buildingValue;
		   			count++;
		   		}
		   		if(this.villa1) {
		   			fare += this.villaValue1;
		   			count++;
		   		}
		   		if(this.villa2) {
		   			fare += this.villaValue2;
		   			count++;
		   		}
		   		if(count == 0) {
		   			fare=4000
		   		}
		   		return fare;
		   	}
		},
		29: { // 퀸 엘리자베스호
		   	hotel : false,
		   	building : false,
		   	villa1 : false,
		   	villa2 : false,
		   	hotelValue : 450000,
		   	buildingValue : 180000,
		   	villaValue1 : 20000,
		   	villaValue2 : 40000,
		   	
		   	getFare: function() {
		   		let fare = 0;
		   		let count = 0;
		   		if(this.hotel){
		   			fare += this.hotelValue;
		   			count++;
		   		}
		   		if(this.building) {
		   			fare += this.buildingValue;
		   			count++;
		   		}
		   		if(this.villa1) {
		   			fare += this.villaValue1;
		   			count++;
		   		}
		   		if(this.villa2) {
		   			fare += this.villaValue2;
		   			count++;
		   		}
		   		if(count == 0) {
		   			fare = 250000
		   		}
		   		return fare;
		   	}
		},
		30: { // 마드리드
		   	hotel : false,
		   	building : false,
		   	villa1 : false,
		   	villa2 : false,
		   	hotelValue : 1200000,
		   	buildingValue : 850000,
		   	villaValue1 : 120000,
		   	villaValue2 : 360000,
		   	
		   	getFare: function() {
		   		let fare = 0;
		   		let count = 0;
		   		if(this.hotel){
		   			fare += this.hotelValue;
		   			count++;
		   		}
		   		if(this.building) {
		   			fare += this.buildingValue;
		   			count++;
		   		}
		   		if(this.villa1) {
		   			fare += this.villaValue1;
		   			count++;
		   		}
		   		if(this.villa2) {
		   			fare += this.villaValue2;
		   			count++;
		   		}
		   		if(count == 0) {
		   			fare = 24000
		   		}
		   		return fare;
		   	}
		},
		31 : {
			// 우주비행
		},
		32 :  { //도쿄
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         hotelValue : 1270000,
	         buildingValue : 900000,
	         villaValue1 : 130000,
	         villaValue2 : 390000,
	         
	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare = 26000
	            }
	            return fare;
	         }
	   },
	   33 :  { // 컬럼비아호
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         hotelValue : 1270000,
	         buildingValue : 900000,
	         villaValue1 : 130000,
	         villaValue2 : 390000,
	         
	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare=26000
	            }
	            return fare;
	         }
	   },
	   34 :  { //파리
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         hotelValue : 1400000,
	         buildingValue : 1000000,
	         villaValue1 : 150000,
	         villaValue2 : 450000,
	         
	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare = 28000
	            }
	            return fare;
	         }
	   },
	   35 :  { //로마
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         hotelValue : 1400000,
	         buildingValue : 1000000,
	         villaValue1 : 150000,
	         villaValue2 : 450000,
	         
	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare = 28000
	            }
	            return fare;
	         }
	   },
	   36 :  { 
	        //황금키 
	   },
	   37:  { //런던
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         hotelValue : 1500000,
	         buildingValue : 1100000,
	         villaValue1 : 170000,
	         villaValue2 : 500000,
	         
	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare = 35000
	            }
	            return fare;
	         }
	   },
	   38 : { //뉴욕
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         hotelValue : 1500000,
	         buildingValue : 1100000,
	         villaValue1 : 170000,
	         villaValue2 : 500000,
	         
	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare = 35000
	            }
	            return fare;
	         }
	   },
	   39 : {
		// 사회복지금 수령
	   },
	   40: { //서울 fare 만 바꿈
	         hotel : false,
	         building : false,
	         villa1 : false,
	         villa2 : false,
	         hotelValue : 1500000,
	         buildingValue : 1100000,
	         villaValue1 : 170000,
	         villaValue2 : 500000,
	         
	         getFare: function() {
	            let fare = 0;
	            let count = 0;
	            if(this.hotel){
	               fare += this.hotelValue;
	               count++;
	            }
	            if(this.building) {
	               fare += this.buildingValue;
	               count++;
	            }
	            if(this.villa1) {
	               fare += this.villaValue1;
	               count++;
	            }
	            if(this.villa2) {
	               fare += this.villaValue2;
	               count++;
	            }
	            if(count == 0) {
	               fare = 2000000
	            }
	            return fare;
	         }
	   }
}