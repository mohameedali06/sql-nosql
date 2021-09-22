-- alter
select * from college;
alter table college add result varchar(10);
alter table college drop result;

-- modify
alter table college modify result int;
alter table college modify result varchar(10);


-- constraints
create table sales(
salesid int not null primary key,
salesname varchar(20),
address varchar(20)
);
create table sales(
salesid int not null primary key,
salesname varchar(20),
address varchar(20)
);

create table order_sales(
id int primary key,
productname varchar(15),
address varchar(15),
salesid int,
constraint FK_ORDER foreign key (salesid) references sales(salesid) );

select * from sales;
select * from order_sales;

delete from sales where salesid=1; /* cannot delete as it is connect to foriegn key */

select distinct  salesname, id, productname from sales s , order_sales o where s.salesid= o.salesid and s.salesname= 'vedh';
select * from sales s , order_sales o where s.salesid= o.salesid and s.salesname= 'vedh';

-- join
select s.salesid,s.salesname,s.address,p.id, p.productname from sales s inner join order_sales p on s.salesid=p.salesid;
select * from sales s inner join order_sales p on s.salesid=p.salesid;
select * from sales s left join order_sales p on s.salesid=p.salesid;
select * from sales s right join order_sales p on s.salesid=p.salesid;



