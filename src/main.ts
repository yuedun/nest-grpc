import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { join } from 'path';
import * as fs from 'fs';
import { ServerCredentials } from 'grpc';

async function bootstrap() {
	const app = await NestFactory.createMicroservice(AppModule, {
		transport: Transport.GRPC,
		options: {
			url: 'localhost:50051',
			package: 'helloworld',
			protoPath: join(__dirname, 'hero/hero.proto'),
			credentials: ServerCredentials.createSsl(fs.readFileSync(__dirname + '/keys/ssl.crt'), [{
				cert_chain: fs.readFileSync(__dirname + '/keys/ssl.crt'),
				private_key: fs.readFileSync(__dirname + '/keys/ssl.key'),
			}], true),
		},
	});
	await app.listenAsync();
}
bootstrap();
