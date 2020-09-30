// export function getQueryVariable(variable: string) {
//   const queryString = window.location.href.split("?");
//   const query = queryString[queryString.length - 1];
//   if (query) {
//     const params = query.split("&");
//     for (const item of params) {
//       // const param = item.split("=");
//       const i = item.indexOf("=")
//       const param= [item.substr(0, i), item.substr(i+1)];
//       if (param[0].toLowerCase() === variable.toLowerCase()) {
//         return param[1];
//       }
//     }
//   }
//   return "";
// }

/**
 * 从url获取参数
 * @export
 * @param {string} name
 * @returns {string}
 */
export function getQueryVariable(name: string): string {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, "i");
  const href = window.location.href;
  const sub = href.lastIndexOf("?");
  const result = href.substr(sub + 1).match(reg);
  if (result !== null) {
    return decodeURI(result[2]);
  }
  return "";
}

export const browser = {
  versions() {
    var u = navigator.userAgent;

    return {
      wx: !!u.match(/micromessenger/i),
      app: !!u.match(/vipjr|tutorabc/i),
      android: u.indexOf("Android") > -1 || u.indexOf("Adr") > -1, // 判断是否是 android终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // 判断是否是 iOS终端
    };
  },
};
