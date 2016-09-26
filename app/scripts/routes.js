'use strict';
/**
 * @ngdoc overview
 * @name statsdsuApp:routes
 * @description
 * # routes.js
 *
 * Configure routes for use with Angular, and apply authentication security
 * Add new routes using `yo angularfire:route` with the optional --auth-required flag.
 *
 * Any controller can be secured so that it will only load if user is logged in by
 * using `whenAuthenticated()` in place of `when()`. This requires the user to
 * be logged in to view this route, and adds the current user into the dependencies
 * which can be injected into the controller. If user is not logged in, the promise is
 * rejected, which is handled below by $routeChangeError
 *
 * Any controller can be forced to wait for authentication to resolve, without necessarily
 * requiring the user to be logged in, by adding a `resolve` block similar to the one below.
 * It would then inject `user` as a dependency. This could also be done in the controller,
 * but abstracting it makes things cleaner (controllers don't need to worry about auth state
 * or timing of displaying its UI components; it can assume it is taken care of when it runs)
 *
 *   resolve: {
 *     user: ['Auth', function(Auth) {
 *       return Auth.$getAuth();
 *     }]
 *   }
 *
 */
angular.module('statsdsuApp')

/**
 * Adds a special `whenAuthenticated` method onto $routeProvider. This special method,
 * when called, invokes Auth.$requireAuth() service (see Auth.js).
 *
 * The promise either resolves to the authenticated user object and makes it available to
 * dependency injection (see AccountCtrl), or rejects the promise if user is not logged in,
 * forcing a redirect to the /login page
 */
  .config(['$routeProvider', 'SECURED_ROUTES', function($routeProvider, SECURED_ROUTES) {
    // credits for this idea: https://groups.google.com/forum/#!msg/angular/dPr9BpIZID0/MgWVluo_Tg8J
    // unfortunately, a decorator cannot be use here because they are not applied until after
    // the .config calls resolve, so they can't be used during route configuration, so we have
    // to hack it directly onto the $routeProvider object
    $routeProvider.whenAuthenticated = function(path, route) {
      route.resolve = route.resolve || {};
      route.resolve.user = ['AuthApp', function(AuthApp) {
        return AuthApp.$requireSignIn();
      }];
      $routeProvider.when(path, route);
      SECURED_ROUTES[path] = true;
      return $routeProvider;
    };
  }])

  .config(function (cloudinaryProvider,$routeProvider) {
    var config = {
      apiKey: "AIzaSyBQCKGekt4pvvBL0rLRzSpP_kjyx2I-O70",
      authDomain: "statsdsu.firebaseapp.com",
      databaseURL: "https://statsdsu.firebaseio.com",
      storageBucket: "statsdsu.appspot.com",
    };
    firebase.initializeApp(config);
    //   cloudinary setting
    cloudinaryProvider
      .set("cloud_name", "dbfirebase")
      .set("upload_preset", "hb1c23iq");
  })

  // configure views; whenAuthenticated adds a resolve method to ensure users authenticate
  // before trying to access that route
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .whenAuthenticated('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      //.when('/course', {
      //  templateUrl: 'views/course.html',
      //  controller: 'CourseCtrl'
      //})
      .when('/course/:className', {
        templateUrl: 'views/partials/coursedetail.html',
        controller: 'CoursedetailCtrl'
      })



      .when('/editCourse/:sectionId/:idClass', {
        templateUrl: 'views/editcourse.html',
        controller: 'EditcourseCtrl'
      })

      .when('/userInfo/:user_id', {
        templateUrl: 'views/userinfo.html',
        controller: 'UserinfoCtrl'
      })

      .when('/notification', {
        templateUrl: 'views/notification.html',
        controller: 'NotificationCtrl'
      })

      .whenAuthenticated('/edit/:id', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/course', {
        templateUrl: 'views/course.html',
        controller: 'CourseCtrl'
      })
      .whenAuthenticated('/createContent', {
        templateUrl: 'views/createcontent.html',
        controller: 'CreatecontentCtrl'
      })
      .whenAuthenticated('/createContent/:chapterId', {
        templateUrl: 'views/createcontent.html',
        controller: 'CreatecontentCtrl'
      })
      .whenAuthenticated('/class/:id', {
        templateUrl: 'views/class.html',
        controller: 'ClassCtrl'
      })
      .when('/course-detail/:id', {
        templateUrl: 'views/course-detail.html',
        controller: 'CourseDetailCtrl'
      })

      .when('/material-list/:chapterId', {
        templateUrl: 'views/material-list.html',
        controller: 'MaterialListCtrl'
      })
      .when('/editContents/:type/:id', {
        templateUrl: 'views/editcontents.html',
        controller: 'EditcontentsCtrl'
      })
      .when('/registerForm', {
        templateUrl: 'views/registerform.html',
        controller: 'RegisterformCtrl'
      })
      .when('/user-list', {
        templateUrl: 'views/user-list.html',
        controller: 'UserListCtrl'
      })
      .when('/menu-test', {
        templateUrl: 'views/menu-test.html',
        controller: 'MenuTestCtrl'
      })
      .when('/edit-registerForm/:registerId', {
        templateUrl: 'views/edit-registerform.html',
        controller: 'EditRegisterformCtrl'
      })
      .when('/create-material', {
        templateUrl: 'views/create-material.html',
        controller: 'CreateMaterialCtrl'
      })
      .when('/super-editor-test', {
        templateUrl: 'views/super-editor-test.html',
        controller: 'SuperEditorTestCtrl'
      })
      .when('/super-blog-list', {
        templateUrl: 'views/super-blog-list.html',
        controller: 'SuperBlogListCtrl'
      })
      .when('/super-blog-detail/:id', {
        templateUrl: 'views/super-blog-detail.html',
        controller: 'SuperBlogDetailCtrl'
      })

      .when('/super-editor-detail', {
        templateUrl: 'views/super-editor-detail.html',
        controller: 'SuperEditorDetailCtrl'
      })
      .when('/new-content', {
        templateUrl: 'views/content-tool/new-content.html',
        controller: 'NewContentCtrl'
      })
      .when('/new-content/:chapterId', {
        templateUrl: 'views/content-tool/new-content.html',
        controller: 'NewContentCtrl'
      })
      .when('/edit-content/:id', {
        templateUrl: 'views/content-tool/edit-content.html',
        controller: 'EditContentCtrl'
      })
      .when('/classList', {
        templateUrl: 'views/classlist.html',
        controller: 'ClasslistCtrl'
      })
      .when('/temp-user-list', {
        templateUrl: 'views/temp-user-list.html',
        controller: 'TempUserListCtrl'
      })
      .when('/test-cld', {
        templateUrl: 'views/test-cld.html',
        controller: 'TestCldCtrl'
      })
      .when('/test-vote', {
        templateUrl: 'views/test-vote.html',
        controller: 'TestVoteCtrl'
      })
      .when('/test-vote-remote', {
        templateUrl: 'views/test-vote-remote.html',
        controller: 'TestVoteRemoteCtrl'
      })
      .when('/survey', {
        templateUrl: 'views/survey.html',
        controller: 'SurveyCtrl'
      })
      .when('/survey-result', {
        templateUrl: 'views/survey-result.html',
        controller: 'SurveyResultCtrl'
      })

      .when('/survey-result', {
        templateUrl: 'views/survey-result.html',
        controller: 'SurveyResultCtrl'
      })
      .when('/class', {
        templateUrl: 'views/class.html',
        controller: 'ClassCtrl'
      })
      .when('/classes', {
        templateUrl: 'views/classes.html',
        controller: 'ClassesCtrl'
      })
      .when('/class-edit', {
        templateUrl: 'views/class-edit.html',
        controller: 'ClassEditCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/virtual-menus', {
        templateUrl: 'views/virtual-menus.html',
        controller: 'VirtualMenusCtrl'
      })
      .otherwise({redirectTo: '/'});
  }])

  /**
   * Apply some route security. Any route's resolve method can reject the promise with
   * "AUTH_REQUIRED" to force a redirect. This method enforces that and also watches
   * for changes in auth status which might require us to navigate away from a path
   * that we can no longer view.
   */
  .run(['$rootScope', '$location', 'AuthApp', 'SECURED_ROUTES', 'loginRedirectPath', '$mdDialog',
    function($rootScope, $location, AuthApp, SECURED_ROUTES, loginRedirectPath, $mdDialog) {
      // watch for login status changes and redirect if appropriate
      AuthApp.$onAuthStateChanged(check);

      // some of our routes may reject resolve promises with the special {authRequired: true} error
      // this redirects to the login page whenever that is encountered
      $rootScope.$on('$routeChangeError', function(e, next, prev, err) {
        if( err === 'AUTH_REQUIRED' ) {
          $location.path(loginRedirectPath);
        }
      });

      function check(user) {
        if( !user && authRequired($location.path()) ) {
          $location.path(loginRedirectPath);
        }
      }

      function authRequired(path) {
        return SECURED_ROUTES.hasOwnProperty(path);
      }
    }
  ])

  .run( function($rootScope, $location, FBURL, $firebaseObject, Course, Chapter){
    var ref = firebase.database().ref().child('crntUrl');

    $rootScope.crntPage = $firebaseObject(ref)
    $rootScope.crntPage.$loaded().then(function(snap){
      //snap.path = 'main'
      //snap.$save();
    })

    //$rootScope.targetApp = true;
    //
    //var courseDetail = /course-detail/;
    //
    //$rootScope.crntPage.$watch(function(val) {
    //  console.log($rootScope.crntPage.path);
    //  var targetPath = $rootScope.crntPage.path
    //  if($rootScope.crntPage.path =='main')
    //    targetPath = '';
    //  if(courseDetail.test($rootScope.crntPage.path)){
    //    //extract course information
    //    var id = $rootScope.crntPage.path.split('/')[1]
    //    console.log(id)
    //    //id = '-KILYT7Qc0JNwE7GLmLL';
    //    var courses = Course.getInfo(id);
    //    console.log(courses)
    //
    //  }
    //  if($rootScope.targetApp)
    //    $location.path(targetPath)
    //});

  })
  // used by route security
  .constant('SECURED_ROUTES', {});
