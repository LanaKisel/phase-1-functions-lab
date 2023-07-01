// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    if (blocks<=42) {
        return 42-blocks;
    } else if (blocks>42) {
        return blocks-42;
    }
}

function distanceFromHqInFeet (blocks) {
    return distanceFromHqInBlocks(blocks)*264;
  }
function distanceTravelledInFeet (start, destination) {
    const distance=(destination-start)*264
      return Math.abs(distance)}
    
function calculatesFarePrice(start, destination) { 
    const distance =Math.abs((destination-start)*264)
    if (distance<=400) {
        return 0
    } else if (distance>400 && distance<=2000) {
        return Math.abs((distance-400)*2)/100 
    } else if (distance>2000 && distance<=2500) {
        return 25
    } else if (distance>2500){
        return "cannot travel that far"
    }

}