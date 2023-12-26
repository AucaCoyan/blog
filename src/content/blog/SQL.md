---
title: SQL
description: the most popular DB language
pubDate: "Jul 01 2022"
heroImage: "/images/sql.png"
---

SQL (pronounced 'see-qwel') is the currently most famous database language. As I need to learn it deeply in my current job, here are my side notes:

## Learning

- If you ever need to do a slighty complex query, I recommend you to watch [this video](https://www.youtube.com/watch?v=Vy8NRI24aXg) first. Doug does a great job at going step by step to design a complex query.

## SQL flavours

Because SQL is a really (and I mean REALLY) old language, it has developed different flavours. The most popular are:

- MySQL
- PostgreSQL. [Documentation](https://www.postgresql.org/docs/current/index.html)
- Oracle
- SQL Server, aka Microsoft SQL, aka T-SQL. [More about T-SQL](https://database.guide/what-is-t-sql/), [Syntax convention](https://learn.microsoft.com/en-us/sql/t-sql/language-elements/transact-sql-syntax-conventions-transact-sql?view=sql-server-ver16).

Source: [this Medium post](https://towardsdatascience.com/the-many-flavours-of-sql-7b7da5d56c1e)

## Format and Lint SQL

Because of the different SQL dialects, there isn't much consensus on how to format queries. Even in different companies tried to make a standard, but only for their own dialect, so it's useless once you move to another SQL flavour.

I hate to format my code manually, one of the first things I lookup is a formatter and a linter (if it even exist).

So far, the best I have found browsing on the web is [`SQLFluff`](https://docs.sqlfluff.com/en/stable/) which is a python package to format and lint many SQL problems in general.

It also has a webpage to format simple queries. [http://online.sqlfluff.com](http://online.sqlfluff.com)

If you are looking for an alternative [sqlfmt](https://www.cockroachlabs.com/blog/sql-fmt-online-sql-formatter/) is a good customizable webapp.

source: [SQLFluff - The linter for modern SQL](https://towardsdatascience.com/sqlfluff-the-linter-for-modern-sql-8f89bd2e9117)

## Tips and tricks

### Is there a way to do `SELECT BOTTOM 5`?

Yes and no.

[By definition](https://en.wikipedia.org/wiki/Table_%28database%29#Tables_versus_relations), there is no strict order in rows. This means that _unless you have a key ID_, you can't assume the rows are ordered in some way. Because of this issue, this opens 2 ways of solving the problem:

- If you _can_ order the rows, (for example, by creation/modification date, or by ID if you have one) you can do it with `ORDER BY column_name DESC`:

```sql
SELECT TOP 10 FROM dbo.my_table ORDER BY column_name DESC
```

- But, if you have a table that can not be ordered, yo need to do this:

```sql
DECLARE
    @bottom int,
    @count int

SET @bottom = 1000
SET @count = (SELECT COUNT(*) FROM Employee)

SELECT * FROM
    Employee AS emp WHERE emp.EmployeeID NOT IN
(
    SELECT TOP (@count - @bottom) Employee.EmployeeID FROM Employee
)
```

source: [This clever answer of stackoverflow](https://stackoverflow.com/a/30011491/8552476)

## Don't waste time with SQL Server

SQL Server Management Studio is the preferred choice for T-SQL and Azure Databases. Nontheless, you can run [Azure Data Studio](https://github.com/microsoft/azuredatastudio) if you have SQL Management Studio installed. Azure Data Studio is WAY better in terms of interface. If you are familiar with VS Code, it is a really close user experience.

If you want a comparison, [here is one done by Microsoft docs](https://learn.microsoft.com/en-us/sql/azure-data-studio/what-is-azure-data-studio?view=sql-server-ver16).
