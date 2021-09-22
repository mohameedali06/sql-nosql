-- database creation
create database people;
 
-- to go inside database
use people;
-- creating table1 along with columns
create table school(
id int primary key ,
names varchar(45),
deptid int ,
deptname varchar(45) )  ;

-- inserting data into the column
insert into school values(1,'raj',1,'cse'),(2,'arun',2,'comerce'),(3,'siva',3,'bio'),(4,'kumar',4,'maths'),(5,'sekar',5,'biomaths'),(6,'alex',6,'accounts');

-- to display the table
SELECT * from school;

-- creating table2 along with columns
create table college(
id int primary key ,
names varchar(45),
deptid int ,
deptname varchar(45) )  ;

-- inserting data into the column
insert into college values(1,'siva',1.0,'cse'),(2,'raj',2.0,'ece'),(3,'kumar',3.0,'eee'),(4,'arun',4.0,'mech');
insert into college(id,names,deptid,deptname) values(5,'vardhan',5.0,'it'),(6,'pradeep',6.0,'it');

-- where 
select * from school where id=2;
select * from school where id >1 and id <5;
select * from school where id >1 or id <5;
select * from school where names= 'siva';

-- alias
select id as newid from school;

-- orderby
select * from school order by names asc;
select * from school order by id desc;
-- where and orderby
select * from school where id>3 order by id desc;

-- count
select count(*) from school;
-- count with alias
select count(*) as total from school;

-- distinct
select distinct id from school;

-- select
select * from college;
select * from  college d, school s  where s.deptid =4;
select s.* from college d, school s where s.id >=1 and d.deptname='cse' and s.deptid=d.deptid;

-- subquery
select deptid from college where deptname= 'cse';
select * from school where deptid = (select deptid from college where deptname= 'cse');

select deptid from school where deptname='cse'|| deptname='ece';
select * from college where deptid in (select deptid from school where deptname='cse'|| deptname='ece');

-- delete,drop,update 
delete from school where deptid=6;
drop table school;
update college set deptid=7 where id='7';