import {Sequelize} from 'sequelize';
import URL from '../config/databases';

class Database {
    public connection: Sequelize;
  constructor() {
    this.connection = new Sequelize(URL);
  }
}
export default new Database();