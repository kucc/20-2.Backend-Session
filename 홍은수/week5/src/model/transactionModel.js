const DBPool = require("./db");

class TransactionModel {
  static async getTransaction() {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(
        `select C.name as customer_name, C.spent, M.name as menu_name, M.price, date
        from transaction as T
        inner join customer as C on T.customer_id = C.id
        inner join menu as M on T.menu_id = M.id
        order by date`
      )
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }

  static async getTransactionByCId(id) {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(
        `select C.name as customer_name, C.spent, M.name as menu_name, M.price, date
        from transaction as T
        inner join customer as C on T.customer_id = C.id
        inner join menu as M on T.menu_id = M.id
        where C.id = ?
        order by date`,
        [id]
      )
      .catch((err) => {
        console.log(err);
        return;
      });
    connection.release();
    return data;
  }

  static async getTransactionByMId(id) {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(
        `select C.name as customer_name, C.spent, M.name as menu_name, M.price, date
        from transaction as T
        inner join customer as C on T.customer_id = C.id
        inner join menu as M on T.menu_id = M.id
        where M.id = ?
        order by date`,
        [id]
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
