const DBPool = require("./db");

class transactionModel {
  static async getTransactions() {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(
        `select transaction.date, customer.customerId, customer.name, customer.spending, menu.menuName, menu.price 
        from transaction 
        inner join customer on customer.customerId = transaction.customerId
        inner join menu on menu.menuId = transaction.menuId 
        order by transaction.date asc;`
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
        `select customer.customerId, customer.name, customer.spending, menu.menuName, menu.price, transaction.date
        from transaction 
        inner join customer on customer.customerId = transaction.customerId
        inner join menu on menu.menuId = transaction.menuId
      where customer.customerId = ? 
      order by transaction.date asc`,
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
        `select menu.menuId, menu.menuName, menu.price, customer.name, customer.spending, transaction.date
        from transaction 
        inner join customer on customer.customerId = transaction.customerId
        inner join menu on menu.menuId = transaction.menuId
      where menu.menuId = ? 
      order by transaction.date asc`,
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
module.exports = transactionModel;
