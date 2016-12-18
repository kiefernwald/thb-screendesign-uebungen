# Übung 12

Die Museums-Anwendung soll heute ein wenig optimiert werden: Für das Werk soll eine Component definiert werden.

Folgende Informationen könnten dafür nützlich sein:

* [Prop-Validation für VueJS-Components](https://vuejs.org/v2/guide/components.html#Prop-Validation)

Wie wir in der Vorlesung erfahren haben, stellen VueJS-Components eigene Events zur Verfügung. Diese würden auch die Standard-Events, wie `click` oder `submit` (z.B. bei Formularen) überschreiben. Um bei einer Component ein Standard-Event anstatt des Custom-Events zu triggern, kann man `.native` hinter den Event-Namen setzen:

```html
...
<div id="app">
    <user-info v-on:click.native="doSomething"></user-info>
</div>
...
```

## Aufgabe

1. Definiere eine neue Component (global oder für die lokale VueJS-Instanz verfügbar) für ein Werk
1. Die Component soll eine *prop* zur Verfügung stellen, die ein Werk (als komplettes Objekt) speichert
1. Die Component soll das *template* für ein Werk nutzen. Du kannst dieses zu großen Teilen aus dem bestehenden HTML-Code übernehmen.
1. Nutze die neue Component anstelle des bestehenden HTML-Codes, um ein einzelnes Werk zu rendern. Beachte dabei, dass man diese noch anklicken kann (siehe Hinweis oben)
1. **Bonus**: Füge eine weitere Component für die Detailansicht hinzu. Diese erhält das gerade ausgewählte Werk als Objekt übergeben und rendert die Detailansicht als Template. Es soll zudem ein Event `closed` feuern, wenn der Nutzer auf die jeweilige Schließen-Schaltfläche klickt, welches in der Haupt-Vue-Instanz behandelt wird.