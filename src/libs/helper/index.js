/*
 * @Author: wangshan
 * @Date: 2022-02-27 04:38:30
 * @LastEditors: wangshan
 * @LastEditTime: 2022-02-27 04:40:38
 * @Description:
 */
async function loadScript(src) {
  return await new Promise((reslove, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.addEventListener(
      "load",
      () => {
        reslove();
      },
      false
    );
  });
}
// 脚本加载器
async function executePlus(tasks = []) {
  for (let url of tasks) {
    try {
      await loadScript(url);
    } catch (e) {
      console.log(e);
    }
  }
}

export { executePlus };
