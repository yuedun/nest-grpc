import { Module } from "@nestjs/common";
import { PaymentController } from "./payment.controller";
import { PaymentService } from "./payment.service";
import { DatabaseModule } from "../../database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [PaymentController],
    providers: [PaymentService],
})
export class PaymentModule { }