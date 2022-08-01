import {arraySortAsc, arrayShuffle} from './functions.js'

let tiles = [1,2,3,4,5,6,7,8,9];

/* arrayShuffle(tiles).forEach((element, index) => {
    document.getElementById('tiles').innerHTML = document.getElementById('tiles').innerHTML + '<div class="col-4"><div class="tile">'+element+'</div></div>';        
});
 */

arraySortAsc(tiles).forEach((element, index) => {
    document.getElementById('tiles').innerHTML = document.getElementById('tiles').innerHTML + '<div class="col-4"><div class="tile">'+element+'</div></div>';        
});

console.log(arrayShuffle(tiles));