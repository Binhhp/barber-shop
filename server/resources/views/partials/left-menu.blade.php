<aside class="app-sidebar">
      <div class="app-sidebar__user"><img class="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image">
        <div>
          @guest
          @else
          <p class="app-sidebar__user-name">{{ $user_name }}</p>
          <p class="app-sidebar__user-designation">
            {{ $user_role }}
          </p>
          @endguest
        </div>
      </div>
      <ul class="app-menu">
        <li><a class="app-menu__item active index" href="{{ route('index') }}"><i class="app-menu__icon fa fa-dashboard"></i><span class="app-menu__label">Home</span></a></li>
        <li class="treeview blog"><a class="app-menu__item" href="#" data-toggle="treeview"><i class="app-menu__icon fa fa-laptop"></i><span class="app-menu__label">Blog</span><i class="treeview-indicator fa fa-angle-right"></i></a>
          <ul class="treeview-menu">
            <li><a class="treeview-item blogs" href="/admin/blog"><i class="icon fa fa-circle-o"></i> Blog</a></li>
            <li><a class="treeview-item cate" href="{{ route('cate.index') }}" rel="noopener"><i class="icon fa fa-circle-o"></i> Category</a></li>
            <li><a class="treeview-item tag" href="{{ route('tag') }}"><i class="icon fa fa-circle-o"></i> Tag</a></li>
          </ul>
        </li>
      </ul>
    </aside>