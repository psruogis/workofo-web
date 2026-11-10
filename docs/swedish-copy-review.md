# Kontroll av svenska Workofo-texter

Kontrollerad och publicerad på Wix den 10 november 2026. Samtliga tio sidor i den bifogade HTML-filen har jämförts med den publicerade webbplatsen, även efter att diagrammens klientkomponenter laddats.

Underlag: `Workofo startsida.13.html` och `Workofo_Svensk_webb_avvikelser_till_Max_261110.docx`. HTML-filen packades upp på nytt; de tio sidornas textinnehåll stämde med tidigare extraherat underlag.

Resultat: 922 referenstexter kontrollerade. 835 återfinns ordagrant när radbrytningar, extra blanksteg och typografiska citattecken normaliseras. 87 poster gäller dokumenterade undantag nedan. Inga oförklarade avvikelser återstår i denna jämförelse. Sidtitel och metabeskrivning matchar underlaget på alla tio sidor.

| Sida | Referenstexter | Matchar | Dokumenterade undantag |
| --- | ---: | ---: | ---: |
| /se/startsida | 155 | 140 | 15 |
| /se/jobb | 28 | 26 | 2 |
| /se/kontakt | 53 | 53 | 0 |
| /se/boka-demo | 44 | 44 | 0 |
| /se/om-oss | 77 | 77 | 0 |
| /se/branscher/handel | 114 | 102 | 12 |
| /se/branscher/kontaktcenter | 116 | 104 | 12 |
| /se/branscher/flygplatser | 117 | 97 | 20 |
| /se/branscher/restauranger | 108 | 95 | 13 |
| /se/branscher/logistik | 110 | 97 | 13 |

## Rättningar i denna genomgång

- ”Cirka 12 %” på startsidan och ”5–15 %” på Om Workofo.
- Exakta följdtexter i branschsidorna för kontaktcenter, flygplatser, restauranger och logistik.
- Diagramförklaringar enligt respektive sidas underlag.
- Punktuation i applistor och tidsformat på Handel och Restauranger.
- Tele2-befattningen återställd till underlagets ”Sales Channels Operations Manager, Tele2”.
- Det extra Tele2-citatet och bildspelskontrollerna borttagna på svenska Handel. Den engelska sidan behåller båda citaten.
- Tolvveckorsfrågan placerad i samma ordning som i HTML-filens FAQ.

Tidigare rättningar har också verifierats: startsidans saknade stycken och FAQ-svar, formulärets Företag-etiketter och intervall, Om Workofos mellanrubrik, borttagen lorem ipsum, svenska diagramtexter och borttagna extra FAQ-svar.

## Bevarade beslut och tekniska undantag

- Simonas kontaktsektion är fortsatt dold enligt användarens senare instruktion.
- Den senare beställda CTA-designen används. Bokningsillustrationens exempelmeddelanden och tider återinförs inte. Den borttagna sekundära CTA-knappen återinförs inte.
- Jobbsidans nuvarande ersättningstext behålls tills Workofo har bekräftat uppgifterna.
- ”Visa fler frågor” visas inte där de extra, ej godkända FAQ-svaren har tagits bort.
- Bildanvisningar och filnamnsplatshållare i textunderlaget visas inte som webbcopy; befintliga bilder behålls.
- Diagrammens skalvärde 120.0 visas som 120. Kvarvarande engelsk lördagsetikett i Handels referensdiagram visas på svenska.
- Navigation och footer följer användarens senare instruktioner, inklusive kalkylatorlänk och alfabetisk sortering.

Produkt, blogg, kalkylator, enskilda platsannonser och policys ingår inte i HTML-filens tio sidor och ingår därför inte i denna textjämförelse. Inga formulär har skickats.

Publiceringen är gjord på Wix. Denna rapport är inte ett påstående om att ändringarna har pushats till GitHub.

## Uppföljning av den nya kontrollen överst i dokumentet

Den nya filen `Workofo_Svensk_webb_avvikelser_till_Max_261110 (1).docx` innehåller en ny status ovanför den äldre historiken. Den identifierade tre kvarvarande fel som nu har rättats och publicerats:

- Startsidan hade en annan footertext eftersom sidans H1-översättning slog igenom även där. Footern använder nu uttryckligen den godkända formuleringen på samtliga tio sidor.
- Demoetiketten innehöll U+0000 i rå HTML. Webbläsarens parsning dolde tecknet, vilket gjorde att den tidigare DOM-kontrollen inte upptäckte det. Ogiltiga NUL-tecken rensas nu före beräkning av översättningens källpositioner. Den exakta etiketten och rå HTML har verifierats efter publicering.
- ”Skriv till oss” på Om Workofo leder nu till `/se/kontakt`. Länken har klickats och rätt målsida verifierats.

Efterkontrollen av rå publicerad HTML på alla tio sidor hittade inga ogiltiga styrtecken. Samtliga footertexter stämmer ordagrant. Ett separat regressionstest verifierade att NUL-rensningen behåller formuleringar, länkar och SVG-kod.

Övriga punkter överst i den nya statusen kvarstår avsiktligt: ersättningsblocket inväntar bekräftelse enligt användarens beslut, flygplatskontaktblocket är uttryckligen dolt, och Henrik Salwéns porträtt, namnteckning och befattning kräver bekräftat material. Diagrammen har kontrollerats efter klientladdning; bokningsillustrationen och den extra CTA-knappen följer den senare beställda designen.

## Bekräftade rekryteringsuppgifter

Användaren har den 10 november 2026 bekräftat att timlön är korrekt och att möjligheten till optioner gäller båda rollerna. Det tidigare undantaget för ersättningsblocket upphävs. Svenska rekryteringssidan använder nu underlagets ”Lön och optioner” och ”Du får timlön och möjlighet till optioner i företaget.”
