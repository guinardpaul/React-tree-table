export const CYCLES = [
    { id: 1, literal: 'Cycle 3' },
    { id: 2, literal: 'Cycle 4' }
];

export const DOMAINES = [{
    id: 1,
    ref: "D 1",
    description: "Les langages mathématiques, scientifiques et informatique pour penser et communiquer.",
    cycle_id: 1
}, {
    id: 2,
    ref: "D 2",
    description: "Les méthodes et outils pour apprendre",
    cycle_id: 1
}, {
    id: 3,
    ref: "D 3",
    description: "La formation de la personne et du citoyen",
    cycle_id: 1
}, {
    id: 4,
    ref: "D 4",
    description: "les systèmes naturels et les systèmes techniques",
    cycle_id: 1
}, {
    id: 8,
    ref: "D 5",
    description: "les représentations du monde et l activité humaine ",
    cycle_id: 1
}, {
    id: 9,
    ref: "D 1",
    description: "Les langages mathématiques, scientifiques et informatique pour penser et communiquer.",
    cycle_id: 2
}, {
    id: 10,
    ref: "D 2",
    description: "Les méthodes et outils pour apprendre",
    cycle_id: 2
}, {
    id: 14,
    ref: "D 3",
    description: "La formation de la personne et du citoyen",
    cycle_id: 2
}, {
    id: 15,
    ref: "D 4",
    description: "Les systèmes naturels et les systèmes techniques",
    cycle_id: 2
}, {
    id: 18,
    ref: "D 5",
    description: "Les représentations du monde et l activité humaine",
    cycle_id: 2
}, {
    id: 11,
    ref: null,
    description: "Organiser son travail personnel",
    cycle_id: 2,
    sous_domaine_id: 10
}, {
    id: 12,
    ref: null,
    description: "Coopération et réalisation de projet.",
    cycle_id: 2,
    sous_domaine_id: 10
}, {
    id: 13,
    ref: null,
    description: "S approprier des outils et méthodes",
    cycle_id: 2,
    sous_domaine_id: 10
},
{
    id: 16,
    ref: null,
    description: "Pratiquer des démarches scientifiques et technologiques",
    cycle_id: 2,
    sous_domaine_id: 15
}, {
    id: 17,
    ref: null,
    description: "Responsabilités individuelles et collectives",
    cycle_id: 2,
    sous_domaine_id: 15
}, {
    id: 5,
    ref: null,
    description: "Pratiquer des démarches scientifiques et technologiques",
    cycle_id: 1,
    sous_domaine_id: 4
}, {
    id: 6,
    ref: null,
    description: "Conception, création, réalisation",
    cycle_id: 1,
    sous_domaine_id: 4
}, {
    id: 7,
    ref: null,
    description: "Mettre en pratique des comportements simples respectueux des autres, de l environnement, de sa santé ",
    cycle_id: 1,
    sous_domaine_id: 4
}
];

export const COMPETENCES = [{
    id: 1,
    ref: "CT 1.1",
    description: "Savoir décrire des observations, expériences, hypothèses, conclusions en utilisant un vocabulaire précis.",
    cycle_id: 1,
    "domaine_id": 1
}, {
    id: 2,
    ref: "CT 1.2",
    description: "Savoir exploiter un document constitué de divers supports (texte, schéma, graphique, tableau, algorithme simple).",
    cycle_id: 1,
    "domaine_id": 1
}, {
    id: 3,
    ref: "CT 1.3",
    description: "Utiliser différents modes de représentation (texte, schéma, graphique, tableau, algorithme simple).",
    cycle_id: 1,
    "domaine_id": 1
}, {
    id: 4,
    ref: "CT 1.4",
    description: "Expliquer un phénomène à l’oral et / ou à l’écrit.",
    cycle_id: 1,
    "domaine_id": 1
}, {
    id: 5,
    ref: "CT 1.5",
    description: "Savoir créer un programme de construction.",
    cycle_id: 1,
    "domaine_id": 1
}, {
    id: 6,
    ref: "CT 1.6",
    description: "Se repérer et se déplacer dans l’espace en utilisant ou en élaborant des représentations.",
    cycle_id: 1,
    "domaine_id": 1
},
{
    id: 7,
    ref: "CT 2.1",
    description: "Utiliser des outils numériques pour communiquer des résultats en respectant les règles de base, enregistrement, intégration de médias, collaboration.",
    cycle_id: 1,
    "domaine_id": 2
}, {
    id: 8,
    ref: "CT 2.2",
    description: "Utiliser des outils numériques pour simuler des phénomènes.",
    cycle_id: 1,
    "domaine_id": 2
}, {
    id: 9,
    ref: "CT 2.3",
    description: "Utiliser des outils numériques pour représenter des objets techniques.",
    cycle_id: 1,
    "domaine_id": 2
}, {
    id: 10,
    ref: "CT 2.4",
    description: "Choisir ou utiliser le matériel adapté pour mener une observation, effectuer une mesure, réaliser une expérience ou une production.  Utiliser les bonnes unités.",
    cycle_id: 1,
    "domaine_id": 2
}, {
    id: 11,
    ref: "CT 2.5",
    description: "Organiser seul ou en groupe un espace de réalisation expérimentale.",
    cycle_id: 1,
    "domaine_id": 2
}, {
    id: 12,
    ref: "CT 2.6",
    description: "Extraire les informations pertinentes d’un document et les mettre en relation pour répondre à une question.",
    cycle_id: 1,
    "domaine_id": 2
}, {
    id: 13,
    ref: "CT 2.7",
    description: "Utiliser les outils mathématiques adaptés.",
    cycle_id: 1,
    "domaine_id": 2
},
{
    id: 14,
    ref: "CT 3.1",
    description: "Exprimer des émotions ressenties. Formuler une opinion, prendre de la distance avec celle-ci, la confronter à celle d autrui et en discuter.",
    cycle_id: 1,
    "domaine_id": 3
}, {
    id: 15,
    ref: "CT 3.2",
    description: "Relier des connaissances acquises en sciences et technologie à des questions de santé, de sécurité et d’environnement.",
    cycle_id: 1,
    "domaine_id": 3
},
{
    id: 16,
    ref: "CT 4.1",
    description: "Proposer avec l’aide du professeur, une démarche pour résoudre un problème ou répondre à une question de nature scientifique ou technologique.",
    cycle_id: 1,
    "domaine_id": 5
}, {
    id: 17,
    ref: "CT 4.2",
    description: "Formuler une question ou une problématique scientifique ou technologique simple",
    cycle_id: 1,
    "domaine_id": 5
}, {
    id: 18,
    ref: "CT 4.3",
    description: "Proposer une ou des hypothèses pour répondre à une question ou un problème",
    cycle_id: 1,
    "domaine_id": 5
}, {
    id: 19,
    ref: "CT 4.4",
    description: "Proposer des expériences simples pour tester une hypothèse",
    cycle_id: 1,
    "domaine_id": 5
}, {
    id: 20,
    ref: "CT 4.5",
    description: "Interpréter un résultat, en tirer une conclusion",
    cycle_id: 1,
    "domaine_id": 5
}, {
    id: 21,
    ref: "CT 4.6",
    description: "Formaliser une partie de sa recherche sous une forme écrite ou orale.",
    cycle_id: 1,
    "domaine_id": 5
},
{
    id: 22,
    ref: "CT 4.7",
    description: "Identifier les évolutions des besoins et des objets techniques dans leur contexte.",
    cycle_id: 1,
    "domaine_id": 6
}, {
    id: 23,
    ref: "CT 4.8",
    description: "Identifier les principales familles de matériaux.",
    cycle_id: 1,
    "domaine_id": 6
}, {
    id: 24,
    ref: "CT 4.9",
    description: "Décrire le fonctionnement d’objets techniques, leurs fonctions et leurs composants.",
    cycle_id: 1,
    "domaine_id": 6
}, {
    id: 25,
    ref: "CT 4.10",
    description: "Réaliser en équipe tout ou une partie d’un objet technique répondant à un besoin.",
    cycle_id: 1,
    "domaine_id": 6
},
{
    id: 26,
    ref: "CT 4.11",
    description: "Appliquer les consignes, respecter les règles relatives à la sécurité et au respect de la personne et de l environnement.",
    cycle_id: 1,
    "domaine_id": 7
},
{
    id: 27,
    ref: "CT 5.1",
    description: "Distinguer un événement d une durée, mesurer des durées",
    cycle_id: 1,
    "domaine_id": 8
}, {
    id: 28,
    ref: "CT 5.2",
    description: "Connaître et situer dans le temps de grandes périodes historiques et quelques événements",
    cycle_id: 1,
    "domaine_id": 8
}, {
    id: 29,
    ref: "CT 5.3",
    description: "Elaborer un raisonnement et l exprimer en utilisant des langages divers",
    cycle_id: 1,
    "domaine_id": 8
}
];