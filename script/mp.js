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

let laqu = days[6] * 3;
let min = 0.0001;
let max = 0.0004;
let dianji = laqu * (min + Math.random() * (max - min));

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

obj["total_income"] = 70000000 + sum;
obj["yesterday_income"] = days[6];
obj["last_week_income"] = sum;

const overviewList = obj["yesterday_overview"]["ads_stat"];

overviewList.forEach((stat, index) => {
  stat["req_succ_count"] = laqu * (0.1 + Math.random() * (0.7 - 0.1));
  stat["exposure_count"] = dianji * (0.1 + Math.random() * (0.7 - 0.1));
});
obj["yesterday_overview"]["ads_stat"] = overviewList;

$done({ body: JSON.stringify(obj) });

// let a = {
//   base_resp: {
//     err_msg: "ok",
//     ret: 0,
//   },
//   day_cycle_ratio: -0.991087344,
//   last_month_income: 2290,
//   last_week_income: 581031,
//   overview_list: [
//     {
//       ads_stat: [
//         {
//           click_count: 1,
//           exposure_count: 5,
//           income: 40490.1,
//           req_succ_count: 15,
//           slot_id: "1030436212907001",
//         },
//         {
//           click_count: 0,
//           exposure_count: 7,
//           income: 1735.29,
//           req_succ_count: 15,
//           slot_id: "3030046789020061",
//         },
//         {
//           click_count: 0,
//           exposure_count: 18,
//           income: 4049.01,
//           req_succ_count: 59,
//           slot_id: "4071202390577885",
//         },
//         {
//           click_count: 5,
//           exposure_count: 13,
//           income: 11568.6,
//           req_succ_count: 50,
//           slot_id: "5060180989186180",
//         },
//       ],
//       daily_income: 57843,
//       date: "2023-10-02",
//     },
//     {
//       ads_stat: [
//         {
//           click_count: 1,
//           exposure_count: 9,
//           income: 37478.7,
//           req_succ_count: 46,
//           slot_id: "1030436212907001",
//         },
//         {
//           click_count: 0,
//           exposure_count: 13,
//           income: 1606.23,
//           req_succ_count: 46,
//           slot_id: "3030046789020061",
//         },
//         {
//           click_count: 1,
//           exposure_count: 43,
//           income: 3747.8700000000003,
//           req_succ_count: 154,
//           slot_id: "4071202390577885",
//         },
//         {
//           click_count: 0,
//           exposure_count: 12,
//           income: 10708.2,
//           req_succ_count: 26,
//           slot_id: "5060180989186180",
//         },
//       ],
//       daily_income: 53541,
//       date: "2023-10-03",
//     },
//     {
//       ads_stat: [
//         {
//           click_count: 1,
//           exposure_count: 4,
//           income: 61315.1,
//           req_succ_count: 8,
//           slot_id: "1030436212907001",
//         },
//         {
//           click_count: 0,
//           exposure_count: 5,
//           income: 2627.79,
//           req_succ_count: 10,
//           slot_id: "3030046789020061",
//         },
//         {
//           click_count: 3,
//           exposure_count: 10,
//           income: 6131.51,
//           req_succ_count: 32,
//           slot_id: "4071202390577885",
//         },
//         {
//           click_count: 0,
//           exposure_count: 4,
//           income: 17518.600000000002,
//           req_succ_count: 7,
//           slot_id: "5060180989186180",
//         },
//       ],
//       daily_income: 87593,
//       date: "2023-10-04",
//     },
//     {
//       ads_stat: [
//         {
//           click_count: 2,
//           exposure_count: 10,
//           income: 69043.79999999999,
//           req_succ_count: 21,
//           slot_id: "1030436212907001",
//         },
//         {
//           click_count: 0,
//           exposure_count: 2,
//           income: 2959.02,
//           req_succ_count: 15,
//           slot_id: "3030046789020061",
//         },
//         {
//           click_count: 0,
//           exposure_count: 5,
//           income: 6904.380000000001,
//           req_succ_count: 23,
//           slot_id: "4071202390577885",
//         },
//         {
//           click_count: 0,
//           exposure_count: 3,
//           income: 19726.800000000003,
//           req_succ_count: 16,
//           slot_id: "5060180989186180",
//         },
//       ],
//       daily_income: 98634,
//       date: "2023-10-05",
//     },
//     {
//       ads_stat: [
//         {
//           click_count: 0,
//           exposure_count: 1,
//           income: 84380.09999999999,
//           req_succ_count: 8,
//           slot_id: "1030436212907001",
//         },
//         {
//           click_count: 0,
//           exposure_count: 4,
//           income: 3616.29,
//           req_succ_count: 14,
//           slot_id: "4071202390577885",
//         },
//         {
//           click_count: 2,
//           exposure_count: 6,
//           income: 8438.01,
//           req_succ_count: 18,
//           slot_id: "5060180989186180",
//         },
//       ],
//       daily_income: 120543,
//       date: "2023-10-06",
//     },
//     {
//       ads_stat: [
//         {
//           click_count: 0,
//           exposure_count: 13,
//           income: 60860.1,
//           req_succ_count: 32,
//           slot_id: "1030436212907001",
//         },
//         {
//           click_count: 0,
//           exposure_count: 11,
//           income: 2608.29,
//           req_succ_count: 29,
//           slot_id: "3030046789020061",
//         },
//         {
//           click_count: 1,
//           exposure_count: 16,
//           income: 6086.01,
//           req_succ_count: 68,
//           slot_id: "4071202390577885",
//         },
//         {
//           click_count: 2,
//           exposure_count: 6,
//           income: 17388.600000000002,
//           req_succ_count: 19,
//           slot_id: "5060180989186180",
//         },
//       ],
//       daily_income: 86943,
//       date: "2023-10-07",
//     },
//     {
//       ads_stat: [
//         {
//           click_count: 0,
//           exposure_count: 11.543251718911131,
//           income: 53153.799999999996,
//           req_succ_count: 130507.83699496755,
//           slot_id: "1030436212907001",
//         },
//         {
//           click_count: 0,
//           exposure_count: 4.343034138604035,
//           income: 2278.02,
//           req_succ_count: 65731.61583621847,
//           slot_id: "3030046789020061",
//         },
//         {
//           click_count: 0,
//           exposure_count: 6.181308587457276,
//           income: 5315.38,
//           req_succ_count: 109833.01788207334,
//           slot_id: "4071202390577885",
//         },
//         {
//           click_count: 0,
//           exposure_count: 11.166209188267647,
//           income: 15186.800000000001,
//           req_succ_count: 106555.32512887816,
//           slot_id: "5060180989186180",
//         },
//       ],
//       daily_income: 75934,
//       date: "2023-10-08",
//     },
//   ],
//   total_income: 70581031,
//   week_cycle_ratio: -0.980916031,
//   yesterday_income: 75934,
//   yesterday_overview: {
//     ads_stat: [
//       {
//         click_count: 0,
//         exposure_count: 1,
//         income: 2,
//         req_succ_count: 7,
//         slot_id: "1030436212907001",
//       },
//       {
//         click_count: 0,
//         exposure_count: 4,
//         income: 3,
//         req_succ_count: 10,
//         slot_id: "3030046789020061",
//       },
//       {
//         click_count: 0,
//         exposure_count: 6,
//         income: 0,
//         req_succ_count: 24,
//         slot_id: "4071202390577885",
//       },
//       {
//         click_count: 0,
//         exposure_count: 2,
//         income: 0,
//         req_succ_count: 7,
//         slot_id: "5060180989186180",
//       },
//     ],
//   },
// };
