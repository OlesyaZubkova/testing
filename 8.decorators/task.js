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
  
}
