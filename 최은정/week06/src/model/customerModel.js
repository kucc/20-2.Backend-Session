const DBPool = require("./db");

class CustomerModel {
  static async getCustomerByDate(date) {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(
        `select name, spending from customer where date like ?`,
        date + "%"
      )
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
      .query("select * from customer where customerId = ?", [id])
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }
  static async createCustomer(body) {
    const { name, spending } = body;
    const connection = await DBPool.getConnection();

    const [
      data,
    ] = await connection
      .query(`insert into customer (name, spending) values ( ?, ?)`, [
        name,
        spending,
      ])
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    console.log(data);
    return data;
  }

  static async getCustomers() {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query("select customerId, name from customer")
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }
}
module.exports = CustomerModel;
