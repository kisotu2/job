CREATE DATABASE Job

CREATE TABLE users (
    id int(50) auto_increment primary key,
    full_name varchar(100) not null,
    email_address varchar(200) not null,
    password varchar(255) not null,
    confirm_password varchar (255) not null,
    job_category varchar(155) not null,
    image varchar(200),
    cv varchar (100)
);

CREATE TABLE organisation (
    organisation_id int(50) auto_increment primary key,
    name varchar (200) not null,
    email_address varchar(255) not null,
    password varchar(200) not null,
    confirm_password varchar(200) not null,
    organisation_manager varchar(100) not null
);

CREATE TABLE admin(
    id int(40) auto_increment primary key,
    full_name varchar(100) not null,
    email_address varchar (255) not null,
    password varchar (200) not null,
    confirm_password varchar(200) not null 
    );