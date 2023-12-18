CREATE TABLE IF NOT EXISTS users (
    id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
);

CREATE TABLE IF NOT EXISTS shots (
    id INT GENERATED ALWAYS AS IDENTITY,
    x REAL NOT NULL,
    y REAL NOT NULL,
    radius REAL NOT NULL,
    hit BOOLEAN NOT NULL,
    date TIMESTAMP NOT NULL,
    executiontime BIGINT NOT NULL,
    shooter TEXT NOT NULL
)