## Gyakornoki program - Attrecto

Voznek Péter NestJS gyakornoki program feladatsor

###### Kifejtős kérdések:

Mi az OOP?
Objektum-orientált programozás (vagy OOP) egy olyan programozási paradigma, amelyben a programokat objektumok körül írják és szerkesztik, nem pedig funkciók vagy logika helyett. Az objektumokat itt olyan adatmezőkként definiálják, amelyek egyedi attribútumokkal és viselkedéssel bírnak. Adatokat tartalmaznak attribútumok és eljárások módszerek formájában. Az objektumeljárások hozzáférhetnek és módosíthatnak egy objektumban található adatokat. Az OOP alapelvei: kapszula, absztrakció, öröklés, polimorfizmus.

Mi az öröklés?
Az objektumok gyakran funkcionálisan hasonlóak, megosztják a logika egy részét, de a többiben különböznek. Tehát hogyan használhatjuk újra a közös logikát, és elválaszthatjuk a különböző logikákat? Ez örökléssel érhető el. Az öröklés során létrehozunk egy új osztályt, amelyet gyermekosztálynak nevezünk, amelyet a meglévő, szülőosztálynak nevezett osztályból származtatunk, ezáltal osztályok hier0archy-ját képezve. A gyermekosztály újrafelhasználja az adatmezőket és módszereket, amelyeket a szülőosztálytól megkövetel, és egyedülálló módon valósítja meg egyedi funkcióit.

Mi az a RESTful?
A RESTful API egy olyan alkalmazásprogram-interfész ( API ) architekturális stílusa, amely HTTP-kéréseket használ az adatok eléréséhez és felhasználásához. Ezek az adatok használhatók GET, PUT, POST és DELETE adattípusok beszerzésére, ami az erőforrásokkal kapcsolatos műveletek olvasására, frissítésére, létrehozására és törlésére vonatkozik.
Azokat a rendszereket, amelyek eleget tesznek a REST megszorításainak, "RESTful"-nak nevezik.

Milyen HTTP metódusokat ismersz? 
GET, POST, PUT, DELETE, TRACE

Mi az a JWT? Mire használjuk és hogyan? 
A JWT vagy JSON Web Token egy nyílt szabvány, amelyet két fél egy kliens és egy szerver közötti biztonsági információk megosztására használnak. Minden JWT kódolt JSON objektumokat tartalmaz, köztük egy sor követelést. A JWT-ket egy kriptográfiai algoritmus segítségével írják alá annak biztosítására, hogy az állítások a token kiadása után ne legyenek módosíthatók.

Milyen adattípusok vannak TSben?
Number, string, boolean, enum.

Mi a különbség a globálisan és lokálisan telepített node csomagok között?
Lokális telepítésnél az aktuális könyvtárban létrehoz egy node_modules könyvtárat és ebbe fogja a szükséges modulokat letölteni. Abban az esetben, ha készítünk egy alkalmazást, tudunk hivatkozni az adott modulra. Ellenben, ha kilépünk ebből a könyvtárból és egy másikban készítünk el egy programot, akkor ott már nem tudunk erre lokálisan telepített modulra hivatkozni.
Globális telepítésnél egy előre definiált könyvtárba kerülnek a csomagok és innen bármelyik Node alkalmazásunk eléri.

Mire szolgál a package.json?
Az npm projektek leírófájlja, fontos információkat tartalmaz a projektről. Olvasható metaadatokat tartalmaz a projektről (például a projekt nevét és leírását), valamint funkcionális metaadatokat, például a csomag verziószámát és az alkalmazás által igényelt függőségek listáját.
