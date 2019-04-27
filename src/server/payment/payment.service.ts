import { Inject, Injectable } from '@nestjs/common';
import { any, map } from 'bluebird';
import { Sequelize } from 'sequelize';
import { QueryTypes } from 'sequelize';

@Injectable()
export class PaymentService {
    constructor(
        @Inject('Sequelize')
        private readonly sequelize: Sequelize,
    ) { }

    async hello(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve('hello world');
        });
    }
    async getNewStudentPayments({
        userId,
        pageNo = 1,
        pageSize = 10,
    }: {
        userId: number,
        pageNo?: number;
        pageSize?: number;
    }): Promise<any> {

        const sql = `SELECT * FROM user WHERE id=:userId`;

        return Promise.resolve(this.sequelize.query(sql, { replacements: { userId }, type: QueryTypes.SELECT }));
    }
}
