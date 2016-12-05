# Übung 10

Wir wollen mit einer einfachen Variante der Museums-App beginnen. Sie soll in dieser Übung folgendes erfüllen:

* Eine Liste von Werken per HTML rendern
* Wenn ein Werk angeklickt wurde, sollen weitere Informationen dazu angezeigt werden

Ein Werk soll folgende Informationen zur Verfügung stellen:

* Titel
* Künstler
* Zeitraum der Erschaffung (dies kann sowohl ein Jahr als auch eine ungenaue Angabe – etwa *17. Jhd.* – sein)
* URL zum Bild
* Beschreibungstext

Folgende Bilder können als Beispiele dienen:

|Titel|Künstler|Zeitraum|Bild-URL|Beschreibung|
|---|---|---|---|---|
|Die Nachtwache|Rembrandt van Rijn|1642|works/rembrandt_nachtwache.jpg|Das Bild zeigt 34 Personen – davon 18 Schützen und 16 weitere Figuren. Im Vordergrund stehen der Hauptmann und sein Leutnant. Zwei hell erleuchtete Figuren in gelber Kleidung beherrschen den Bildaufbau: ein Mädchen im Mittelgrund und der Leutnant im Vordergrund.|
|Dienstmagd mit Milchkrug|Jan Vermeer|1658-1660|works/vermeer_dienstmagd.jpg|Im Zentrum des Bildes steht die Frau im Lichteinfall durch ein Fenster auf der linken Seite. Vor ihr befindet sich im linken Bildvordergrund, unter ebendiesem Fenster, ein Tisch, bedeckt mit einem Tuch und bestückt mit einem Brotkorb, einer Kanne und weiteren Speisen. Zudem steht auf dem Tisch eine Schale, in die die Magd Milch eingießt. Ihr Blick ist gesenkt, auf die Tätigkeit konzentriert. Ihre Kleidung wurde in leuchtenden, bunten Farben gemalt. Das gelbe Oberteil steht dabei im Kontrast zum Blau der Schürze, unter der ein langer roter Rock hervorschaut. Der Raum im Hintergrund ist spartanisch eingerichtet, die Rückwand leer und mit erkennbaren Löchern versehen, was ihr den Anschein einer Benutzung über lange Zeit verleiht.|
|Selbstbildnis mit grauem Filzhut|Vincent van Gogh|1887|works/gogh_selbstbildnis_filzhut.jpg|Selbstbildnis Van Goghs mit hellem Filzhut, in braunem Überrock|

Folgende Informationen könnten nützlich sein:

* [Listen-Rendering in VueJS](https://vuejs.org/v2/guide/list.html)
* [v-bind-Direktive in VueJS](https://vuejs.org/v2/api/#v-bind)
* [Event-Handling in VueJS](https://vuejs.org/v2/guide/events.html)

## Aufgabe

1. Erstelle die Dateistruktur für das Projekt (du kannst die vergangenen Übungen als Inspirationsquelle nutzen):
    * eine index.html-Datei (Standard HTML5 mit `head`- und `body`-Elementen)
    * lade VueJS herunter ([hier rechtsklicken und speichern](https://vuejs.org/js/vue.js)) und speichere es im Projektordner
    * eine Haupt-JavaScript-Datei (`app.js`)
1. Binde VueJS im Header-Bereich der HTML-Datei ein (`<script src="vue.js"></script>`)
1. Erzeuge ein `div`-Element im `body` der HTML-Datei und gib ihr die id `app`
1. Binde die beiden JavaScript-Datei in der HTML-Datei als letztes Element des `body`-Elements ein
1. Initialisiere eine neue VueJS-Instanz in der Datei `app.js`. Nenne die Variable, der sie zugewiesen wird, `vm`. Sie soll für das Element mit der id `app` und all dessen Unterelemente nutzbar sein.
1. Definiere die JSON-Struktur für die Werke in der VueJS-Data-Eigenschaft
1. Lasse die Elemente als HTML-Struktur rendern. Gib zunächst nur die Bilddatei (`img`-Element), den Namen und den Künstler aus.
1. Füge ein Event hinzu, wenn eines der Werks angeklickt wird. Es soll dann in einem Bereich für das *aktuell ausgewählte Werk* angezeigt werden, in dem alle Informationen, auch das Erscheinungsjahr und der Beschreibungstext, angezeigt werden.