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

function getIncomePercentage(index) {
  switch (index) {
    case 0:
      return 0.7;
    case 1:
      return 0.03;
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

obj["total_income"] = 70000000;
obj["yesterday_income"] = dyas[6];
obj["last_week_income"] = sum;

$done({ body: JSON.stringify(obj) });
