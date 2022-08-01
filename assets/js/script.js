import {arrayShuffle} from './functions.js'

let cards = [
    {number:1, color:'#6f98a8'},
    {number:2, color:'#2b8ead'},
    {number:3, color:'#2f454e'},
    {number:4, color:'#2b8ead'},
    {number:5, color:'#2f454e'},
    {number:6, color:'#bfbfbf'},
    {number:7, color:'#bfbfbf'},
    {number:8, color:'#6f98a8'},
    {number:9, color:'#2f454e'}
];

/* arrayShuffle(tiles).forEach((element, index) => {
    document.getElementById('tiles').innerHTML = document.getElementById('tiles').innerHTML + '<div class="col-4"><div class="card">'+element+'</div></div>';        
});
 */

cards.sort().forEach((element, index) => {
    document.getElementById('cards').innerHTML = document.getElementById('cards').innerHTML + '<div class="col-4"><div class="card" style="background-color:'+element.color+'">'+element.number+'</div></div>';        
});