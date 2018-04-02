var Rx = require('rxjs/Rx')

var button = document.querySelector('button');
    Rx.Observable.fromEvent(button, 'click')
      .subscribe((event) => console.log('button clicked'));