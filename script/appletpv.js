var obj = JSON.parse($response.body);
// var obj = {
//   ret: 0,
//   data: [
//     {
//       ret: 0,
//       dataTime: 1696780799,
//       indexCardName: "累计用户数",
//       indexValue: 25244,
//       scale: "人",
//       dayRatio: 0.00019073049780659929,
//       weekRatio: 0.0017191977077363897,
//       monthRatio: 0.43435448577680524,
//       yearRatio: 0,
//       dataType: "1",
//       dataStat: 0,
//     },
//     {
//       ret: 0,
//       dataTime: 1696780799,
//       indexCardName: "日打开次数",
//       indexValue: 123297,
//       scale: "次",
//       dayRatio: 0.1593,
//       weekRatio: -0.1453,
//       monthRatio: 0,
//       yearRatio: 0,
//       dataType: "1",
//       dataStat: 0,
//     },
//     {
//       ret: 0,
//       dataTime: 1696780799,
//       indexCardName: "日访问人数",
//       indexValue: 6216,
//       scale: "人",
//       dayRatio: 0.1253,
//       weekRatio: -0.0534,
//       monthRatio: 0,
//       yearRatio: 0,
//       dataType: "1",
//       dataStat: 0,
//     },
//     {
//       ret: 0,
//       dataTime: 1696780799,
//       indexCardName: "日新增用户",
//       indexValue: 529,
//       scale: "人",
//       dayRatio: 0.1642,
//       weekRatio: -0.0351,
//       monthRatio: 0,
//       yearRatio: 0,
//       dataType: "1",
//       dataStat: 0,
//     },
//   ],
//   __rpcCount: 11,
// };
obj["data"][0]["indexValue"] = 25244;
obj["data"][1]["indexValue"] = 123297;
obj["data"][2]["indexValue"] = 6216;
obj["data"][3]["indexValue"] = 529;
$done({ body: JSON.stringify(obj) });
