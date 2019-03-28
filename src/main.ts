import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { join } from 'path';

async function bootstrap() {
	const app = await NestFactory.createMicroservice(AppModule, {
		transport: Transport.GRPC,
		options: {
			url: "localhost:50051",
			package: 'helloworld',
			protoPath: join(__dirname, 'hero/hero.proto'),
		},
	});
	await app.listenAsync();
}
bootstrap();
