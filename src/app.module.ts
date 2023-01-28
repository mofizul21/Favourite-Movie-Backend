import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MovieModule } from './movie/movie.module';

@Module({
	imports: [
		MongooseModule.forRoot(
			'mongodb+srv://crudwithnest:qDcz5h9HVsW2jZco@cluster0.pir3rpf.mongodb.net/?retryWrites=true&w=majority'
		),
		//MongooseModule.forRoot('mongodb://localhost:27017/movie'),
		MovieModule,
		UserModule,
		AuthModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
// MongoDB username crudwithnest password qDcz5h9HVsW2jZco
// mongodb+srv://crudwithnest:qDcz5h9HVsW2jZco@cluster0.pir3rpf.mongodb.net/?retryWrites=true&w=majority