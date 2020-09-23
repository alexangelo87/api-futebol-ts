import {Optional, Model, DataTypes} from 'sequelize';
import Database from '../services/database';
interface JogadorAttributes {
    id: number;
    name: string;
    preferredName: string | null;
}
  
  // Some attributes are optional in `Jogador.build` and `Jogador.create` calls
interface JogadorCreationAttributes extends Optional<JogadorAttributes, "id"> {}
  
class Jogador extends Model<JogadorAttributes, JogadorCreationAttributes> implements JogadorAttributes {
    public id!: number; // Note that the `null assertion` `!` is required in strict mode.
    public name!: string;
    public preferredName!: string | null; // for nullable fields

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}

Jogador.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      preferredName: {
        type: new DataTypes.STRING(128),
        allowNull: true,
      },
    },
    {
      tableName: "Jogadores",
      sequelize: Database.sequelize, // passing the `sequelize` instance is required
    }
);

export default Jogador;