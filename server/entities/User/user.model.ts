import { v4 as uuidV4 } from 'uuid';
import {
  Sequelize,
  Model,
  DataTypes,
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  BelongsToManyGetAssociationsMixin,
  BelongsToManyCountAssociationsMixin,
  BelongsToManyHasAssociationMixin,
  BelongsToManyHasAssociationsMixin,
  BelongsToManySetAssociationsMixin,
  BelongsToManyAddAssociationMixin,
  BelongsToManyAddAssociationsMixin,
  BelongsToManyRemoveAssociationMixin,
  BelongsToManyRemoveAssociationsMixin,
  BelongsToManyCreateAssociationMixin,
} from 'sequelize';
import { Role } from './Role/role.model.ts';

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: CreationOptional<number>;
  declare fullName: string;
  declare email: string;
  declare password: string;
  declare sessionKey: CreationOptional<string>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  // Role many-to-many
  declare getRoles: BelongsToManyGetAssociationsMixin<Role>;
  declare countRoles: BelongsToManyCountAssociationsMixin;
  declare hasRole: BelongsToManyHasAssociationMixin<Role, number>;
  declare hasRoles: BelongsToManyHasAssociationsMixin<Role, number>;
  declare setRoles: BelongsToManySetAssociationsMixin<Role, number>;
  declare addRole: BelongsToManyAddAssociationMixin<Role, number>;
  declare addRoles: BelongsToManyAddAssociationsMixin<Role, number>;
  declare removeRole: BelongsToManyRemoveAssociationMixin<Role, number>;
  declare removesRole: BelongsToManyRemoveAssociationsMixin<Role, number>;
  declare createRole: BelongsToManyCreateAssociationMixin<Role>;
}

export const createUsersTable = (sequelize: Sequelize): typeof User => {
  return User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sessionKey: {
        type: DataTypes.STRING,
        defaultValue: uuidV4(),
        validate: {
          isUUID: 4,
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
    },
    {
      sequelize,
    },
  );
};
