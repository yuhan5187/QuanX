var obj = JSON.parse($response.body);
// var obj = {
//   ret: 0,
//   data: [
//     {
//       ret: 0,
//       success: true,
//       openid: "ozZvk5clQcX99v9J405ydt_ARPvY",
//       resultDesc: [
//         {
//           key: "uv",
//           keyType: "INDEX",
//           label: "累计用户数",
//           dataType: "INT",
//         },
//         {
//           key: "compare@day@1@uv",
//           keyType: "INDEX",
//           label: "较昨日",
//           dataType: "DOUBLE",
//         },
//         {
//           key: "compare@day@7@uv",
//           keyType: "INDEX",
//           label: "较7天前",
//           dataType: "DOUBLE",
//         },
//         {
//           key: "compare@day@30@uv",
//           keyType: "INDEX",
//           label: "较30天前",
//           dataType: "DOUBLE",
//         },
//         {
//           key: "compare@day@365@uv",
//           keyType: "INDEX",
//           label: "较365天前",
//           dataType: "DOUBLE",
//         },
//       ],
//       dynamicResps: [
//         {
//           fieldId: "query_id",
//           fieldType: "STRING",
//           fieldValue: "9c7bbe41-ffee-4511-a252-cc2d1ed3c51f",
//         },
//         {
//           fieldId: "data_time",
//           fieldType: "INT",
//           fieldValue: "1697040000",
//         },
//         {
//           fieldId: "is_delay",
//           fieldType: "INT",
//           fieldValue: "0",
//         },
//       ],
//       respCode: 0,
//       respMessage: "success",
//       tableTitle: "累计用户数",
//       objects: {
//         tableValueLine: [
//           {
//             columnValue: ["5248", "0.0004", "0.0015", "0.4354", ""],
//           },
//         ],
//       },
//       helpText: "",
//       indexValue: 25244,
//     },
//     {
//       ret: 0,
//       success: true,
//       openid: "ozZvk5clQcX99v9J405ydt_ARPvY",
//       resultDesc: [
//         {
//           key: "pv",
//           keyType: "INDEX",
//           label: "打开次数",
//           dataType: "INT",
//         },
//         {
//           key: "compare@day@1@pv",
//           keyType: "INDEX",
//           label: "较昨日",
//           dataType: "DOUBLE",
//         },
//         {
//           key: "compare@day@7@pv",
//           keyType: "INDEX",
//           label: "较7天前",
//           dataType: "DOUBLE",
//         },
//         {
//           key: "compare@day@30@pv",
//           keyType: "INDEX",
//           label: "较30天前",
//           dataType: "DOUBLE",
//         },
//         {
//           key: "compare@day@365@pv",
//           keyType: "INDEX",
//           label: "较365天前",
//           dataType: "DOUBLE",
//         },
//       ],
//       dynamicResps: [
//         {
//           fieldId: "query_id",
//           fieldType: "STRING",
//           fieldValue: "469cfe1f-6624-4c3c-ac81-9a04270c5119",
//         },
//         {
//           fieldId: "data_time",
//           fieldType: "INT",
//           fieldValue: "1697040000",
//         },
//         {
//           fieldId: "is_delay",
//           fieldType: "INT",
//           fieldValue: "0",
//         },
//       ],
//       respCode: 0,
//       respMessage: "success",
//       tableTitle: "日打开次数",
//       objects: {
//         tableValueLine: [
//           {
//             columnValue: ["30", "0.875", "0.875", "", ""],
//           },
//         ],
//       },
//       helpText: "",
//       indexValue: 123297,
//     },
//     {
//       ret: 0,
//       success: true,
//       openid: "ozZvk5clQcX99v9J405ydt_ARPvY",
//       resultDesc: [
//         {
//           key: "uv",
//           keyType: "INDEX",
//           label: "访问人数",
//           dataType: "INT",
//         },
//         {
//           key: "compare@day@1@uv",
//           keyType: "INDEX",
//           label: "较昨日",
//           dataType: "DOUBLE",
//         },
//         {
//           key: "compare@day@7@uv",
//           keyType: "INDEX",
//           label: "较7天前",
//           dataType: "DOUBLE",
//         },
//         {
//           key: "compare@day@30@uv",
//           keyType: "INDEX",
//           label: "较30天前",
//           dataType: "DOUBLE",
//         },
//         {
//           key: "compare@day@365@uv",
//           keyType: "INDEX",
//           label: "较365天前",
//           dataType: "DOUBLE",
//         },
//       ],
//       dynamicResps: [
//         {
//           fieldId: "query_id",
//           fieldType: "STRING",
//           fieldValue: "0fc72fc8-1941-48dc-8182-df562a3dabbd",
//         },
//         {
//           fieldId: "data_time",
//           fieldType: "INT",
//           fieldValue: "1697040000",
//         },
//         {
//           fieldId: "is_delay",
//           fieldType: "INT",
//           fieldValue: "0",
//         },
//       ],
//       respCode: 0,
//       respMessage: "success",
//       tableTitle: "日访问人数",
//       objects: {
//         tableValueLine: [
//           {
//             columnValue: ["13", "0.625", "0.8571", "", ""],
//           },
//         ],
//       },
//       helpText: "",
//       indexValue: 6216,
//     },
//     {
//       ret: 0,
//       success: true,
//       openid: "ozZvk5clQcX99v9J405ydt_ARPvY",
//       resultDesc: [
//         {
//           key: "uv",
//           keyType: "INDEX",
//           label: "日新增用户",
//           dataType: "INT",
//         },
//         {
//           key: "compare@day@1@uv",
//           keyType: "INDEX",
//           label: "较昨日",
//           dataType: "DOUBLE",
//         },
//         {
//           key: "compare@day@7@uv",
//           keyType: "INDEX",
//           label: "较7天前",
//           dataType: "DOUBLE",
//         },
//         {
//           key: "compare@day@30@uv",
//           keyType: "INDEX",
//           label: "较30天前",
//           dataType: "DOUBLE",
//         },
//         {
//           key: "compare@day@365@uv",
//           keyType: "INDEX",
//           label: "较365天前",
//           dataType: "DOUBLE",
//         },
//       ],
//       dynamicResps: [
//         {
//           fieldId: "query_id",
//           fieldType: "STRING",
//           fieldValue: "ed522050-00a2-43b3-989e-a6d24c7fc0eb",
//         },
//         {
//           fieldId: "data_time",
//           fieldType: "INT",
//           fieldValue: "1697040000",
//         },
//         {
//           fieldId: "is_delay",
//           fieldType: "INT",
//           fieldValue: "0",
//         },
//       ],
//       respCode: 0,
//       respMessage: "success",
//       tableTitle: "日新增用户",
//       objects: {
//         tableValueLine: [
//           {
//             columnValue: ["2", "0", "", "", ""],
//           },
//         ],
//       },
//       helpText: "",
//       indexValue: 529,
//     },
//   ],
//   __rpcCount: 11,
// };

obj["data"][0]["objects"]["tableValueLine"][0]["columnValue"][0] = 25244;
obj["data"][1]["objects"]["tableValueLine"][0]["columnValue"][0] = 123297;
obj["data"][2]["objects"]["tableValueLine"][0]["columnValue"][0] = 6216;
obj["data"][3]["objects"]["tableValueLine"][0]["columnValue"][0] = 529;

$done({ body: JSON.stringify(obj) });
