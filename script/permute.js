var obj = JSON.parse($response.body);

obj = {
  success: true,
  response: {
    checkout_secret_key: "12qqk3q",
    vendor_name: "Charlie Monroe Software",
    discount_value: {
      UAH: 0,
      USD: 0,
      GBP: 0,
      AUD: 0,
      CNY: 0,
      EUR: 0,
    },
    trial: {
      text: "Thanks for downloading a trial of Permute 3! We hope you enjoy it.",
      duration: 999,
    },
    payment_url: "https://pay.paddle.com/checkout/framework/544716",
    image:
      "https://paddle.s3.amazonaws.com/user/156/QEXBL6MQQQ6DXq9FGSXL_Icon-MacOS-512x512%402x.png",
    base_prices: {
      UAH: 200,
      USD: 14.99,
      GBP: 13.99,
      AUD: 21.989999999999998,
      CNY: 79,
      EUR: 14.99,
    },
    type: "sdk-product",
    current_prices: {
      UAH: 200,
      USD: 14.99,
      GBP: 13.99,
      AUD: 21.989999999999998,
      CNY: 79,
      EUR: 14.99,
    },
    name: "Permute 3",
    discount_percentage: {
      UAH: 0,
      USD: 0,
      GBP: 0,
      AUD: 0,
      CNY: 0,
      EUR: 0,
    },
  },
};
$done({ body: JSON.stringify(obj) });
