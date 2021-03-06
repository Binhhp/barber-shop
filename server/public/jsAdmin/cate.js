

$(document).ready(function(){

    changeClass('index', 'blog', 'cate');
    //setting csrf token ajax
    settingAjax();
    //Show required element
    showAllRequiredElement();
    //load table
    loadTables();
    //show dialog element
    showAllDialogElement();
    //set always dialog
    alwaysCheck();

    //Get update tag by id
    $('#myModal').on('show.bs.modal', function(e){

        const array_obj = [];
        const keys = ['name', 'description', 'id'];
        
        keys.map(item => {

            array_obj.push($(e.relatedTarget).data(item));
            
            const errorKey = "#" + item + "Error";
            $(errorKey).text("");

        });

        const action = $(e.relatedTarget).data('action');

        if(action != undefined){
            if(action == "edit"){

                $('.modal-title').html('Update Category');
                var count = 0;
                $('.form-input .modal-body .form-control').map(function() {
                    for(var i = count; i < array_obj.length; i++){
                        $(this).val(array_obj[i]);
                        count += 1;
                        if(count === array_obj.length){
                            count -= array_obj.length;
                        };
                        break;
                    }
                });
                $('.form-input .modal-body .text-danger').each(function() {
                    $(this).text("");
                });

                $("#_save").html('<i class="fa fa-fw fa-lg fa-check-circle"></i>Update');
            }
            if(action == "add"){
                $('.modal-title').html('Add Category');
                $("#_save").html('<i class="fa fa-fw fa-lg fa-check-circle"></i>Add');
                var count = 0;
                $('.form-input .modal-body .form-control').each(function(){
                    $(this).val("");
                });
                $('.form-input .modal-body .text-danger').each(function() {
                    $(this).text("");
                });
            }
        }
    });

    //event submit update or insert
    $('#form-input').on('submit', function(e){

        e.preventDefault();

        const _keyIput = '#_idIput';
        const _iIput = $(_keyIput).val();
        const form_data = $("#form-input").serialize();
        if(_iIput != "" && _iIput != null){
            updateData(form_data);
        }
        else{
            insertData(form_data);
        }
    });

    //delete checkbox all
    $('#actionDialogCardPrimaryButton').on('click', function(){
        Swal.fire({
            title: "Do you want to delete?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Exit",
            confirmButtonText: "Delete",
        }).then(result => {
            if(result.value){
                deleteCheckBox();
            }
        })
    });
});


//delete checkbox
function deleteCheckBox(){

    var selectIds = new Array();
    var rows = $("#myTable").DataTable().rows({ 'search': 'applied' }).nodes();
    var check_boxes = $('input[type="checkbox"]:checked', rows); 
    check_boxes.each(function() {
        let currow = $(this).closest('tr');
        let col = currow.find('td:eq(1)').text();
        selectIds.push(col);
    });

    $.ajax({
        method: 'POST',
        url: '/admin/cate/deleteAll',
        data: JSON.stringify(selectIds),
        dataType: 'json',
        contentType: 'application/json',
        accepts: 'application/json',
        success: function(msg){
            if(msg != null){
                toastr['success'](msg.message);
                reloadTables();
            }
            else{
                toastr['error'](msg.message);
            }
        }
    })
};

//Yajra Laravel
function loadTables(){
    $('#myTable').DataTable({
        pageLength: 10,
        processing: true,
        serverSide: true,
        "bSort": false,
        "responsive": true,
        ajax: {
            url: "/admin/cate/getData",
        },
        columns : [
            { data: 'cbox', name: 'cbox', 'className': 'animated-checkbox text-center' , orderable: false, 'searchable': false },   
            { data: 'name', name: 'name', 'className': 'text-center', orderable: false },
            { data: 'description', name: 'description', orderable: false},
            { data: 'created_at', name: 'created_at', 'className': 'text-center', orderable: false }, 
            { data: 'action', name: 'action', 'className': 'text-center' ,  orderable: false, 'searchable': false }
        ]
    });
};

//Reload tables  
function reloadTables() {
    $("#myTable").DataTable().ajax.reload();
};
//Insert data
function insertData(form_data){
    $.ajax({
        method: 'POST',
        url: '/admin/cate/insert',
        data: form_data,
        dataType: 'json',
        success: function(msg){
            if(msg.success){
                toastr['success'](msg.message);
                $("#myModal").modal('toggle');
                $('#ftco-loader').removeClass('show');
                reloadTables();
            }
        },
        error: function(error){
            var err = error.responseJSON;
            if(err.success == false){
                toastr['error'](err.message);
                if(err.data != null && err.data != undefined){
                    showValidation(error);
                }
                $('#ftco-loader').removeClass('show');
            }
        }
    })
};

//Update data
function updateData(form_data){
    $.ajax({
        method: 'POST',
        url: '/admin/cate/update',
        data: form_data,
        dataType: 'json',
        success: function(msg){
            if(msg.success){
                toastr['success'](msg.message);
                $("#myModal").modal('toggle');
                $('#ftco-loader').removeClass('show');
                reloadTables();
            }
        },
        error: function(error){
            var err = error.responseJSON;
            if(err.success == false){
                toastr['error'](err.message);
                if(err.data != null && err.data != undefined){
                    showValidation(error);
                }
                $('#ftco-loader').removeClass('show');
            }
        }
    })
};

//Delete menu
function deleteData(id){
    Swal.fire({
        title: "Do you want to delete?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Exit",
        confirmButtonText: "Delete",
    }).then(result => {
        if(result.value){
            $.get('/admin/cate/delete/' + id).then(msg => {
                if(msg.success){
                    toastr['success'](msg.message);
                    reloadTables(); 
                }
                else{
                    toastr['error'](msg.message);
                }
            }).catch(error => {
                alert(error.message);
            })
        }
    })
};


