# README

Dette prosjektet inneholder en backend-applikasjon som lar deg opprette, lese, oppdatere og slette brukere fra en MySQL-database. Du kan også teste API-et ved hjelp av Postman eller annen API-testingsverktøy.

Prosjektet er ikke helt ferdig enda, har ikke fått konsentrert meg om front end enda. 

## Hvordan installere og kjøre prosjektet 

1. Klon repoet til din lokale maskin ved å kjøre `gh repo clone rvgschr/nodejsmysql`.
2. Naviger inn i prosjektmappen med `cd prosjekt`.
3. Installer nødvendig avhengigheter ved å kjøre `npm install`.
4. Lag en `.env`fil og legg til konfigurasjonsvariabler som `DB_HOST`. `DB_USER`, `DB_PASSWORD` og `DB_NAME`.
5. Start applikasjonen ved å kjøre `npm run start`.

## Bruk

Applikasjonen vil kjøre på http://localhost:3000. Endepunkter kan nåes via et HTTP-klientverktøy som f.eks. Postman.

For å opprette en ny bruker, send en `POST` forespørsel til `/brukere`med følgende data i request-bodyen(raw):

{
    "firstName": "Ola",
    "lastName": "Nordmann",
    "email": "ola.nordmann@example.com",
    "password": "ditthemmligpassord"
}

## API endepunkter
* GET /brukere - henter alle brukere fra databasen
* POST /brukere - oppretter en ny bruker basert på dataen i forespørselens body


## Avhengigheter
* express: "^4.17.1"
* mysql2: "^2.3.0"
* dotenv: "^10.0.0"
* nodemon: "^2.0.22"

## Kjekt å vite
Husk at du først må sette opp MYSQL. Her er et bilde av min MYSQL, men kom ikke lengre enn at jeg fikk brukt "brukere". 

![drawSQL](https://github.com/rvgschr/nodejsmysql/blob/main/2023-04-13%2004_56_44-KeyShowView.png)
[https://drawsql.app/teams/chris-31/diagrams/nettbutikk](https://drawsql.app/teams/chris-31/diagrams/nettbutikk)
