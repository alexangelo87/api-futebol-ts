import {Sequelize} from 'sequelize';
import URL from '../config/databases';

class Database {
    public sequelize: Sequelize;
  constructor() {
    this.sequelize = new Sequelize(URL);
  }
}
export default new Database();