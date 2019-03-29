import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }

	@GrpcMethod('Greeter')
	sayHello(data: HelloRequest, metadata: any): HelloReply {
		console.log(data);
		const d = this.appService.getHello();
		console.log(d);

		return { message: '>>>>>>>>>>>>>hello:' + data.name };
	}
	@GrpcMethod('Greeter')
	sayHello2(data: HelloRequest, metadata: any): HelloReply {
		console.log(data);
		return { message: '>>>>>>>>>>>>>hello:' + data.name };
	}
	@GrpcMethod('Greeter')
	sayHello3(data: HelloRequest, metadata: any): HelloReply {
		console.log(data);
		return { message: '>>>>>>>>>>>>>hello:' + data.name };
	}
}

interface HelloRequest {
	name: string;
}

interface HelloReply {
	message: string;
}
