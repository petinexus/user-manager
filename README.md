## Gyakornoki program - Attrecto

Voznek Péter NestJS gyakornoki program feladatsor

###### Kifejtős kérdések:

Mi az OOP?
Az objektum-orientált programozás egy olyan programozási módszer, amelynek az alapja az objektum, ami leírja az egyes programrész feladatát. Az objektum állapotát adattagokkal, viselkedését pedig metódusokkal (tagfüggvényekkel) tudjuk leírni. Az objektum-orientált program: egymással kommunikáló objektumok összessége, melyben minden objektumnak megvan a jól meghatározott feladata. Az OOP alapelvei: egységbezárás, absztrakció, öröklődés, sokalakúság.

Mi az öröklés?
Az osztályokhoz az öröklődéssel alosztályokat rendelhetünk. Az örökléssel származtatott (gyerek) osztály megkapja az ős (szülő) osztály minden attribútumát, és metódusát, de ezeket bizonyos szabályok mellett újakkal egészítheti ki, és meg is változtathatja őket.

Mi az a RESTful?
A REST-et olyan webszolgáltatások létrehozására használják, amelyek könnyűek, karbantarthatók és skálázhatók. A REST architektúrára épülő szolgáltatást RESTful szolgáltatásnak nevezzük. A REST mögöttes protokollja a HTTP, amely az alapvető webes protokoll. A REST a Representational State Transfer (reprezentációs állapotátvitel) rövidítése.

Milyen HTTP metódusokat ismersz? 
GET, POST, PUT, DELETE, TRACE.

Mi az a JWT? Mire használjuk és hogyan? 
A JWT vagy JSON Web Token egy nyílt szabvány, amelyet két fél egy kliens és egy szerver közötti biztonsági információk megosztására használnak. Minden JWT kódolt JSON objektumokat tartalmaz, köztük egy sor követelést. A JWT-ket egy kriptográfiai algoritmus segítségével írják alá annak biztosítására, hogy az állítások a token kiadása után ne legyenek módosíthatók.

Milyen adattípusok vannak TSben?
Number, string, boolean, enum.

Mi a különbség a globálisan és lokálisan telepített node csomagok között?
Lokális telepítésnél az aktuális könyvtárban létrehoz egy node_modules könyvtárat és ebbe fogja a szükséges modulokat letölteni. Abban az esetben, ha készítünk egy alkalmazást, tudunk hivatkozni az adott modulra. Ellenben, ha kilépünk ebből a könyvtárból és egy másikban készítünk el egy programot, akkor ott már nem tudunk erre lokálisan telepített modulra hivatkozni.
Globális telepítésnél egy előre definiált könyvtárba kerülnek a csomagok és innen bármelyik Node alkalmazásunk eléri.

Mire szolgál a package.json?
Az npm projektek leírófájlja, fontos információkat tartalmaz a projektről. Olvasható metaadatokat tartalmaz a projektről (például a projekt nevét és leírását), valamint funkcionális metaadatokat, például a csomag verziószámát és az alkalmazás által igényelt függőségek listáját.
