import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public title!: string;
  public titleSubs$!: Subscription;

  constructor(private router: Router) {
    this.titleSubs$ = this.getArgumentsRoute().subscribe(({ title }) => {
      this.title = title;
      document.title = `AdminPro - ${title}`;
    });
  }

  getArgumentsRoute() {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
    // .subscribe(({ title }) => {
    //   this.title = title;
    //   document.title = title;
    // });
  }

  //lifecycle hooks

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }
}
