# Lag en enkel nettbutikk 

Mål: Se litt nærmere på backend-utvikling, spesielt bruk av Node.js og MySQL. 

Beskrivelse:
Du skal lage en enkel nettbutikk som selger produkter. For å gjøre dette, vil du lære om å koble opp Node.js og MySQL, og bygge videre på det du allere kan om å lage databser, tabeller og sette inn data. Du vil også bruke ES-moduler og dotenv for å sikre konfidensialitet i passord og annen sensitiv informasjon.

Oppgave
1. Begynn med å sette opp en MySQL-database og koble til fra Node.js ved hjelp av mysql2-biblioteket. For å sikre konfidensialiteten i passord og annen sensitiv informasjon, er det viktig å bruke dotenv.
2. Når databasen er på plass, opprett en tabell for brukere med kolonnene id, navn, e-post og passord.
3. For å håndtere CRUD-operasjoner mot brukertabellen, kan du lage en modell i Node.js.
4. Implementer en rute i Express.js som lar deg hente ut alle brukere fra databasen (GET /brukere). Ruten skal returnere data om alle brukerne i JSON-format. Du kan også legge til en rute for å opprette en ny bruker (POST /brukere). Ruten skal motta data om en ny bruker som JSON og legge den inn i databasen. Dataen om den nye brukeren, inkludert det nye id-feltet som er generert av databasen, skal returneres som JSON.

Når du har implementert grunnfunksjonaliteten, kan du utvide applikasjonen:
1. Opprett en rute i Express.js som lar deg hente ut data om en spesifikk bruker (GET /brukere/:id). Ruten skal returnere data om den spesifikke brukeren i JSON-format.
2. Implementer en rute i Express.js som lar deg oppdatere data om en eksisterende bruker (PUT /brukere/:id). Ruten skal motta data om den oppdaterte brukeren som JSON og oppdatere dataen i databasen. Dataen om den oppdaterte brukeren skal returneres som JSON.
3. Legg til en rute i Express.js som lar deg slette en eksisterende bruker (DELETE /brukere/:id). Ruten skal slette den angitte brukeren fra databasen og returnere en JSON-objekt som indikerer om operasjonen var vellykket eller ikke.
4. For å gjøre applikasjonen mer brukervennlig, kan du utvikle en enkel HTML/CSS/JavaScript-front-end som lar brukeren hente ut alle brukere fra serveren og vise resultatene i et intuitivt grensesnitt.

Punkter som alle skal tenke på:
* Organiser applikasjonen din ved å ha en klar mappestruktur som gir mening for prosjektet ditt. Dette kan gjøre det enklere å finne og vedlikeholde filene dine senere.
* Sørg for å sikre sensitiv informasjon som passord ved å bruke dotenv-filer.
* Lag en god databasestruktur som samsvarer med dataene du skal lagre. Dette vil gjøre det enklere å hente og oppdatere dataene i fremtiden.
* Bruk bibliotek og rammeverk som kan hjelpe deg med å redusere arbeidsmengden og feilene som kan oppstå i prosessen. For eksempel kan du bruke biblioteket mysql2 for å koble deg til MySQL-databasen og Express.js for å lage enkel og rask ruting.
* Sørg for å ha klare og forståelige navn på variabler, funksjoner og andre deler av koden din. Dette vil gjøre koden enklere å lese og vedlikeholde.

Punkter som du bør tenke på om du kommer litt lengre i oppgaven:
* Tester koden din grundig for å sikre at den fungerer som forventet og at det ikke er noen feil eller bugs.
* Lag en enkel og brukervennlig front-end som gir en god opplevelse for brukeren. Sørg for at det er lett å navigere, og at funksjonaliteten er intuitiv.
* Implementer sikkerhetsprinsipper som autentisering og autorisering for å beskytte brukerdata og forhindre uautorisert tilgang til systemet.

// Christoffer
