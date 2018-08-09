console.log('test');

var ViewModel = function(first, last) {
  this.firstName = ko.observable(first);
  this.lastName = ko.observable(last);

  this.fullName = ko.computed(function() {
    // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
    return this.firstName() + " " + this.lastName();
  }, this);

  this.myClickHandler = function() {
    debugger;
    console.log('my handler click');
  }
  this.personName = ko.observable('Bob');
  this.personAge = ko.observable(123);
};

window.onload = function() {
  console.log('wnd on load');
  ko.applyBindings(new ViewModel("Planet", "Earth")); // This makes Knockout get to work
  let ctx = ko.contextFor(document.getElementById('mydiv1'));
  ctx.$data.personName('testname');
  ctx.$data.firstName.subscribe(function(newValue){
    console.log('person name changed ='+newValue);
  })
};