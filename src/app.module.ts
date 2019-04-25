import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PaymentModule } from './server/payment/payment.module';

@Module({
	imports: [DatabaseModule, PaymentModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
