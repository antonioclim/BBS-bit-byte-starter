# BTI · Bit & Byte Lab · S01–S07 · v2.0.3

## Română

Acest pachet reunește materialele celor **șapte seminarii de câte 90 de minute** ale disciplinei Bazele tehnologiei informației, pentru anul I, semestrul I, ASE București, Facultatea CSIE. Lecțiile sunt disponibile în română și engleză britanică. Disciplina cuprinde 14 cursuri și un seminar la două săptămâni de activitate didactică; datele grupei sunt comunicate în Moodle.

**Începeți cu [START.html](START.html).** Pentru a utiliza lecțiile și aplicația, deschideți fișierele din copia locală a pachetului. În interfața GitHub, fișierele HTML sunt afișate ca sursă.

Ediția v2.0.3 reunește revizia în limba română și sincronizarea materialelor S01–S07, pregătite pornind de la sursa v2.0.2. Pentru o copie fixă a ediției, folosiți pagina Releases și arhiva Source code (zip) aferentă tagului v2.0.3, după publicarea acestuia. Code → Download ZIP descarcă starea curentă a ramurii afișate. Materialele și intervalele comunicate în Moodle rămân reperele grupei.

### Consultarea lecțiilor și utilizarea aplicației

1. În pagina repository-ului, alegeți **Code → Download ZIP**.
2. Extrageți toate fișierele și directoarele arhivei.
3. Deschideți `START.html` în browser și alegeți **Română**.
4. Selectați seminarul, apoi lecția interactivă sau varianta pentru lectură.

Păstrați împreună `START.html`, `LESSONS/`, `GUIDES/` și `PROJECT/`, pentru a menține legăturile dintre fișiere. Arhiva ZIP permite consultarea materialelor și utilizarea aplicației; istoricul Git al proiectului propriu se obține prin clonare.

### Începerea activității cu Git în S05

1. Deschideți [șablonul comun BBS-bit-byte-starter](https://github.com/antonioclim/BBS-bit-byte-starter) și alegeți **Use this template → Create a new repository**.
2. Selectați contul propriu și respectați instrucțiunile grupei privind numele și vizibilitatea repository-ului.
3. Clonați în VS Code **adresa repository-ului propriu**. Lecția S05 explică fiecare pas.
4. Deschideți `START.html` din clona creată și continuați în același repository pe parcursul S05–S07.

**Dacă ați început deja proiectul**, păstrați repository-ul propriu, commiturile și însemnările. Pentru a consulta lecțiile actualizate, folosiți separat arhiva completă. Păstrați proiectul existent, fără a-l înlocui sau a crea un alt repository din șablon. Operația `pull` preia modificările publicate în repository-ul propriu; actualizările ulterioare ale șablonului se consultă separat.

### Parcursul celor șapte seminarii

Planurile de lucru sunt estimări didactice, care urmează să fie verificate cu grupele. În S01–S04, cele 10 minute ale testului sunt incluse în cele 90 de minute ale seminarului; pentru explicații și exersare rămân 80 de minute. Respectați intervalul anunțat în Moodle. Exemplele proprii și indiciile sunt integrate în activitățile prevăzute, fără teme obligatorii suplimentare.

- **S01:** baze de numerație, operații binare și limitele reprezentării.
- **S02:** numere cu semn, reprezentare în virgulă fixă și numere normale în formatul binary32.
- **S03:** paritate, Hamming și CRC, cu explicarea limitelor fiecărei metode de verificare.
- **S04:** logică booleană și elemente introductive de arhitectură a calculatoarelor.
- **S05:** preluarea proiectului, completarea afișării hexazecimale, testarea și publicarea primei modificări.
- **S06:** formularea unei ipoteze, verificarea unei explicații oferite de Gemini sau de alternativa pregătită și integrarea remedierii.
- **S07:** implementarea individuală a parității atribuite, verificarea versiunii într-o clonă separată a repository-ului propriu și completarea fișei finale.

Lecțiile complete se găsesc în [LESSONS/RO](LESSONS/RO/index.html). În [GUIDES/RO](GUIDES/RO/index.html) sunt disponibile ghidurile rapide pentru aceleași activități S05–S07 și fișa comună de referință. Aceste ghiduri facilitează consultarea pașilor, fără a introduce activități sau cerințe suplimentare.

Deschideți [aplicația](PROJECT/index.html?lang=ro) și [pagina testelor](PROJECT/tests.html?lang=ro&stage=baseline). Selectați mai întâi **baseline**, apoi etapa curentă. Proiectul inițial conține două funcții de completat și defectul investigat în S06; funcțiile prevăzute pentru etapele următoare sunt intenționat incomplete. Aplicația se utilizează local, fără server, npm sau biblioteci suplimentare. Rezultatele locale nu se transmit automat în Moodle.

### Evaluarea S01–S07

Cele șapte teste Moodle contribuie împreună cu **maximum trei puncte de seminar**: maximum două puncte din Q01–Q04 și maximum un punct din Q05–Q07. **Q01, Q02, Q03 și Q04 au fiecare 11 întrebări, o durată de 10 minute și o contribuție de maximum 0,50 puncte de seminar.**

| Activitate | Durată | Maximum puncte de seminar |
| --- | --- | --- |
| Q01 | 10 minute | 0,50 |
| Q02 | 10 minute | 0,50 |
| Q03 | 10 minute | 0,50 |
| Q04 | 10 minute | 0,50 |
| Q05 | 10 minute | 0,20 |
| Q06 | 10 minute | 0,30 |
| Q07 | 15 minute | 0,50 |
| **Total Q01–Q07** | — | **3,00** |

Întrebările de exersare și verificările locale din lecțiile S01–S04 sprijină învățarea și sunt distincte de testele Q01–Q04 din Moodle. Rezultatele locale nu se transmit automat în Moodle. Fiecare test are propriul interval, comunicat în curs.

La Q05, Q06 și Q07 lucrați individual, fără inteligență artificială (AI) sau ajutorul colegilor. Puteți consulta numai fișa comună de referință anunțată în curs; închideți lecția extinsă și instrumentele de lucru. Fișa finală, cu **zece rubrici**, se depune în Moodle ca **text online**, este obligatorie și nu primește o notă separată. Depunerea, completitudinea sau aprobarea ei nu condiționează accesul la Q07. Respectați intervalele comunicate în curs.

Testele evaluează înțelegerea. Punctajul obținut sau adresa depusă nu certifică, prin ele însele, implementarea și reproducerea proiectului.

**Identificarea versiunii:** v2.0.3 identifică această ediție a repository-ului; v2.0.2 este sursa reviziei editoriale. Numele și versiunile din fișierele lecțiilor sunt păstrate pentru compatibilitatea legăturilor și pentru proveniență. Ghidurile rapide păstrează reperul v0.4.0 al proiectului inițial; acesta nu impune descărcarea unei ediții anterioare. Publicarea pe GitHub este confirmată numai de tagul și release-ul create de administrator.

## English (UK)

This student package for year 1, semester 1, at the Bucharest University of Economic Studies, CSIE, brings together all **seven 90-minute seminars**, in Romanian and English. The subject has 14 lectures and a seminar every two teaching weeks; your group’s dates are published in Moodle.

**Begin with [START.html](START.html).** GitHub displays an HTML file as source. To use the lessons and application, open the files from the local folder.

### For reading and trying the application

1. On the repository page choose **Code → Download ZIP**.
2. Extract all files and folders from the archive.
3. Open `START.html` in a browser, then choose **English (UK)**.
4. On the language page choose the seminar and its interactive lesson or reading version.

Keep `START.html`, `LESSONS/`, `GUIDES/` and `PROJECT/` together. A ZIP download lets you read and try the application; it does not provide your project’s Git history.

### When starting Git work in S05

1. On the [shared BBS-bit-byte-starter template](https://github.com/antonioclim/BBS-bit-byte-starter), choose **Use this template → Create a new repository**.
2. Select your own account and follow your group’s instructions for the name and visibility.
3. Clone **your own repository URL** in VS Code. Detailed steps are in the S05 lesson.
4. Open `START.html` from your clone and continue in the same repository throughout S05–S07.

**If you have already started the project**, retain your personal repository, commits and notes. Do not replace it or create another template-derived repository to obtain the new lessons. You can read them separately from the complete archive. A `pull` from your own repository retrieves changes published there without automatically importing later changes to the template.

### The route

The working plans are estimates to be checked with the groups. In S01–S04, the quiz’s 10 minutes are included in the 90-minute seminar, leaving 80 minutes for explanation and practice. Use the quiz window announced in Moodle. Own cases and hints fit within existing stages, without additional compulsory homework.

- **S01:** number bases, binary operations and representation limits.
- **S02:** signed numbers, fixed point and normal binary32 numbers.
- **S03:** parity, Hamming and CRC, including each check’s limits.
- **S04:** Boolean logic and a short architecture introduction.
- **S05:** take over the project, complete hexadecimal output, test and publish your first change.
- **S06:** formulate a hypothesis, check a Gemini explanation or the prepared alternative and integrate the fix.
- **S07:** individually implement your assigned parity mode, verify the version from a fresh clone of your own repository and complete the final record.

Complete lessons are in [LESSONS/EN_GB](LESSONS/EN_GB/index.html). [GUIDES/EN_GB](GUIDES/EN_GB/index.html) contains quick guides to the same S05–S07 steps and the common reference sheet. Quick guides do not add activities or requirements.

Application: [PROJECT/index.html](PROJECT/index.html?lang=en). Tests: [PROJECT/tests.html](PROJECT/tests.html?lang=en&stage=baseline). Start with **baseline**, then choose the current stage. The starter has two functions to complete and the problem investigated in S06; incomplete results in future stages are intentional. No local server, npm or additional libraries are required. Local results are not automatically submitted to Moodle.

### S01–S07 assessment

The seven Moodle quizzes together contribute **at most three real points**: at most two points from Q01–Q04 and at most one point from Q05–Q07. **Q01, Q02, Q03 and Q04 each contain 11 questions, last 10 minutes and contribute at most 0.50 real points.**

| Activity | Duration | Maximum real points |
| --- | --- | --- |
| Q01 | 10 minutes | 0.50 |
| Q02 | 10 minutes | 0.50 |
| Q03 | 10 minutes | 0.50 |
| Q04 | 10 minutes | 0.50 |
| Q05 | 10 minutes | 0.20 |
| Q06 | 10 minutes | 0.30 |
| Q07 | 15 minutes | 0.50 |
| **Total Q01–Q07** | — | **3.00** |

Practice questions and local checks in the S01–S04 lessons help you learn and are separate from Moodle quizzes Q01–Q04. Local results are not automatically submitted to Moodle. Each quiz has its own window announced in the course.

In Q05, Q06 and Q07 work individually without AI or help from classmates. Only the shared reference sheet announced in the course is permitted; close the extended lesson and working tools. The final **ten-field record** is submitted in Moodle as **online text**, is compulsory and has no separate grade. Submission, completeness or approval of the record is not a condition for access to Q07. Follow the windows announced in the course.

Quizzes assess understanding. A score or submitted URL alone does not certify the implementation and reproduction of the project.

**Versions:** v2.0.3 identifies this repository edition, prepared from the v2.0.2 source and the reviewed Romanian materials. Existing lesson filenames and their version identifiers are retained for compatibility and provenance. Quick guides retain the original project reference v0.4.0; this does not require an earlier download. A fixed copy is available from Releases → v2.0.3 → Source code (zip) once the administrator has published that release. Code → Download ZIP downloads the current state of the displayed branch.
