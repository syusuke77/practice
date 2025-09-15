//解构赋值（数组 & 对象）
const arr = [1, 2, 3, 4];
// 预期输出: { first: 1, last: 4 }
function getFirstAndLast([first, ...rest]) {
 return { first, last: rest.pop() };;
}

console.log(getFirstAndLast(arr));

//对象参数解构
const user = {
  name: "Alice",
  age: 25,
  city: "Beijing"
};
// 预期输出: "Alice is 25 years old and lives in Beijing."
function formatUser({ name, age, city }) {
  return `${name} is ${age} years old and lives in ${city}.`;
}
console.log(formatUser(user));


//Promise 简单封装
// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(`Done after ${ms} ms`);
//         }, ms);
//     })
// }

// delay(1000).then(msg => console.log(msg));
// 1 秒后输出: "Done after 1000 ms"


// async/await
function delay(ms) {
    return new Promise((resolve) => setTimeout(() => {
        resolve(`Done after ${ms} ms`);
    }, timeout))
}

async function run() {
 console. result = await delay(1000);
 console.log(result);
}

run();