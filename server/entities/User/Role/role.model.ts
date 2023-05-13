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

import { User } from '../user.model.ts';
import { roles } from './role.constants.ts';

import type { Roles } from './role.types.ts';

export class Role extends Model<
  InferAttributes<Role>,
  InferCreationAttributes<Role>
> {
  declare id: CreationOptional<number>;
  declare name: CreationOptional<Roles>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  // User many-to-many
  declare getUsers: BelongsToManyGetAssociationsMixin<User>;
  declare countUsers: BelongsToManyCountAssociationsMixin;
  declare hasUser: BelongsToManyHasAssociationMixin<User, number>;
  declare hasUsers: BelongsToManyHasAssociationsMixin<User, number>;
  declare setUsers: BelongsToManySetAssociationsMixin<User, number>;
  declare addUser: BelongsToManyAddAssociationMixin<User, number>;
  declare addUsers: BelongsToManyAddAssociationsMixin<User, number>;
  declare removeUser: BelongsToManyRemoveAssociationMixin<User, number>;
  declare removesUser: BelongsToManyRemoveAssociationsMixin<User, number>;
  declare createUser: BelongsToManyCreateAssociationMixin<User>;
}

const defaultName = 'user';
if (!roles.includes(defaultName)) {
  throw new Error('Incorrect default name value in role model!!!');
}

export const createRolesTable = (sequelize: Sequelize): typeof Role => {
  return Role.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        defaultValue: defaultName,
        validate: {
          isIn: [roles],
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
