myApp.filter('urlcombine', function() {
  return function(input) {

    var output;
    var temp;
    temp = input.split(' ');
    output = temp.join('_').toLowerCase();

    return output;

  }

});
