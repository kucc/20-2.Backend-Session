const DBPool = require("./db");

class TransactionModel {
  static async getAllTransactions() {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(
        `select * from transaction as t join customer as c on t.customerId = c.id
        join menu as m on t.menuId = m.id order by t.date asc`
      )
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }

  static async getTransactionbyCustomerId(customerId) {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(
        `select * from transaction as t join customer as c on t.customerId = c.id
        join menu as m on t.menuId = m.id where c.id = ? order by t.date asc`,
        [customerId]
      )
      .catch((err) => {
        console.log(err);
        return;
      });
    connection.release();
    return data;
  }

  static async getTransactionbyMenuId(menuId) {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(
        `select * from transaction as t join customer as c on t.customerId = c.id
      join menu as m on t.menuId = m.id where m.id = ? order by t.date asc`,
        [menuId]
      )
      .catch((err) => {
        console.log(err);
        return;
      });
    connection.release();
    return data;
  }
}

module.exports = TransactionModel;
