// Code your solution in this file!
function distanceFromHqInBlocks(someValue) { 
  const hq = 42;
  const blocks = Math.abs(hq - someValue);
  return blocks;
}


  function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue)*264;
   
  }
  
  function distanceTravelledInFeet(a,b){
    return Math.abs(a - b) * 264;
  }
  
  
  function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
  }
