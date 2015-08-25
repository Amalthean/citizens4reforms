Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound'
});

Router.route('/', function () {
  this.render('doma');
}, {
  name: 'doma'
});

Router.route('/za-organizacijata', function () {
  this.render('zaOrganizacijata');
},{
  name: 'zaOrganizacijata'
});

Router.route('/za-proektot', function () {
  this.render('doma');
},{
  name: 'zaProektot'
});

Router.route('/materijali', function () {
  this.render('doma');
},{
  name: 'materijali'
});

Router.route('/aktivnosti', function () {
  this.render('doma');
},{
  name: 'aktivnosti'
});

Router.route('/galerija', function () {
  this.render('doma');
},{
  name: 'galerija'
});

Router.route('/kontakt', function () {
  this.render('doma');
},{
  name: 'kontakt'
});