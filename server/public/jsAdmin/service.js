
$(document).ready(function(){

    changeClass('index', 'store', 'service');
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

    validateNumber("price");
     // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   var firebaseConfig = {
    apiKey: "AIzaSyDdPuctmLql-9vM-H-iRGswzhT6Dz2mlco",
    authDomain: "barber-store-cadce.firebaseapp.com",
    databaseURL: "https://barber-store-cadce.firebaseio.com",
    projectId: "barber-store-cadce",
    storageBucket: "barber-store-cadce.appspot.com",
    messagingSenderId: "494533003845",
    appId: "1:494533003845:web:10643d2a0333f1e7e9b12c",
    measurementId: "G-X5QLSZ3G1V"
    };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
            
    //Get update tag by id
    $('#myModal').on('show.bs.modal', function(e){

        const action = $(e.relatedTarget).data('action');

        if(action != undefined){
            if(action == "edit"){
               
                const imgSrc = $(e.relatedTarget).data('path');
                const fileName =  $(e.relatedTarget).data('file');
                const array_obj = [];
                const keys = ['name' , 'time', 'description', 'price', 'id'];
            
                keys.map(item => {
                    array_obj.push($(e.relatedTarget).data(item));
                });
                //query input 
                showEdit(imgSrc, fileName, array_obj);
            }
            if(action == "add"){

                showAdd();
            }
        }
    });

    //event submit update or insert
    $('#form-input').on('submit', async function(e){

        e.preventDefault();

        const _keyIput = '#_idIput';
        const _iIput = $(_keyIput).val();

        if(_iIput != "" && _iIput != null){
            await eventEdit();
        }
        else{
            await eventAdd();
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

    $("#file").change(function(){
        readURL(this);
    })
});

//When click edit show input record
function showEdit(imgSrc, fileName, array_obj){
    
    var count = 0;

    $('.form-input .modal-body .text-danger').each(function() {
        $(this).text("");
    });
    
    $('.modal-title').html('Update Service');
                
    $("#_save").html("Update");

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

    $("#img").attr('src', imgSrc);
    $("#img").attr('data-file', fileName);

    $("#file").val("");

};

async function eventEdit(){
    var imgPath;
    var old_file = $("#img").attr("data-file");
    var f;
    if($('#file').val() === ""){    
        imgPath = $("#img").attr('src');
        if(old_file === ""){
            f = $.param({ 'fileName': "image.jpg" }) + '&';
        }
        else{
            f = $.param({ 'fileName': old_file }) + '&';
        }
    }
    else{
        var fileUpload = $("#file").get(0).files;
        var file = fileUpload[0];
        var file_name = (new Date()).getTime() + file.name;
        const metadata = {
            contentType: file.type
        };
        imgPath = await uploadImg(file, file_name, metadata, true, old_file);
            f = $.param({ 'fileName': file_name }) + '&'
    }


    const form_data = f + $.param({ 'imgPath': imgPath}) + '&' + 
                      $("#form-input").serialize();
        
    updateData(form_data);
};

//When click add show modal reset input
function showAdd(){
    $('.modal-title').html('Add Service');
    $("#_save").html('<i class="fa fa-fw fa-lg fa-check-circle"></i>Add');
    $('.form-input .modal-body .form-control').each(function(){
        $(this).val("");
    });
    $('.form-input .modal-body .text-danger').each(function() {
        $(this).text("");
    });
    $('#file').val("");
    $("#img").attr('src', "");
    $('#img').attr('data-file', "");
};


async function eventAdd(){
    if($('#file').val() === ""){
        toastr['error']("Upload file image!");
    }
    var fileUpload = $("#file").get(0).files;
    var file = fileUpload[0];
    var file_name = (new Date()).getTime() + file.name;
    const metadata = {
        contentType: file.type
    };
    var imgPath = await uploadImg(file, file_name, metadata, false);

    const form_data = $.param({ 'fileName': file_name}) + '&' +
                      $.param({ 'imgPath': imgPath}) + '&' + 
                      $("#form-input").serialize();
    insertData(form_data);
};

//Yajra Laravel
function loadTables() {
    $('#myTable').DataTable({
        pageLength: 10,
        processing: true,
        serverSide: true,
        "bSort": false,
        "responsive": true,
        ajax: {
            url: "/admin/service/getData",
        },
        columns: [
            { data: 'cbox', name: 'cbox', 'className': 'animated-checkbox text-center', orderable: false, 'searchable': false },
            {
                data: 'imgPath', name: 'imgPath', 'className': 'text-center',
                orderable: false,
                'render': function (data, type, full, meta) {
                    return "<img src=\"" + data + "\" width=\"100\" height=\"80\"/>";
                }
            },
            { data: 'name', name: 'name', 'className': 'text-center', orderable: false },
            { data: 'time', name: 'time', orderable: false },
            { data: 'description', name: 'description', 'className': 'text-center', orderable: false },
            { data: 'price', name: 'price', 'className': 'text-center', orderable: false },
            { data: 'action', name: 'action', 'className': 'text-center', orderable: false, 'searchable': false }
        ]
    });
};

//Reload tables  
function reloadTables() {
    $("#myTable").DataTable().ajax.reload();
};

//Upload img Firebase Storage
async function uploadImg(files, file_name, file_meta, isEdit, old_file){

    $('#ftco-loader').addClass('show');

    if(isEdit === true && old_file !== null && old_file !== "" && old_file !== "image.jpg"){
        firebase.storage().ref().child('services/' + old_file).delete().catch(error => {
            return alert(error.message);
        })
    }
    var task = null;
    task = firebase.storage().ref('services/')
                     .child(file_name)
                     .put(files, file_meta)
                     .catch(function() {
                        return window.location.href = '/error404';
                     });
     if(task != null && task != undefined){
        var storage = await task.then(snapshot => snapshot.ref.getDownloadURL())
                            .then(imgPath => {
                                return imgPath;
                            })
                            .catch((error) => {
                                // A full list of error codes is available at
                                // https://firebase.google.com/docs/storage/web/handle-errors
                                switch (error.code) {
                                case 'storage/unauthorized':
                                        return alert("User doesn't have permission to access the object");
                                    break;
                                case 'storage/canceled':
                                        return alert("User canceled the upload");
                                    break;
                                case 'storage/unknown':
                                        return alert("Unknown error occurred, inspect error.serverResponse");
                                    break;
                                }
                            })
        return storage;
     }
     else{
         return window.location.href = '/error404';
     }   
 };

//Insert data
function insertData(form_data){

    $.ajax({
        method: 'POST',
        url: '/admin/service/insert',
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
        url: '/admin/service/update',
        data: form_data,
        dataType: 'json',

        success: function(msg){
            if(msg.success == true){
                toastr['success'](msg.message);
                $("#myModal").modal('toggle');
                $('#ftco-loader').removeClass('show');
                $("#img").attr('data', "");
                $('#_idIput').val("");
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

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#img').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
};

//Delete menu
function deleteData(event){
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
            var id = $(event).attr('data-id');
            $.get('/admin/service/delete/' + id).then(msg => {
                if(msg.success){
                    toastr['success'](msg.message);
                    reloadTables(); 
                }
                else{
                    toastr['error'](msg.message);
                }
            }).catch(error => {
                return alert(error.message);
            })
            var fileName = $(event).attr('data-image');
            if(fileName != null && fileName != "" && fileName != "image.jpg"){
                var del = firebase.storage().ref().child('service/' + fileName);
                del.delete().catch(function(error) {
                   return alert(error.message);
                });
            }
        }
    })
};

//delete checkbox
function deleteCheckBox(){

    var selectIds = new Array();
    var rows = $("#myTable").DataTable().rows({ 'search': 'applied' }).nodes();
    var check_boxes = $('input[type="checkbox"]:checked', rows); 
    check_boxes.each(function() {
        let current = $(this).closest('tr');
        let col = current.find('td:eq(2)').text();
        selectIds.push(col);
    });

    $.ajax({
        method: 'POST',
        url: '/admin/service/deleteAll',
        data: JSON.stringify(selectIds),
        dataType: 'json',
        contentType: 'application/json',
        accepts: 'application/json',
        success: function(msg){
            if(msg != null){
                toastr['success'](msg.message);
                reloadTables();
                var data = Object.values(msg.data);
                for(var i = 0; i < data.length; i++){
                    if(data[i] !== null && data[i] != "" && data[i] != "image.jpg"){
                        firebase.storage().ref().child('services/' + data[i]).delete().catch(error => {
                            return alert(error.message);
                        })
                    }
                }
            }
            else{
                toastr['error'](msg.message);
            }
        },
        error: function(error){
            alert(error.message);
        }
    })
};