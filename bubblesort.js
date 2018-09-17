function bubbleSort(array) {
  let totalLoops = array.length - 1;
  while (totalLoops > 0) {
    for (let i = 0; i < totalLoops; ++i) {
      let currIdx = array[i];
      let nextIdx = array[i + 1];

      if (currIdx > nextIdx) {

        array[i] = nextIdx;
        array[i + 1] = currIdx;
      }

    }
    --totalLoops;
  }
  return array
}
