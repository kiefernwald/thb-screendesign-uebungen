# Übung

1. Erweitere Übung 6 um ein Eingabefeld, in das man den eigentlichen Eintrag, der in die Liste hinzugefügt werden soll, eingeben kann.

1. Man möchte außerdem nicht immer nur den letzten Eintrag löschen. Füge eine Schaltfläche für jeden Eintrag hinzu, die diesen entsprechend entfernt.

1. (*Bonus*) Entwickle auch eine "Bearbeiten"-Funktion für Elemente!

Folgende Informationen sind für diese Aufgabe nützlich:

* Jedes Element in einem Array hat einen bestimmten index, mit dem es angesteuert werden kann. Der erste Eintrag hat dabei den Index 0:

```
var test = ["Eintrag eins", "Eintrag zwei", "Eintrag drei"];
var ersterEintrag = test[0]; // Enthält jetzt "Eintrag eins"
var zweiterEintrag = test[1]; // Enthält jetzt "Eintrag zwei"
```

* Ein bestimmtes Array-Element kann mit der Funktion *splice* gelöscht werden ([Dokumentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)). Beispiel:

```
var test = ["Eintrag eins", "Eintrag zwei", "Eintrag drei"];
test.splice(1, 1); // Löscht "Eintrag zwei"
```

* VueJS erlaubt es beim v-for-Ausdruck, neben dem eigentlichen Eintrag auch den Index auszugeben:

```
<li v-for="(item, index) in todo">
...
```
