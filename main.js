// freccia next: quando l'utente clicca devo spostare la classe active all'immagine successiva.

// devo intercettare il click che ha la classe next
$(".next").click(function() {
    // recuperare quale è l'immagine con la classe active attiva in questo momento
    var img_attiva = $('img.active');
    // togliere la classe active a questa immagine
    img_attiva.removeClass('active');
    // recuperare il pallino attivo
    var bullet_attivo = $('.fa-circle.active');
    // togliere la classe active a questo pallino
    bullet_attivo.removeClass('active');
    // recupero l'immagine successiva
    var img_successiva = img_attiva.next('img');
    // recupero il pallino successivo
    var bullet_successivo = bullet_attivo.next('.fa-circle')
    // verifico se c'è un'immagine img_successiva
    if (img_successiva.length == 0) {
        // se NON c'è => immagine successiva diventa la prima
        img_successiva = $('#prima_img');
        // e devo rimettere a lei la classe active
        img_successiva.addClass('active');
        // se non c'è immagine non c'è neanche pallino e devo ricominciare dal primo
        bullet_successivo = $('#primo_bullet')
        bullet_successivo.addClass('active')
    } else {
    // se c'è => metto la classe active alla successiva disponibile
        img_successiva.addClass('active');
        // e metto la classe active al pallino successivo
        bullet_successivo.addClass('active');
    }
})


// per tornare indietro:
// devo intercettare il click che ha la classe prev
$(".prev").click(function() {
    // recuperare quale è l'immagine con la classe active attiva in questo momento
    var img_attiva = $('img.active');
    // togliere la classe active a questa immagine
    img_attiva.removeClass('active');
    // recuperare il pallino attivo
    var bullet_attivo = $('.fa-circle.active');
    // recupero l'immagine precedente
    var img_precedente = img_attiva.prev('img');
    // recupero il pallino precedente
    var bullet_precedente = bullet_attivo.prev('.fa-circle')
    // verifico se c'è un'immagine img_successiva
    if (img_precedente.length == 0) {
        // se NON c'è immagine precedente diventa l'ultima
        img_precedente = $('img:last-child');
        // e devo rimettere a lei la classe active
        img_precedente.addClass('active');
        // se non c'è immagine non c'è neanche pallino e devo ricominciare dal primo
        bullet_precedente = $('i:last-child')
        bullet_precedente.addClass('active')
    } else {
    // se c'è metto la classe active alla precedente disponibile
        img_precedente.addClass('active');
        // e metto la classe active al pallino precedente
        bullet_precedente.addClass('active');
    }
})


// oggi pomeriggio riprendete l'esercizio dello slider e, grazie alle timing function che abbiamo studiato stamattina, fate sì che il carousel funzioni con l'autoplay, ossia che automaticamente ogni 3 secondi cambi slide e venga visualizzata l'immagine successiva.
