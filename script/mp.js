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
for (let i = 0; i < days.length; i++) {
  obj["overview_list"][i]["daily_income"] = days[i];
}

var obj = JSON.parse($response.body);

obj["total_income"] = 70000000 + sum;
obj["yesterday_income"] = dyas[6];
obj["last_week_income"] = sum;

// obj["overview_list"][0]["daily_income"] = day1;
// obj["overview_list"][1]["daily_income"] = day2;
// obj["overview_list"][2]["daily_income"] = day3;
// obj["overview_list"][3]["daily_income"] = day4;
// obj["overview_list"][4]["daily_income"] = day5;
// obj["overview_list"][5]["daily_income"] = day6;
// obj["overview_list"][6]["daily_income"] = day7;

obj["overview_list"][1]["ads_stat"][0]["income"] = 20314;
obj["overview_list"][1]["ads_stat"][1]["income"] = 20314;
obj["overview_list"][1]["ads_stat"][2]["income"] = 20314;
obj["overview_list"][1]["ads_stat"][3]["income"] = 20314;
// obj["overview_list"][1]["ads_stat"][4]["income"] = 20314;

// obj ={
//     "base_resp": {
//         "err_msg": "ok",
//         "ret": 0
//     },
//     "day_cycle_ratio": -0.991087344,
//     "last_month_income": 2290,
//     "last_week_income": 2028,
//     "overview_list": [
//         {
//             "ads_stat": [
//                 {
//                     "click_count": 1,
//                     "exposure_count": 5,
//                     "income": 13,
//                     "req_succ_count": 15,
//                     "slot_id": "1030436212907001"
//                 },
//                 {
//                     "click_count": 0,
//                     "exposure_count": 7,
//                     "income": 3,
//                     "req_succ_count": 15,
//                     "slot_id": "3030046789020061"
//                 },
//                 {
//                     "click_count": 0,
//                     "exposure_count": 18,
//                     "income": 3,
//                     "req_succ_count": 59,
//                     "slot_id": "4071202390577885"
//                 },
//                 {
//                     "click_count": 5,
//                     "exposure_count": 13,
//                     "income": 59,
//                     "req_succ_count": 50,
//                     "slot_id": "5060180989186180"
//                 }
//             ],
//             "daily_income": 78,
//             "date": "2023-10-02"
//         },
//         {
//             "ads_stat": [
//                 {
//                     "click_count": 1,
//                     "exposure_count": 9,
//                     "income": 485,
//                     "req_succ_count": 46,
//                     "slot_id": "1030436212907001"
//                 },
//                 {
//                     "click_count": 0,
//                     "exposure_count": 13,
//                     "income": 105,
//                     "req_succ_count": 46,
//                     "slot_id": "3030046789020061"
//                 },
//                 {
//                     "click_count": 1,
//                     "exposure_count": 43,
//                     "income": 221,
//                     "req_succ_count": 154,
//                     "slot_id": "4071202390577885"
//                 },
//                 {
//                     "click_count": 0,
//                     "exposure_count": 12,
//                     "income": 200,
//                     "req_succ_count": 26,
//                     "slot_id": "5060180989186180"
//                 }
//             ],
//             "daily_income": 1011,
//             "date": "2023-10-03"
//         },
//         {
//             "ads_stat": [
//                 {
//                     "click_count": 1,
//                     "exposure_count": 4,
//                     "income": 248,
//                     "req_succ_count": 8,
//                     "slot_id": "1030436212907001"
//                 },
//                 {
//                     "click_count": 0,
//                     "exposure_count": 5,
//                     "income": 11,
//                     "req_succ_count": 10,
//                     "slot_id": "3030046789020061"
//                 },
//                 {
//                     "click_count": 3,
//                     "exposure_count": 10,
//                     "income": 2,
//                     "req_succ_count": 32,
//                     "slot_id": "4071202390577885"
//                 },
//                 {
//                     "click_count": 0,
//                     "exposure_count": 4,
//                     "income": 4,
//                     "req_succ_count": 7,
//                     "slot_id": "5060180989186180"
//                 }
//             ],
//             "daily_income": 265,
//             "date": "2023-10-04"
//         },
//         {
//             "ads_stat": [
//                 {
//                     "click_count": 2,
//                     "exposure_count": 10,
//                     "income": 90,
//                     "req_succ_count": 21,
//                     "slot_id": "1030436212907001"
//                 },
//                 {
//                     "click_count": 0,
//                     "exposure_count": 2,
//                     "income": 1,
//                     "req_succ_count": 15,
//                     "slot_id": "3030046789020061"
//                 },
//                 {
//                     "click_count": 0,
//                     "exposure_count": 5,
//                     "income": 1,
//                     "req_succ_count": 23,
//                     "slot_id": "4071202390577885"
//                 },
//                 {
//                     "click_count": 0,
//                     "exposure_count": 3,
//                     "income": 9,
//                     "req_succ_count": 16,
//                     "slot_id": "5060180989186180"
//                 }
//             ],
//             "daily_income": 101,
//             "date": "2023-10-05"
//         },
//         {
//             "ads_stat": [
//                 {
//                     "click_count": 0,
//                     "exposure_count": 1,
//                     "income": 2,
//                     "req_succ_count": 8,
//                     "slot_id": "1030436212907001"
//                 },
//                 {
//                     "click_count": 0,
//                     "exposure_count": 4,
//                     "income": 1,
//                     "req_succ_count": 14,
//                     "slot_id": "4071202390577885"
//                 },
//                 {
//                     "click_count": 2,
//                     "exposure_count": 6,
//                     "income": 3,
//                     "req_succ_count": 18,
//                     "slot_id": "5060180989186180"
//                 }
//             ],
//             "daily_income": 6,
//             "date": "2023-10-06"
//         },
//         {
//             "ads_stat": [
//                 {
//                     "click_count": 0,
//                     "exposure_count": 13,
//                     "income": 536,
//                     "req_succ_count": 32,
//                     "slot_id": "1030436212907001"
//                 },
//                 {
//                     "click_count": 0,
//                     "exposure_count": 11,
//                     "income": 1,
//                     "req_succ_count": 29,
//                     "slot_id": "3030046789020061"
//                 },
//                 {
//                     "click_count": 1,
//                     "exposure_count": 16,
//                     "income": 8,
//                     "req_succ_count": 68,
//                     "slot_id": "4071202390577885"
//                 },
//                 {
//                     "click_count": 2,
//                     "exposure_count": 6,
//                     "income": 16,
//                     "req_succ_count": 19,
//                     "slot_id": "5060180989186180"
//                 }
//             ],
//             "daily_income": 561,
//             "date": "2023-10-07"
//         },
//         {
//             "ads_stat": [
//                 {
//                     "click_count": 0,
//                     "exposure_count": 1,
//                     "income": 2,
//                     "req_succ_count": 7,
//                     "slot_id": "1030436212907001"
//                 },
//                 {
//                     "click_count": 0,
//                     "exposure_count": 4,
//                     "income": 3,
//                     "req_succ_count": 10,
//                     "slot_id": "3030046789020061"
//                 },
//                 {
//                     "click_count": 0,
//                     "exposure_count": 6,
//                     "income": 0,
//                     "req_succ_count": 24,
//                     "slot_id": "4071202390577885"
//                 },
//                 {
//                     "click_count": 0,
//                     "exposure_count": 2,
//                     "income": 0,
//                     "req_succ_count": 7,
//                     "slot_id": "5060180989186180"
//                 }
//             ],
//             "daily_income": 5,
//             "date": "2023-10-08"
//         }
//     ],
//     "total_income": 447097,
//     "week_cycle_ratio": -0.980916031,
//     "yesterday_income": 5,
//     "yesterday_overview": {
//         "ads_stat": [
//             {
//                 "click_count": 0,
//                 "exposure_count": 1,
//                 "income": 2,
//                 "req_succ_count": 7,
//                 "slot_id": "1030436212907001"
//             },
//             {
//                 "click_count": 0,
//                 "exposure_count": 4,
//                 "income": 3,
//                 "req_succ_count": 10,
//                 "slot_id": "3030046789020061"
//             },
//             {
//                 "click_count": 0,
//                 "exposure_count": 6,
//                 "income": 0,
//                 "req_succ_count": 24,
//                 "slot_id": "4071202390577885"
//             },
//             {
//                 "click_count": 0,
//                 "exposure_count": 2,
//                 "income": 0,
//                 "req_succ_count": 7,
//                 "slot_id": "5060180989186180"
//             }
//         ]
//     }
// }
//{
//   base_resp: {
//     err_msg: "ok",
//     ret: 0,
//   },
//   day_cycle_ratio: -0.329923274,
//   last_month_income: 262,
//   last_week_income: 35675,
//   overview_list: [
//     {
//       ads_stat: [
//         {
//           click_count: 138,
//           exposure_count: 881,
//           income: 20229,
//           req_succ_count: 2604,
//           slot_id: "1030436212907001",
//         },
//         {
//           click_count: 23,
//           exposure_count: 622,
//           income: 2268,
//           req_succ_count: 2341,
//           slot_id: "3030046789020061",
//         },
//         {
//           click_count: 96,
//           exposure_count: 3062,
//           income: 1853,
//           req_succ_count: 8192,
//           slot_id: "4071202390577885",
//         },
//         {
//           click_count: 205,
//           exposure_count: 768,
//           income: 1616,
//           req_succ_count: 1641,
//           slot_id: "5060180989186180",
//         },
//       ],
//       daily_income: 25966,
//       date: "2023-09-25",
//     },
//     {
//       ads_stat: [
//         {
//           click_count: 35,
//           exposure_count: 228,
//           income: 4814,
//           req_succ_count: 659,
//           slot_id: "1030436212907001",
//         },
//         {
//           click_count: 5,
//           exposure_count: 198,
//           income: 626,
//           req_succ_count: 594,
//           slot_id: "3030046789020061",
//         },
//         {
//           click_count: 23,
//           exposure_count: 667,
//           income: 390,
//           req_succ_count: 2011,
//           slot_id: "4071202390577885",
//         },
//         {
//           click_count: 42,
//           exposure_count: 172,
//           income: 644,
//           req_succ_count: 416,
//           slot_id: "5060180989186180",
//         },
//       ],
//       daily_income: 6474,
//       date: "2023-09-26",
//     },
//     {
//       ads_stat: [
//         {
//           click_count: 6,
//           exposure_count: 70,
//           income: 682,
//           req_succ_count: 219,
//           slot_id: "1030436212907001",
//         },
//         {
//           click_count: 5,
//           exposure_count: 61,
//           income: 82,
//           req_succ_count: 202,
//           slot_id: "3030046789020061",
//         },
//         {
//           click_count: 7,
//           exposure_count: 207,
//           income: 41,
//           req_succ_count: 617,
//           slot_id: "4071202390577885",
//         },
//         {
//           click_count: 17,
//           exposure_count: 62,
//           income: 120,
//           req_succ_count: 139,
//           slot_id: "5060180989186180",
//         },
//       ],
//       daily_income: 925,
//       date: "2023-09-27",
//     },
//     {
//       ads_stat: [
//         {
//           click_count: 5,
//           exposure_count: 32,
//           income: 418,
//           req_succ_count: 117,
//           slot_id: "1030436212907001",
//         },
//         {
//           click_count: 1,
//           exposure_count: 21,
//           income: 66,
//           req_succ_count: 93,
//           slot_id: "3030046789020061",
//         },
//         {
//           click_count: 0,
//           exposure_count: 90,
//           income: 39,
//           req_succ_count: 238,
//           slot_id: "4071202390577885",
//         },
//         {
//           click_count: 11,
//           exposure_count: 28,
//           income: 152,
//           req_succ_count: 73,
//           slot_id: "5060180989186180",
//         },
//       ],
//       daily_income: 675,
//       date: "2023-09-28",
//     },
//     {
//       ads_stat: [
//         {
//           click_count: 9,
//           exposure_count: 30,
//           income: 561,
//           req_succ_count: 129,
//           slot_id: "1030436212907001",
//         },
//         {
//           click_count: 1,
//           exposure_count: 30,
//           income: 40,
//           req_succ_count: 109,
//           slot_id: "3030046789020061",
//         },
//         {
//           click_count: 6,
//           exposure_count: 176,
//           income: 263,
//           req_succ_count: 508,
//           slot_id: "4071202390577885",
//         },
//         {
//           click_count: 11,
//           exposure_count: 35,
//           income: 117,
//           req_succ_count: 88,
//           slot_id: "5060180989186180",
//         },
//       ],
//       daily_income: 981,
//       date: "2023-09-29",
//     },
//     {
//       ads_stat: [
//         {
//           click_count: 3,
//           exposure_count: 18,
//           income: 215,
//           req_succ_count: 64,
//           slot_id: "1030436212907001",
//         },
//         {
//           click_count: 0,
//           exposure_count: 28,
//           income: 47,
//           req_succ_count: 68,
//           slot_id: "3030046789020061",
//         },
//         {
//           click_count: 8,
//           exposure_count: 116,
//           income: 94,
//           req_succ_count: 283,
//           slot_id: "4071202390577885",
//         },
//         {
//           click_count: 6,
//           exposure_count: 18,
//           income: 34,
//           req_succ_count: 39,
//           slot_id: "5060180989186180",
//         },
//       ],
//       daily_income: 390,
//       date: "2023-09-30",
//     },
//     {
//       ads_stat: [
//         {
//           click_count: 4,
//           exposure_count: 23,
//           income: 124,
//           req_succ_count: 68,
//           slot_id: "1030436212907001",
//         },
//         {
//           click_count: 1,
//           exposure_count: 24,
//           income: 64,
//           req_succ_count: 83,
//           slot_id: "3030046789020061",
//         },
//         {
//           click_count: 1,
//           exposure_count: 90,
//           income: 34,
//           req_succ_count: 240,
//           slot_id: "4071202390577885",
//         },
//         {
//           click_count: 7,
//           exposure_count: 28,
//           income: 40,
//           req_succ_count: 62,
//           slot_id: "5060180989186180",
//         },
//       ],
//       daily_income: 262,
//       date: "2023-10-01",
//     },
//   ],
//   total_income: 1999999,
//   week_cycle_ratio: -0.99106412,
//   yesterday_income: 262,
//   yesterday_overview: {
//     ads_stat: [
//       {
//         click_count: 4,
//         exposure_count: 23,
//         income: 124,
//         req_succ_count: 68,
//         slot_id: "1030436212907001",
//       },
//       {
//         click_count: 1,
//         exposure_count: 24,
//         income: 64,
//         req_succ_count: 83,
//         slot_id: "3030046789020061",
//       },
//       {
//         click_count: 1,
//         exposure_count: 90,
//         income: 34,
//         req_succ_count: 240,
//         slot_id: "4071202390577885",
//       },
//       {
//         click_count: 7,
//         exposure_count: 28,
//         income: 40,
//         req_succ_count: 62,
//         slot_id: "5060180989186180",
//       },
//     ],
//   },
// };
$done({ body: JSON.stringify(obj) });
