let agenda = {
    'contacts': [
        {'nome': 'Nicola', 'telefono': '3331111111'},
        {'nome': 'Lorenzo', 'telefono': '3332222222'},
        {'nome': 'Paola', 'telefono': '3333333333'},
        {'nome': 'Jenny', 'telefono': '3334444444'}
    ],
    
    mostraContatti : function(){
        console.log(`I tuoi contatti:`);
        agenda.contacts.forEach(contatto => console.log(`Nome: ${contatto.nome}, Telefono: ${contatto.telefono}`));
        
    },
    
    mostraSingoloContatto : function(nome) {
        let index = agenda.contacts.findIndex(contatto => contatto.nome == nome);   
        
        if(index >= 0)
            console.log(`HAI RICERCATO:\nNome: ${agenda.contacts[index].nome}, Telefono: ${agenda.contacts[index].telefono}.`)
        else{
            console.log(`Il nome ${nome} non è presente in rubrica.`)
        };
    },
    
    eliminaContatto : function(nome) {
        let index = agenda.contacts.findIndex(contatto => contatto.nome == nome);    
        
        if(index >= 0)
            {
            let exMembro = agenda.contacts[index].nome;
            let rimosso = agenda.contacts.splice(index,1);
            console.log(`HAI ELIMINATO: Nome: ${exMembro}.`)}
            else{
                console.log(`Il contatto ${nome} non è presente in rubrica e non può essere eliminato.`)
            };
        },
        
        aggiungiContatto : function(nome, phoneNumber) {
            let index = agenda.contacts.findIndex(contatto => contatto.nome == nome);   
            
            if(index >= 0)
                console.log(`Non puoi aggiungere questo contatto pewrchè è gia esistente!`);
            else{
                let newContact = { "nome" : nome, "telefono": phoneNumber };
                
                let nomeAgg = agenda.contacts.splice(0, 0, newContact)
                console.log(`Il nome ${nome}  è statto aggiunto con il numero ${phoneNumber}.`)
            };
        },
        
        modificaContatto : function(nome, newName, newNumber) {
            let index = agenda.contacts.findIndex(contatto => contatto.nome == nome);   
            
            if(index >= 0)
                {
                console.log(`Stai modificando:\nNome: ${agenda.contacts[index].nome}, Telefono: ${agenda.contacts[index].telefono} con i seguenti nuovi dati:`);

                agenda.contacts[index].nome = newName;
                agenda.contacts[index].telefono = newNumber;

                console.log(`Nome: ${agenda.contacts[index].nome}, Telefono: ${agenda.contacts[index].telefono}.`);
            }else{
                console.log(`Il contatto ${nome} che volevi modificare non è presente in rubrica.`)
            };
            
        }
        
    };
    
    
    agenda.mostraContatti();
    
    agenda.mostraSingoloContatto("Paola");
    agenda.mostraSingoloContatto("Marco");
    
    agenda.eliminaContatto("Lorenzo");
    agenda.eliminaContatto("Pippo");
    
    agenda.mostraContatti();
    
    agenda.aggiungiContatto("Vegeta", 454545);
    
    agenda.mostraContatti();
    
    agenda.modificaContatto("Jenny", "Goku", 25414565);
    agenda.modificaContatto("Pablo", 552584465);
    
    agenda.mostraContatti();
    