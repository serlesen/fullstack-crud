# CRUD Application made with Spring Boot and Angular

## Backend

The backend is made with the latest Spring Boot version, Java 17, JPA and a Postgres access.

I've also added Mapstruct and Lombok as code generators to create the mappers and builders.

To start the backend, run the following command:

```
cd backend
mvn spring-boot:run
```

### Local database

To create the local database, run the following command

```
docker run -d -e POSTGRES_HOST_AUTH_METHOD=trust -e POSTGRES_USER=backend -e POSTGRES_PASSWORD=backend -e POSTGRES_DB=backenddb -p 5432:5432 postgres:13
```

## Frontend

The frontend is made with the latest Angular version.

I've used the NgFrom module to create the forms.

For the styles, I've used the Materials dependencies.

To run the frontend, run the following command:

```
cd frontend
npm install
ng serve
```
