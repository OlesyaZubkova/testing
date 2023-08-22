function getArrayParams(...arr) {
  let max = 0;
  let min = 0;
  let sum = 0;
  let avg;

  // 1

  /*

  min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    (arr[i] > max) ? max = arr[i] : 'mistake';
    (arr[i] < min) ? min = arr[i] : 'mistake';
    sum +=arr[i];
    avg = +(sum / arr.length).toFixed(2);
  }

  */

  // 2

  min = Math.min.apply(null, arr);
  max = Math.max.apply(null, arr);
  avg = +(arr.reduce((sum, current) => sum + current, 0) / arr.length).toFixed(2);

  return (
    {
      min,
      max,
      avg
    }
  )
}

function summElementsWorker(...arr) {
  return +(arr.reduce((sum, current) => sum + current, 0));
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max.apply(null, arr);
  let min = Math.min.apply(null, arr);  
  let result = max - min;
  return arr.length === 0 ? 0 : result;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement +=arr[i];
      // sumEvenElement = (arr.reduce((sum, current) => sum + current, 0));
    } else if (arr[i] % 2 !== 0) {
      sumOddElement +=arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        countEvenElement++;
        sumEvenElement+=arr[i];
      }
    }
    return sumEvenElement / countEvenElement;
  }
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]); // -Infinity
  
  for (let i = 0; i < arrOfArr.length; i++) {
    const arr = func(...arrOfArr[i]);
    arr > maxWorkerResult ? maxWorkerResult = arr : 0;
  }
  return maxWorkerResult;
}
