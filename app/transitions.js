export default function() {

  let fromRoute;
  let routes = [
    'about',
    'about.index',
    'about.education',
    'about.languages',
    'about.experience',
    'about.services',
    'about.portfolio',
    'about.technologies',
    'about.influencers',
    'about.hobbies',
    'about.contacts',
    'about.faqs',
    'about.lastCommit',
  ];
  this.transition(
    this.toRoute(routes),
    this.use('fade')
  );
  this.transition(
    this.fromRoute((routeName) => {
      if (routeName === 'about.lastCommit') {
        routeName = 'about';
      }
      fromRoute = routeName;
      return true;
    }),
    this.toRoute((routeName) => {
      let currentIndex = routes.indexOf(routeName);
      return routes[currentIndex - 1] === fromRoute;
    }),
    this.use('toLeft'),
    this.reverse('toRight')
  );

}
