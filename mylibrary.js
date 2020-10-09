function isTouching(object1, object2){
    if(object1.x - object2.x < object1.width/2 + object2.width/2 
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object1.height/2 + object2.height/2
      && object2.y - object1.y < object1.height/2 + object2.height/2){
        return true;
    }else{
      return false;
    }  
  }
  function bounceOff(bounce1,bounce2){
    if(bounce1.x - bounce2.x < bounce1.width/2 + bounce2.width/2
      && bounce2.x - bounce1.x < bounce1.width/2 + bounce2.width/2){
        bounce1.velocityX =  bounce1.velocityX * (-1);
        bounce2.velocityX = bounce2.velocityX * (-1);
      }
  
      if(bounce1.y - bounce2.y < bounce1.height/2 + bounce2.height/2
        && bounce2.y - bounce1.y < bounce1.height/2 + bounce2.height/2){
        bounce1.velocityY = bounce1.velocityY * (-1);
        bounce2.velocityY = bounce2.velocityY * (-1);
      }
  }