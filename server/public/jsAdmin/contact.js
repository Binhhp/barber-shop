
$(document).ready(function(){

    $(".index").removeClass('active index');
    $('.contact').addClass('active');
    //setting csrf token ajax
    settingAjax();
    //load table
    loadTables();
    //show dialog element
    showAllDialogElement();
    //set always dialog
    alwaysCheck();
    

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
        let col = currow.find('.delete').attr('data-id');
        selectIds.push(col);
    });

    $.ajax({
        method: 'POST',
        url: '/admin/contact/deleteAll',
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
        },
        error: function(error){
            toastr['error'](error.message);
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
        columnDefs: {
            targets: [1]
        },
        ajax: {
            url: "/admin/contact/getData",
        },
        columns : [
            { data: 'combobox', name: 'combobox', 'className': 'animated-checkbox text-center' , orderable: false, 'searchable': false },   
            { data: 'customer_name', name: 'customer_name', 'className': 'text-center', orderable: false },
            { data: 'message', name: 'message', 'className': 'text-center', orderable: false },
            { data: 'status', name: 'status', 'className': 'text-center', orderable: false },
            { data: 'created_at', name: 'created_at', 'className': 'text-center', orderable: false }, 
            { data: 'action', name: 'action', 'className': 'text-center' ,  orderable: false, 'searchable': false }
        ]
    });
};

//Reload tables  
function reloadTables() {
    $("#myTable").DataTable().ajax.reload();
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
            $.get('/admin/contact/delete/' + id).then(msg => {
                if(msg.success){
                    toastr['success'](msg.message);
                    reloadTables(); 
                }
                else{
                    toastr['error'](msg.message);
                }
            }).catch(error => {
                toastr['error'](error.message);
            })
        }
    })
};


