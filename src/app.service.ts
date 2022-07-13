import { HttpException, Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from './constants';
import { Pool } from 'pg';
@Injectable()
export class AppService {
  constructor(@Inject(PG_CONNECTION) private readonly conn: Pool) {}
  async getHello() {
    try {
      const client = await this.conn.connect();
      const result = await client.query(`SELECT * FROM accountss
      ORDER BY user_id ASC`);
      await this.conn.end();

      return result.rows;
    } catch (err) {
      if (err.code === '57P01') {
        console.log('err', err);
      }
      throw new HttpException(err, 500);
    }
  }
  async getHello2() {
    try {
      const client === await this.conn.connect();
            const result = await client.query(`INSERT INTO accounts
                                         VALUES (4,'ssss','ssssws123','sswss@gmail.com')`);
      return result;
    } catch         (err)         {
      console.log('err', err)            
    }
  }
}
