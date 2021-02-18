
function main() {

  // Application Theme with Bootstrapplus
  bootstrapplus.swatch({
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    info: '#17a2b8',
    warning: '#ffc107',
    danger: '#dc3545'
  });

  // Local Servers
  // NOTE: You must setup a local server!
  // else uncomment the code blocks below
  // nav.notLocalServer = true;
  // nav.domain = 'http://localhost/myapp';

  // Application Routes
  nav.setRoute('/', 'MyApp', MyApp);
  nav.notFound = $404;
  
  // mount the app
  App.initState();
  nav.start();
  mount(App.render);
  
}