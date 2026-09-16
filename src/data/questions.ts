import { QuizQuestion } from '../types';

export const ALL_QUESTIONS: QuizQuestion[] = [
  // ==========================================
  // SIMULAZIONE I (Pag. 1 - 5)
  // ==========================================
  {
    id: "sim1_1",
    simulation: "Simulazione I",
    category: "Titles & Pronouns",
    question: "______ Brown washes his car on Sundays.",
    options: ["Mrs", "Mr", "Ms"],
    correctIndex: 1,
    explanation: "La frase usa l'aggettivo possessivo maschile 'his' ('his car' = la sua auto di lui), pertanto il titolo appropriato è 'Mr' (mister / signore), mentre 'Mrs' e 'Ms' si usano per donne."
  },
  {
    id: "sim1_2",
    simulation: "Simulazione I",
    category: "Present Continuous",
    question: "Susan __________ the guitar at the moment.",
    options: ["is playing", "plays", "played"],
    correctIndex: 0,
    explanation: "Usiamo il present continuous ('is playing') per descrivere un’azione che si svolge in questo periodo / in questo momento esatto ('at the moment')."
  },
  {
    id: "sim1_3",
    simulation: "Simulazione I",
    category: "Prepositions of Time",
    question: "My birthday is _______ 10th March.",
    options: ["at", "on", "in"],
    correctIndex: 1,
    explanation: "Con le date precise (giorno + mese) usiamo sempre la preposizione 'on' (es. on 10th March)."
  },
  {
    id: "sim1_4",
    simulation: "Simulazione I",
    category: "Prepositions of Time",
    question: "I’m leaving _______ half past seven.",
    options: ["in", "at", "for"],
    correctIndex: 1,
    explanation: "Con gli orari usiamo la preposizione 'at' (es. at half past seven, at 8 o'clock)."
  },
  {
    id: "sim1_5",
    simulation: "Simulazione I",
    category: "Saxon Genitive",
    question: "Jack and Jim are brothers. __________ are nice.",
    options: ["Jack’s and Jim’s parents", "Jack and Jim’s parents", "Jack’s and Jim parents"],
    correctIndex: 1,
    explanation: "Jack e Jim sono fratelli, quindi hanno i genitori in comune. Se i possessori di una 'cosa/persona' sono più di uno, solo l'ultimo dell'elenco prende il genitivo sassone ('Jack and Jim's parents'). Se possedessero cose distinte, entrambi avrebbero 's."
  },
  {
    id: "sim1_6",
    simulation: "Simulazione I",
    category: "Irregular Past Simple",
    question: "She started to cry and _______ upstairs (di sopra).",
    options: ["runned", "run", "ran"],
    correctIndex: 2,
    explanation: "Il verbo 'TO RUN' è irregolare: al past simple fa 'RAN' (run - ran - run)."
  },
  {
    id: "sim1_7",
    simulation: "Simulazione I",
    category: "Past Simple Spelling",
    question: "She _________ French and German at school.",
    options: ["studied", "studyed", "stadyed"],
    correctIndex: 0,
    explanation: "I verbi regolari che terminano in 'consonante + y' cambiano la 'y' in 'i' prima di aggiungere la desinenza '-ed': study -> studied."
  },
  {
    id: "sim1_8",
    simulation: "Simulazione I",
    category: "Present Perfect",
    question: "It’s the second time we ____________ by plane.",
    options: ["travelled", "have travelled", "travel"],
    correctIndex: 1,
    explanation: "L’espressione temporale 'it’s the first/second/third... time' (= è la prima, seconda, terza volta) richiede obbligatoriamente il present perfect ('have travelled')."
  },
  {
    id: "sim1_9",
    simulation: "Simulazione I",
    category: "Adverbs Position",
    question: "Mary _____________ at Rome.",
    options: ["has arrived just", "just arrives", "has just arrived"],
    correctIndex: 2,
    explanation: "Present perfect con l'avverbio 'JUST': l'avverbio va posizionato tra l’ausiliare 'have/has' e il past participle del verbo principale ('has just arrived')."
  },
  {
    id: "sim1_10",
    simulation: "Simulazione I",
    category: "Comparatives",
    question: "Lucy is ___________ than me.",
    options: ["fat", "fatter", "more fat"],
    correctIndex: 1,
    explanation: "L'aggettivo monosillabico 'fat' (terminante con una sola vocale seguita da una sola consonante) raddoppia la consonante finale e aggiunge '-er': 'fatter than'."
  },
  {
    id: "sim1_11",
    simulation: "Simulazione I",
    category: "Comparatives",
    question: "This exercise is ________ than I thought.",
    options: ["easier", "easy", "more easy"],
    correctIndex: 0,
    explanation: "L'aggettivo a due sillabe terminante in '-y' come 'easy' perde la 'y', la sostituisce con 'i' e aggiunge '-er': 'easier than'."
  },
  {
    id: "sim1_12",
    simulation: "Simulazione I",
    category: "Irregular Comparatives",
    question: "My mother’s cooking is _______ than your mother’s cooking.",
    options: ["worse", "badder", "the worst"],
    correctIndex: 0,
    explanation: "L'aggettivo 'BAD' (= cattivo) ha come comparativo di maggioranza irregolare 'WORSE THAN' (= peggiore di), e come superlativo 'THE WORST' (= il peggiore)."
  },
  {
    id: "sim1_13",
    simulation: "Simulazione I",
    category: "Have Gone vs Have Been",
    question: "Where is Tom? He ________ to Europe.",
    options: ["went", "has gone", "has been"],
    correctIndex: 1,
    explanation: "HAVE GONE indica che il soggetto è andato via e NON è ancora tornato (Tom non è qui, è in Europa). HAVE BEEN indica invece che il soggetto è andato ed è già tornato."
  },
  {
    id: "sim1_14",
    simulation: "Simulazione I",
    category: "Have Gone vs Have Been",
    question: "I ___________ to Europe twice.",
    options: ["have been", "go", "have gone"],
    correctIndex: 0,
    explanation: "Si usa 'have been' per esprimere esperienze di viaggio già concluse (sono stato in Europa due volte nella mia vita e sono qui ora)."
  },
  {
    id: "sim1_15",
    simulation: "Simulazione I",
    category: "Present Simple",
    question: "Colin ______ football every Tuesday.",
    options: ["is playing", "plays", "play"],
    correctIndex: 1,
    explanation: "'Every Tuesday' esprime un'azione abitudinaria e ricorrente, che richiede il present simple. Con la 3ª persona singolare ('Colin') si aggiunge la 's': 'plays'."
  },
  {
    id: "sim1_16",
    simulation: "Simulazione I",
    category: "Present Continuous",
    question: "The baby _________ at the moment.",
    options: ["don’t sleep", "is not sleeping", "doesn’t sleeping"],
    correctIndex: 1,
    explanation: "La forma negativa del Present Continuous si costruisce con ausiliare 'TO BE' + 'not' + forma in '-ing': 'is not sleeping' (per un'azione in corso 'at the moment')."
  },
  {
    id: "sim1_17",
    simulation: "Simulazione I",
    category: "Past Simple",
    question: "He __________ the cold yesterday.",
    options: ["feel", "felt", "feeled"],
    correctIndex: 1,
    explanation: "'Yesterday' richiede il past simple. Il verbo 'to feel' è irregolare: feel -> felt."
  },
  {
    id: "sim1_18",
    simulation: "Simulazione I",
    category: "Past Simple",
    question: "My father _____ in, ______ around and ____ me to tidy up my room.",
    options: ["come/looked/tell", "came/looked/told", "came/looked/telled"],
    correctIndex: 1,
    explanation: "Tutti i verbi descrivono una sequenza di azioni passate al Past Simple. 'Come' è irregolare (came), 'look' è regolare (looked), 'tell' è irregolare (told)."
  },
  {
    id: "sim1_19",
    simulation: "Simulazione I",
    category: "Present Simple Questions",
    question: "______ Jenny ______?",
    options: ["Do/works", "Does/ work", "Are/working"],
    correctIndex: 1,
    explanation: "Per formare domande al Present Simple con la 3ª persona singolare ('Jenny') si usa l'ausiliare 'Does' + verbo alla forma base ('work'): 'Does Jenny work?'."
  },
  {
    id: "sim1_20",
    simulation: "Simulazione I",
    category: "Present Simple & Adverbs",
    question: "She often _________ to me.",
    options: ["writing", "write", "writes"],
    correctIndex: 2,
    explanation: "Con l'avverbio di frequenza 'often' si usa il Present Simple per un'azione abituale; alla 3ª persona singolare ('She') si aggiunge la '-s': 'writes'."
  },

  // ==========================================
  // SIMULAZIONE II (Pag. 6 - 9)
  // ==========================================
  {
    id: "sim2_1",
    simulation: "Simulazione II",
    category: "Past Simple",
    question: "Last week I _________ a new car.",
    options: ["have bought", "bought", "buyed"],
    correctIndex: 1,
    explanation: "'BOUGHT' è il past simple irregolare di 'TO BUY'. L'espressione di tempo concluso 'last week' regge obbligatoriamente il past simple e non il present perfect."
  },
  {
    id: "sim2_2",
    simulation: "Simulazione II",
    category: "Irregular Plurals",
    question: "There are two ______ in the classroom.",
    options: ["childs", "childrens", "children"],
    correctIndex: 2,
    explanation: "'CHILDREN' è il plurale irregolare di 'CHILD' (= bambino/a). Non aggiunge mai la '-s'."
  },
  {
    id: "sim2_3",
    simulation: "Simulazione II",
    category: "Possessive Pronouns",
    question: "Mr and Ms Selby are on holiday. Is this cat _______?",
    options: ["them", "their", "theirs"],
    correctIndex: 2,
    explanation: "'THEIRS' è il pronome possessivo (= il loro / la loro). 'Their' è aggettivo e richiederebbe un sostantivo dopo, 'them' è pronome complemento."
  },
  {
    id: "sim2_4",
    simulation: "Simulazione II",
    category: "Present Continuous",
    question: "Only for this week he ________ to the gym on Monday evening.",
    options: ["goes", "going", "is going"],
    correctIndex: 2,
    explanation: "Si usa il present continuous per descrivere una situazione temporanea (dedotta da 'Only for this week'): non è un'abitudine fissa permanente, ma un programma temporaneo."
  },
  {
    id: "sim2_5",
    simulation: "Simulazione II",
    category: "Saxon Genitive",
    question: "I always go to work in ________.",
    options: ["James’s car", "James’ car", "James car’s"],
    correctIndex: 0,
    explanation: "Per i nomi propri singolari che terminano in -s (come James), secondo la regola standard più diffusa si aggiunge 's: 'James's car'."
  },
  {
    id: "sim2_6",
    simulation: "Simulazione II",
    category: "Interrogatives",
    question: "_____ animal is that? A crocodile or an alligator?",
    options: ["What", "Whose", "Which"],
    correctIndex: 2,
    explanation: "Usiamo 'WHICH' quando la scelta è tra un numero ristretto o definito di opzioni (come nel caso 'A crocodile or an alligator?'). Si usa 'WHAT' quando la scelta è aperta o generica."
  },
  {
    id: "sim2_7",
    simulation: "Simulazione II",
    category: "Tenses & Time Adverbs",
    question: "______ to the theatre lately? Yes, I _____ to Othello last week.",
    options: ["Did you go/go", "Have you been/went", "Did you be/went"],
    correctIndex: 1,
    explanation: "L’avverbio 'LATELY' (= ultimamente) richiede il present perfect ('Have you been'), mentre 'LAST WEEK' (= la settimana scorsa) indica tempo trascorso e richiede il past simple ('went')."
  },
  {
    id: "sim2_8",
    simulation: "Simulazione II",
    category: "Present Continuous",
    question: "There’s a nice smell in the dining room. What ___________ ?",
    options: ["does Mrs Kendall cook", "is Mrs Kendall cooking", "Mrs Kendall cooks"],
    correctIndex: 1,
    explanation: "L'azione si sta svolgendo nel momento stesso in cui si parla (c'è profumo adesso nella sala da pranzo), quindi richiede la forma interrogativa del Present Continuous: 'What is Mrs Kendall cooking?'"
  },
  {
    id: "sim2_9",
    simulation: "Simulazione II",
    category: "Irregular Plurals",
    question: "There are elegant ______ and ________ at the party.",
    options: ["ladys/ gentlemen", "ladies/gentlemen", "ladies/gentleman"],
    correctIndex: 1,
    explanation: "Il plurale di 'lady' è 'ladies' (consonante + y -> ies); il plurale irregolare di 'gentleman' è 'gentlemen' (man -> men)."
  },
  {
    id: "sim2_10",
    simulation: "Simulazione II",
    category: "Gerunds after Prepositions",
    question: "After _________ he ate a big lunch.",
    options: ["swim", "swimming", "to swim"],
    correctIndex: 1,
    explanation: "Dopo le preposizioni (come 'after', 'before', 'without') il verbo prende la forma in -ING (gerundio / sostantivo verbale): 'After swimming'."
  },
  {
    id: "sim2_11",
    simulation: "Simulazione II",
    category: "Superlatives",
    question: "My brother is _____ swimmer that I know.",
    options: ["the best", "better", "good"],
    correctIndex: 0,
    explanation: "'THE BEST' (= il migliore) è il superlativo relativo dell'aggettivo irregolare 'GOOD' (good -> better -> the best)."
  },
  {
    id: "sim2_12",
    simulation: "Simulazione II",
    category: "Comparatives",
    question: "He looks much _______ than he really is.",
    options: ["old", "oldest", "older"],
    correctIndex: 2,
    explanation: "L'aggettivo monosillabico 'old' forma il comparativo di maggioranza aggiungendo '-er': 'older than'."
  },
  {
    id: "sim2_13",
    simulation: "Simulazione II",
    category: "Pronouns & Possessives",
    question: "Everyone of _____ did _____ best.",
    options: ["us/our", "we/us", "we/our"],
    correctIndex: 0,
    explanation: "Dopo la preposizione 'of' si usa il pronome personale complemento ('us'). L'aggettivo possessivo corrispondente a 'noi' per fare del nostro meglio è 'our' ('did our best')."
  },
  {
    id: "sim2_14",
    simulation: "Simulazione II",
    category: "Future Arrangements",
    question: "She ______ for dinner this evening.",
    options: ["is coming", "comes", "came"],
    correctIndex: 0,
    explanation: "Si usa il present continuous ('is coming') per esprimere un programma o evento futuro già concordato o organizzato ('this evening')."
  },
  {
    id: "sim2_15",
    simulation: "Simulazione II",
    category: "Present Perfect Duration",
    question: "I _____ in London for eight years, and I don’t want to move.",
    options: ["had lived", "lived", "have lived"],
    correctIndex: 2,
    explanation: "Azione iniziata nel passato che dura tuttora nel presente (vivo ancora a Londra): si usa il Present Perfect con 'for' ('have lived for eight years')."
  },
  {
    id: "sim2_16",
    simulation: "Simulazione II",
    category: "Past Simple Questions",
    question: "When ____ they ______ married?” “Five years ago.”",
    options: ["was/got", "did/get", "have/got"],
    correctIndex: 1,
    explanation: "Il verbo è 'TO GET MARRIED'. Nelle domande al Past Simple (con 'When... ago') si usa l'ausiliare 'did' + forma base del verbo ('get'): 'When did they get married?'"
  },
  {
    id: "sim2_17",
    simulation: "Simulazione II",
    category: "Past Simple vs Past Continuous",
    question: "Kevin _____ his leg while he was playing football.",
    options: ["break", "breaked", "broke"],
    correctIndex: 2,
    explanation: "Un'azione improvvisa e puntuale che si inserisce durante un'azione continuata ('while he was playing') richiede il Past Simple. Il passato del verbo irregolare 'break' è 'broke'."
  },
  {
    id: "sim2_18",
    simulation: "Simulazione II",
    category: "Irregular Past Simple",
    question: "The child ____ some milk last night.",
    options: ["drank", "drunk", "drinked"],
    correctIndex: 0,
    explanation: "'Last night' indica un'azione conclusa nel passato: richiede il Past Simple. Il passato irregolare di 'drink' è 'drank' (drink - drank - drunk)."
  },
  {
    id: "sim2_19",
    simulation: "Simulazione II",
    category: "Gradual Comparatives",
    question: "It’s becoming ______ and ________to find a job.",
    options: ["more hard/more hard", "harder/harder", "hard/harder"],
    correctIndex: 1,
    explanation: "La struttura 'sempre più + aggettivo' in inglese si rende ripetendo il comparativo di maggioranza unito da 'and': 'harder and harder'."
  },
  {
    id: "sim2_20",
    simulation: "Simulazione II",
    category: "Double Possessive",
    question: "________ is getting married.",
    options: ["A friend of me", "A friend of mine", "One my friends"],
    correctIndex: 1,
    explanation: "In inglese la costruzione 'un mio amico / un amico dei miei' richiede il doppio genitivo con pronome possessivo: 'a friend of mine'."
  },

  // ==========================================
  // SIMULAZIONE III (Pag. 10 - 13)
  // ==========================================
  {
    id: "sim3_1",
    simulation: "Simulazione III",
    category: "Possessive Adjectives",
    question: "Mrs Brown is 44 _________ husband is 46.",
    options: ["His", "Her", "The"],
    correctIndex: 1,
    explanation: "'Mrs' indica una donna (signora), quindi il possessivo riferito a lei è 'Her' ('il marito di lei')."
  },
  {
    id: "sim3_2",
    simulation: "Simulazione III",
    category: "Present Continuous",
    question: "Patty _________ a new job now.",
    options: ["are looking for", "looks for", "is looking for"],
    correctIndex: 2,
    explanation: "La parola temporale 'now' (= adesso) richiede il Present Continuous: per la 3ª persona singolare ('Patty') è 'is looking for'."
  },
  {
    id: "sim3_3",
    simulation: "Simulazione III",
    category: "Prepositions of Time",
    question: "We often go to Paris _________ spring.",
    options: ["for", "in", "to"],
    correctIndex: 1,
    explanation: "Con le stagioni dell'anno (spring, summer, autumn, winter) si usa sempre la preposizione 'in' ('in spring')."
  },
  {
    id: "sim3_4",
    simulation: "Simulazione III",
    category: "Saxon Genitive with Time",
    question: "I’m reading _________ .",
    options: ["yesterday newspaper", "yesterday’s newspaper", "yesterdays’ newspaper"],
    correctIndex: 1,
    explanation: "Con le espressioni temporali singolari si usa il genitivo sassone con apostrofo e s: 'yesterday's newspaper' (= il giornale di ieri)."
  },
  {
    id: "sim3_5",
    simulation: "Simulazione III",
    category: "Past Simple",
    question: "Her friends _________ Rome last month.",
    options: ["has visited", "visited", "have visited"],
    correctIndex: 1,
    explanation: "'Last month' indica un periodo di tempo completamente terminato nel passato, quindi richiede tassativamente il Past Simple ('visited')."
  },
  {
    id: "sim3_6",
    simulation: "Simulazione III",
    category: "Irregular Past Simple",
    question: "I _________ very early this morning.",
    options: ["leave", "left", "leaved"],
    correctIndex: 1,
    explanation: "Dato che 'this morning' si riferisce a un momento già trascorso della giornata, si usa il Past Simple. Il verbo irregolare 'leave' diventa 'left'."
  },
  {
    id: "sim3_7",
    simulation: "Simulazione III",
    category: "Comparatives",
    question: "Hotels in Spain are _________ than in Italy.",
    options: ["more cheap", "cheap", "cheaper"],
    correctIndex: 2,
    explanation: "L'aggettivo breve 'cheap' (monosillabo) forma il comparativo di maggioranza aggiungendo '-er': 'cheaper than'."
  },
  {
    id: "sim3_8",
    simulation: "Simulazione III",
    category: "Irregular Comparatives",
    question: "Yesterday the weather was even _________ than today.",
    options: ["bad", "badder", "worse"],
    correctIndex: 2,
    explanation: "Il comparativo di maggioranza di 'bad' è irregolare: 'worse than' (mai 'badder')."
  },
  {
    id: "sim3_9",
    simulation: "Simulazione III",
    category: "Present Perfect & Just",
    question: "___________ a new car.",
    options: ["I’ve just bought", "I just bought", "I just have bought"],
    correctIndex: 0,
    explanation: "Per un'azione appena compiuta si usa il Present Perfect con 'just' inserito tra ausiliare e participio: 'I've just bought'."
  },
  {
    id: "sim3_10",
    simulation: "Simulazione III",
    category: "Present Perfect & Yet",
    question: "I ______________ .",
    options: ["haven’t finished the report yet", "didn’t finish the report yet", "haven’t yet finished the report"],
    correctIndex: 0,
    explanation: "Nelle frasi negative, 'yet' si usa con il Present Perfect e si posiziona alla fine della frase: 'haven't finished the report yet'."
  },
  {
    id: "sim3_11",
    simulation: "Simulazione III",
    category: "Present Perfect Life Experience",
    question: "I ___________ all my life.",
    options: ["travelled", "have travelled", "traveled"],
    correctIndex: 1,
    explanation: "Dato che il soggetto è vivo e continua il percorso della propria vita, l'azione ha legami col presente e richiede il Present Perfect ('have travelled')."
  },
  {
    id: "sim3_12",
    simulation: "Simulazione III",
    category: "Past Simple Closed Period",
    question: "I _________ only in my youth.",
    options: ["travelled", "have travelled", "traveled"],
    correctIndex: 0,
    explanation: "La giovinezza ('my youth') è un periodo di tempo ormai concluso e appartiene al passato; si usa perciò il Past Simple ('travelled')."
  },
  {
    id: "sim3_13",
    simulation: "Simulazione III",
    category: "Prepositions of Time",
    question: "I decided to see a doctor _________ Friday.",
    options: ["in", "on", "at"],
    correctIndex: 1,
    explanation: "Con i giorni della settimana (Monday, Tuesday, Friday, ecc.) si usa sempre la preposizione 'on' ('on Friday')."
  },
  {
    id: "sim3_14",
    simulation: "Simulazione III",
    category: "Prepositions of Transport",
    question: "My friend arrived at Cambridge _________ train.",
    options: ["in", "with", "by"],
    correctIndex: 2,
    explanation: "Con i mezzi di trasporto generici si usa la preposizione 'by' (by train, by car, by bus, by plane)."
  },
  {
    id: "sim3_15",
    simulation: "Simulazione III",
    category: "Present Continuous",
    question: "George _________ at the moment.",
    options: ["watches", "is watching", "watch"],
    correctIndex: 1,
    explanation: "'At the moment' richiede il Present Continuous: 3ª persona singolare 'is watching'."
  },
  {
    id: "sim3_16",
    simulation: "Simulazione III",
    category: "Have Gone vs Have Been",
    question: "Jane is back home from holiday now. She _________ to Italy.",
    options: ["has been", "has gone", "were"],
    correctIndex: 0,
    explanation: "Jane è tornata a casa ('is back home'), quindi il viaggio di andata e ritorno è concluso: si usa 'has been to Italy'."
  },
  {
    id: "sim3_17",
    simulation: "Simulazione III",
    category: "Past Simple Negative",
    question: "It was a boring weekend. _________ anything.",
    options: ["I didn’t", "I don’t do", "I didn’t do"],
    correctIndex: 2,
    explanation: "Per negare un'azione al Past Simple serve l'ausiliare negativo 'didn't' seguito dalla forma base del verbo principale 'do': 'I didn't do anything'."
  },
  {
    id: "sim3_18",
    simulation: "Simulazione III",
    category: "Present Perfect Idioms",
    question: "Linda has lost her passport again. It’s the second time this _________ .",
    options: ["has happened", "happens", "happened"],
    correctIndex: 0,
    explanation: "La formula 'It is the first/second time...' regge il Present Perfect: 'has happened'."
  },
  {
    id: "sim3_19",
    simulation: "Simulazione III",
    category: "Have Gone vs Have Been",
    question: "Jim is away on holiday. He _________ to Spain.",
    options: ["has been", "went", "has gone"],
    correctIndex: 2,
    explanation: "Jim è via in vacanza ('is away'), quindi è andato e non è ancora tornato: si usa 'has gone'."
  },
  {
    id: "sim3_20",
    simulation: "Simulazione III",
    category: "Prepositions with Prefer",
    question: "I prefer tea _________ coffee.",
    options: ["than", "to", "at"],
    correctIndex: 1,
    explanation: "Il verbo 'prefer' regge la preposizione 'to' per introdurre il secondo termine di paragone: 'prefer X to Y' (preferisco X rispetto a Y)."
  },

  // ==========================================
  // SIMULAZIONE IV (Pag. 13 - 15)
  // ==========================================
  {
    id: "sim4_1",
    simulation: "Simulazione IV",
    category: "Titles",
    question: "Here ________ Brown. He is my teacher.",
    options: ["Ms", "Mr", "Mrs"],
    correctIndex: 1,
    explanation: "La seconda frase specifica 'He is my teacher' (maschile), quindi il titolo di rispetto è 'Mr'."
  },
  {
    id: "sim4_2",
    simulation: "Simulazione IV",
    category: "Present Simple Negative",
    question: "He _________ tennis in winter.",
    options: ["doesn’t plays", "don’t play", "doesn’t play"],
    correctIndex: 2,
    explanation: "La negazione alla 3ª persona singolare al Present Simple si ottiene con 'doesn't' + verbo alla forma base (senza -s): 'doesn't play'."
  },
  {
    id: "sim4_3",
    simulation: "Simulazione IV",
    category: "To Be for Physical Sensations",
    question: "Sally _________ very hot.",
    options: ["has", "is", "have"],
    correctIndex: 1,
    explanation: "In inglese per dire 'avere caldo' o 'avere freddo' si usa il verbo 'TO BE': 'to be hot/cold' (Sally is very hot, non Sally has)."
  },
  {
    id: "sim4_4",
    simulation: "Simulazione IV",
    category: "Present Continuous Questions",
    question: "What bus _________ for?",
    options: ["are you wait", "are you waiting", "is you wait"],
    correctIndex: 1,
    explanation: "Forma interrogativa del Present Continuous con soggetto 'you': 'are you waiting for?'."
  },
  {
    id: "sim4_5",
    simulation: "Simulazione IV",
    category: "Present Simple Questions",
    question: "_________ near you?",
    options: ["Doesn’t your friend live", "Your friend doesn’t live", "Doesn’t your friend lives"],
    correctIndex: 0,
    explanation: "La forma interrogativa negativa inizia con l'ausiliare 'Doesn't' + soggetto ('your friend') + verbo alla forma base ('live')."
  },
  {
    id: "sim4_6",
    simulation: "Simulazione IV",
    category: "Prepositions of Time",
    question: "She never goes out alone __________ night.",
    options: ["to", "of", "at"],
    correctIndex: 2,
    explanation: "Con la parola 'night' si usa per regola fissa la preposizione 'at' ('at night')."
  },
  {
    id: "sim4_7",
    simulation: "Simulazione IV",
    category: "Prepositions of Time",
    question: "_________ my birthday I usually give a party.",
    options: ["In", "On", "For"],
    correctIndex: 1,
    explanation: "Con le date e i giorni specifici (inclusa la parola 'birthday' che denota un giorno esatto) si usa 'On': 'On my birthday'."
  },
  {
    id: "sim4_8",
    simulation: "Simulazione IV",
    category: "Prepositions of Transport",
    question: "I often go _________ car from Rome to Florence.",
    options: ["in", "with", "by"],
    correctIndex: 2,
    explanation: "Per indicare il viaggiare tramite un mezzo si usa 'by': 'by car'."
  },
  {
    id: "sim4_9",
    simulation: "Simulazione IV",
    category: "Possessive Pronouns",
    question: "This house isn’t ________, it’s his.",
    options: ["hers", "her", "his"],
    correctIndex: 0,
    explanation: "'HERS' è il pronome possessivo femminile (= sua / di lei) che sta al posto del nome senza essere seguito dal sostantivo."
  },
  {
    id: "sim4_10",
    simulation: "Simulazione IV",
    category: "Saxon Genitive Plural",
    question: "I’m going out in two ______________ .",
    options: ["hour’s time", "hours’s time", "hours’ time"],
    correctIndex: 2,
    explanation: "Per i sostantivi plurali regolari che terminano in -s ('two hours'), il genitivo sassone si forma aggiungendo soltanto l'apostrofo finale: 'two hours' time'."
  },
  {
    id: "sim4_11",
    simulation: "Simulazione IV",
    category: "Comparatives",
    question: "Elaine is ___________ than my brother Fred.",
    options: ["more young", "more younger", "younger"],
    correctIndex: 2,
    explanation: "'Young' è un aggettivo monosillabico, quindi forma il comparativo aggiungendo '-er': 'younger than'."
  },
  {
    id: "sim4_12",
    simulation: "Simulazione IV",
    category: "Superlatives",
    question: "It was _________ film I have ever seen.",
    options: ["badder", "the worst", "the most bad"],
    correctIndex: 1,
    explanation: "Il superlativo relativo di 'bad' è 'the worst' (il peggiore)."
  },
  {
    id: "sim4_13",
    simulation: "Simulazione IV",
    category: "Present Perfect & Yet",
    question: "The school year _________ .",
    options: ["hasn’t started yet", "hasn’t yet started", "yet hasn’t started"],
    correctIndex: 0,
    explanation: "Nelle frasi negative con il Present Perfect, l'avverbio 'yet' si colloca preferibilmente alla fine della frase: 'hasn't started yet'."
  },
  {
    id: "sim4_14",
    simulation: "Simulazione IV",
    category: "Past Simple",
    question: "They _________ the car last week.",
    options: ["have bought", "buy", "bought"],
    correctIndex: 2,
    explanation: "'Last week' è espressione di tempo concluso e richiede il Past Simple ('bought')."
  },
  {
    id: "sim4_15",
    simulation: "Simulazione IV",
    category: "Have Gone vs Have Been",
    question: "Lucy’s just come back from Italy. She _________ to Naples.",
    options: ["has been", "is gone", "has gone"],
    correctIndex: 0,
    explanation: "Lucy è appena tornata ('has just come back'), quindi il viaggio è concluso: 'She has been to Naples'."
  },
  {
    id: "sim4_16",
    simulation: "Simulazione IV",
    category: "Have Gone vs Have Been",
    question: "Jill’s left for Italy. She _________ to Rome.",
    options: ["has been", "is gone", "has gone"],
    correctIndex: 2,
    explanation: "Jill è partita per l'Italia ed è ancora lì: 'She has gone to Rome'."
  },
  {
    id: "sim4_17",
    simulation: "Simulazione IV",
    category: "Irregular Past Simple",
    question: "I _________ my keys last week.",
    options: ["have lost", "losed", "lost"],
    correctIndex: 2,
    explanation: "'Last week' richiede il Past Simple; il verbo irregolare 'lose' al passato è 'lost'."
  },
  {
    id: "sim4_18",
    simulation: "Simulazione IV",
    category: "Irregular Past Simple",
    question: "They _________ a letter to their French friend last night.",
    options: ["have written", "wrote", "writed"],
    correctIndex: 1,
    explanation: "'Last night' colloca l'azione nel passato concluso: il Past Simple di 'write' è 'wrote'."
  },

  // ==========================================
  // SIMULAZIONE V - SIMULAZIONI (Pag. 17 - 20)
  // ==========================================
  {
    id: "sim_gen_1",
    simulation: "Simulazioni Varie A",
    category: "Frequency Adverbs",
    question: "Robert ________ away two or three times a year.",
    options: ["is going usually", "goes usually", "usually goes"],
    correctIndex: 2,
    explanation: "Gli avverbi di frequenza (usually, always, often) precedono i verbi ordinari: 'usually goes'."
  },
  {
    id: "sim_gen_2",
    simulation: "Simulazioni Varie A",
    category: "Past Simple vs Continuous",
    question: "Matt _________ while we were having dinner.",
    options: ["phoned", "was phoning", "has phoned"],
    correctIndex: 0,
    explanation: "L'azione che interrompe un'azione in corso al passato ('while we were having dinner') si esprime al Past Simple ('phoned')."
  },
  {
    id: "sim_gen_3",
    simulation: "Simulazioni Varie A",
    category: "Since + Past Simple",
    question: "It’s two years _________ Joe.",
    options: ["since I last saw", "since I didn’t see", "that I haven’t seen"],
    correctIndex: 0,
    explanation: "Nella costruzione 'It is [tempo] since...' si usa il verbo al Past Simple affermativo ('since I last saw Joe') per indicare da quanto tempo è accaduta l'ultima volta."
  },
  {
    id: "sim_gen_4",
    simulation: "Simulazioni Varie A",
    category: "Past Simple",
    question: "My mother __________ in Italy.",
    options: ["has grown up", "grew up", "had grown up"],
    correctIndex: 1,
    explanation: "Crescere / trascorrere l'infanzia è un periodo concluso della vita passata: si usa il Past Simple ('grew up', da 'grow up')."
  },
  {
    id: "sim_gen_5",
    simulation: "Simulazioni Varie A",
    category: "Modals (Could)",
    question: "I’m so tired I _________ for a week.",
    options: ["could sleep", "can sleep", "could have slept"],
    correctIndex: 0,
    explanation: "'Could sleep' esprime qui una possibilità ipotetica/condizionale al presente: 'Potrei dormire per una settimana'."
  },
  {
    id: "sim_gen_6",
    simulation: "Simulazioni Varie A",
    category: "Conditionals",
    question: "_________ a little longer, but I really have to go now.",
    options: ["I can stay", "I’d stay", "I’ll stay"],
    correctIndex: 1,
    explanation: "'I'd stay' è la contrazione di 'I would stay' (Rimarrei volentieri ancora un po', ma devo proprio andare)."
  },
  {
    id: "sim_gen_7",
    simulation: "Simulazioni Varie A",
    category: "To Be Born",
    question: "“Where ___________ ?” “In Chicago.”",
    options: ["were you born", "did you born", "are you born"],
    correctIndex: 0,
    explanation: "In inglese l'espressione di nascita è passata: 'to be born' -> 'Where were you born?' (non 'did you born')."
  },
  {
    id: "sim_gen_8",
    simulation: "Simulazioni Varie A",
    category: "Questions Order",
    question: "“What time ________?” “At 8.30.”",
    options: ["starts the film", "does start the film", "does the film start"],
    correctIndex: 2,
    explanation: "L'ordine corretto delle parole nelle domande in inglese è: Wh-word + Ausiliare (does) + Soggetto (the film) + Verbo forma base (start)."
  },
  {
    id: "sim_gen_9",
    simulation: "Simulazioni Varie A",
    category: "Question Tags",
    question: "“You don’t know where Karen is, _________?” “Sorry, I have no idea.”",
    options: ["is she", "do you", "don’t you"],
    correctIndex: 1,
    explanation: "Con una frase principale negativa ('You don't know...'), la question tag corrispondente deve essere affermativa: 'do you?'."
  },
  {
    id: "sim_gen_10",
    simulation: "Simulazioni Varie A",
    category: "Indefinite Articles",
    question: "Helen works six days _______ week.",
    options: ["a", "for", "at"],
    correctIndex: 0,
    explanation: "Per indicare la frequenza o il tasso per unità di tempo si usa l'articolo indeterminativo 'a': 'six days a week' (sei giorni a settimana)."
  },
  {
    id: "sim_gen_11",
    simulation: "Simulazioni Varie A",
    category: "Saxon Genitive",
    question: "This isn’t my book. It’s _______ .",
    options: ["of my sister", "my sister’s", "of my sister’s"],
    correctIndex: 1,
    explanation: "In inglese il possesso si esprime con il genitivo sassone 'my sister's' (sottinteso 'book')."
  },
  {
    id: "sim_gen_12",
    simulation: "Simulazioni Varie A",
    category: "Modals Deduction",
    question: "They live on a busy road. ______ a lot of noise from the traffic.",
    options: ["It must be", "There must have", "There must be"],
    correctIndex: 2,
    explanation: "Per esprimere una deduzione logica di esistenza ('deve esserci...') si usa 'There must be'."
  },
  {
    id: "sim_gen_13",
    simulation: "Simulazioni Varie A",
    category: "Some vs Any",
    question: "He’s lazy. He never does ______ work.",
    options: ["some", "any", "no"],
    correctIndex: 1,
    explanation: "L'avverbio 'never' rende la frase già negativa; per evitare la doppia negazione (vietata in inglese), si usa 'any': 'never does any work'."
  },
  {
    id: "sim_gen_14",
    simulation: "Simulazioni Varie A",
    category: "Participle Clauses",
    question: "George showed me some pictures ________ by his father.",
    options: ["painting", "they were painted", "painted"],
    correctIndex: 2,
    explanation: "'Painted by his father' è una proposizione participiale passiva con valore di relativa ridotta ('which were painted by his father')."
  },
  {
    id: "sim_gen_15",
    simulation: "Simulazioni Varie A",
    category: "Prepositions of Time",
    question: "I’m going away _______ the end of January.",
    options: ["in", "on", "at"],
    correctIndex: 2,
    explanation: "Con l'espressione 'the end of...' si usa la preposizione 'at': 'at the end of January'."
  },
  {
    id: "sim_gen_16",
    simulation: "Simulazioni Varie A",
    category: "Prepositions of Place",
    question: "Our apartment is _______ the second floor of the building.",
    options: ["on", "in", "at"],
    correctIndex: 0,
    explanation: "Con i piani di un edificio si usa la preposizione 'on' ('on the second floor')."
  },
  {
    id: "sim_gen_17",
    simulation: "Simulazioni Varie A",
    category: "Prepositions of Place",
    question: "I saw Steve ________ a conference on Saturday.",
    options: ["at", "in", "to"],
    correctIndex: 0,
    explanation: "Con eventi, incontri e conferenze si usa la preposizione 'at' ('at a conference')."
  },
  {
    id: "sim_gen_18",
    simulation: "Simulazioni Varie A",
    category: "Time Clauses",
    question: "I’ll be in Singapore next week. I hope to see some friends of mine _______ there.",
    options: ["during I’m", "while I’m", "while I’ll be"],
    correctIndex: 1,
    explanation: "'While' introduce una proposizione con soggetto e verbo ('while I'm there'); 'during' regge un sostantivo (non una proposizione)."
  },
  {
    id: "sim_gen_19",
    simulation: "Simulazioni Varie A",
    category: "Subject-Verb Agreement",
    question: "In Italy people ________ to do business by phone.",
    options: ["likes", "don’t like", "doesn’t like"],
    correctIndex: 1,
    explanation: "'People' è un sostantivo plurale (la gente / le persone), quindi regge l'ausiliare plurale 'don't like'."
  },
  {
    id: "sim_gen_20",
    simulation: "Simulazioni Varie A",
    category: "Question Tags",
    question: "There are still some biscuits in the box, _________ ?",
    options: ["are there", "aren’t there", "aren’t they"],
    correctIndex: 1,
    explanation: "La frase è introdotta da 'There are' in forma affermativa; la question tag corrispondente è negativa: 'aren't there?'."
  },

  // ==========================================
  // SIMULAZIONI VARIE B (Pag. 20 - 22)
  // ==========================================
  {
    id: "sim_sub_1",
    simulation: "Simulazioni Varie B",
    category: "Future & Time Clauses",
    question: "We _________ in London when we _________.",
    options: ["‘re going to live/will get married", "‘re going to live/get married", "‘re going to live/marry"],
    correctIndex: 1,
    explanation: "Nelle subordinate temporali introdotte da 'when', per il futuro si usa il Present Simple ('get married'), non 'will'."
  },
  {
    id: "sim_sub_2",
    simulation: "Simulazioni Varie B",
    category: "Modal Verbs",
    question: "You _________ respect your elders.",
    options: ["have", "could", "should"],
    correctIndex: 2,
    explanation: "'Should' esprime un dovere morale o una raccomandazione appropriata: 'Dovresti rispettare i tuoi anziani'."
  },
  {
    id: "sim_sub_3",
    simulation: "Simulazioni Varie B",
    category: "Question Tags",
    question: "There is a child in the bedroom, _________ ?",
    options: ["is there", "isn’t there", "there isn’t"],
    correctIndex: 1,
    explanation: "Frase affermativa con 'There is' -> question tag con ausiliare negativo: 'isn't there?'."
  },
  {
    id: "sim_sub_4",
    simulation: "Simulazioni Varie B",
    category: "Prepositions of Place",
    question: "I live_______38, Salterton Road.",
    options: ["in", "on", "at"],
    correctIndex: 2,
    explanation: "Quando l'indirizzo include il numero civico esatto (38, Salterton Road), si usa la preposizione 'at'."
  },
  {
    id: "sim_sub_5",
    simulation: "Simulazioni Varie B",
    category: "Modals Obligation",
    question: "I ________pass my exam, otherwise my father will get very angry.",
    options: ["must", "have", "couldn’t"],
    correctIndex: 0,
    explanation: "'Must' esprime un forte obbligo personale e inderogabile: 'Devo superare il mio esame'."
  },
  {
    id: "sim_sub_6",
    simulation: "Simulazioni Varie B",
    category: "Saxon Genitive Plural",
    question: "The _________ faces were quite thin from a lack of food.",
    options: ["girls’s", "girls’", "girl’s"],
    correctIndex: 1,
    explanation: "Il plurale regolare terminante in -s ('girls') prende solo l'apostrofo finale: 'the girls' faces'."
  },
  {
    id: "sim_sub_7",
    simulation: "Simulazioni Varie B",
    category: "Possessive Nouns Place",
    question: "She’s at the _______ .",
    options: ["doctor’", "doctor’s", "doctor"],
    correctIndex: 1,
    explanation: "In inglese, per indicare lo studio o la sede di una figura professionale si usa il genitivo con apostrofo s: 'at the doctor's' (sottinteso office/surgery)."
  },
  {
    id: "sim_sub_8",
    simulation: "Simulazioni Varie B",
    category: "Saxon Genitive Names",
    question: "I love _______ .",
    options: ["Dickens novels", "Dickens’ novels", "Dickens’s novels"],
    correctIndex: 1,
    explanation: "Per i nomi storici o classici terminanti in -s come Dickens, la grafia tradizionale nel test richiede solo l'apostrofo: 'Dickens' novels'."
  },
  {
    id: "sim_sub_9",
    simulation: "Simulazioni Varie B",
    category: "Modals Deduction",
    question: "Look at the sky: it ______ .",
    options: ["might rain", "can rain", "may rain"],
    correctIndex: 0,
    explanation: "'Might rain' esprime una possibilità ipotetica riferita al meteo: potrebbe piovere."
  },
  {
    id: "sim_sub_10",
    simulation: "Simulazioni Varie B",
    category: "Adverbs of Time",
    question: "The postman hasn’t come ______ .",
    options: ["just", "yet", "already"],
    correctIndex: 1,
    explanation: "Nelle frasi negative, 'yet' a fine frase significa 'ancora' (il postino non è ancora arrivato)."
  },
  {
    id: "sim_sub_11",
    simulation: "Simulazioni Varie B",
    category: "Have Been vs Have Gone",
    question: "George has ________ to England three times already.",
    options: ["been", "gone", "went"],
    correctIndex: 0,
    explanation: "George ha fatto quel viaggio 3 volte nel corso della sua vita ed è tornato: si usa 'has been'."
  },
  {
    id: "sim_sub_12",
    simulation: "Simulazioni Varie B",
    category: "Weather Expressions",
    question: "It _______ hot in Calcutta today.",
    options: ["is", "makes", "does"],
    correctIndex: 0,
    explanation: "In inglese le condizioni meteorologiche si esprimono con il verbo 'to be': 'It is hot' (non 'makes hot' come in italiano)."
  },
  {
    id: "sim_sub_13",
    simulation: "Simulazioni Varie B",
    category: "Conversational Responses",
    question: "“I’m going home.” “ _______.”",
    options: ["Me too", "I also", "I too"],
    correctIndex: 0,
    explanation: "La risposta spontanea e corretta di accordo affermativo in inglese parlato è 'Me too' (Anch'io)."
  },
  {
    id: "sim_sub_14",
    simulation: "Simulazioni Varie B",
    category: "Prepositions Place & Time",
    question: "Sean arrived _____ university _______ two o’clock.",
    options: ["in/at", "at/at", "to/at"],
    correctIndex: 1,
    explanation: "Si dice 'arrive at' una destinazione specifica/istituzione ('at university') e 'at' per gli orari ('at two o'clock')."
  },
  {
    id: "sim_sub_15",
    simulation: "Simulazioni Varie B",
    category: "Articles with Countries",
    question: "______ U.S.A. are really far from here.",
    options: ["The all", "--", "The"],
    correctIndex: 2,
    explanation: "I paesi i cui nomi sono plurali o indicano unione di stati prendono sempre l'articolo determinativo: 'The U.S.A.'."
  },

  // ==========================================
  // SIMULAZIONE V (Pag. 23 - 25)
  // ==========================================
  {
    id: "sim5_1",
    simulation: "Simulazione V",
    category: "Possessive Pronouns",
    question: "Are these keys _________ ?",
    options: ["you", "yours", "your"],
    correctIndex: 1,
    explanation: "'YOURS' è il pronome possessivo di 2ª persona (= le tue/vostre). 'Your' è aggettivo possessivo e vorrebbe un sostantivo dopo."
  },
  {
    id: "sim5_2",
    simulation: "Simulazione V",
    category: "Some vs Any",
    question: "“Have you got ______ milk?” “Yes, there’s ______ in the fridge”.",
    options: ["some/some", "any/some", "some/any"],
    correctIndex: 1,
    explanation: "Nelle domande aperte si usa 'any' ('Have you got any milk?'); nelle risposte affermative si usa 'some' ('there's some in the fridge')."
  },
  {
    id: "sim5_3",
    simulation: "Simulazione V",
    category: "Articles & Food",
    question: "I had ______ pizza for lunch.",
    options: ["a", "one", "--"],
    correctIndex: 2,
    explanation: "In questo contesto 'pizza' è inteso come sostantivo non numerabile / porzione di cibo generica senza articolo: 'I had pizza for lunch'."
  },
  {
    id: "sim5_4",
    simulation: "Simulazione V",
    category: "Saxon Genitive",
    question: "Have you seen ________?",
    options: ["Chris’ camera", "Chris’s camera", "Chris camera’s"],
    correctIndex: 1,
    explanation: "Per i nomi propri singolari terminanti in -s si aggiunge 's: 'Chris's camera'."
  },
  {
    id: "sim5_5",
    simulation: "Simulazione V",
    category: "Question Tags",
    question: "I’m coming with you, ________?",
    options: ["Am I", "Aren’t I", "Come I"],
    correctIndex: 1,
    explanation: "La question tag per 'I am' in forma interrogativo-negativa è per convenzione irregolare 'aren't I?'."
  },
  {
    id: "sim5_6",
    simulation: "Simulazione V",
    category: "Modals Possibility",
    question: "It _______ rain later.",
    options: ["can", "must", "might"],
    correctIndex: 2,
    explanation: "'Might' esprime una possibilità ipotetica o incerta futura: 'potrebbe piovere più tardi'."
  },
  {
    id: "sim5_7",
    simulation: "Simulazione V",
    category: "Time Clauses",
    question: "I _________ you as soon as we _______ to the hotel.",
    options: ["phone/get", "‘ll phone/get", "phone/will get"],
    correctIndex: 1,
    explanation: "Nella frase principale si usa il futuro con will ('I'll phone'), mentre nella temporale introdotta da 'as soon as' si usa il Present Simple ('get')."
  },
  {
    id: "sim5_8",
    simulation: "Simulazione V",
    category: "Be Going To",
    question: "Look at the traffic! We ________ be late.",
    options: ["are going to", "will go to", "go to"],
    correctIndex: 0,
    explanation: "Si usa 'be going to' per fare una previsione basata su prove visibili nel presente immediato ('Look at the traffic!')."
  },
  {
    id: "sim5_9",
    simulation: "Simulazione V",
    category: "Short Answers",
    question: "Have you got a computer? __________.",
    options: ["Yes, I’ve got", "yes, I have", "Yes, I got"],
    correctIndex: 1,
    explanation: "Nelle risposte brevi con il verbo 'have got' si riprende solo l'ausiliare 'have': 'Yes, I have' (non si ripete 'got')."
  },
  {
    id: "sim5_10",
    simulation: "Simulazione V",
    category: "Present Simple",
    question: "It usually _________ at this time of the year.",
    options: ["rains", "is raining", "has rained"],
    correctIndex: 0,
    explanation: "L'avverbio 'usually' segnala un fenomeno abituale che richiede il Present Simple: 3ª persona singolare 'rains'."
  },
  {
    id: "sim5_11",
    simulation: "Simulazione V",
    category: "Past Simple",
    question: "I _______ a scooter last week.",
    options: ["‘ve bought", "bought", "buyed"],
    correctIndex: 1,
    explanation: "'Last week' richiede il Past Simple; 'buy' è irregolare e diventa 'bought'."
  },
  {
    id: "sim5_12",
    simulation: "Simulazione V",
    category: "Present Continuous",
    question: "I ___________ a great book at the moment.",
    options: ["‘m reading", "read", "‘re reading"],
    correctIndex: 0,
    explanation: "'At the moment' richiede il Present Continuous: prima persona 'I'm reading'."
  },
  {
    id: "sim5_13",
    simulation: "Simulazione V",
    category: "Present Perfect",
    question: "It’s the third time we _______ in this hotel.",
    options: ["stay", "have stayed", "will stay"],
    correctIndex: 1,
    explanation: "La costruzione 'It's the third time...' regge il Present Perfect ('have stayed')."
  },
  {
    id: "sim5_14",
    simulation: "Simulazione V",
    category: "Whose Question",
    question: "“This is Sam’s coat I think.” “_________?” “Sam’s.”",
    options: ["Who", "Whose", "Whom"],
    correctIndex: 1,
    explanation: "'WHOSE' significa 'di chi', ed è il pronome interrogativo utilizzato per chiedere l'appartenenza o il possesso."
  },
  {
    id: "sim5_15",
    simulation: "Simulazione V",
    category: "Prepositions with Home",
    question: "I’m going _____ home.",
    options: ["to", "at", "--"],
    correctIndex: 2,
    explanation: "Con la parola 'home' in espressioni di movimento come 'go home', 'come home', non si usa alcuna preposizione."
  },
  {
    id: "sim5_16",
    simulation: "Simulazione V",
    category: "Prepositions of Time",
    question: "My birthday is ______ 28th May.",
    options: ["in", "on", "--"],
    correctIndex: 1,
    explanation: "Davanti a date specifiche con giorno e mese si impiega la preposizione 'on' ('on 28th May')."
  },
  {
    id: "sim5_17",
    simulation: "Simulazione V",
    category: "Prepositions of Time",
    question: "What are you doing _______ the weekend?",
    options: ["at", "in", "for"],
    correctIndex: 0,
    explanation: "Nell'inglese britannico standard con il fine settimana si usa 'at': 'at the weekend'."
  },
  {
    id: "sim5_18",
    simulation: "Simulazione V",
    category: "Prepositions Combinations",
    question: "We are going ______ holiday _____ the end of July.",
    options: ["to/to", "on/to", "on/at"],
    correctIndex: 2,
    explanation: "Si dice 'go ON holiday' (andare in vacanza) e 'AT the end of July' (alla fine di luglio)."
  },
  {
    id: "sim5_19",
    simulation: "Simulazione V",
    category: "Comparatives",
    question: "It’s _________ by train.",
    options: ["more quick", "quicker", "the most quick"],
    correctIndex: 1,
    explanation: "'Quick' è un aggettivo breve che al comparativo di maggioranza aggiunge '-er': 'quicker'."
  },
  {
    id: "sim5_20",
    simulation: "Simulazione V",
    category: "Irregular Past Simple & Noun",
    question: "Last week he _______ to New York. It was an early-morning _____.",
    options: ["flied/flight", "flew/flight", "flied/fly"],
    correctIndex: 1,
    explanation: "Il Past Simple del verbo irregolare 'fly' è 'flew'. Il sostantivo che significa 'volo' è 'flight'."
  },

  // ==========================================
  // SIMULAZIONE VI (Pag. 26 - 28)
  // ==========================================
  {
    id: "sim6_1",
    simulation: "Simulazione VI",
    category: "Nouns & Countability",
    question: "This man has dark _________ and a__________.",
    options: ["hairs / beard", "head / moustaches", "hair / beard"],
    correctIndex: 2,
    explanation: "In inglese i capelli nel loro insieme sono un sostantivo non numerabile singolare ('hair'); la barba è numerabile: 'a beard'."
  },
  {
    id: "sim6_2",
    simulation: "Simulazione VI",
    category: "Irregular Plurals",
    question: "In some countries you can have more _________.",
    options: ["wifes", "wieves", "wives"],
    correctIndex: 2,
    explanation: "I sostantivi che terminano in -fe (come wife, knife, life) formano il plurale in -ves: 'wives'."
  },
  {
    id: "sim6_3",
    simulation: "Simulazione VI",
    category: "Idiomatic Prepositions",
    question: "He is sitting at his _______ - perhaps he is _________.",
    options: ["office / on job", "desk / at work", "chair / to work"],
    correctIndex: 1,
    explanation: "Si dice 'sit at one's desk' (sedere alla propria scrivania) e 'at work' (al lavoro)."
  },
  {
    id: "sim6_4",
    simulation: "Simulazione VI",
    category: "Greetings",
    question: "You arrive at a party at 8 p.m. What do you say?",
    options: ["Goodnight", "Good afternoon", "Good evening"],
    correctIndex: 2,
    explanation: "'Good evening' si usa come saluto all'arrivo dopo le 18:00. 'Goodnight' si dice solo quando ci si congeda per andare via o andare a dormire."
  },
  {
    id: "sim6_5",
    simulation: "Simulazione VI",
    category: "Present Continuous",
    question: "Look! She ________ from a large whisky-bottle.",
    options: ["drink", "is drinking", "drinks"],
    correctIndex: 1,
    explanation: "'Look!' richiama l'attenzione su un'azione visibile che sta avvenendo in quel preciso istante: Present Continuous 'is drinking'."
  },
  {
    id: "sim6_6",
    simulation: "Simulazione VI",
    category: "Present Simple Negative",
    question: "Henderson __________ going to work.",
    options: ["doesn’t like", "doesn’t liking", "not like"],
    correctIndex: 0,
    explanation: "3ª persona singolare negativa: 'doesn't' + verbo forma base 'like'."
  },
  {
    id: "sim6_7",
    simulation: "Simulazione VI",
    category: "Comparatives",
    question: "A train is ____________ a bus.",
    options: ["quicker than", "more quicker than", "more quickly"],
    correctIndex: 0,
    explanation: "Comparativo di maggioranza dell'aggettivo 'quick': 'quicker than'."
  },
  {
    id: "sim6_8",
    simulation: "Simulazione VI",
    category: "Comparatives",
    question: "She’s a lot ________ in the new job than she was in the previous one.",
    options: ["more happy", "happier", "the happier"],
    correctIndex: 1,
    explanation: "Gli aggettivi bisillabici che terminano in -y come 'happy' formano il comparativo in '-ier': 'happier than'."
  },
  {
    id: "sim6_9",
    simulation: "Simulazione VI",
    category: "Present Perfect Frequency",
    question: "I ___________Prince Charles twice - once five years ago and once this year.",
    options: ["have met", "meet", "met"],
    correctIndex: 0,
    explanation: "Esperienza di vita fino al momento presente con indicazione di frequenza ('twice'): Present Perfect 'have met'."
  },
  {
    id: "sim6_10",
    simulation: "Simulazione VI",
    category: "Frequency Adverbs",
    question: "__________ the bus to work.",
    options: ["Bob always catches", "Always Bob catches", "Bob catches always"],
    correctIndex: 0,
    explanation: "L'avverbio di frequenza 'always' si colloca tra il soggetto e il verbo principale: 'Bob always catches'."
  },
  {
    id: "sim6_11",
    simulation: "Simulazione VI",
    category: "Word Order",
    question: "Peter works in London. __________. ",
    options: ["He goes by train there", "He goes there by train", "There goes he by train"],
    correctIndex: 1,
    explanation: "Ordine tipico degli avverbi e complementi: luogo ('there') prima del mezzo di trasporto ('by train'): 'He goes there by train'."
  },
  {
    id: "sim6_12",
    simulation: "Simulazione VI",
    category: "Modal Verbs Needn't",
    question: "“Must I take my umbrella?” “No, you _____. It’s not going to rain.”",
    options: ["don’t", "mustn’t", "needn’t"],
    correctIndex: 2,
    explanation: "In risposta a 'Must I...?', la negazione della necessità si esprime con 'needn't' (= non è necessario). 'Mustn't' indicherebbe proibizione."
  },
  {
    id: "sim6_13",
    simulation: "Simulazione VI",
    category: "Quantifiers",
    question: "He made ___________ last year.",
    options: ["much money", "many money", "a lot of money"],
    correctIndex: 2,
    explanation: "Nelle frasi affermative con sostantivi non numerabili ('money') si usa comunemente 'a lot of money' piuttosto che 'much money'."
  },
  {
    id: "sim6_14",
    simulation: "Simulazione VI",
    category: "Irregular Past Simple",
    question: "James __________ to him on the phone.",
    options: ["spoke", "spoked", "speaked"],
    correctIndex: 0,
    explanation: "Il verbo 'to speak' è irregolare e al passato fa 'spoke' (speak - spoke - spoken)."
  },
  {
    id: "sim6_15",
    simulation: "Simulazione VI",
    category: "Prepositions with Verbs",
    question: "Could you look ______ the blackboard and read what is on it?",
    options: ["on", "at", "to"],
    correctIndex: 1,
    explanation: "Il verbo 'look' regge la preposizione 'at' quando significa 'guardare verso/qualcosa': 'look at the blackboard'."
  },
  {
    id: "sim6_16",
    simulation: "Simulazione VI",
    category: "Reported Speech",
    question: "“Don’t do that,” I said. I ___________him not to do that.",
    options: ["told", "talked", "said"],
    correctIndex: 0,
    explanation: "'Told' è seguito direttamente dal complemento della persona a cui si dice qualcosa: 'I told him not to do that'. 'Said' richiederebbe 'to him'."
  },
  {
    id: "sim6_17",
    simulation: "Simulazione VI",
    category: "Sentence Structure",
    question: "Which sentence is correct?",
    options: [
      "I waited at the airport for eight long hours.",
      "I waited for at the airport eight long hours.",
      "At the airport for eight long hours I waited."
    ],
    correctIndex: 0,
    explanation: "L'ordine naturale della frase inglese è Soggetto (I) + Verbo (waited) + Luogo (at the airport) + Durata di tempo (for eight long hours)."
  },
  {
    id: "sim6_18",
    simulation: "Simulazione VI",
    category: "Double Possessive",
    question: "Janet is ____________.",
    options: ["a my old friend", "an old friend of me", "an old friend of mine"],
    correctIndex: 2,
    explanation: "Costruzione del doppio possessivo con pronome possessivo: 'an old friend of mine'."
  },
  {
    id: "sim6_19",
    simulation: "Simulazione VI",
    category: "Prepositions of Time",
    question: "I hoped the weather would be nice _____ the weekend.",
    options: ["on", "at", "in"],
    correctIndex: 1,
    explanation: "In inglese britannico si usa 'at the weekend'."
  },
  {
    id: "sim6_20",
    simulation: "Simulazione VI",
    category: "Prepositions of Transport",
    question: "He usually travels to Philadelphia _______ train.",
    options: ["to", "by", "with"],
    correctIndex: 1,
    explanation: "I mezzi di trasporto sono preceduti dalla preposizione 'by': 'by train'."
  },

  // ==========================================
  // SIMULAZIONE VI - BIS (Pag. 30 - 32)
  // ==========================================
  {
    id: "sim6b_1",
    simulation: "Simulazione VI (Set 2)",
    category: "Vocabulary Verbs",
    question: "He didn’t _____ glasses.",
    options: ["put", "wear", "take"],
    correctIndex: 1,
    explanation: "In inglese per dire 'portare gli occhiali' si usa il verbo 'to wear': 'wear glasses'."
  },
  {
    id: "sim6b_2",
    simulation: "Simulazione VI (Set 2)",
    category: "Gerund as Subject",
    question: "_____ is very good exercise.",
    options: ["To swim", "Swimming", "Swim"],
    correctIndex: 1,
    explanation: "Quando un verbo funge da soggetto della frase, si usa generalmente la forma in -ING (gerundio): 'Swimming is very good exercise'."
  },
  {
    id: "sim6b_3",
    simulation: "Simulazione VI (Set 2)",
    category: "Present Continuous for Future",
    question: "She________ for dinner this evening.",
    options: ["comes", "will come", "is coming"],
    correctIndex: 2,
    explanation: "Per appuntamenti o piani già stabiliti per la serata ('this evening') si usa il Present Continuous: 'is coming'."
  },
  {
    id: "sim6b_4",
    simulation: "Simulazione VI (Set 2)",
    category: "Prepositions of Time",
    question: "It will be ready ______ two weeks.",
    options: ["at", "for", "in"],
    correctIndex: 2,
    explanation: "Per indicare 'tra / entro' un certo lasso di tempo nel futuro si usa 'in': 'in two weeks' (tra due settimane)."
  },
  {
    id: "sim6b_5",
    simulation: "Simulazione VI (Set 2)",
    category: "Preposition Combinations",
    question: "I listened _____ the news ______ the radio.",
    options: ["--/on", "to/at", "to/on"],
    correctIndex: 2,
    explanation: "Si dice 'listen TO' (ascoltare a) e 'ON the radio' (alla radio)."
  },
  {
    id: "sim6b_6",
    simulation: "Simulazione VI (Set 2)",
    category: "Prepositions with Home",
    question: "I’m going ______ home.",
    options: ["to", "at", "--"],
    correctIndex: 2,
    explanation: "'Go home' non ammette alcuna preposizione intermedia."
  },
  {
    id: "sim6b_7",
    simulation: "Simulazione VI (Set 2)",
    category: "Some vs Any",
    question: "Do you have ______ change? I need 50p.",
    options: ["some", "the", "any"],
    correctIndex: 2,
    explanation: "Nelle domande generiche in cui si chiede la disponibilità di qualcosa si usa 'any': 'Do you have any change?'."
  },
  {
    id: "sim6b_8",
    simulation: "Simulazione VI (Set 2)",
    category: "Some vs Any",
    question: "Did you have_____ problems with this exercise?",
    options: ["some", "--", "any"],
    correctIndex: 2,
    explanation: "Nelle frasi interrogative si usa 'any' ('Did you have any problems...?')."
  },
  {
    id: "sim6b_9",
    simulation: "Simulazione VI (Set 2)",
    category: "Question Tags",
    question: "Grandfather cannot see very well, ______ ?",
    options: ["doesn’t see he", "can he", "can see he"],
    correctIndex: 1,
    explanation: "Con frase negativa contenente il modale 'cannot', la question tag è affermativa con lo stesso modale: 'can he?'."
  },
  {
    id: "sim6b_10",
    simulation: "Simulazione VI (Set 2)",
    category: "Articles Pronunciation",
    question: "_____ European expert was invited to speak to the committee.",
    options: ["A", "The", "An"],
    correctIndex: 0,
    explanation: "'European' inizia foneticamente con il suono semiconsonantico /j/ ('you-ropean'), quindi richiede l'articolo 'A' e non 'An'."
  },
  {
    id: "sim6b_11",
    simulation: "Simulazione VI (Set 2)",
    category: "Modals Advice",
    question: "Matt works too much. I think he ________ take it easy.",
    options: ["has to", "must", "should"],
    correctIndex: 2,
    explanation: "Con 'I think...' per esprimere un consiglio o parere personale si usa 'should' (dovrebbe prenderla con calma)."
  },
  {
    id: "sim6b_12",
    simulation: "Simulazione VI (Set 2)",
    category: "Modals Obligation",
    question: "I ______ tell my parents where I am, then they don’t worry.",
    options: ["can", "have to", "should"],
    correctIndex: 1,
    explanation: "'Have to' esprime una necessità pratica / obbligo oggettivo derivante dalla circostanza per non farli preoccupare."
  },
  {
    id: "sim6b_13",
    simulation: "Simulazione VI (Set 2)",
    category: "Future Intentions Will",
    question: "“What a beautiful ring!” “________it for you.”",
    options: ["I will buy", "I am buying", "I buy"],
    correctIndex: 0,
    explanation: "Per una decisione spontanea presa nel momento esatto in cui si parla si usa il futuro con 'will': 'I will buy it for you'."
  },
  {
    id: "sim6b_14",
    simulation: "Simulazione VI (Set 2)",
    category: "Polite Offers",
    question: "I hope you’re having a good time. ______ you like some more tea?",
    options: ["Will", "Do", "Would"],
    correctIndex: 2,
    explanation: "Per offrire qualcosa con cortesia si usa 'Would you like...?'."
  },
  {
    id: "sim6b_15",
    simulation: "Simulazione VI (Set 2)",
    category: "Prepositions of Holidays",
    question: "We always eat chicken _____ Christmas.",
    options: ["on", "at", "in"],
    correctIndex: 1,
    explanation: "Con le festività intese come periodo generale (Christmas, Easter) si usa 'at' ('at Christmas'). Si userebbe 'on' solo se ci fosse la parola 'Day' ('on Christmas Day')."
  },
  {
    id: "sim6b_16",
    simulation: "Simulazione VI (Set 2)",
    category: "Past Simple",
    question: "We ____ a wonderful time. Thanks for inviting us over for dinner.",
    options: ["had", "has", "have"],
    correctIndex: 0,
    explanation: "I ringraziamenti si riferiscono alla serata/cena appena trascorsa nel passato: Past Simple 'had' ('We had a wonderful time')."
  },
  {
    id: "sim6b_17",
    simulation: "Simulazione VI (Set 2)",
    category: "Irregular Plurals",
    question: "Several butter ______ were left in the sink (= lavandino).",
    options: ["knifes", "knifs", "knives"],
    correctIndex: 2,
    explanation: "Il plurale del sostantivo 'knife' cambia la terminazione -fe in -ves: 'knives'."
  },
  {
    id: "sim6b_18",
    simulation: "Simulazione VI (Set 2)",
    category: "Quantifiers",
    question: "How _____ money have you got?",
    options: ["much", "many", "any"],
    correctIndex: 0,
    explanation: "'Money' è un sostantivo non numerabile, quindi per chiedere la quantità si usa 'How much' (non 'how many')."
  },
  {
    id: "sim6b_19",
    simulation: "Simulazione VI (Set 2)",
    category: "Say vs Tell",
    question: "Do you ever ____________ your secrets to anyone?",
    options: ["tell", "say"],
    correctIndex: 0,
    explanation: "Si dice 'tell secrets' (o 'tell someone secrets'). Il verbo 'say' richiederebbe la citazione esatta o la costruzione con 'say that'."
  },
  {
    id: "sim6b_20",
    simulation: "Simulazione VI (Set 2)",
    category: "Comparatives",
    question: "My brother has a ________ room than me.",
    options: ["more tidy", "tidier", "tidy"],
    correctIndex: 1,
    explanation: "L'aggettivo 'tidy' finisce in -y: al comparativo di maggioranza muta in '-ier': 'tidier than'."
  },

  // ==========================================
  // SIMULAZIONE A1 (Pag. 34 - 37)
  // ==========================================
  {
    id: "sima1_1",
    simulation: "Simulazione A1",
    category: "Prepositions of Place",
    question: "There is a garden ___ the back of the house.",
    options: ["in", "on", "at", "to"],
    correctIndex: 2,
    explanation: "L'espressione di posizione 'sul retro di' si traduce con 'at the back of'."
  },
  {
    id: "sima1_2",
    simulation: "Simulazione A1",
    category: "Prepositions of Time",
    question: "He went away _____ December 10th.",
    options: ["in", "on", "at"],
    correctIndex: 1,
    explanation: "Con le date complete del giorno del mese si usa 'on': 'on December 10th'."
  },
  {
    id: "sima1_3",
    simulation: "Simulazione A1",
    category: "Possessive Pronouns",
    question: "Is this car _____?",
    options: ["her", "of her", "hers"],
    correctIndex: 2,
    explanation: "'HERS' è il pronome possessivo (= sua / di lei) posto a fine frase senza sostantivo successivo."
  },
  {
    id: "sima1_4",
    simulation: "Simulazione A1",
    category: "Question Tags",
    question: "Your father drove to work, ______ he?",
    options: ["doesn’t", "does", "didn’t", "did"],
    correctIndex: 2,
    explanation: "La frase è al Past Simple affermativo ('drove'): la question tag corrispondente richiede l'ausiliare negativo al passato 'didn't he?'."
  },
  {
    id: "sima1_5",
    simulation: "Simulazione A1",
    category: "Countable Nouns",
    question: "Which are countable nouns?",
    options: ["bread and jam", "sausages and fruits", "rice and milk", "sugar and salt"],
    correctIndex: 1,
    explanation: "'Sausages and fruits' sono sostantivi numerabili (possono essere pluralizzati e contati), a differenza di bread, rice, sugar che sono 'uncountable'."
  },
  {
    id: "sima1_6",
    simulation: "Simulazione A1",
    category: "Past Simple Answers",
    question: "What did you do last year for Christmas?",
    options: [
      "I have dinner with my friends.",
      "I would like to have dinner with my friends.",
      "I will have dinner with my friend.",
      "I had dinner with my friends."
    ],
    correctIndex: 3,
    explanation: "La domanda chiede un'azione passata ('did you do last year'): la risposta corretta deve essere al Past Simple ('I had dinner...')."
  },
  {
    id: "sima1_7",
    simulation: "Simulazione A1",
    category: "Present Perfect Life Experience",
    question: "________ to Canada?",
    options: ["Have you ever been", "Have you ever gone", "Have been", "Have you never been"],
    correctIndex: 0,
    explanation: "Per domandare se qualcuno è mai stato in un luogo nella sua vita si usa 'Have you ever been to...?'. 'Gone' implicherebbe che sia ancora lì."
  },
  {
    id: "sima1_8",
    simulation: "Simulazione A1",
    category: "Comparatives",
    question: "This motorbike is _______ than that one.",
    options: ["faster", "fast", "fastest"],
    correctIndex: 0,
    explanation: "Il comparativo di maggioranza di 'fast' è 'faster than'."
  },
  {
    id: "sima1_9",
    simulation: "Simulazione A1",
    category: "Present Perfect with Since",
    question: "I _______ Robert since I was six.",
    options: ["knew", "know", "have known"],
    correctIndex: 2,
    explanation: "Con 'since' per esprimere uno stato iniziato nel passato che perdura fino ad oggi si usa il Present Perfect: 'have known'."
  },
  {
    id: "sima1_10",
    simulation: "Simulazione A1",
    category: "Superlatives",
    question: "London is the _________ city in Europe.",
    options: ["most expensive", "more expensive", "expensive"],
    correctIndex: 0,
    explanation: "Per aggettivi lunghi con 'the' si forma il superlativo relativo con 'most': 'the most expensive city'."
  },
  {
    id: "sima1_11",
    simulation: "Simulazione A1",
    category: "Present Continuous Negative",
    question: "He ________ golf now.",
    options: ["isn’t playing", "doesn’t play", "doesn’t playing"],
    correctIndex: 0,
    explanation: "'Now' richiede il Present Continuous: 3ª persona singolare negativa 'isn't playing'."
  },
  {
    id: "sima1_12",
    simulation: "Simulazione A1",
    category: "Some vs Any",
    question: "I didn’t get _____ nice presents for Christmas this year.",
    options: ["any", "some", "no"],
    correctIndex: 0,
    explanation: "In presenza della negazione 'didn't', si usa 'any' per evitare la doppia negazione."
  },
  {
    id: "sima1_13",
    simulation: "Simulazione A1",
    category: "Some vs Any",
    question: "Do you have _____ good DVDs I could borrow?",
    options: ["some", "no", "any"],
    correctIndex: 2,
    explanation: "Nelle frasi interrogative standard si usa 'any' ('Do you have any...?')."
  },
  {
    id: "sima1_14",
    simulation: "Simulazione A1",
    category: "Articles & Uncountables",
    question: "While I was in Japan, I stayed in ___ hotel with walls made of ___ paper. We ate ___ rice with every meal. It was quite ___ unique experience.",
    options: ["an/a/the/a", "a/--/--/an", "a/--/--/a", "--/--/--/an"],
    correctIndex: 2,
    explanation: "1) 'a hotel' (la h è aspirata); 2) 'paper' è materiale non numerabile (no art.); 3) 'rice' è cibo non numerabile (no art.); 4) 'a unique experience' ('unique' inizia con fonema semiconsonantico /j/, quindi richiede 'a')."
  },
  {
    id: "sima1_15",
    simulation: "Simulazione A1",
    category: "Speaking Verbs",
    question: "Could I _____ to you for a minute?",
    options: ["Say", "Tell", "Talk"],
    correctIndex: 2,
    explanation: "Si dice 'talk to someone' (parlare con qualcuno). 'Say' non si usa con 'to you' in questo senso, 'tell' vorrebbe l'oggetto diretto senza 'to'."
  },
  {
    id: "sima1_16",
    simulation: "Simulazione A1",
    category: "Present Simple Timetables",
    question: "Our train ____ at 4:47.",
    options: ["will leave", "leaves", "is leaving"],
    correctIndex: 1,
    explanation: "Gli orari ufficiali e le tabelle di marcia dei mezzi di trasporto (treni, aerei, bus) si esprimono con il Present Simple: 'leaves'."
  },
  {
    id: "sima1_17",
    simulation: "Simulazione A1",
    category: "Future Arrangements",
    question: "This is my last day here. I ______ back to England tomorrow.",
    options: ["will go", "am going", "go"],
    correctIndex: 1,
    explanation: "Un piano o viaggio già organizzato per il futuro immediato ('tomorrow') richiede il Present Continuous: 'am going'."
  },
  {
    id: "sima1_18",
    simulation: "Simulazione A1",
    category: "Future Predictions",
    question: "My horoscope says that I _______ an old friend this week.",
    options: ["meet", "am meeting", "will meet"],
    correctIndex: 2,
    explanation: "Le previsioni dell'oroscopo (fatti futuri incerti non programmati) si esprimono con il future simple 'will meet'."
  },
  {
    id: "sima1_19",
    simulation: "Simulazione A1",
    category: "Present Perfect",
    question: "You _____ that movie many times.",
    options: ["see", "have seen", "saw"],
    correctIndex: 1,
    explanation: "Per un'azione ripetuta più volte nel corso della vita ('many times') senza specificare un tempo concluso si usa il Present Perfect: 'have seen'."
  },
  {
    id: "sima1_20",
    simulation: "Simulazione A1",
    category: "Present Continuous",
    question: "“Where’s Tom?” “_______ a shower right now.”",
    options: ["He’s taking", "He has taken", "He takes"],
    correctIndex: 0,
    explanation: "'Right now' indica un'azione in pieno svolgimento in questo momento: Present Continuous 'He's taking a shower'."
  },

  // ==========================================
  // SIMULAZIONE COMPLETA (Pag. 38 - 42)
  // ==========================================
  {
    id: "sim_full_1",
    simulation: "Simulazione Avanzata",
    category: "Geographical Articles",
    question: "____ is _______ in Scotland.",
    options: [
      "The Loch Ness / the most famous lake",
      "Loch ness / the most famous lake",
      "Loch ness / most famous lake"
    ],
    correctIndex: 1,
    explanation: "I laghi identificati per nome proprio (come Loch Ness o Lake Ontario) di norma non prendono l'articolo determinativo 'The', mentre il superlativo richiede 'the most famous lake'."
  },
  {
    id: "sim_full_2",
    simulation: "Simulazione Avanzata",
    category: "Possessive Pronouns",
    question: "These two cats are ____.",
    options: ["us", "our", "ours"],
    correctIndex: 2,
    explanation: "'Ours' è il pronome possessivo predicativo (= i nostri): 'These two cats are ours'."
  },
  {
    id: "sim_full_3",
    simulation: "Simulazione Avanzata",
    category: "Relative Pronouns",
    question: "This is John ____ laptop was stolen this morning.",
    options: ["whose", "whom", "who"],
    correctIndex: 0,
    explanation: "'Whose' è il pronome relativo di possesso (= il cui / la cui): 'il cui laptop è stato rubato'."
  },
  {
    id: "sim_full_4",
    simulation: "Simulazione Avanzata",
    category: "Relative Pronouns",
    question: "The Smiths, ____ son went to the USA, are selling their house.",
    options: ["whom", "who", "whose"],
    correctIndex: 2,
    explanation: "'Whose son' = il cui figlio (pronome relativo possessivo)."
  },
  {
    id: "sim_full_5",
    simulation: "Simulazione Avanzata",
    category: "Prepositions of Transport",
    question: "They often travel ___ car.",
    options: ["on", "in", "by", "with"],
    correctIndex: 2,
    explanation: "Con i mezzi di trasporto generici si impiega la preposizione 'by': 'by car'."
  },
  {
    id: "sim_full_6",
    simulation: "Simulazione Avanzata",
    category: "Prepositions of Transport",
    question: "They often go ___ foot.",
    options: ["by", "in", "on"],
    correctIndex: 2,
    explanation: "Per dire 'a piedi' l'espressione corretta in inglese è 'on foot' (non 'by foot')."
  },
  {
    id: "sim_full_7",
    simulation: "Simulazione Avanzata",
    category: "Prepositions of Time",
    question: "_____ the second day of my holiday we visited Disney World.",
    options: ["At", "On", "In"],
    correctIndex: 1,
    explanation: "Con i giorni specifici (come 'the second day') si usa 'On': 'On the second day'."
  },
  {
    id: "sim_full_8",
    simulation: "Simulazione Avanzata",
    category: "Duration For vs Since",
    question: "We stayed there _____ three weeks.",
    options: ["since", "for", "during"],
    correctIndex: 1,
    explanation: "Per indicare la durata di un periodo di tempo ('per tre settimane') si usa 'for'."
  },
  {
    id: "sim_full_9",
    simulation: "Simulazione Avanzata",
    category: "Present Perfect Time",
    question: "We’ve walked a long way _______________, haven’t we?",
    options: ["yesterday", "at the moment", "tomorrow", "today"],
    correctIndex: 3,
    explanation: "Con il Present Perfect ('We've walked') si deve usare un'indicazione di tempo non ancora conclusa, come 'today' (a differenza di 'yesterday' che vorrebbe il past simple)."
  },
  {
    id: "sim_full_10",
    simulation: "Simulazione Avanzata",
    category: "Present Perfect",
    question: "It’s the second time I ______tennis.",
    options: ["have played", "play", "played"],
    correctIndex: 0,
    explanation: "L'espressione 'It's the second time...' regge il Present Perfect ('have played')."
  },
  {
    id: "sim_full_11",
    simulation: "Simulazione Avanzata",
    category: "Superlatives",
    question: "Where is ____ chemist’s, please?",
    options: ["nearest", "the nearest", "more near", "the most near"],
    correctIndex: 1,
    explanation: "Il superlativo relativo di 'near' è 'the nearest' (la farmacia più vicina)."
  },
  {
    id: "sim_full_12",
    simulation: "Simulazione Avanzata",
    category: "Future Promises",
    question: "I promise I _____ harder.",
    options: ["am studying", "will study", "study"],
    correctIndex: 1,
    explanation: "Con i verbi di promessa al presente ('I promise') si usa il futuro con 'will': 'will study'."
  },
  {
    id: "sim_full_13",
    simulation: "Simulazione Avanzata",
    category: "Past Ability Modals",
    question: "_____ you swim when you were 10?",
    options: ["Must", "Could", "Should", "Might"],
    correctIndex: 1,
    explanation: "'Could' esprime un'abilità o capacità fisica nel passato: 'Sapevi nuotare quando avevi 10 anni?'."
  },
  {
    id: "sim_full_14",
    simulation: "Simulazione Avanzata",
    category: "Modals Deduction",
    question: "You have walked for ten hours. You ______ be exhausted.",
    options: ["need", "must", "can"],
    correctIndex: 1,
    explanation: "'Must' esprime una deduzione quasi certa: 'Devi essere esausto dopo aver camminato 10 ore'."
  },
  {
    id: "sim_full_15",
    simulation: "Simulazione Avanzata",
    category: "Few vs Little",
    question: "We are really busy now. I have ______ time to spend with my family.",
    options: ["few", "little", "any"],
    correctIndex: 1,
    explanation: "'Time' è un sostantivo non numerabile, quindi 'poco tempo' si traduce con 'little time' ('few' si usa con sostantivi numerabili)."
  },
  {
    id: "sim_full_16",
    simulation: "Simulazione Avanzata",
    category: "Few vs Little",
    question: "There was very ______ space left to park.",
    options: ["little", "few"],
    correctIndex: 0,
    explanation: "'Space' (spazio) è un sostantivo non numerabile, quindi richiede 'very little space'."
  },
  {
    id: "sim_full_17",
    simulation: "Simulazione Avanzata",
    category: "Present Simple Questions",
    question: "When __________?",
    options: ["does shops open", "do shops opens", "do shops open"],
    correctIndex: 2,
    explanation: "Il soggetto è plurale ('shops'), per cui l'ausiliare è 'do' e il verbo principale è alla forma base 'open': 'do shops open?'."
  },
  {
    id: "sim_full_18",
    simulation: "Simulazione Avanzata",
    category: "Some vs Any",
    question: "There isn’t _______ pasta in the oven. Would you like me to cook ______ for you?",
    options: ["no/any", "any/some", "any/any"],
    correctIndex: 1,
    explanation: "1) Nella frase negativa ('isn't') si usa 'any'; 2) nell'offerta di cortesia in cui si presuppone una risposta affermativa si usa 'some'."
  },
  {
    id: "sim_full_19",
    simulation: "Simulazione Avanzata",
    category: "Present Continuous Arrangement",
    question: "Bob called me yesterday, and I __________him this afternoon at 5.",
    options: ["will meet", "meet", "am meeting"],
    correctIndex: 2,
    explanation: "Per un appuntamento concordato precedentemente con un'altra persona si usa il Present Continuous: 'am meeting'."
  },
  {
    id: "sim_full_20",
    simulation: "Simulazione Avanzata",
    category: "Countable Nouns",
    question: "Which one is a countable noun?",
    options: ["butter", "milk bottle", "honey"],
    correctIndex: 1,
    explanation: "'Milk bottle' (bottiglia di latte) è un oggetto fisico numerabile (una, due bottiglie), mentre butter e honey sono sostanze non numerabili."
  },
  {
    id: "sim_full_21",
    simulation: "Simulazione Avanzata",
    category: "Modals Advice",
    question: "It’s wet and windy outside today. You ________ go out without an umbrella.",
    options: ["mustn’t", "don’t have to", "shouldn’t"],
    correctIndex: 2,
    explanation: "'Shouldn't' esprime un forte consiglio o sconsiglio pratico: 'non dovresti uscire senza ombrello'."
  },
  {
    id: "sim_full_22",
    simulation: "Simulazione Avanzata",
    category: "Present Perfect with Since",
    question: "My parents ____________ me a lot since I lost my job.",
    options: ["helped", "will help", "have helped"],
    correctIndex: 2,
    explanation: "Con 'since' per un'azione che continua dal momento passato fino ad oggi si usa il Present Perfect: 'have helped'."
  },
  {
    id: "sim_full_23",
    simulation: "Simulazione Avanzata",
    category: "Present Perfect Life Experience",
    question: "She ________ India twice.",
    options: ["visited", "has visited", "went visited"],
    correctIndex: 1,
    explanation: "Esperienza di vita con frequenza 'twice' nel corso del tempo fino ad oggi: Present Perfect 'has visited'."
  },
  {
    id: "sim_full_24",
    simulation: "Simulazione Avanzata",
    category: "Adverbs of Manner",
    question: "Did you do ______ in your test?",
    options: ["good", "well", "goodly"],
    correctIndex: 1,
    explanation: "Per modificare un verbo di azione come 'do' si usa l'avverbio 'well' ('do well' = andare bene/fare bene), non l'aggettivo 'good'."
  },
  {
    id: "sim_full_25",
    simulation: "Simulazione Avanzata",
    category: "Present Simple Facts",
    question: "It ______ a lot in Scotland during the winter months.",
    options: ["snow", "is snowing", "snows"],
    correctIndex: 2,
    explanation: "Fatto climatico generale e ricorrente ogni inverno: Present Simple alla 3ª persona singolare con soggetto 'It' -> 'snows'."
  },
  {
    id: "sim_full_26",
    simulation: "Simulazione Avanzata",
    category: "Continuous vs Simple",
    question: "I ______ this weekend in Eastbourne. I _______ there nearly every week.",
    options: [
      "will spend / am going",
      "am spending / am going",
      "am spending / go",
      "spend / go"
    ],
    correctIndex: 2,
    explanation: "1) Programma specifico per questo fine settimana: Present Continuous ('am spending'); 2) Abitudine ricorrente ('nearly every week'): Present Simple ('go')."
  },
  {
    id: "sim_full_27",
    simulation: "Simulazione Avanzata",
    category: "Frequency Questions",
    question: "_____ do you watch television?",
    options: ["How far", "How long", "How often"],
    correctIndex: 2,
    explanation: "'How often' significa 'con quale frequenza / quanto spesso' e serve per domandare la ricorrenza di un'azione."
  },
  {
    id: "sim_full_28",
    simulation: "Simulazione Avanzata",
    category: "Have Been vs Gone",
    question: "Mary’s hair looks nice. She’s just _____ to the hairdresser’s.",
    options: ["gone", "been", "was", "went"],
    correctIndex: 1,
    explanation: "I capelli di Mary sono a posto adesso perché è appena andata e tornata dal parrucchiere: 'has just been'."
  },
  {
    id: "sim_full_29",
    simulation: "Simulazione Avanzata",
    category: "Quantifiers",
    question: "“Do you take sugar in coffee?” “Just _____. Half a spoonful.”",
    options: ["a few", "many", "a little", "a lot of"],
    correctIndex: 2,
    explanation: "'Sugar' è un sostantivo non numerabile, quindi 'un pochino' si dice 'a little' ('a few' si usa con i numerabili)."
  },
  {
    id: "sim_full_30",
    simulation: "Simulazione Avanzata",
    category: "Definite Articles",
    question: "Last summer we went on ___ cruise in the Caribbean. Among ____ Islands we visited were Bermuda and ____ Bahamas.",
    options: [
      "a / the/ the",
      "the / -- / --",
      "a / -- / the"
    ],
    correctIndex: 0,
    explanation: "1) 'on a cruise' (una crociera qualsiasi); 2) 'Among the Islands' (le isole specifiche che abbiamo visitato); 3) 'the Bahamas' (gruppi/arcipelaghi di isole con nome plurale prendono 'the')."
  },

  // ==========================================
  // SIMULAZIONE 17 GENNAIO 2026 (Pag. 43 - 47)
  // ==========================================
  {
    id: "sim_gen26_1",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Present Continuous",
    question: "Her children __________in the garden now.",
    options: ["play", "are playing", "have played"],
    correctIndex: 1,
    explanation: "'Now' indica l'azione in corso adesso: soggetto plurale 'Her children' + 'are playing'."
  },
  {
    id: "sim_gen26_2",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Prepositions of Time",
    question: "Which preposition is used with MONTHS? And with DATES?",
    options: [
      "IN with months, ON with dates",
      "ON with months, IN with dates",
      "AT with months, IN with dates"
    ],
    correctIndex: 0,
    explanation: "Regola fondamentale del documento: IN si usa con i mesi (es. in July, in May), mentre ON si usa con le date (es. on 15th July, on 28th May)."
  },
  {
    id: "sim_gen26_3",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Past Simple",
    question: "I ______ to Paris last year.",
    options: ["has been", "has gone", "went"],
    correctIndex: 2,
    explanation: "'Last year' definisce un tempo passato concluso: richiede il Past Simple 'went'."
  },
  {
    id: "sim_gen26_4",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Some vs Any",
    question: "Would you like ______ more cake?",
    options: ["some", "the", "any"],
    correctIndex: 0,
    explanation: "Nelle offerte di cortesia con 'Would you like...?' si usa 'some' (non 'any')."
  },
  {
    id: "sim_gen26_5",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Prepositions of Place",
    question: "Which preposition do we use with FLOORS of a building?",
    options: ["on", "at", "in"],
    correctIndex: 0,
    explanation: "Con i piani di un edificio si usa sempre la preposizione 'on' (on the first floor, on the second floor)."
  },
  {
    id: "sim_gen26_6",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Present Perfect Duration",
    question: "I ______ in this house for ages.",
    options: ["have lived", "lived", "am living"],
    correctIndex: 0,
    explanation: "'For ages' (da una vita/da tantissimo tempo) con un'azione che continua nel presente richiede il Present Perfect: 'have lived'."
  },
  {
    id: "sim_gen26_7",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Past Simple Questions",
    question: "____________ Lisa yesterday?",
    options: ["Did you met", "Did you meet", "Have you met"],
    correctIndex: 1,
    explanation: "'Yesterday' richiede il Past Simple interrogativo: ausiliare 'Did' + soggetto + forma base del verbo 'meet' (non met)."
  },
  {
    id: "sim_gen26_8",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Comparatives",
    question: "She speaks English ______ than me.",
    options: ["gooder", "best", "better"],
    correctIndex: 2,
    explanation: "Il comparativo di maggioranza di 'good / well' è 'better than'."
  },
  {
    id: "sim_gen26_9",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Present Perfect",
    question: "It is the second time _____ Lucia.",
    options: ["I meet", "I’ve met", "I’m meeting"],
    correctIndex: 1,
    explanation: "'It is the second time...' regge il Present Perfect: 'I've met'."
  },
  {
    id: "sim_gen26_10",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Future Simple",
    question: "I _________ my horoscope in the newspaper (= quotidiano) tomorrow.",
    options: ["am reading", "will read", "read"],
    correctIndex: 1,
    explanation: "Azione futura generica non programmata come accordo interpersonale: 'will read tomorrow'."
  },
  {
    id: "sim_gen26_11",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Modals Prohibition",
    question: "You _______ speak during the exam!",
    options: ["should", "can’t", "mustn’t"],
    correctIndex: 2,
    explanation: "'Mustn't' esprime una proibizione o divieto assoluto: 'È assolutamente vietato parlare durante l'esame'."
  },
  {
    id: "sim_gen26_12",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Present Simple Timetables",
    question: "The bus ______ at 12.00.",
    options: ["will leave", "is leaving", "leaves"],
    correctIndex: 2,
    explanation: "Orari fissi di mezzi di trasporto pubblici richiedono il Present Simple: 'leaves'."
  },
  {
    id: "sim_gen26_13",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Prepositions of Transport",
    question: "I like to travel _____.",
    options: ["By train", "With train", "On train"],
    correctIndex: 0,
    explanation: "I mezzi di trasporto si introducono con 'by': 'by train'."
  },
  {
    id: "sim_gen26_14",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Past Ability Modals",
    question: "I _____ speak six language when I was 18 years old.",
    options: ["could", "must", "need"],
    correctIndex: 0,
    explanation: "Capacità/abilità nel passato: 'could speak'."
  },
  {
    id: "sim_gen26_15",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Question Tags",
    question: "They don’t eat meat, __________?",
    options: ["don’t they", "do they", "smoke they"],
    correctIndex: 1,
    explanation: "Frase principale negativa con 'don't' -> la question tag deve essere affermativa: 'do they?'."
  },
  {
    id: "sim_gen26_16",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Polite Invitations",
    question: "_______ you like to join us (= unirti) for dinner?",
    options: ["Should", "Do", "Would"],
    correctIndex: 2,
    explanation: "Per invitare o offrire cordialmente si usa 'Would you like to join us?'."
  },
  {
    id: "sim_gen26_17",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Indefinite Articles",
    question: "Italy is ___ European country.",
    options: ["an", "the", "a"],
    correctIndex: 2,
    explanation: "'European' inizia con suono fonetico /j/ (semivocale/consonantico), perciò richiede l'articolo indeterminativo 'a'."
  },
  {
    id: "sim_gen26_18",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Articles with Countries",
    question: "My sister lives in ___ United States.",
    options: ["--", "the", "all the"],
    correctIndex: 1,
    explanation: "I nomi di stati composti o plurali prendono l'articolo determinativo: 'in the United States'."
  },
  {
    id: "sim_gen26_19",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Prepositions of Time",
    question: "Which preposition do we use with TIMES of the day?",
    options: ["in", "at", "on"],
    correctIndex: 1,
    explanation: "Con gli orari del giorno si usa sempre la preposizione 'at' (at 7:00, at noon, at midnight)."
  },
  {
    id: "sim_gen26_20",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Some vs Any",
    question: "Are there _____ flowers for me?",
    options: ["some", "any", "the"],
    correctIndex: 1,
    explanation: "Nelle domande aperte si usa 'any' ('Are there any flowers...?')."
  },
  {
    id: "sim_gen26_21",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Comparatives",
    question: "He can run _______ than his brother.",
    options: ["more fast", "faster", "most fast"],
    correctIndex: 1,
    explanation: "'Fast' è un avverbio/aggettivo breve: comparativo di maggioranza 'faster than'."
  },
  {
    id: "sim_gen26_22",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Superlatives",
    question: "That’s __________ film I’ve ever watched!",
    options: ["badder", "worse", "the worst"],
    correctIndex: 2,
    explanation: "Superlativo relativo di 'bad': 'the worst film'."
  },
  {
    id: "sim_gen26_23",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Past Simple",
    question: "Last year I ______ to Madrid.",
    options: ["have been", "went", "have gone"],
    correctIndex: 1,
    explanation: "'Last year' definisce un periodo concluso nel passato: Past Simple 'went'."
  },
  {
    id: "sim_gen26_24",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Have Gone vs Have Been",
    question: "A: “Where is Tom?” B: “He’s not here. He _____ to the cinema”.",
    options: ["went", "has been", "has gone"],
    correctIndex: 2,
    explanation: "Tom non è qui ('He's not here'), quindi è andato e non è ancora rientrato: 'has gone'."
  },
  {
    id: "sim_gen26_25",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Object Pronouns",
    question: "The trip was a great experience for all of ______. ",
    options: ["us", "ours", "we"],
    correctIndex: 0,
    explanation: "Dopo la preposizione 'of' si usa il pronome personale in forma complemento: 'for all of us'."
  },
  {
    id: "sim_gen26_26",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Present Continuous",
    question: "Look! It _____ outside!",
    options: ["is raining", "rains", "rained"],
    correctIndex: 0,
    explanation: "'Look!' evidenzia un evento in pieno svolgimento: 'is raining'."
  },
  {
    id: "sim_gen26_27",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Future Arrangements",
    question: "I _____ my girlfriend for dinner tonight.",
    options: ["am meeting", "will meet", "meet"],
    correctIndex: 0,
    explanation: "Appuntamento fissato per stasera ('tonight'): Present Continuous 'am meeting'."
  },
  {
    id: "sim_gen26_28",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Present Simple Habits",
    question: "I _____ tea every morning.",
    options: ["drank", "drink", "am drinking"],
    correctIndex: 1,
    explanation: "'Every morning' indica un'abitudine quotidiana: Present Simple prima persona 'drink'."
  },
  {
    id: "sim_gen26_29",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Relative Adverbs",
    question: "This is the park_____ I met my husband.",
    options: ["where", "which", "that"],
    correctIndex: 0,
    explanation: "Per riferirsi a un luogo in cui è avvenuto un evento si usa l'avverbio relativo 'where' (= dove)."
  },
  {
    id: "sim_gen26_30",
    simulation: "Simulazione 17 Gennaio 2026",
    category: "Modals Possibility",
    question: "The doctors are doing their best, but he _____ survive.",
    options: ["might not", "should not", "must not"],
    correctIndex: 0,
    explanation: "'Might not' esprime una possibilità negativa incerta: 'potrebbe non sopravvivere'."
  },

  // ==========================================
  // SIMULAZIONE KEYS (Pag. 48 - 52)
  // ==========================================
  {
    id: "sim_keys_1",
    simulation: "Simulazione Keys",
    category: "Present Continuous",
    question: "My father _______ now.",
    options: ["Sleeps", "Is sleeping", "Has slept"],
    correctIndex: 1,
    explanation: "'Now' indica un'azione in svolgimento immediato: Present Continuous 'Is sleeping'."
  },
  {
    id: "sim_keys_2",
    simulation: "Simulazione Keys",
    category: "Prepositions of Time",
    question: "He was born ___ 15th July, 1975.",
    options: ["At", "On", "In"],
    correctIndex: 1,
    explanation: "Con le date precise indicanti il giorno del mese si usa la preposizione 'On'."
  },
  {
    id: "sim_keys_3",
    simulation: "Simulazione Keys",
    category: "Past Simple",
    question: "I ______ my friend Gina last year.",
    options: ["Meet", "Met", "Have met"],
    correctIndex: 1,
    explanation: "'Last year' richiede il Past Simple; il passato del verbo irregolare 'meet' è 'met'."
  },
  {
    id: "sim_keys_4",
    simulation: "Simulazione Keys",
    category: "Some vs Any",
    question: "Would you like ____ coffee?",
    options: ["Any", "Some", "A"],
    correctIndex: 1,
    explanation: "Nelle offerte di cortesia ('Would you like...?') si usa 'some'."
  },
  {
    id: "sim_keys_5",
    simulation: "Simulazione Keys",
    category: "Prepositions of Place",
    question: "My grandmother lived _____ the first floor.",
    options: ["At", "In", "On"],
    correctIndex: 2,
    explanation: "Con i piani di un edificio si usa 'On': 'on the first floor'."
  },
  {
    id: "sim_keys_6",
    simulation: "Simulazione Keys",
    category: "Present Perfect",
    question: "It’s the third time I _____ my keys.",
    options: ["Lost", "Have lost", "Lose"],
    correctIndex: 1,
    explanation: "'It's the third time...' richiede il Present Perfect: 'Have lost'."
  },
  {
    id: "sim_keys_7",
    simulation: "Simulazione Keys",
    category: "Future Predictions",
    question: "The horoscope says that you _____ someone special very soon.",
    options: ["Will meet", "Meet", "Are meeting"],
    correctIndex: 0,
    explanation: "Previsioni generiche del futuro (come l'oroscopo) usano 'will meet'."
  },
  {
    id: "sim_keys_8",
    simulation: "Simulazione Keys",
    category: "Present Simple Timetables",
    question: "The bus ______ at noon.",
    options: ["Will leave", "Leaves", "Is leaving"],
    correctIndex: 1,
    explanation: "Orari programmati di mezzi pubblici usano il Present Simple: 'Leaves at noon'."
  },
  {
    id: "sim_keys_9",
    simulation: "Simulazione Keys",
    category: "Question Tags",
    question: "They don’t eat meat, ______?",
    options: ["Are they", "Do they", "Don’t they"],
    correctIndex: 1,
    explanation: "Frase principale negativa ('don't') -> tag affermativa: 'Do they?'."
  },
  {
    id: "sim_keys_10",
    simulation: "Simulazione Keys",
    category: "Articles with Countries",
    question: "I like to travel to ____ United States.",
    options: ["The", "–", "The all"],
    correctIndex: 0,
    explanation: "I nomi plurali di paesi o federazioni richiedono l'articolo determinativo: 'The United States'."
  },
  {
    id: "sim_keys_11",
    simulation: "Simulazione Keys",
    category: "Present Continuous",
    question: "Look! ______ outside.",
    options: ["It rains", "It is raining", "It will rain"],
    correctIndex: 1,
    explanation: "'Look!' esorta a osservare un'azione che sta avvenendo adesso: 'It is raining'."
  },
  {
    id: "sim_keys_12",
    simulation: "Simulazione Keys",
    category: "Some vs Any",
    question: "I don’t have ____ money in my wallet.",
    options: ["No", "Any", "Some"],
    correctIndex: 1,
    explanation: "In presenza della negazione 'don't', si usa 'any' (evitando la doppia negazione)."
  },
  {
    id: "sim_keys_13",
    simulation: "Simulazione Keys",
    category: "Some vs Any",
    question: "Do you have _____ suggestions for a good restaurant?",
    options: ["some", "the", "any"],
    correctIndex: 2,
    explanation: "Nelle domande aperte si usa 'any'."
  },
  {
    id: "sim_keys_14",
    simulation: "Simulazione Keys",
    category: "Much vs Many",
    question: "Con il sostantivo MONEY, usiamo:",
    options: ["MUCH", "MANY"],
    correctIndex: 0,
    explanation: "'Money' è un sostantivo non numerabile (uncountable), quindi si quantifica con 'MUCH' ('how much money')."
  },
  {
    id: "sim_keys_15",
    simulation: "Simulazione Keys",
    category: "Present Simple Habits",
    question: "Every Sunday he ______ football.",
    options: ["Is playing", "Plays", "Will play"],
    correctIndex: 1,
    explanation: "'Every Sunday' indica un'azione abituale: Present Simple 3ª persona singolare 'Plays'."
  },
  {
    id: "sim_keys_16",
    simulation: "Simulazione Keys",
    category: "Grammar Rules",
    question: "Dove posizioniamo gli avverbi di frequenza con il verbo essere (to be)?",
    options: ["Prima del verbo", "Dopo il verbo"],
    correctIndex: 1,
    explanation: "Con il verbo 'to be' gli avverbi di frequenza si posizionano DOPO il verbo (es. 'He is always late'). Con tutti gli altri verbi ordinari si posizionano PRIMA del verbo (es. 'He always arrives late')."
  },
  {
    id: "sim_keys_17",
    simulation: "Simulazione Keys",
    category: "Superlatives",
    question: "She is _____ student of my class.",
    options: ["the best", "the gooder", "the most good"],
    correctIndex: 0,
    explanation: "Superlativo relativo irregolare di 'good': 'the best'."
  },
  {
    id: "sim_keys_18",
    simulation: "Simulazione Keys",
    category: "Comparatives",
    question: "You are ______ than me.",
    options: ["More good", "Better", "The better"],
    correctIndex: 1,
    explanation: "Comparativo di maggioranza di 'good': 'better than'."
  },
  {
    id: "sim_keys_19",
    simulation: "Simulazione Keys",
    category: "Question Tags",
    question: "I am your girlfriend, ______?",
    options: ["I’m not I", "Aren’t I", "Don’t I"],
    correctIndex: 1,
    explanation: "La question tag per 'I am' è per regola irregolare 'Aren't I?'."
  },
  {
    id: "sim_keys_20",
    simulation: "Simulazione Keys",
    category: "Present Perfect & Just",
    question: "I ________ my homework.",
    options: ["Have finished just", "Just have finished", "Have just finished"],
    correctIndex: 2,
    explanation: "L'avverbio 'just' si posiziona tra l'ausiliare 'have' e il participio passato: 'Have just finished'."
  },
  {
    id: "sim_keys_21",
    simulation: "Simulazione Keys",
    category: "Irregular Past Simple",
    question: "Yesterday, my sister _____ five kilometers in the park.",
    options: ["Runned", "Has ran", "Ran"],
    correctIndex: 2,
    explanation: "'Yesterday' richiede il Past Simple; il passato di 'run' è 'ran'."
  },
  {
    id: "sim_keys_22",
    simulation: "Simulazione Keys",
    category: "Possessive Pronouns",
    question: "I forgot my umbrella, so Sarah gave me _____.",
    options: ["Her", "Hers", "She"],
    correctIndex: 1,
    explanation: "Sarah mi diede il suo ombrello: pronome possessivo a fine frase senza sostantivo = 'hers'."
  },
  {
    id: "sim_keys_23",
    simulation: "Simulazione Keys",
    category: "Future Arrangements",
    question: "We _____ Sandra tomorrow evening.",
    options: ["Will meet", "Are meeting", "Meet"],
    correctIndex: 1,
    explanation: "Incontro già programmato con Sandra per domani sera: Present Continuous 'Are meeting'."
  },
  {
    id: "sim_keys_24",
    simulation: "Simulazione Keys",
    category: "Time Clauses",
    question: "I will call you as soon as I _____ home.",
    options: ["Will get", "Get", "Have got"],
    correctIndex: 1,
    explanation: "Nelle proposizioni temporali introdotte da 'as soon as' si usa il Present Simple ('get') in riferimento al futuro."
  },
  {
    id: "sim_keys_25",
    simulation: "Simulazione Keys",
    category: "Nouns & Countability",
    question: "“Advice” (consiglio) è un sostantivo:",
    options: ["Countable noun (numerabile)", "Uncountable noun (non numerabile)"],
    correctIndex: 1,
    explanation: "In inglese 'advice' è rigorosamente NON NUMERABILE (uncountable): non si dice 'an advice' né 'advices', bensì 'some advice' o 'a piece of advice'."
  },
  {
    id: "sim_keys_26",
    simulation: "Simulazione Keys",
    category: "Gerunds after Prepositions",
    question: "We went to the cinema after _____ the museum.",
    options: ["To visit", "To visiting", "Visiting"],
    correctIndex: 2,
    explanation: "Dopo le preposizioni come 'after' si usa il gerundio in -ing: 'Visiting'."
  },
  {
    id: "sim_keys_27",
    simulation: "Simulazione Keys",
    category: "Present Perfect Duration",
    question: "I ______ French for ten years, and I love it.",
    options: ["Have studied", "Studied", "Study"],
    correctIndex: 0,
    explanation: "Studio il francese da dieci anni (e continuo ad amarlo tuttora): Present Perfect di durata 'Have studied'."
  },
  {
    id: "sim_keys_28",
    simulation: "Simulazione Keys",
    category: "Irregular Past Simple",
    question: "I _____ a glass of water this morning.",
    options: ["Drinked", "Drank", "Have drunk"],
    correctIndex: 1,
    explanation: "Azione conclusa stamattina: Past Simple del verbo 'drink' è 'Drank'."
  },
  {
    id: "sim_keys_29",
    simulation: "Simulazione Keys",
    category: "Present Simple Habits",
    question: "Every Sunday I ______ to the cinema.",
    options: ["Am going", "Will go", "Go"],
    correctIndex: 2,
    explanation: "Azione abituale ricorrente 'Every Sunday': Present Simple prima persona 'Go'."
  },
  {
    id: "sim_keys_30",
    simulation: "Simulazione Keys",
    category: "Modals Obligation",
    question: "You ____ wear a helmet when you ride a bike!",
    options: ["Can", "Must", "Need"],
    correctIndex: 1,
    explanation: "'Must' esprime un obbligo categorico o norma di sicurezza inderogabile."
  },
  {
    id: "sim_keys_31",
    simulation: "Simulazione Keys",
    category: "Modals Ability",
    question: "She _____speak three language fluently.",
    options: ["Should", "Can", "Must"],
    correctIndex: 1,
    explanation: "'Can' esprime la capacità o abilità presente di parlare tre lingue."
  },
  {
    id: "sim_keys_32",
    simulation: "Simulazione Keys",
    category: "Modals Offers (Shall)",
    question: "______ I open the window, please?",
    options: ["Shall", "Can", "Do"],
    correctIndex: 0,
    explanation: "Nelle offerte o proposte di cortesia alla prima persona singolare si usa 'Shall': 'Shall I open the window, please?' (Vuoi che apra la finestra?)."
  },
  {
    id: "sim_keys_33",
    simulation: "Simulazione Keys",
    category: "Past Ability Modals",
    question: "When I was younger, I _____ run very fast.",
    options: ["Can", "Could", "Should"],
    correctIndex: 1,
    explanation: "Abilità fisica posseduta nel passato: 'Could run'."
  },
  {
    id: "sim_keys_34",
    simulation: "Simulazione Keys",
    category: "Past Inability Modals",
    question: "I’m sorry, I ____ come to your party last night.",
    options: ["Mustn't", "Shouldn't", "Couldn’t"],
    correctIndex: 2,
    explanation: "Impossibilità o incapacità nel passato ('last night'): 'Couldn't come' (non sono potuto venire)."
  },
  {
    id: "sim_keys_35",
    simulation: "Simulazione Keys",
    category: "Modals Possibility",
    question: "It_____ rain later, so take an umbrella.",
    options: ["Can", "Might", "Needs"],
    correctIndex: 1,
    explanation: "Possibilità eventuale nel futuro: 'Might rain' (potrebbe piovere)."
  },
  {
    id: "sim_keys_36",
    simulation: "Simulazione Keys",
    category: "Modals Possibility",
    question: "They ______ arrive late because of the traffic.",
    options: ["Might", "Must", "Can"],
    correctIndex: 0,
    explanation: "'Might' esprime la probabile o possibile conseguenza del traffico: potrebbero arrivare in ritardo."
  },
  {
    id: "sim_keys_37",
    simulation: "Simulazione Keys",
    category: "Comparatives",
    question: "This exam was ____ than the one we took last month.",
    options: ["Very easy", "Easier", "More easier"],
    correctIndex: 1,
    explanation: "Il comparativo di maggioranza di 'easy' è 'Easier than'."
  }
];

export const SIMULATION_GROUPS = Array.from(
  new Set(ALL_QUESTIONS.map(q => q.simulation))
);

export const CATEGORIES = Array.from(
  new Set(ALL_QUESTIONS.map(q => q.category))
);
