const name = 'appbar';

// class AppbarProvider {
//   setSubject(params) {
//     this.subject = params;
//   }

//   $get() {
//     const subject = this.subject;
//     return {
//       getSubject() {
//         return subject;
//       },
//     };
//   }
// }

function ap() {
  this.setSubject = function (params) {
    this.subject = params;
  }

  this.$get = function () {
    var subject = this.subject;
    return {
      getSubject: function () {
        return subject;
      },
    };
  }
}

// class Appbar {
//   constructor(AppbarSrv) {
//     this.subject = AppbarSrv.getSubject();
//   }
// }

function appbar(AppbarSrv) {
  this.subject = AppbarSrv.getSubject();
}

angular.module(name, [])
  .provider('AppbarSrv', ap)
  .component(name, {
    controller: appbar,
    controllerAs: name,
    templateUrl: 'ui/appbar/appbar.html',
  });