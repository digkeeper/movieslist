[mitm]
hostname = %APPEND% www.tailgdd.com

[rewrite_local]
# 台铃智能 - 更新检测（修改响应，消除弹窗）
^https?:\/\/www\.tailgdd\.com\/v1\/api\/app\/version\/getVersion(\?.*)?$ url script-response-body tailg_no_update.js
