import routes from './namespaces/routes';

export default function() {

  let fromRoute;
  let routesList = routes.list;
  this.transition(
    this.toRoute(routesList),
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
      let currentIndex = routesList.indexOf(routeName);
      return routesList[currentIndex - 1] === fromRoute;
    }),
    this.use('toLeft'),
    this.reverse('toRight')
  );

}
