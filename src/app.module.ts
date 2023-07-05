/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mgarciavera7:david1146534244@cluster0.lzz0of5.mongodb.net/sample_analytics?retryWrites=true&w=majority'), CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
