const DBPool = require("./db");

class MenuModel {
  static async getMenu() {
    const connection = await DBPool.getConnection();

    const [data] = await connection.query(`select * from menu`).catch((err) => {
      console.log(err);
      return;
    });

    connection.release();
    return data;
  }
  static async getMenuById(id) {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(`select * from menu where id = ?`, [id])
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }

  static async createMenu(body) {
    const connection = await DBPool.getConnection();
    const { name, price } = body;
    const [data] = await connection
      .query(`insert into menu values(null,?,?)`, [name, price])
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }

  static async updateMenu(id, body) {
    const connection = await DBPool.getConnection();
    const { name, price } = body;
    const [
      data,
    ] = await connection
      .query(`update menu set name = ?, price = ? where id = ?`, [
        name,
        price,
        id,
      ])
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }

  static async deleteMenu(id) {
    const connection = await DBPool.getConnection();
    const [data] = await connection
      .query(`delete from menu where id = ?`, [id])
      .catch((err) => {
        console.log(err);
        return;
      });

    connection.release();
    return data;
  }
}

module.exports = MenuModel;
