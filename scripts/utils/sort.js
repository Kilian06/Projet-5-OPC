import{getMediaPhotographers} from '../pages/photographer.js';



function sortList(getMediaPhotographers) {
console.log(getMediaPhotographers)
var sortType = document.getElementById("mediasort").value;
console.log(sortType)
function sortLikes(a, b){
    if (a[sortType] < b[sortType]){
        return -1;
    }
    if (a[sortType] > b[sortType]){
        return 1;
}
return 0;
}
  getMediaPhotographers.sort(sortLikes);
  return 
}

  export {sortList};
