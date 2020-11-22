const DBPool = require("./db");

class CustomerModel {
  static async getCustomerByDate(date) {
    const connection = await DBPool.getConnection();
    console.log(date);

    const [
      data,
    ] = await connection
      .query(`select name, total from customer where DATE(date) = ?`, [date])
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }

  static async getCustomer() {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(`select id, name from customer`)
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }

  static async getCustomerById(id) {
    const connection = await DBPool.getConnection();

    const [
      data,
    ] = await connection
      .query(`select name, total from customer where id = ?`, [id])
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }

  static async createCustomer(body) {
    const { name, total } = body;
    const connection = await DBPool.getConnection();
    const [
      data,
      result,
    ] = await connection
      .query(`insert into customer(name, total) values(?, ?) `, [name, total])
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return result;
  }
}

module.exports = CustomerModel;
