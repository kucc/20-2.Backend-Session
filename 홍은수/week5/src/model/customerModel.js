const DBPool = require("./db");

class CustomerModel {
  static async getCustomer() {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(`select * from customer`)
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }

  static async getCustomerById(id) {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(`select * from customer where id = ?`, [id])
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }

  static async getCustomerByDate(date) {
    const connection = await DBPool.getConnection();
    console.log(date);
    const [data] = await connection
      .query(
        `select name, spent, left(date, 10)
        from customer
        inner join transaction on customer.id = customer_id
        where left(date, 10) = ?`,
        [date]
      )
      .catch((err) => {
        console.log(err);
        return;
      });
    connection.release();
    return data;
  }

  static async createCustomer(body) {
    const { name, spent } = body;
    const connection = await DBPool.getConnection();
    const [
      data,
      result,
    ] = await connection
      .query(`insert into customer(name, spent) values(?, ?)`, [name, spent])
      .catch((err) => {
        console.log(err);
        return;
      });
    connection.release();
    return result;
  }
}

module.exports = CustomerModel;
