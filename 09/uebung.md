# Übung 9

Die folgende Übung kannst du online über [JSFiddle](https://jsfiddle.net) lösen. Kopiere einfach jeweils den HTML-Teil (nur das `div` mit der id `app` und dessen Unterelemente), CSS und JS in die entsprechenden Felder. Im JS-Feld musst du als Framework *VueJS (edge)* auswählen.

Alternativ kannst du dir auch einen Editor installieren (z.B. [Code](https://code.visualstudio.com) oder [Atom](https://atom.io)) und die JS- und HTML-Datei direkt bearbeiten. Des Resultat kannst du einfach im Browser öffnen (*index.html* öffnen).

Folgende Online-Informationen könnten hilfreich für dich sein:

* [Listen-Rendering in VueJS](https://vuejs.org/v2/guide/list.html)
* [Conditional Renderung in VueJS](https://vuejs.org/v2/guide/conditional.html)

## Aufgabe

In der Datei *index.html* ist derzeit eine statische Seite mit einer Liste von angebotenen Smartphones zu sehen. Diese soll nun dynamisch per VueJS gerendert werden.

Folgende Smartphones werden angeboten:

|Hersteller|Modell|Erscheinungsjahr|Angebot?|
|---|---|---|---|
|RIM|BlackBerry Bold 9900|2011|ja|
|BlackBerry|Z10|2013|nein|
|BlackBerry|Q10|2013|nein|
|Samsung|Galaxy S6|2015|ja|
|Samsung|Galaxy S7|2016|nein|
|Apple|iPhone SE|2016|ja|
|Apple|iPhone7|2016|nein|
|HTC|HTC A9|2015|ja|
|HTC|HTC 10|2016|ja|

1. Entwirf eine JSON-Datenstruktur, die die oben aufgeführte Liste von Smartphones speichern kann. Füge sie als `phones` im `data`-Bereich von VueJS ein.

1. Passe die HTML-Datei so an, dass die derzeit statische Liste alle Smartphones aus der `phones`-Variable per VueJS rendert. Das `span`-Element mit der HTML-Klasse `offer` soll nur dann gerendert werden, wenn das Telefon gerade im Angebot ist.
