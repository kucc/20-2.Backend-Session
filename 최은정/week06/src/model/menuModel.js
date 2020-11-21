const DBPool = require("./db");

class menuModel {
  static async getMenus() {
    const connection = await DBPool.getConnection();

    const [data] = await connection.query("select * from menu").catch((err) => {
      console.log(err);
      return;
    });

    connection.release();
    return data;
  }
  static async getMenuById(id) {
    const connection = await DBPool.getConnection();

    const [data] = await connection
      .query(`select * from menu where menuId=?`, [id])
      .catch((err) => {
        console.log(err);
        return;
      });
    connection.release();
    return data;
  }

  static async createMenu(body) {
    const { menuName, price } = body;
    const connection = await DBPool.getConnection();

    const [
      data,
    ] = await connection
      .query(`insert into menu (menuName, price) values (?, ?)`, [
        menuName,
        price,
      ])
      .catch((err) => {
        console.log(err);
        return;
      });
    connection.release();
    return data;
  }
  static async updateMenu(id, body) {
    const { menuName, price } = body;
    const connection = await DBPool.getConnection();

    const [
      data,
    ] = await connection
      .query(`update menu set menuName =?, price=? where menuId = ?`, [
        menuName,
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
      .query(`delete from menu where menuId=?`, [id])
      .catch((err) => {
        console.log(err);
        return;
      });
    connection.release();
    return data;
  }
}
module.exports = menuModel;
