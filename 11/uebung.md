# Übung 11

Die Museums-Anwendung soll heute um zwei Funktionen erweitert werden:

1. Die Detailansicht soll eine *Schließen*-Schaltfläche erhalten, die diese ausblendet.
2. Wir wollen eine einfache Filter-Funktion einbauen

Folgende Informationen könnten nützlich sein:

* [Event-Handling in VueJS](https://vuejs.org/v2/guide/events.html)
* [Filter-Methode für Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Beispiel für das Filtern eines Arrays:

```javascript
/**
 * Checks if "turm" is part of given string.
 */
function isATower(value) {
    return value.toLowerCase().indexOf("turm") !== -1
}

var towers = ["Eiffelturm", "Tower Bridge", "Freiheitsstatue", "Fernsehturm"].filter(isBigEnough);
// towers is ["Eiffelturm", "Fernsehturm"]
```

## Aufgabe

1. Füge in der Detailansicht eine Schaltfläche (*a* oder *button*) hinzu, die diese ausblendet. **Hinweis**: In den vergangenen Übungen hast du bereits Events per *v-on* getriggert. Es sollte hier im Grunde ähnlich funktionieren.
1. Erweitere die Anwendung um eine Filter-Funktion. Füge dazu ein Eingabefeld ein, in das ein Nutzer *einen Teil des Werk-Titels* eingeben kann. Wenn er das tut, sollen nur die Werke angezeigt werden, die diesen Text im Titel enthalten. Wurde nichts eingegeben, werden alle Werke angezeigt. **Hinweis**: In der Vorlesung haben wir eine gute Methode kennengelernt, um *data*-Properties für VueJS verfügbar zu machen, die auf komplexeren Berechnungen basieren.
