import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';

@Module({
    imports: [DatabaseModule],
    controllers: [PaymentController],
    providers: [PaymentService],
})
export class PaymentModule { }
