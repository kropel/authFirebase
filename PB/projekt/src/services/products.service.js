import products from "../mocks/products";

class ProductService {
  static getAllProduct() {
    return products;
  }

  static getFeaturedProductByCategory(category) {
    return products.filter(
      (product) => product.category === category && product.featured
    );
  }

  static getSearchElements(fraze) {
    let productList = products.filter((product) => {
      let includes = false;
      for (let value of ["name", "manufacture", "category"]) {
        if (typeof product[value] === "string" && !includes) {
          includes = product[value].toLowerCase().includes(fraze.toLowerCase());
        }
      }
      return includes;
    });
    return productList;
  }

  static getAllManufacturers() {
    return products
      .reduce((previouse, current) => {
        if (!previouse.includes(current.manufacture)) {
          previouse.push(current.manufacture);
        }
        return previouse;
      }, [])
      .sort();
  }
}

export default ProductService;
