import { Sequelize } from 'sequelize-typescript';

export const databaseProviders = [
    {
        provide: 'Sequelize',
        useFactory: async () => {
            const sequelize = new Sequelize({
                // operatorsAliases:false,
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'issue',
                // modelPaths: [__dirname + '/../**/*.entity.ts'],//这3中方式都可以，需要model export default
            });
            // sequelize.addModels([Log, User, Article]);//这3中方式都可以
            sequelize.addModels([__dirname + '/../**/*.entity.ts']); // 这3中方式都可以，需要model export default
            await sequelize.sync();
            return sequelize;
        },
    },
];
