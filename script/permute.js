var obj = JSON.parse($response.body);
if (obj.response.checkout_secret_key) {
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
        duration: 7,
      },
      payment_url: "https://pay.paddle.com/checkout/framework/544716",
      image:
        "https://paddle.s3.amazonaws.com/user/156/QEXBL6MQQQ6DXq9FGSXL_Icon-MacOS-512x512%402x.png",
      base_prices: {
        UAH: 0,
        USD: 0,
        GBP: 0,
        AUD: 0,
        CNY: 0,
        EUR: 0,
      },
      type: "sdk-product",
      current_prices: {
        UAH: 0,
        USD: 0,
        GBP: 0,
        AUD: 0,
        CNY: 0,
        EUR: 0,
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
} else if (obj.response.customer_country) {
  obj = {
    success: true,
    response: {
      customer_country: "JP",
      products: [
        {
          product_id: 544716,
          price: {
            gross: 14.99,
            net: 13.630000000000001,
            tax: 1.3600000000000001,
          },
          vendor_set_prices_included_tax: true,
          list_price: {
            gross: 14.99,
            net: 13.630000000000001,
            tax: 1.3600000000000001,
          },
          currency: "USD",
          product_title: "Permute 3",
          applied_coupon: [],
        },
      ],
    },
  };
}
$done({ body: JSON.stringify(obj) });
