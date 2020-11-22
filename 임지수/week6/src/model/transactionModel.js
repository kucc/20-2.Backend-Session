const DBPool = require("./db");

class TransactionModel {
  static async getTransaction() {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(
        `select t.date, c.name as customer_name, m.name as menu_name, m.price 
         from transaction t join customer c
         on c.id = t.customerId
         join menu m
         on m.id = t.menuId;`
      )
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }

  static async getTransactionByCustomerId(customerId) {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(
        `select t.date, c.name as customer_name, m.name as menu_name, m.price 
         from transaction t join customer c
         on c.id = t.customerId and c.id = ?
         join menu m
         on m.id = t.menuId`,
        [customerId]
      )
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }

  static async getTransactionByMenuId(menuId) {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(
        `select t.date, c.name as customer_name, m.name as menu_name, m.price 
         from transaction t join customer c
         on c.id = t.customerId
         join menu m
         on m.id = t.menuId and m.id = ?`,
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
