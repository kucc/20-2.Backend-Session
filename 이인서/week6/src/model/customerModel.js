const DBPool = require("./db");

class CustomerModel {
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

  static async getAllCustomers() {
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

  static async createCustomer(body) {
    const connection = await DBPool.getConnection();

    const [
      data,
    ] = await connection
      .query(`insert into customer values(null,?,?,now())`, [
        body.name,
        body.total,
      ])
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }

  static async getCustomerbyDate(body) {
    //돌려보지는 못했습니다. ㅠ
    const connection = await DBPool.getConnection();
    const tempTime = body;
    const [
      data,
    ] = await connection
      .query(`select * from customer where date >= ? and date < ?`, [
        tempTime,
        tempTime.setDate(body.getDate() + 1),
      ])
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }
}

module.exports = CustomerModel;
