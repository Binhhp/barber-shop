@extends('layouts.layout-admin')
@section('content')
<div class="app-title">
    <div>
        <h1><i class="fa fa-th-list"></i> Contact</h1>
          <p>Table Contact</p>
    </div>
    <ul class="app-breadcrumb breadcrumb side">
        <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
        <li class="breadcrumb-item">Contact</li>
    </ul>
</div>
<div class="row">
    <div class="col-md-12">
        
    </div>
</div>
<div class="row">
    <div class="col-md-12">
       <div class="card">
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
                                <th width="15%">Customer</th>
                                <th width="25%">Message</th>
                                <th width="20%">Status</th>
                                <th width="15%">Date create</th>
                                <th width="25%">Action</th>
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
<script src="{{ URL::to('jsAdmin/contact.js') }}"></script>
@endpush