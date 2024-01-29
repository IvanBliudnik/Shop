
const productPrice1 = window.prompt("Price for 1 item").trim();
const productPrice2 = window.prompt("Price for 2 item").trim();
const productPrice3 = window.prompt("Price for 3 item").trim();
let balance = 110;
if (Number(productPrice1) && Number(productPrice2) && Number(productPrice3)) {
  function purchaseProduct(price, productName) {
    if (balance < price) {
      document.write(`Нужно больше золота for ${productName}`);
    } else {
      document.write(`<br>${productName} purchased`, "<br>");
      document.write(
        `Осталось денег: ${(balance = balance - price)} $`,
        "<br>"
      );
    }
  }
} else document.write("You enter not correct value");
document.write("Start", "<br>");
purchaseProduct(productPrice1, "product 1");
document.write("<br>");
purchaseProduct(productPrice2, "product 2");
document.write("<br>");
purchaseProduct(productPrice3, "product 3");
document.write("<br>");
document.write(`<br> Остаток : ${balance} $ <br>`);
document.write("<br>", "End");