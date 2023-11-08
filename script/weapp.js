/*
 *Update Date: 20201123
 *Collected by Cuttlefish
 * 小程序
 *Author: 米果
 *Url[https://api.meiyan.com/iap/verify.json]
 */

let days = [57843, 53541, 87593, 98634, 120543, 86943, 75934];
let sum = days.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

let laqu = days[6] * 2;
let min = 0.01;
let max = 0.04;
let dianji = laqu * (min + Math.random() * (max - min));

function getIncomePercentage(index) {
  switch (index) {
    case 0:
      return 0.6;
    case 1:
      return 0.13;
    case 2:
      return 0.07;
    case 3:
      return 0.2;
    default:
      return 0;
  }
}
var obj = JSON.parse($response.body);

for (let i = 0; i < days.length; i++) {
  obj["overview_list"][i]["daily_income"] = days[i];
}

for (let i = 0; i < obj["overview_list"].length; i++) {
  for (let j = 0; j < obj["overview_list"][i]["ads_stat"].length; j++) {
    obj["overview_list"][i]["ads_stat"][j]["income"] =
      days[i] * getIncomePercentage(j);
  }
}

obj["total_income"] = 70000000 + sum;
obj["yesterday_income"] = days[6];
obj["last_week_income"] = sum;

const overviewList = obj["yesterday_overview"]["ads_stat"];

overviewList.forEach((stat, index) => {
  stat["req_succ_count"] = laqu * (0.1 + Math.random() * (0.8 - 0.1));
  stat["exposure_count"] = laqu * (0.01 + Math.random() * (0.05 - 0.01));
  stat["click_count"] =
    stat["exposure_count"] * (0.01 + Math.random() * (0.04 - 0.01));
  stat["income"] = days[6] * getIncomePercentage(index);
});
obj["yesterday_overview"]["ads_stat"] = overviewList;

$done({ body: JSON.stringify(obj) });
