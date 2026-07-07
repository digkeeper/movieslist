// 台铃智能 - 屏蔽升级弹窗
// API: https://www.tailgdd.com/v1/api/app/version/getVersion
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
