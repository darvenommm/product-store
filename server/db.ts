import * as dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import {
  createUsersTable,
  createRolesTable,
  createProductsTable,
} from '#entities';

const isDev = process.env.MODE === 'development';
const isProd = process.env.MODE === 'production';

const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_PORT = Number(process.env.DB_PORT) ?? 5432;
const DIALECT = 'postgres';

export const db = new Sequelize({
  database: DB_NAME,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  dialect: DIALECT,
  logging: false,
});

const createAdmin = async (): Promise<void> => {
  const admin = await Users.create({
    fullName: 'admin',
    password: 'super|secret|password|in|world',
    email: 'admin@gmail.com',
  });

  await admin.addRoles([
    await Roles.create(),
    await Roles.create({ name: 'admin' }),
  ]);
};

export const Users = createUsersTable(db);
export const Roles = createRolesTable(db);
export const Products = createProductsTable(db);

// many-to-many
const USERS_ROLES = 'Users_Roles';
Users.belongsToMany(Roles, { through: USERS_ROLES, onDelete: 'SET NULL' });
Roles.belongsToMany(Users, { through: USERS_ROLES, onDelete: 'SET NULL' });

export const createDatabase = async (): Promise<void> => {
  await db.sync({ force: isDev, alter: isProd });
  await createAdmin();
};
