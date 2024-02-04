<header class="container">
  <div class="header">
    <a class="brand" href="{{ home_url('/') }}">
      @if($siteLogo)
        {!! wp_get_attachment_image($siteLogo, 'full', false, ['class' => 'w-32	max-w-32']) !!}
      @else
        {!! $siteName !!}
      @endif
    </a>

    @if (has_nav_menu('primary_navigation'))
      <nav class="nav-primary" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'menu-nav', 'echo' => false]) !!}
      </nav>
    @endif
  </div>
</header>
