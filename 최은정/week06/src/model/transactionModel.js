const DBPool = require("./db");

class transactionModel {
  static async getTransactions() {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(
        `select * from transaction join customer on customer.customerId = transaction.customerId
        join menu on menu.menuId = transaction.menuId order by customer.date asc;`
      )
      .catch((err) => {
        console.log(err);
        return;
      });
    connection.release();
    return data;
  }
  static async getTransactionById(id) {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(
        `select * from transaction join customer on customer.customerId = transaction.customerId
        join menu on menu.menuId = transaction.menuId
      where customer.customerId = ? order by customer.date asc`,
        [id]
      )
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }
  static async getTransactionBymenuId(id) {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(
        `select * from transaction join customer on customer.customerId = transaction.customerId
      join menu on menu.menuId = transaction.menuId
    where menu.menuId = ? order by customer.date asc`,
        [id]
      )
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
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
module.exports = transactionModel;
