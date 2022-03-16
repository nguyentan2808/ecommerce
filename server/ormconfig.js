module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: process.env.DB_PASSWORD,
  database: 'pickbazar',
  synchronize: true,
  logging: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
};
