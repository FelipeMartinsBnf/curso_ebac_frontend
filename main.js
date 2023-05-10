$(document).ready(function(){

    (function( $ ){
        $.fn.resetForm = function() {
            if(confirm('Tem certeza que deseja apagar todas as tarefas?')){
                //$('ul').slideUp();
                $('ul').slideUp()
                $('ul').html('');
            }
           return this;
        }; 
     })( jQuery );

     (function( $ ){
        $.fn.deletarLinha = function(id) {
            $('#'+id).slideUp();
            window.setTimeout( () => {$('#'+id).remove();}, 2000 );
        }; 
     })( jQuery );

     (function( $ ){
        $.fn.terminarTarefa = function(id) {
            const li = $('#'+id)
            const checkbox = $('#check-'+id);
            
            //if($(li) != null){
                console.log(li)
                if($(li).hasClass('tarefa')){
                    li.removeClass('tarefa')
                    li.addClass('tarefa-marcada');
                    checkbox.attr('checked', true);
                }else{
                    li.removeClass('tarefa-marcada')
                    li.addClass('tarefa');
                    checkbox.attr('checked', false);
                }
            //}
        }; 
     })( jQuery );




    $('form').on('submit', function(e){
        e.preventDefault();
        $('ul').show();
        
        const taskInput = $('#task-input').val();
        let nomeTarefaReal = $.trim(taskInput);
        let nomeTarefa = nomeTarefaReal.replaceAll(' ', '-');
        
        const novoLi = $(`<li onclick="$().terminarTarefa('${nomeTarefa}')" id="li-${nomeTarefa}" >`);
            $(`<input type="checkbox" id="check-${nomeTarefa}" disabled >`).appendTo(novoLi);
            $(`<spam class='tarefa' id="${nomeTarefa}">${nomeTarefaReal}</spam>`).appendTo(novoLi);
            $(`<span class="material-symbols-outlined btn-delete" onclick="$().deletarLinha('li-${nomeTarefa}')">backspace</span>
        </li> `).appendTo(novoLi);
        //
        $(novoLi).appendTo('ul');
        $(novoLi).slideDown();
        $('#task-input').val(' ');
        
    })
}) 
