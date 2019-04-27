import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { PaymentService } from './payment.service';

@Controller()
export class PaymentController {
    constructor(private paymentService: PaymentService) { }

    @GrpcMethod('PaymentService')
    async sayHello(data: any, metadata: any): Promise<any> {
        console.log(data);
        const d = await this.paymentService.hello();
        console.log(d);
        return { message: d };
    }
    @GrpcMethod('PaymentService')
    async getNewStudentPayments(data: any, metadata: any): Promise<any> {
        const d = await this.paymentService.getNewStudentPayments({
            userId: 2,
            pageNo: 1,
            pageSize: 2,
        });
        console.log(d);

        return d;
    }
}
