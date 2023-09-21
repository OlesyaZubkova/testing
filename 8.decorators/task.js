//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];
    return function wrapper(...args) {
      const hash = md5(args);
  
      let objectInCache = cache.find((item) => item.hash === hash);
      if (objectInCache) {
        console.log("Из кэша: " + objectInCache.result);
        return "Из кэша: " + objectInCache.result;
      } else {
        let result = func.call(this, ...args);
        cache.push({hash, result});
        if (cache.length > 5) {
          cache.shift();
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result
      }
    }
  }

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
   wrapper.count = 0;
   wrapper.allCount = 0;
   
   function wrapper(...args) {
    wrapper.allCount++;
    if (timeoutId === null) {
      func.apply(this, args);
      wrapper.count++;
    }  
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
      wrapper.count++;
      console.timeEnd("time"); // (2)
    }, delay);
  }
  return wrapper;
}
