/*

If we enter factorialize(5), we will get 5*4*3*2*1 = 120.

var firstNum = num-1;
var stored2 = num;

for (i = 1; i < num; i+=2) {
    1*2 ->store
    2*3
    4*5

    ///

    var stored = num -i; // 4
    stored2 = num*stored


}




*/




function factorialize(num) {

    var stored2 = num;

    if (num === 0) {
        return 1;
        console.log(1);
    }

    else {
        for (i = 1; i < num; i++) {
            //   var calculation = i * i+1;
            //   var stored = calculation;
            //   var solution = stored
        
                var stored = num-i;
                stored2 = stored2*stored;
        }
            
            // return stored2;
        console.log(stored2);
    }
  
    
  }
  
  factorialize(5);
  