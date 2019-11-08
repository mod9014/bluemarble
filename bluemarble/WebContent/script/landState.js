let state = {
		/* owner info
		 * 0 건물 지을 수 있는 부지
		 * -1 관광지
		 * -2 황금열쇠
		 * -3 무인도
		 * -4 사회복지기금 센터
		 * -5 우주여행
		 * -6 로또
		 * -7 출발선
		*/
		0 : {
			owner : -7,
			name: "StartLine",
			nameKr : "출발선"
		},	
		1 : {
			owner : 0,
			name : "Taipei",
			nameKr : "타이페이",
			fee : 50000,
			imageUri : "taipei.jpg"
		},
		2 : { // 황금열쇠
			owner : -2,
			name: "GoldKey",
			nameKr : "황금열쇠",
			
		},
		3 : {
			owner : 0,
			name: "Beijing",
			nameKr : "베이징",
			fee : 80000,
			imageUri : "beijing.jpg"
		},
		4 : {
			owner : 0,
			name: "Manila",
			nameKr : "마닐라",
			fee : 80000,
			imageUri : "manila.jpg"
		},
		5 : { // 관광지
			owner : -1,
			name: "Jeju",
			nameKr : "제주",
			fee : 200000,
			imageUri : "jeju.jpg"
		},
		6 : {
			owner : 0,
			name: "Singapore",
			nameKr : "싱가포르",
			fee : 100000,
			imageUri : "singapore.jpg"
		},
		7 : { // 황금열쇠
			owner : -2,
			name: "GoldKey",
			nameKr : "황금 열쇠"
		},
		8 : {
			owner : 0,
			name: "Cairo",
			nameKr : "카이로",
			fee : 100000,
			imageUri : "cairo.jpg"
		},
		9 : {
			owner : 0,
			name: "Istanbul",
			nameKr : "이스탄불",
			fee : 120000,
			imageUri : "istanbul.jpg"
		},
		10 : { // 무인도
			owner : -3,
			name: "muindo",
			nameKr : "무인도"
		},
		11 : {
			owner : 0,
			name: "Athenes",
			nameKr : "아테네",
			fee : 140000,
			imageUri : "athens.jpg"
		},
		12 : { // 황금열쇠
			owner : -2,
			name: "GoldKey",
			nameKr : "황금 열쇠"
		},
		13 : { 
			owner : 0,
			name: "Copenhagen",
			nameKr : "코펜하겐",
			fee : 160000,
			imageUri : "copenhagen.jpg"
		},
		14 : {
			owner : 0,
			name: "Stockholm",
			nameKr : "스톡홀름",
			fee : 160000,
			imageUri : "stockholm.jpg"
		},
		15 : { // 관광지
			owner : -1,
			name: "Concord",
			nameKr : "콩코드 여객기",
			fee : 200000,
			imageUri : "concord.jpg"
		},
		16 : {
			owner : 0,
			name: "Bern",
			nameKr : "베른",
			fee : 180000,
			imageUri : "bern.jpg"
		},
		17 : {
			owner : -2,
			name: "GoldKey",
			nameKr : "황금 열쇠"
		},
		18 : {
			owner : 0,
			name: "Berlin",
			nameKr : "베를린",
			fee : 180000,
			imageUri : "berlin.jpg"
		},
		19 : {
			owner : 0,
			name: "Ottawa",
			nameKr : "오타와",
			fee : 200000,
			imageUri : "ottawa.jpg"
		},
		20 : {
			owner : -4,
			name: "donation",
			nameKr : "사회복지기금센터"
		},
		21 : {
			owner : 0,
			name: "Congo",
			nameKr : "콩고",
			fee : 220000,
			imageUri : "buenosaires.jpg"
		},
		22 : {
			owner : -2,
			name: "GoldKey",
			nameKr : "황금 열쇠"
		},
		23 : {
			owner : 0,
			name: "SaoPaulo",
			nameKr : "상파울로",
			fee : 240000,
			imageUri : "saopaulo.jpg"
		},
		24 : {
			owner : 0,
			name: "Sydney",
			nameKr : "시드니",
			fee : 240000,
			imageUri : "sydney.jpg"
		},
		25 : { // 관광지
			owner : -1,
			name: "Busan",
			nameKr : "부산",
			fee : 500000,
			imageUri : "busan.jpg"
		},
		26 : {
			owner : 0,
			name: "Hawaii",
			nameKr : "하와이",
			fee : 260000,
			imageUri : "hawaii.jpg"
		},
		27 : {
			owner : 0,
			name: "Lisbon",
			nameKr : "리스본",
			fee : 260000,
			imageUri : "lisbon.jpg"
		},
		28 : { // 관광지
			owner : -1,
			name: "QueenShip",
			nameKr : "퀸엘리자베스호",
			fee : 300000,
			imageUri : "queen.jpg"
		},
		29 : {
			owner : 0,
			name: "Madrid",
			nameKr : "마드리드",
			fee : 280000,
			imageUri : "madrid.jpg"
		},
		30 : { // 우주여행
			owner : -5,
			name: "SpaceStation",
			nameKr : "우주 여행"
		},
		31 : {
			owner : 0,
			name: "Tokyo",
			nameKr : "도쿄",
			fee : 300000,
			imageUri : "tokyo.jpg"
		},
		32 : { // 관광지
			owner : -1,
			name: "SpaceShip",
			nameKr : "콜럼비아호",
			fee : 450000,
			imageUri : "columbia.jpg"
		},
		33 : {
			owner : 0,
			name: "Paris",
			nameKr : "파리",
			fee : 320000,
			imageUri : "pari.jpg"
		},
		34 : {
			owner : 0,
			name: "Rome",
			nameKr : "로마",
			fee : 320000,
			imageUri : "roma.jpg"
		},
		35 : {
			owner : -2,
			name: "GoldKey",
			nameKr : "황금 열쇠"
		},
		36 : {
			owner : 0,
			name: "London",
			nameKr : "런던",
			fee : 350000,
			imageUri : "london.jpg"
		},
		37 : {
			owner : 0,
			name: "NewYork",
			nameKr : "뉴욕",
			fee : 350000,
			imageUri : "newyork.jpg"
		},
		38 : {
			owner : -6,
			name: "Lotto",
			nameKr : "사회복지기금"
		},
		39 : {
			owner : -1,
			name: "Seoul",
			nameKr : "서울",
			fee : 1000000,
			imageUri : "seoul.jpg"
		}
		
	}