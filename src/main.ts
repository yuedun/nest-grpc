import { Transport } from '@nestjs/common/enums/transport.enum';
import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';
import { ServerCredentials } from 'grpc';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.createMicroservice(AppModule, {
		transport: Transport.GRPC,
		options: {
			url: 'localhost:50051',
			// url: 'www.yuedun.wang:50051',
			package: 'payment',
			protoPath: join(__dirname, 'server/payment/payment.proto'),
			// credentials: ServerCredentials.createSsl(fs.readFileSync(__dirname + '/keys/ssl.crt'), [{
			// 	cert_chain: fs.readFileSync(__dirname + '/keys/ssl.crt'),
			// 	private_key: fs.readFileSync(__dirname + '/keys/ssl.key'),
			// }], false),
		},
	});
	await app.listenAsync();
}
bootstrap();
