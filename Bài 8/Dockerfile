FROM postgres:15

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=
ENV POSTGRES_DB=myappdb

COPY init.sql /docker-entrypoint-initdb.d/init.sql

EXPOSE 5432
