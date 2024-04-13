$(document).ready(function() {
/* Завдання 3 */
    $('#sortable').sortable({
        placeholder: "ui-state-highlight"
    })
/* Завдання 4 */
    $("#selectable").selectable()

/* Завдання 1 */
    var helmetsCount = 0;
    var suma = 0;

    $("#draggable1").draggable({helper: 'clone'})
    $("#draggable2").draggable({helper: 'clone'})
    $("#draggable3").draggable({helper: 'clone'})
    $("#draggable4").draggable({helper: 'clone'})

    var $gallery = $(".features-grid"),
        $trash = $(".koshik-wrapper");

    $trash.droppable({
        accept: ".features-grids > div",
        classes: {
            'ui-droppable-active':"ui-state-highlight"
        },
        drop: function(event, ui){
            // рахуємо кількість мото
            helmetsCount++;
            if (helmetsCount>0) {$("#myclear").show()}
            $('#helmetsCount strong').text(helmetsCount);
            // рахуємо суму мото
            var helmet = $(ui.draggable).children();
            suma += parseInt(helmet.attr('price'));
            $('#helmetsSumm strong').text(suma);

            deleteImage(ui.draggable)
        }
    }) 

})