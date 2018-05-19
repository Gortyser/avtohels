
jQuery(function($){
	document.getElementById('confirmed').style.display = 'none';
})

function done(){
    document.getElementById('confirmed').style.display = 'block';
    setTimeout(function(){$('#confirmed').fadeOut('fast')},1500); 
}

function strange(){
    var name = $('#name').val();
var phone = $('#phone').val();
var firm = $('#firm').val();
var year = $('#year').val();
    if(name.length == 0){
        $('#name').addClass("error");
    }
    
    if(phone.length == 0){
     $('#phone').addClass("error");
    }
    
    if(firm.length == 0){
     $('#firm').addClass("error");
    }
    
    if(year.length == 0){
     $('#year').addClass("error");
    }
    
    
}

function checkParams() {
        var name = $('#name').val();
        var phone = $('#phone').val();
        var firm = $('#firm').val();
        var year = $('#year').val();
    
        if(name.length != 0){
            $('#name').addClass("normal");
            $('#name').removeClass("error");
        }
        if(phone.length != 0){
            $('#phone').addClass("normal");
            $('#phone').removeClass("error");
        }
        if(firm.length != 0){
            $('#firm').addClass("normal");
            $('#firm').removeClass("error");
        }
        if(year.length != 0){
            $('#year').addClass("normal");
            $('#year').removeClass("error");
        }

                
        if((name.length != 0) && (phone.length != 0) && (firm.length != 0) && (year.length) != 0) {
            $('#submit').removeAttr('disabled');
            $('#submit').css({"z-index":"100"});
        } else {
            $('#submit').attr('disabled', 'disabled');
            $('#submit').css({"z-index":"1"});
        }

}
            