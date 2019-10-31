var taipei = {
	owner : 0,
   	hotel : false,
   	building : false,
   	villa1 : false,
   	villa2 : false,
   	hotelValue : 450000,
   	buildingValue : 180000,
   	villaValue1 : 20000,
   	villaValue2 : 40000,
   	getFare: function(){
   		let fare = 0;
   		let count = 0;
   		if(this.hotel){
   			fare += this.hotelValue;
   			count++;
   		}
   		if(this.building){
   			fare += this.buildingValue;
   			count++;
   		}
   		if(this.villa1){
   			fare += this.villaValue1;
   			count++;
   		}
   		if(this.villa2){
   			fare += this.villaValue2;
   			count++;
   		}
   		if(count==0){
   			fare=4000
   		}
   		return fare;
   	}
}