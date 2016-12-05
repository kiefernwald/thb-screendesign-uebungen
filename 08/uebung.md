# Übung 8

Die folgende Übung kannst du online über [JSFiddle](https://jsfiddle.net) lösen. Kopiere einfach jeweils den HTML-Teil (nur das `div` mit der id `app` und dessen Unterelemente), CSS und JS in die entsprechenden Felder. Im JS-Feld musst du als Framework *VueJS (edge)* auswählen.

Alternativ kannst du dir auch einen Editor installieren (z.B. [Code](https://code.visualstudio.com) oder [Atom](https://atom.io)) und die JS- und HTML-Datei direkt bearbeiten. Des Resultat kannst du einfach im Browser öffnen (*index.html* öffnen).

* [Listen-Rendering in VueJS](https://vuejs.org/v2/guide/list.html)
* [Class-Binding in VueJS](https://vuejs.org/v2/guide/class-and-style.html)

## Aufgabe

In der Datei *index.html* ist derzeit eine statische Seite mit Daten für ein Smartphone zu sehen. Dieses soll per VueJS dynamisch gerendert werden.

1. Entwirf für die `smartphone`-Variable der VueJS-Data-Property in der Datei `app.js` ein JSON-Objekt, das *ein* Smartphone speichern kann. Es muss folgende Informationen zur Verfügung stellen:
    * Hersteller
    * Modell
    * Markteinführung (Jahr genügt)
    * Gibt es noch Updates? (ja/nein)

1. Passe die HTML-Datei so an, dass alle derzeit statischen Werte zum Telefon aus der `smartphone`-Variable der VueJS-Instanz bezogen werden. Wenn es noch Updates gibt, soll je nach Wert der entsprechenden Eigenschaft ein `span`-Element mit der Klasse `supported-yes` oder `supported-no` angezeigt werden. Diese sind in der CSS-Datei bereits gestyled.
