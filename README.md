## Sequelize with PostgreSQL and Nodejs

### Users table creation
```
create table "Users"(id serial primary key,
"firstName" varchar(30),"lastName" varchar(30), email varchar(30),
"createdAt" timestamp without time zone not null default (current_timestamp at time zone 'UTC'),"updatedAt" timestamp without time zone default (current_timestamp at time zone 'UTC'));
```

