@extends('layouts.layout-admin')
@section('content')

<div class="app-title">
    <div>
        <h1><i class="fa fa-th-list"></i> Blog</h1>
          <p>Table Blog</p>
    </div>
    <ul class="app-breadcrumb breadcrumb side">
        <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
        <li class="breadcrumb-item">Blog</li>
        <li class="breadcrumb-item active"><a href="#">Blog</a></li>
    </ul>
</div>
<div class="row">
    <div class="col-md-12">
        
    </div>
</div>
<div class="row">
    <div class="col-md-12">
       <div class="card">
           <div class="card-header">
               <div class="col-md-12">
                    <div>
                        <a href="javascript:void(0);" class="btn btn-primary" name="add" data-toggle="modal" data-target="#myModal" data-action="add">
                            <i class="fa fa-fw fa-lg fa-check-circle"></i>Add</a>
                    </div>
               </div>
           </div>
           <div class="card-body">
           <div class="tile">
            <div class="tile-body">
                <div>
                    <table class="table table-hover table-bordered dataTable no-footer" width="100%" id="myTable">
                        <thead>
                            <tr>
                                <th width="5%">
                                    <div class="animated-checkbox">
                                        <label>
                                            <input type="checkbox" class="checkAll">
                                            <span class="label-text"></span>
                                        </label>
                                    </div>
                                </th>
                                <th width="15%">Image</th>
                                <th width="15%">Title</th>
                                <th width="15%">Category</th>
                                <th width="20%">Description</th>
                                <th width="15%">Status</th>
                                <th width="20%">Action</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        </div>
           </div>
       </div>
    </div>
</div>
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content" style="width:100%; margin: 0 auto;">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    Blog
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="form-input" class="form-input" onsubmit="return false">
                <div class="modal-body">
                        {{ csrf_field() }}
                        <div class="row form-group">
                            <label for="maduan" class="col-sm-2 text-right"><strong>Category</strong><span style="color:red;">*</span></label>
                            <div class="col-md-4 text-left">
                                <div class="input-group validate-input">
                                    <select class="form-control" name="cate" id="cate" required>
                                        <option value="0" disabled selected hide>Please choose</option>
                                        @foreach($cate as $i)
                                            <option value="{{ $i->id }}">{{ $i->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <label for="maduan" class="col-sm-1"><strong>Status</strong><span style="color:red;">*</span></label>
                            <div class="col-md-4 text-left">
                                <div class="input-group validate-input">
                                    <select class="form-control" name="status" id="status" required>
                                        <option value="0" selected>Don't post</option>
                                        <option value="1">Post</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row form-group">
                            <label for="maduan" class="col-sm-2 text-right"><strong>Title</strong><span style="color:red;">*</span></label>
                            <div class="col-md-9 text-left">
                                <div class="input-group validate-input">
                                    <input type="text" class="form-control" placeholder="Title" name="title" id="title" required/>
                                </div>
                            </div>
                        </div>
                        <div class="row form-group">
                            <label for="maduan" class="col-sm-2 text-right"><strong>Description</strong><span style="color:red;">*</span></label>
                            <div class="col-md-9 text-left">
                                <div style="height: 100px;" class="input-group validate-input">
                                    <input type="text" class="form-control" placeholder="Description" name="description" id="description" required/>
                                </div>
                            </div>
                        </div>
                        <div class="row form-group">
                            <label for="maduan" class="col-sm-2 text-right"><strong>Content</strong><span style="color:red;">*</span></label>
                            <div class="col-md-9 text-left">
                                <div class="input-group validate-input">
                                    <textarea type="text" class="form-control" placeholder="Content" name="content" id="content"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row form-group">
                            <label for="maduan" class="col-sm-2 text-right"><strong>Tag</strong><span style="color:red;">*</span></label>
                            <div class="col-md-9 text-left">
                                <div class="input-group validate-input">
                                    <select class="select2 form-control" multiple="multiple" name="tags[]" id="tag">
                                        @foreach($tags as $tag)
                                            <option value="{{ $tag->id }}">{{ $tag->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row form-group">
                            <label for="maduan" class="col-sm-2 text-right"><strong>Upload file</strong><span style="color:red;">*</span></label>
                            <div class="col-md-9 text-left">
                                <div class="input-group validate-input">
                                    <input type="file" class="form-control-file" name="file" id="file"/>
                                </div>
                            </div>
                        </div>
                        <input type="hidden" class="form-control" name="id" id="_idIput" />
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-secondary" name="exit" data-dismiss="modal">
                        <i class="fa fa-fw fa-lg fa-times-circle"></i>Cancle</button>
                        &nbsp;&nbsp;
                    <button type="submit" class="btn btn-primary" id="_save" name="save"></button>
                </div>
            </form>
        </div>
    </div>
</div>
<div id="dialog-root" class="hidden-dialog">
        <div id="multiselect-dialog" class="c01810 c01804" aria-live="polite">
            <aside class="c01804">
                <div class="c01805" aria-hidden="true"><span id="count_selected">1 selected</span></div>
                <div aria-label="1 selected">
                    <div class="c01800">
                        <button id="actionDialogCardPrimaryButton" type="button" class="btn c01811 c01802 c01812">
                            <span class="c01817">Delete</span>
                        </button>
                        <button id="actionDialogCardSecondaryButton" type="button" class="btn c01811 c01802">
                            <span class="c01817">Cancel</span>
                        </button>
                    </div>
                </div>
            </aside>
        </div>
</div>
<!-- loader -->
<div id="ftco-loader" class="show fullscreen" aria-hidden="true">
    <svg class="circular" width="48px" height="48px">
        <circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee" />
        <circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00" />
    </svg>
</div>
@endsection
@push('scripts')
<script src="{{ URL::to('jsAdmin/blog.js') }}"></script>
<!-- CKEditor CDN --->
<script src="https://cdn.ckeditor.com/ckeditor5/23.0.0/classic/ckeditor.js"></script>
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.24.0/firebase-storage.js"></script>
@endpush