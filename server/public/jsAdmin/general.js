
//show validation
function showValidation(error){

    if(error.status == 422){

        var spanErr = $(".form-group .text-danger");
        for(var i = 0; i< spanErr.length; i++){
            $(spanErr[i]).text("");
        };
        
        var errors = error.responseJSON;
        var data = errors['data'];
        if($.isEmptyObject(data) === false){
            $.each(data, function(key, value){
                var errorId = "#" + key + "Error";
                $(errorId).text(value['0']);
            })
            $('#ftco-loader').removeClass('show');
        }
        else{
            toastr['warning']("Error 404");
        }
    }
};

//show dialog
function alwaysCheck(){
    setInterval(function(){
        const rows = $("#myTable").DataTable().rows({ 'search': 'applied' }).nodes();
        const check_boxes = $('input[type="checkbox"]:checked', rows); 
        const c = check_boxes.length;
        if(c == 0){
            showDialog(false);
            return;
        }
        else{
            showDialog(true);
            $('#count_selected').html(c + ' selected');
        }
    }, 100);
};

//show all element
function showAllDialogElement(){
    //All checkbox
    $(".checkAll").on('click', function () {
        var rows = $("#myTable").DataTable().rows({ 'search': 'applied' }).nodes();
        var check_box = $('input[type="checkbox"]', rows); 
        check_box.prop('checked', this.checked);
    });
    //check all
    $('#actionDialogCardSecondaryButton').on('click', function(){
        showDialog(false);
        const rows = $("#myTable").DataTable().rows({ 'search': 'applied' }).nodes();
        const check_boxes = $('input[type="checkbox"]:checked', rows); 
        check_boxes.prop('checked', false);
    });
};

//shơ dialog delete
function showDialog(isShow){
    if(isShow){
        $('#dialog-root').addClass('show-dialog');
        $('#dialog-root').removeClass('hidden-dialog');
        $('#dialog-root').removeClass('collapse');
    }
    else{
        $('#dialog-root').removeClass('show-dialog');
        $('#dialog-root').addClass('hidden-dialog');
        $('#dialog-root').removeClass('collapse');
    }
};


function showAllRequiredElement(){
    //required html5
    var elements = document.getElementsByTagName("INPUT");
    var elementsArea = document.getElementsByTagName("textarea");
    showRequired(elements);
    showRequired(elementsArea);
};

//changed required
function showRequired(elements){
    for (var i = 0; i < elements.length; i++) {
        elements[i].oninvalid = function(e) {
            e.target.setCustomValidity("");
            if (!e.target.validity.valid) {
                e.target.setCustomValidity("Vui lòng điền vào ô trống");
            }
        };
        elements[i].oninput = function(e) {
            e.target.setCustomValidity("");
        };
    }
};


function changeClass(classIndex, classParent, classTree){

    $("." + classIndex).removeClass('active');
    $('.' + classParent).addClass('is-expanded').removeClass(classParent);
    $('.' + classTree).addClass('active').removeClass(classTree);
};

function settingAjax(){
    //csrf token get ajax
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
        }
    });

    $('#ftco-loader').removeClass('show');
    //Toastr notification
    toastr.options = {
        "closeButton": true,
    };
    
};

function validateNumber(keyNumber){
    $("#" + keyNumber).bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode

        if (!(keyCode >= 48 && keyCode <= 57)) {
            return false;
        }
        else {
            return true;
        }
    });
}
// --------------------------------------------- ------------------------------------------------ //
