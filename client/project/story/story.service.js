angular.module('artoo').service('StorySrv', function (){
    
    //CREO UN AVVENTURA COMPOSTA DA 4 EVENTI 
    //IL 3° STEP
    var stepAvventura = [{
            typology : "combat",
            description: "Tutto ebbe inizio nella regione del Banland, nell'antica, anzi antichissima " +
                         "città di Therin, fondata precisamente 2 giorni fa. Dopo aver affrontato le intemperie " +
                         "da ormai una settimana, riuscite finalmente a scorgere in lontananza il centro cittadino. " +
                         "Sentite in lontananza un gran baccano e intuite (non occorrere essere dei maghi per una volta!) " +
                         "che i festeggiamenti non sono mai stati interrotti, tanto che davanti a voi si presenta " +
                         "un gruppo di bannati (così viene chiamata la gente della regione) decisamente ubriachi che " + 
                         "con uno sguardo a dir tanto enigmatico sfoderano i propri boccali e si preparano a lanciarli verso di voi",
            ability: "",
            done : 0,
        },{
            typology : "event",
            description: "Il gruppo di bannati sembra non aver sentito alcun dolore per tutto il combattimento finchè non si rendono " +
                         "conto di aver finito i boccali e presi dallo sconforto cadono a terra in uno stato di coma apparente. " +
                         "Purtroppo i vostri indumenti sono ormai inzuppati di birra di dubbia qualità e decidete di avviarvi " +
                         "il prima possibile verso la prima locanda della città. Tavoli e sedie in ordine sono un miraggio infatti " +
                         "trovate la locanda completamente distrutta, tavoli di legno distrutti, boccali sparsi nella stanza principale e " +
                         "gente addormentata sul pavimento o sopra a qualche sedia rimasta stranamente integra. Venite accolti da un uomo sulla " + 
                         "cinquantina decisamente disperato ma soprattutto infuriato per le condizioni del suo locale:" +
                         "E voi che cosa volete? Non vedete come mi hanno ridotto la mia locanda? Ho aperto da 2 giorni" + 
                         "e già devo chiudere.",
            ability: "",
            done : 0,
        },{
            typology : "event",
            description: "Comprendete a pieno la disperazione del locandiere e decidete che è il caso di lasciarlo in pace, " +
                         "lui e ciò che ne rimane del locale. State per uscire dalla locanda quando improvvisamente da sotto " +
                         "i resti di un tavolo distrutto compare un piccolo ladruncolo che afferrà la borsa dei soldi del membro del gruppo " +
                         "più vicino a lui e si avvia a tutta velocità verso la cucina e sentite il rumore di un chiavistello... ha bloccato la porta!! " +
                         "[Forza] Grazie alla possenza del vostro combattente più forte, riuscite con facilità a sfondare la porta " +
                         "della cucina e notate il piccolo ladruncolo che sta cercando qualcosa di non identificato in cucina ma senza riuscirci.[/Forza] " + 
                         "Purtroppo non siete in grado di sfondare una porta decisamente malandata e quindi secondo il manuale degli " +
                         "ingegneri esiste sempre una backdoor in cucina e quindi decidete di fare il giro e ritrovate il ladruncolo con " + 
                         "in tasca i vostri soldi ed in mano un paio di coltelli decisamente affilati.",
            ability: "Forza",
            done : 0, 
        },{
            typology : "combat",
            description: "",
            ability: "",
            done : 0,  
        }
    ];
    
});