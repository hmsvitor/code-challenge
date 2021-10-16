class Datasource {
  getPrices() {
    return fetch("https://static.ngnrs.io/test/prices", {
      method: "GET",
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => {
        let result = [];
        data.data.prices.forEach((price) => {
          let _price = { ...price };
          _price.mid = () => (_price.buy + _price.sell) / 200;
          _price.quote = () => _price.pair.slice(2, 5);
          result.push(_price);
        });
        return result;
      });
  }
}

let ds = new Datasource();

ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.err(error);
  });
