/*
 * 台铃智能 - 屏蔽升级弹窗
 * 接口：https://www.tailgdd.com/v1/api/app/version/getVersion
 * 类型：script-response-body
 * 作用：伪装已是最新版本，消除更新弹窗
 */
const fakeBody = {
  code: 0,
  msg: "success",
  data: {
    version: "9.9.9",
    forceUpdate: false,
    downloadUrl: ""
  }
};
$done({ body: JSON.stringify(fakeBody) });
