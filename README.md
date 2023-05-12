# Blades in the Dark - German
Deutsche Übersetzung für das [Blades in the Dark System](https://github.com/megastruktur/foundryvtt-blades-in-the-dark) für Foundry VTT.

## Nutzung
- Installiere das oben genannte BitD - System
- Solange mein [Pull-Request](https://github.com/megastruktur/foundryvtt-blades-in-the-dark/pull/190) für das deutsche Sprachpaket im BitD System noch nicht integriert ist: Ersetze das `de.json` im `lang` Ordner des Systems durch das `de.json` aus dem `lang/system` Verzeichnis dieses Moduls
- Wenn du die [Alternativen Charakterbögen von justinross](https://github.com/justinross/foundry-bitd-alternate-sheets) nutzt, ist das etwas komplizierter (siehe unten)
- Installiere das Modul [Babele](https://foundryvtt.com/packages/babele) 
- Installiere dieses Modul
- Aktiviere alle Module
- Ändere die Sprache in den Einstellungen auf Deutsch

## Roadmap / To-Dos
- Übersetzung für Gehäuse, Geist und Vampir hinzufügen
- NPCs / Kontakte übersetzen

## Alternative Charakterbögen
Solange mein [Pull-Request](https://github.com/justinross/foundry-bitd-alternate-sheets/pull/75) noch nicht integriert ist, unterstützt das [Modul für alternative Charakterbögen von justinross](https://github.com/justinross/) keine deutsche Übersetzung. Folgende Schritte sind nötig, um das zumindest teilweise zu ändern:

- Kopiere das `de.json` aus dem `lang/alternative-sheets` Verzeichnis dieses Moduls in das `languages` Verzeichnis des Alternate-Sheet-Moduls.
- Öffne die `module.json` des Alternate-Sheet-Moduls und füge folgenden Code unter dem Punkt `languages` hinter den Eintrag fürs Englische ein:
```
    {
      "lang": "de",
      "name": "German",
      "path": "languages/de.json"
    }
```
Danach wird es noch immer eine englische Teile im Charakterbogen geben, aber das meiste sollte übersetzt sein.

## Credits/License   
- BitD erscheint auf Deutsch im [System Matters Verlag](https://www.system-matters.de/). Kauft die deutsche Version [hier](https://www.system-matters.de/shop/blades-in-the-dark).
- This translation is based on the portuguese one done by [brunocalado](https://github.com/brunocalado/bid-pt-br)
- This work is based on [Blades in the Dark](http://www.bladesinthedark.com), product of One Seven Design, developed and authored by John Harper, and licensed for our use under the [Creative Commons Attribution 3.0 Unported license](http://creativecommons.org/licenses/by/3.0/).

If you encounter any problems, have suggestions or want to chat, feel free to contact me on discord: Graffini#0396