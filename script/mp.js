/*
 *Update Date: 20201123
 *Collected by Cuttlefish
 * 公众号
 *Author: 米果
 *Url[https://api.meiyan.com/iap/verify.json]
 */

var ok = {
  bot_status: -1,
  ds: "20231107",
  estimate_bot_income: 43.921356935,
  estimate_mid_income: 32.403627567,
  mid_status: -1,
  total_programmatic_ad_income: 213123123,
  yesterday_income: 3123113,
  yesterday_income: 3123113,
  total_income: 144229,
  last_week_income: 13,
  last_month_income: 13,
  total_programmatic_ad_income: 213123123,
  total_freetrade_income: 0,
  total_cps_income: 0,
};

let data = {
  total_income: 213123123,
  total_programmatic_ad_income: 213123123,
  yesterday_income: 3123113,
};
var obj = JSON.parse($response.body);

obj.total_programmatic_ad_income = data.total_programmatic_ad_income;
obj.yesterday_income = data.yesterday_income;

$done({ body: JSON.stringify(obj) });
