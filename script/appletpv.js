var obj = JSON.parse($response.body);
var obj = {
  ret: 0,
  data: [
    {
      ret: 0,
      dataTime: 1696780799,
      indexCardName: "累计用户数",
      indexValue: 25244,
      scale: "人",
      dayRatio: 0.00019073049780659929,
      weekRatio: 0.0017191977077363897,
      monthRatio: 0.43435448577680524,
      yearRatio: 0,
      dataType: "1",
      dataStat: 0,
    },
    {
      ret: 0,
      dataTime: 1696780799,
      indexCardName: "日打开次数",
      indexValue: 123297,
      scale: "次",
      dayRatio: -0.631578947368421,
      weekRatio: -0.8888888888888888,
      monthRatio: 0,
      yearRatio: 0,
      dataType: "1",
      dataStat: 0,
    },
    {
      ret: 0,
      dataTime: 1696780799,
      indexCardName: "日访问人数",
      indexValue: 6216,
      scale: "人",
      dayRatio: -0.4,
      weekRatio: -0.8235294117647058,
      monthRatio: 0,
      yearRatio: 0,
      dataType: "1",
      dataStat: 0,
    },
    {
      ret: 0,
      dataTime: 1696780799,
      indexCardName: "日新增用户",
      indexValue: 529,
      scale: "人",
      dayRatio: -0.6666666666666666,
      weekRatio: -0.8,
      monthRatio: 0,
      yearRatio: 0,
      dataType: "1",
      dataStat: 0,
    },
  ],
  __rpcCount: 11,
};

$done({ body: JSON.stringify(obj) });