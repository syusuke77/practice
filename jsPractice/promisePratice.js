// 题目 1：顺序执行 Promise
// 请实现一个函数 runTasks(tasks)，
// tasks 是一个 返回 Promise 的函数数组
// 要求 按顺序依次执行这些异步任务，并返回结果数组

//promise 版本
// function runTasks(tasks) { 
//     return tasks.reduce((prev, task) => {
//         return prev.then(async (results) => {
//             const result = await task();
//             return [...results, result];
//         });
//     }, Promise.resolve([]));
//  }

//async/await 版本
async function runTasks(tasks) {
  const results = [];
  for (let task of tasks) {
    results.push(await task());
  }
  return results;
}

 const tasks = [
  () => Promise.resolve(1),
  () => new Promise(res => setTimeout(() => res(2), 500)),
  () => Promise.resolve(3)
];

runTasks(tasks).then(results => console.log(results));



// 题目 2：限制并发请求数
// 请实现一个函数 limitRequests(urls, limit)：
// urls 是一组请求任务（用 fetch 模拟即可）
// 要求 同时最多只能有 limit 个请求 在执行
// 全部请求完成后返回结果数组

function fakeFetch(url) {
  return new Promise(res => {
    const time = Math.random() * 2000;
    setTimeout(() => res(`Response from ${url} in ${time.toFixed(0)}ms`), time);
  });
}

function limitRequests(urls, limit) {
  let i = 0; // 当前处理到第几个请求
  const results = [];
  let running = 0;

  return new Promise((resolve) => {
    function runNext() {
      // 所有请求完成
      if (i >= urls.length && running === 0) {
        resolve(results);
        return;
      }

      while (running < limit && i < urls.length) {
        const currentIndex = i;
        const url = urls[i++];
        running++;

        fakeFetch(url).then((res) => {
          results[currentIndex] = res;
        }).finally(() => {
          running--;
          runNext(); // 继续执行下一个任务
        });
      }
    }
    runNext();
  });
}

const urls = ["A", "B", "C", "D", "E"];
limitRequests(urls, 2).then(results => console.log(results));