import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [],
})
export class RxjsComponent implements OnInit, OnDestroy {
  public intervalSubs?: Subscription;

  constructor() {
    //pipe: transforma la informacion que fluye
    //retry: intentar x veces adicionales mas
    // this.returnObservable()
    //   .pipe(retry(2))
    //   .subscribe(
    //     (value) => console.log('Subs:', value),
    //     (error) => console.warn('Error:', error),
    //     () => console.log('Obs terminado')
    //   );
    this.intervalSubs = this.returnInterval().subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.intervalSubs?.unsubscribe();
  }

  //map: manipula la data que recibimos o extrae las partes utiles
  returnInterval(): Observable<number> {
    return interval(500).pipe(
      take(10),
      map((value) => value + 1),
      filter((value) => (value % 2 === 0 ? true : false))
    );
  }

  returnObservable(): Observable<number> {
    let i = -1;

    const obs$ = new Observable<number>((observer) => {
      const interval = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          i = 0;
          observer.error('i llego al valor de 2');
        }
      }, 1000);
    });

    return obs$;
  }

  ngOnInit(): void {}
}
