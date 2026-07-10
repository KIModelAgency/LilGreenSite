# Projektplan: 6-Wochen-PoC Asutec x Blackmint Apex

**Kunde:** Asutec GmbH (Automatisierungstechnik, Transfersysteme, Handhabungstechnik)
**Auftraggeber:** Karsten Sepul (Asutec), David Gilli & Sebastian Tietze (PINOVA)
**Projektleitung (Blackmint):** Marius Wussmann (Projektleiter), Leon (Operativer Lead)
**Dauer:** 6 Wochen (komprimierter Apex-Pilot)
**Ziel:** Generierung von qualifizierten Leads (gebuchte Termine/Teams-Calls) für Asutec durch eine KI-gestützte Outbound-Kampagne (E-Mail & LinkedIn) mit Apex Boa.

---

## 1. Vorbereitungsphase (Woche 1) – "Discover & Define"

In der ersten Woche liegt der Fokus auf der tiefgehenden Analyse des Kunden, der Definition des Ideal Customer Profiles (ICP) und der Festlegung der Rahmenbedingungen. Diese Phase ist essenziell, da Asutec im Outbound bisher wenig Erfahrung hat und die bestehenden Inbound-Aktivitäten (betreut durch Sina Geiger) ergänzt werden müssen.

### Arbeitspakete & Interviews

| Arbeitspaket | Beschreibung | Verantwortlich | Adressat / Inputgeber |
|---|---|---|---|
| **Kick-off & Alignment** | Offizieller Startschuss, Abstimmung der Erwartungshaltung, Definition der KPIs für den PoC (z.B. Anzahl generierter Termine). | Marius, Leon | Karsten Sepul, Giovanna Caruso |
| **Produkt- & Unternehmensanalyse** | Interview: Welches konkrete Asutec-Produkt/Lösung (z.B. Stopper, Greifer) soll im PoC fokussiert werden? Was sind die USPs? | Leon | Karsten Sepul, Produktmanagement |
| **ICP Definition (Ideal Customer Profile)** | Interview: Wer ist der perfekte Kunde? (Branchen: Automotive, Pharma? Unternehmensgröße? Region: DACH?) Wer ist der Ansprechpartner (Titel: Produktionsleiter, Einkäufer)? | Leon | Karsten Sepul, Vertrieb |
| **Status Quo Analyse** | Analyse der bisherigen, erfolglosen E-Mail-Kampagne. Was wurde gemacht? Was kann besser gemacht werden? Abgrenzung zu Inbound (Sina Geiger). | Leon | Giovanna Caruso, Sina Geiger |
| **Absender-Persona & Freigabeprozess** | Definition: Wer tritt als Absender auf (reale Person bei Asutec oder virtuelle Persona)? Wer gibt die durch Apex generierten Mails frei? | Marius, Leon | Karsten Sepul |
| **Infrastruktur Setup** | Einrichtung der Domain/Postfächer für den E-Mail-Versand, Aufsetzen der LinkedIn-Automatisierung (Waalaxy), n8n Workflow. | Blackmint Tech | IT Asutec (falls nötig) |

**Meilenstein Woche 1:** ICP ist definiert, Fokus-Produkt steht fest, Absender-Persona ist geklärt, Infrastruktur ist aufgesetzt.

---

## 2. Setup & Targeting (Woche 2) – "Build & Target"

In Woche 2 werden die Zielgruppen-Daten generiert und die Kommunikationsstrategie (Messaging) ausgearbeitet.

### Arbeitspakete

| Arbeitspaket | Beschreibung | Verantwortlich | Adressat / Inputgeber |
|---|---|---|---|
| **Lead-Recherche & Clustering** | Nutzung des Blackmint Sales Navigators zur Identifikation von potenziellen Leads (500-800 Kontakte) basierend auf dem definierten ICP. | Leon | - |
| **Trigger-Definition** | Festlegung der Signale für Apex (z.B. Stellenausschreibungen im Bereich Automatisierung, Führungswechsel im Einkauf). | Leon | - |
| **Messaging-Playbook erstellen** | Entwicklung von 3 Messaging-Varianten (E-Mail & LinkedIn) basierend auf den USPs und Triggern. | Leon | Freigabe durch Asutec (Karsten/Giovanna) |
| **Datenanreicherung & Verifizierung** | E-Mail-Verifikation und LinkedIn-Datenanreicherung der identifizierten Leads. | Blackmint Tech | - |

**Meilenstein Woche 2:** Lead-Liste steht (intern), Messaging-Playbook ist von Asutec freigegeben.

---

## 3. Go-Live & Outreach (Woche 3) – "Launch"

Start der automatisierten Kampagnen über Apex.

### Arbeitspakete

| Arbeitspaket | Beschreibung | Verantwortlich | Adressat / Inputgeber |
|---|---|---|---|
| **Kampagnen-Start (E-Mail)** | Apex KI generiert die ersten personalisierten Mails (Prio A: 1:1, Prio B/C: Cluster). | Apex KI / Leon | - |
| **Freigabe-Cockpit** | Die definierten Freigeber bei Asutec prüfen die ersten Mails und geben sie für den Versand frei. | Asutec (definiert in W1) | Leon (Monitoring) |
| **LinkedIn-Automatisierung Start** | Start der parallelen LinkedIn-Touchpoints (Profilbesuche, Connection Requests) passend zur E-Mail-Sequenz. | Blackmint Tech | - |
| **Erstes Weekly Review** | Kurzer Check-in (15-30 Min): Laufen die Systeme? Gibt es erste Reaktionen? | Marius, Leon | Karsten Sepul, Giovanna Caruso |

**Meilenstein Woche 3:** Kampagne ist live, erste E-Mails und LinkedIn-Anfragen sind versendet.

---

## 4. Monitoring & Optimierung (Woche 4-5) – "Run & Optimize"

Die Kampagne läuft. Der Fokus liegt auf der Qualifizierung der Antworten und der Optimierung der Parameter.

### Arbeitspakete

| Arbeitspaket | Beschreibung | Verantwortlich | Adressat / Inputgeber |
|---|---|---|---|
| **Antwort-Monitoring & KI-Klassifizierung** | Apex KI klassifiziert eingehende Antworten (Interesse, Ablehnung, OOO). | Apex KI | - |
| **Termin-Übergabe & Briefing** | Bei positivem Interesse: Apex generiert eine Briefing-Notiz (Trigger, Kontext) und übergibt den Lead an den Asutec-Vertrieb zur Terminvereinbarung. | Leon | Asutec Vertrieb |
| **Kampagnen-Optimierung** | Analyse der Öffnungs- und Antwortraten. Ggf. Anpassung des Messagings oder der Zielgruppen-Filter. | Leon | Marius |
| **Weekly Reviews** | Wöchentliche Abstimmung zu den KPIs (Leads identifiziert, Mails freigegeben, Antworten qualifiziert, Termine übergeben). | Marius, Leon | Karsten Sepul, PINOVA (optional) |

**Meilenstein Woche 4-5:** Erste qualifizierte Termine sind an den Asutec-Vertrieb übergeben.

---

## 5. Abschluss & Auswertung (Woche 6) – "Review & Scale"

Auswertung des PoC und Entscheidung über die weitere Zusammenarbeit.

### Arbeitspakete

| Arbeitspaket | Beschreibung | Verantwortlich | Adressat / Inputgeber |
|---|---|---|---|
| **Abschluss-Reporting erstellen** | Zusammenstellung aller Daten: Anzahl Leads, Reply-Rate, qualifizierte Termine, Pipeline-Wert. | Leon | Marius |
| **ROI-Analyse** | Gegenüberstellung der Ergebnisse des PoC mit den Zielen und den Kosten für einen Rollout. | Marius | - |
| **Abschluss-Präsentation** | Präsentation der Ergebnisse vor den Stakeholdern. Diskussion über Skalierung und langfristigen Einsatz von Apex. | Marius, Leon | Karsten Sepul, David Gilli, Sebastian Tietze |

**Meilenstein Woche 6:** Erfolgreicher Abschluss des PoC, Entscheidung über langfristige Zusammenarbeit.

---

## Abstimmungsrhythmus (Vorschlag)

*   **Woche 1:** 2x 1h (Kick-off & Deep Dive Interviews)
*   **Woche 2:** 1x 30 Min (Freigabe Messaging & Zielgruppe)
*   **Woche 3-5:** 1x 30 Min (Weekly Review - KPIs & Status)
*   **Woche 6:** 1x 1h (Abschlusspräsentation)

## Nächste Schritte (Für Leon & Marius)

1.  Diesen Plan intern abstimmen.
2.  Termine für die "Discover & Define" Interviews mit Asutec (Karsten, Giovanna) anfragen.
3.  Fragenkatalog für die Interviews vorbereiten (Fokus-Produkt, ICP, Absender-Persona).
