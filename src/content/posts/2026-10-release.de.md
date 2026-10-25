---
title: Herbst-Release
path: 2026-10-release
pubDate: 2026-10-25
description: Kommentare, die neuen J+S-Regeln ab 2027 und vieles mehr
image: "~/assets/images/2026-10-release.png"
---

Das Herbst-Release bringt zwei grosse Neuerungen: Ihr könnt euch in eCamp neu gegenseitig Kommentare hinterlassen und eCamp unterstützt die neuen J+S-Regeln, die ab 2027 gelten. Dazu kommen einfachere Einladungen, mehr Sicherheit für euer Konto und zahlreiche Verbesserungen und Fehlerbehebungen.

## Kommentare
Eines der meistgewünschten Features ist endlich da: **Kommentare**. Alle Personen, die in einem Lager mitwirken, auch Gäste, können bei einzelnen Aktivitäten oder beim ganzen Lager Kommentare schreiben. So könnt ihr Rückmeldungen zu einer Aktivität direkt dort festhalten, statt sie in Chats oder E-Mails zu suchen. [#828](https://github.com/ecamp/ecamp3/issues/828){.issuelink} [#7230](https://github.com/ecamp/ecamp3/pull/7230){.issuelink} [#8131](https://github.com/ecamp/ecamp3/pull/8131){.issuelink} [#7226](https://github.com/ecamp/ecamp3/pull/7226){.issuelink} [#10454](https://github.com/ecamp/ecamp3/pull/10454){.issuelink} [#11066](https://github.com/ecamp/ecamp3/pull/11066){.issuelink}

- Über den Kommentar-Button öffnet ihr die Kommentare zur aktuellen Aktivität oder zum ganzen Lager.
- Auf Kommentare kann geantwortet werden, sodass ganze Diskussionen übersichtlich beisammen bleiben.
- Ist ein Punkt geklärt, könnt ihr den Kommentar als **erledigt** markieren. Erledigte Kommentare werden ausgeblendet, bleiben aber unter "Alle" weiterhin sichtbar und können bei Bedarf wieder geöffnet werden.
- In der Liste der Aktivitäten seht ihr auf einen Blick, bei welchen Aktivitäten es offene Kommentare gibt.

![Kommentare zu einer Aktivität mit Antworten](~/assets/images/comments-de.png)

In Zukunft planen wir noch Erweiterungen für die Kommentare. Vielleicht wird es mal möglich, Blöcke auf dem Grobprogramm oder die ausgewählten Erscheinungsformen von J+S 2027+ zu kommentieren oder vielleicht entsteht noch eine lagerübergreifende Übersicht über die offenen Kommentare, die euch noch betreffen. Lasst uns wissen, was ihr euch wünscht und wir bleiben dran.

## Die neuen J+S-Regeln ab 2027
Ab 2027 gelten für J+S-Lager neue Regeln. eCamp unterstützt diese ab sofort, damit ihr die Planung eurer Lager für 2027 schon jetzt beginnen könnt.

- Es gibt eine neue **Lagervorlage für J+S-Lager ab 2027**. Wenn ihr ein neues Lager erstellt, könnt ihr diese Vorlage auswählen und habt direkt alles beisammen, was es für die neuen Regeln braucht.
- Mit dem neuen Baustein **J+S Erscheinungsformen** könnt ihr bei jeder Aktivität auswählen, welche Erscheinungsformen darin vorkommen. Die Erscheinungsformen werden auch im PDF angezeigt. [#11102](https://github.com/ecamp/ecamp3/pull/11102){.issuelink} [#11111](https://github.com/ecamp/ecamp3/pull/11111){.issuelink} [#11122](https://github.com/ecamp/ecamp3/pull/11122){.issuelink}
- Mit dem neuen Baustein **J+S-Bewegungszeit** erfasst ihr die Bewegungszeit einer Aktivität. Findet eine Aktivität mehrmals oder in mehreren Teilen statt, kann die Bewegungszeit für jede Durchführung einzeln angegeben werden. Die Bewegungszeit wird im PDF und bei Bedarf auch im Grobprogramm angezeigt. Beim Drucken des Grobprogramms könnt ihr wählen, ob die Bewegungszeit ebenfalls aufgeführt werden soll, zum Beispiel um das Grobprogramm auf der NDS hochzuladen. [#11106](https://github.com/ecamp/ecamp3/pull/11106){.issuelink} [#11124](https://github.com/ecamp/ecamp3/pull/11124){.issuelink} [#11127](https://github.com/ecamp/ecamp3/pull/11127){.issuelink}

![Bausteine J+S Erscheinungsformen und J+S-Bewegungszeit in einer Aktivität](~/assets/images/js-2027-de.png)

Die neuen Bausteine stehen auch in bestehenden Lagern zur Verfügung. Falls ihr euer Lager für 2027 bereits mit einer anderen Vorlage erstellt habt, könnt ihr sie also nachträglich in euren Aktivitäten und Block-Kategorien hinzufügen. Weitere Informationen findet ihr in unseren [FAQ](https://www.ecamp3.ch/de/faq/).

## Einfacher Leute einladen
- Ihr könnt neu **mehrere Personen auf einmal** in ein Lager einladen, indem ihr einfach eine Liste von E-Mail-Adressen eingebt. [#9987](https://github.com/ecamp/ecamp3/pull/9987){.issuelink}
- Beim Einladen könnt ihr nach Personen suchen, mit denen ihr schon in einem anderen Lager zusammengearbeitet habt. Ihr müsst ihre E-Mail-Adresse also nicht mehr auswendig wissen. [#10199](https://github.com/ecamp/ecamp3/pull/10199){.issuelink}

## Mehr Sicherheit für euer Konto
- Zum Ändern des Passworts ist neu das **aktuelle Passwort** erforderlich. [#10214](https://github.com/ecamp/ecamp3/pull/10214){.issuelink}
- Neu gewählte Passwörter werden mit einer Liste häufig verwendeter und bereits geknackter Passwörter abgeglichen. Euer Passwort verlässt dabei eCamp nicht. [#10197](https://github.com/ecamp/ecamp3/pull/10197){.issuelink}
- Wir haben den Zugriff auf Daten von fremden Lagern zusätzlich abgesichert. [#10773](https://github.com/ecamp/ecamp3/pull/10773){.issuelink} [#10819](https://github.com/ecamp/ecamp3/pull/10819){.issuelink}
- Die kürzlich bekannt gewordenen Sicherheitslücken in PHP ([PHP2Shell](https://en.wikipedia.org/wiki/PHP2Shell){target=_blank}) und [Node.js](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases){target=_blank} wurden behoben. [#11089](https://github.com/ecamp/ecamp3/pull/11089){.issuelink} [#11061](https://github.com/ecamp/ecamp3/pull/11061){.issuelink}

## Usability & UI-Anpassungen
- Der Zurück-Button führt neu zur ursprünglichen Übersicht zurück, auch wenn ihr in der Seitenleiste zwischen Aktivitäten gewechselt habt. Mit Escape könnt ihr das Bearbeiten eines Titels abbrechen. [#10650](https://github.com/ecamp/ecamp3/pull/10650){.issuelink}
- Materiallisten können neu direkt über den Stift neben dem Titel umbenannt und über das Menü gelöscht werden. Merci [@Dagolix](https://github.com/Dagolix){target=_blank}! [#10742](https://github.com/ecamp/ecamp3/pull/10742){.issuelink}
- Beim Erfassen von Material könnt ihr die Materialliste neu durchsuchen und direkt eine neue Liste erstellen, ohne das Formular zu verlassen. [#11130](https://github.com/ecamp/ecamp3/pull/11130){.issuelink}
- Die Buttons zum Wiederholen und Abbrechen in Auswahlfeldern öffnen nicht mehr gleichzeitig das Auswahlmenü. Merci [@fabiotro](https://github.com/fabiotro){target=_blank}! [#10736](https://github.com/ecamp/ecamp3/pull/10736){.issuelink}
- Benachrichtigungen wurden neu gestaltet. Wenn ihr eine Benachrichtigung anklickt, bleibt sie stehen, bis ihr sie selbst schliesst. [#10385](https://github.com/ecamp/ecamp3/pull/10385){.issuelink} [#11101](https://github.com/ecamp/ecamp3/pull/11101){.issuelink}
- Datumsbereiche, zum Beispiel bei Lagerabschnitten, werden einheitlicher und besser lesbar dargestellt. [#11119](https://github.com/ecamp/ecamp3/pull/11119){.issuelink}
- Beim Herunterladen der Materialliste als Excel wird nun ein Ladeindikator angezeigt. [#10055](https://github.com/ecamp/ecamp3/pull/10055){.issuelink}
- Fehlende und uneinheitliche Übersetzungen wurden korrigiert. [#10383](https://github.com/ecamp/ecamp3/pull/10383){.issuelink} [#11122](https://github.com/ecamp/ecamp3/pull/11122){.issuelink}
- Nach einem Update von eCamp lädt die App fehlende Teile automatisch neu, statt eine leere Seite anzuzeigen. [#10114](https://github.com/ecamp/ecamp3/pull/10114){.issuelink}

## Bugfixes
- Gäste sehen die Checklisten eines Lagers nun korrekt nur zum Lesen. [#10722](https://github.com/ecamp/ecamp3/pull/10722){.issuelink}
- Checklisten-Einträge werden zuverlässig in der richtigen Reihenfolge angezeigt. [#11115](https://github.com/ecamp/ecamp3/pull/11115){.issuelink}
- Nach dem Sortieren einer Liste, zum Beispiel der Status-Einträge, werden keine Einträge mehr doppelt angezeigt. [#11110](https://github.com/ecamp/ecamp3/pull/11110){.issuelink}
- Die Anzahl Einträge in Materiallisten wird nach dem Löschen von Material wieder korrekt angezeigt und Material ohne zugeordnete Liste kann nicht mehr abgehakt werden. [#11107](https://github.com/ecamp/ecamp3/pull/11107){.issuelink} [#10548](https://github.com/ecamp/ecamp3/pull/10548){.issuelink}
- Das Einfügen eines Lager-Links beim Erstellen eines Lagers funktioniert in Firefox wieder. [#10519](https://github.com/ecamp/ecamp3/pull/10519){.issuelink}
- In der Tagesübersicht im PDF stehen Zahlen nun sauber untereinander. [#10816](https://github.com/ecamp/ecamp3/pull/10816){.issuelink}
- Im Programm wurde ein Fehler behoben, der in Safari auftreten konnte. [#10186](https://github.com/ecamp/ecamp3/pull/10186){.issuelink}
- Nach der Anmeldung über ein externes Konto funktioniert der Zurück-Button des Browsers wieder korrekt. [#10034](https://github.com/ecamp/ecamp3/pull/10034){.issuelink}

<a class="btn secondary mr-4 mb-4" href="https://app.ecamp3.ch" target="_blank">Zur App</a>
