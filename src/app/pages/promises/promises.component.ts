import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [],
})
export class PromisesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getUsers().then((users) => {
      console.log(users);
    });
    // const promise = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('Hola mundo');
    //   } else {
    //     reject('Algo salio mal');
    //   }
    // });
    // promise
    //   .then((mensaje) => {
    //     console.log(mensaje);
    //   })
    //   .catch((error) => console.log('Error en mi promesa', error));
    // console.log('Fin del init');
  }

  getUsers() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => console.log(body.data));
    });
  }
}
