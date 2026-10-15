# ISLAND DROP — 3D Battle Royale Shooter

## Projektaufbau

Alle aktuellen Dateien liegen direkt im Projekt-Hauptverzeichnis. Diese ZIP enthält absichtlich **keine Unterordner**. `project-paths.js` dokumentiert bereits die später geplanten Speicherorte `Models/` sowie `Welten/<Gebiet>/`; sie werden erst in einer späteren Version angelegt. `model-cache.js` enthält das vorbereitete GLB-Caching/Instancing-System für wiederverwendbare Modelle. Solange keine GLB-Assets mitgeliefert werden, werden Welt, Waffen und Hände prozedural erzeugt.

## Lokal starten

Node.js 18 oder neuer ist erforderlich.

```bash
npm install
npm start
```

Dann `http://localhost:10000` im Browser öffnen. Three.js wird über ein CDN geladen; eine Internetverbindung ist beim ersten Start erforderlich. Texturen werden direkt aus URLs geladen. Wenn eine Texturquelle nicht erreichbar ist, nutzt das Spiel eine generierte Ersatztextur.

## Render

Als **Web Service** bereitstellen. Build Command: `npm install`. Start Command: `npm start`. `server.js` bedient nur die Projektdateien und liest den von Render gesetzten `PORT`. Es ist absichtlich **kein Game-Server**.

## Steuerung

- **SPIELEN** — Matchmaking innerhalb desselben Browser-Profils starten
- **W/A/S/D** — bewegen, in der Luft mit Fallschirm steuern
- **Maus** — First-Person-Kamera drehen; ins Spielfenster klicken, um Pointer-Lock zu aktivieren
- **Leertaste im Flugzeug** — Absprungsequenz starten; wenn nicht abgesprungen wird, erfolgt nach etwa 48 Sekunden ein automatischer Absprung
- **Leertaste am Boden** — springen
- **M** — große Karte öffnen/schließen; Markierung per Klick setzen, auswählen und löschen
- **Shift** — sprinten; Ausdauer verbraucht sich und lädt sich wieder auf
- **1–5 / Mausrad** — Inventar-Slot wechseln
- **Linksklick** — Spitzhacke schwingen, Waffe abfeuern oder Healing benutzen (abhängig vom Slot)
- **Rechtsklick halten** — mit Schrotflinte/Pistole zielen
- **R** — nachladen
- **E gedrückt halten** — Truhe öffnen oder Munition aufnehmen; an Türen kurz E drücken
- **Esc** — Pointer-Lock freigeben bzw. Karte verlassen

## Enthaltene Systeme

- Fortnite-inspirierte Lobby mit gelbem SPIELEN-Button und kräftigem synthetischem Klick-Sound
- Vorgegebene KI-Inselkarte als bildschirmfüllende Karte/Minimap und als Layout-Vorlage für die prozedurale 3D-Insel
- 16 benannte Regionen, mehrere Landschaftsbiome, 8×8 Terrain-Chunks, nahe/mittlere/ferne Terrain-LOD, Straßen, Bäume, Felsen, Gebäude, Wasser und Brücke
- Militärtransportflugzeug, offene Heckklappe, First-Person-Absprungsequenz, automatischer Absprung nach langem Warten und erzwungene Entfernung der Flugzeugansicht beim Fall, mit Roll-Neuausrichtung gegen den kopfüber-Startfehler
- Freier Fall, automatischer Fallschirm nach ungefähr drei Sekunden, Kamera-Ruck und First-Person-Hände
- HUD wird erst nach Fallschirmöffnung mit einem Glitch-Effekt sichtbar; 100 Leben, 50 Schild, private Kartenmarkierungen, Minimap und Sprintleiste
- Inventar-Slots 1–5, prozedurale Pump-Schrotflinte (5 Schuss), Pistole (10 Schuss), Healing (bis zu drei Spritzen) und Munitions-Pickups
- Schussrückstoß, Iron-Sight-Ansicht, Patronenhülsen, Nachladeabläufe und Einschlagmarken
- 46 leere Truhen, E-Halten mit Fortschrittskreis, öffnende Türen und zerbrechbare Fenster mit fallenden und verblassenden Glassplittern
- Schrumpfender Sturm mit sichtbarer Begrenzung und Schaden außerhalb der sicheren Zone
- Zentraler Pfadplan für die späteren `Models/`- und `Welten/`-Ordner, GLB-Cache und Instanced Rendering für wiederholte statische Modelle

## Wichtig: Multiplayer-Grenze

`network.js` verwendet `BroadcastChannel`. Damit können zwei Tabs/Fenster auf derselben Website innerhalb desselben Browser-Profils die lokale Suche starten und grundlegende Zustände/Ereignisse austauschen. **Das ist kein Multiplayer über zwei unterschiedliche PCs oder Browser-Profile.** Da ausdrücklich kein Game-Server eingebaut werden soll, ist echtes Online-Matchmaking in dieser Version nicht enthalten. `server.js` ist nur der Render-Dateiserver.

## Technischer Hinweis

Dies ist ein umfangreiches Browser-Spielprojekt mit prozedural erzeugten Assets und spielbaren Systemen, aber keine fertige AAA-Produktion. Die 3D-Regionen werden passend zur Karte prozedural angenähert; sie sind keine detailgetreue manuelle Nachbildung jedes Pixels. Waffen, Animationen und Hände werden vorerst aus Geometrie im Code erzeugt. Später können passende, lizenzierte GLB-Modelle und Animationsdateien nach `Models/` ergänzt werden.
