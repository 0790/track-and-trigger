  
        $(document).ready(function(){

            $('#Button').click(function(){
                $('#loginModal').modal('show');

            
            });

            $('#reserveButton').click(function(){
                $('#reserve').modal('show');

            
            });
            $('#loginclose').click(function(){
                if($('#loginclose').children('button').hasClass('close')){
                    $('#loginModal').modal('hide') ;
                    }

            });
            $('#logincancel').click(function(){
                if($('#logincancel').children('button')){
                    $('#loginModal').modal('hide') ;
                    }

            });


            $('#reserveclose').click(function(){
                if($('#reserveclose').children('button').hasClass('close')){
                    $('#reserve').modal('hide') ;
                    }

            });
            $('#reservecancel').click(function(){
                if($('#reservecancel').children('button')){
                    $('#reserve').modal('hide') ;
                    }

            });

            
            }); 
            