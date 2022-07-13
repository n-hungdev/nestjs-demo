// Language: typescript
// Path: src\database\database.provide.ts
import { Pool } from 'pg';
import { PG_CONNECTION } from 'src/constants';

const DB_PROVIDER = {
  provide: PG_CONNECTION,
  useValue: new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'matkhau',
    port:
    
    
    
    5432,
     ssss */
  }),
};

export { DB_PROVIDER };
