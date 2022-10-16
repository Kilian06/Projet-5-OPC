import{getMediaPhotographers} from '../pages/photographer.js';



function sortList(getMediaPhotographers) {
var sortType = document.getElementById("mediasort").value;
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
