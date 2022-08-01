export let arrayShuffle = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)); /*Getting random index*/
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  
  /* export let arraySortAsc = (array) => {
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
      }
    }
    return array;
  }; */

  
  