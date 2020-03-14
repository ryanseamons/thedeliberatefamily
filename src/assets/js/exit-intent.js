(function() {

  $(document).ready(function(){
        var flag = false;
        $("body").mouseleave(function(event){
            console.log("leaving", flag);

           if (flag == false){
                 $('#modalExitIntent').modal('show');
                 flag = true;
           }

        });
        $("modalExitIntentClose").click(function(){
             $('#modalExitIntent').modal('hide');
        });
        $('#modalExitIntent').on('shown.bs.modal', function () {
             $('#modalExitIntentEmail').trigger('focus')
        });

  })
})();