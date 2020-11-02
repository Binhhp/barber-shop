var mainApp = {};

$(document).ready(function(){

    //csrf token get ajax
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': jQuery('meta[name="csrf-token"]').attr('content')
        }
    });

    $('.select2').select2({
        dropdownParent: $('#myModal'),
        placeholder: "Select an option",
        maximumSelectionLength: 5,
    });
    $('#ftco-loader').removeClass('show');
    //required html5
    var elements = document.getElementsByTagName("INPUT");
    var elementsArea = document.getElementsByTagName("textarea");
    showRequired(elements);
    showRequired(elementsArea);
    showCkEditor();

    //Get update tag by id
    $('#myModal').on('show.bs.modal', function(e){

        const array_obj = [];
        const keys = ['id', 'title', 'description', 'content', 'imgPath', 'cate_id'];
        
        keys.map(item => {
            array_obj.push($(e.relatedTarget).data(item));
        });
        const action = $(e.relatedTarget).data('action');

        if(action != undefined){
            if(action == "edit"){

                $('.modal-title').html('Update Blog');
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

                $("#_save").html("Update");
            }
            if(action == "add"){
                $('.modal-title').html('Add Blog');
                $("#_save").html('<i class="fa fa-fw fa-lg fa-check-circle"></i>Add');
                var count = 0;
                $('.form-input .modal-body .form-control').each(function(){
                    $(this).val("");
                });

                $('#file').val("");
                $(".select2").select2({
                    'allowClear':true
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
            var fileUpload = $("#file").get(0).files;
            var file = fileUpload[0];
            var file_name = (new Date()).getTime() + file.name;
            const metadata = {
                contentType: file.type
            };
            uploadImg(file, file_name, metadata);
        }
    });
    //Toastr notification
    toastr.options = {
        "closeButton": true,
    };
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
    //delete checkbox all
    $('#actionDialogCardPrimaryButton').on('click', function(){
        Swal.fire({
            title: "Bạn có muốn xóa không?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "Thoát",
            confirmButtonText: "Xóa",
        }).then(result => {
            if(result.value){
                deleteCheckBox();
            }
        })
    });

    alwaysCheck();
});
function uploadImg(files, file_name, file_meta){
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
  var i = false;
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    firebase.storage().ref('blogs/')
                    .child(file_name)
                    .put(files, file_meta)
                    .then(function(){
                        i = true;
                    })
                    .catch(error => {
                       return alert(error.message); 
                    });
    if(i){
         firebase.storage().ref('blogs/' + file_name)
                                .getDownloadURL()
                                .then(imgURL => {
                                    console.log(imgURL);
                                }).catch(error => {
                                    alert(error.message);
                                });      
    }
    else{
        alert('Error 401!');
    }
};

 //Ck editor
function showCkEditor(){
    ClassicEditor
        .create( document.querySelector( '#content' ),{
            cloudServices: {
                tokenUrl: 'https://75890.cke-cs.com/token/dev/481d871fd01f9b6dc8156dd1ad2c49c6a0874597ec2973256bf8e84a5fca',
                uploadUrl: 'https://75890.cke-cs.com/easyimage/upload/'
            },
        })
        .catch( error => {
            console.error( error );
        });
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

//delete checkbox
function deleteCheckBox(){

    var selectIds = new Array();
    var rows = $("#myTable").DataTable().rows({ 'search': 'applied' }).nodes();
    var check_boxes = $('input[type="checkbox"]:checked', rows); 
    check_boxes.each(function() {
        let currow = $(this).closest('tr');
        let col = currow.find('td:eq(2)').text();
        selectIds.push(col);
    });

    $.ajax({
        method: 'POST',
        url: '/admin/blog/deleteAll',
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

(function(){
     //Upload image firebase

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

        //Yajra Laravel
    function loadTables(){
        $('#myTable').DataTable({
            pageLength: 10,
            processing: true,
            serverSide: true,
            "bSort": false,
            "responsive": true,
            ajax: {
                url: "/admin/blog/getData",
            },
            columns : [
                { data: 'cbox', name: 'cbox', 'className': 'animated-checkbox text-center' , orderable: false, 'searchable': false },   
                { data: 'imgPath', name: 'imgPath', 'className': 'text-center', 
                    orderable: false, 
                    'render': function(data, type, full, meta){
                        return "<img src=\"" + data + "\" width=\"100\" height=\"80\"/>";
                }},
                { data: 'title', name: 'title', 'className': 'text-center', orderable: false },
                { data: 'name', name: 'name', 'className': 'text-center', orderable: false },
                { data: 'description', name: 'description', orderable: false},
                { data: 'status', name: 'status', 'className': 'text-center', orderable: false }, 
                { data: 'action', name: 'action', 'className': 'text-center' ,  orderable: false, 'searchable': false }
            ]
        });
    };
    
    mainApp.loadTables = loadTables();

})();

//Reload tables  
function reloadTables() {
    $("#myTable").DataTable().ajax.reload();
};
//Insert data
function insertData(form_data){
    $.ajax({
        method: 'POST',
        url: '/admin/blog/insert',
        data: form_data,
        dataType: 'json',
        success: function(msg){
            if(msg.success == true){
                toastr['success'](msg.message);
                $("#myModal").modal('toggle');
                reloadTables();
            }
            else{
                toastr['error'](msg.message);
            }
        },
        error: function(error){
            alert(error.statusText);
        }
    })
};

//Update data
function updateData(form_data){
    $.ajax({
        method: 'POST',
        url: '/admin/blog/update',
        data: form_data,
        dataType: 'json',
        success: function(msg){
            if(msg.success == true){
                toastr['success'](msg.message);
                $("#myModal").modal('toggle');
                reloadTables();
            }
            else{
                toastr['error'](msg.message);
            }
        },
        error: function(error){
            alert(error.statusText);
        }
    })
};

//Delete menu
function deleteData(id){
    Swal.fire({
        title: "Bạn có muốn xóa không?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Thoát",
        confirmButtonText: "Xóa",
    }).then(result => {
        if(result.value){
            $.get('/admin/blog/delete/' + id).then(msg => {
                if(msg.success){
                    toastr['success'](msg.message);
                    reloadTables(); 
                }
                else{
                    toastr['error'](msg.message);
                }
            }).catch(error => {
                console.log(error.message);
            })
        }
    })
};

