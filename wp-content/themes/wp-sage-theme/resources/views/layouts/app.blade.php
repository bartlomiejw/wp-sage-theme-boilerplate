<a class="sr-only focus:not-sr-only" href="#main">
  {{ __('Skip to content', 'applvr') }}
</a>

@include('sections.header')

  <main id="main" class="main container">
    @yield('content')
  </main>

  @hasSection('sidebar')
    <aside class="sidebar container">
      @yield('sidebar')
    </aside>
  @endif

@include('sections.footer')
