-- In the db folder, create a file named schema.sql. Write SQL queries this file that do the following:
    -- Create the burgers_db.
    -- Switch to or use the burgers_db.
    -- Create a burgers table with these fields:
        -- id: an auto incrementing int that serves as the primary key.
        -- burger_name: a string.
        -- devoured: a boolean.
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    burger_name VARCHAR(75) NOT NULL,
    devoured BOOLEAN false;
)