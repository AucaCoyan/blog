---
title: SQL
socialImage: images/sql.png
---

# SQL

SQL (pronounced 'see-qwel') is the currently most famous database language. As I need to learn it deeply in my current job, here are my side notes:

## SQL flavours

Because SQL is a really (and I mean REALLY) old language, it has developed different flavours. The most popular are:

- MySQL
- PostgreSQL. [Documentation](https://www.postgresql.org/docs/current/index.html)
- Oracle
- SQL Server, aka Microsoft SQL, aka T-SQL. [More about T-SQL](https://database.guide/what-is-t-sql/), [Syntax convention](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/transact-sql-syntax-conventions-transact-sql?view=sql-server-ver16).

Source: [this Medium post](https://towardsdatascience.com/the-many-flavours-of-sql-7b7da5d56c1e)

# Don't waste time with SQL Server

[Azure Data Studio](https://github.com/microsoft/azuredatastudio) is WAY better in terms of interface. If you are familiar with VS Code, it is a really close user experience.

# SQL Linters and formatters

- Azure Data Studio has one called `mssql`
- and browsing on the web I found [`sqlfluff`](https://docs.sqlfluff.com/en/stable/) which is a python package to lint many SQL problems in general.
- If you prefer an online formatter, here is one oldie but goodie: [SQLLint](https://github.com/mikoskinen/SQLLint). And its site [http://sqllint.com/](http://sqllint.com/)
