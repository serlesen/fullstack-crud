# CRUD Application made with Spring Boot and React

## Backend

The backend is made with the Spring Boot version 3.2.2, Java 21, JPA and a Postgres access.

I've also added Mapstruct and Lombok as code generators to create the mappers and builders.

To start the backend, run the following command:

```
cd backend
mvn spring-boot:run
```

### Local database

To create the local database, run the following command

```
docker run -d -e POSTGRES_HOST_AUTH_METHOD=trust -e POSTGRES_USER=backend -e POSTGRES_PASSWORD=backend -e POSTGRES_DB=backenddb -p 5434:5432 postgres:14
```

## Frontend

The frontend is made with the ReactJS version 18.0.4 and Node v20.2.0.

To run the frontend, run the following command:

```
cd frontend
npm install
nx serve
```
