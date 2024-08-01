import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, UrlSegment} from "@angular/router";

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.scss'
})
export class ContractComponent implements OnInit {
  isCollapsed: boolean = false;
  selectedLang: string = 'ru'
  breadcrumbs: any[] = [];

  constructor(private translate: TranslateService,
              router: Router,
              private route: ActivatedRoute) {

    router.events.subscribe((evt): void => {
      if (!(evt instanceof NavigationEnd)) return;

      this.breadcrumbs = [];
      let currentRoute: ActivatedRoute | null = this.route.root,
        url: string = '';
      do {
        const childrenRoutes: ActivatedRoute[] = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach((route: ActivatedRoute): void => {
          if (route.outlet === 'primary') {
            const routeSnapshot: ActivatedRouteSnapshot = route.snapshot;
            url += '/' + routeSnapshot.url.map((segment: UrlSegment) => segment.path).join('/');
            this.breadcrumbs.push({label: route.snapshot.data['breadcrumb'], url: url});
            currentRoute = route;
          }
        });
      } while (currentRoute);

      this.breadcrumbs = this.breadcrumbs.reduce((accumulator, current) => {
        const isDuplicate = accumulator.find((item: any): boolean => item.label === current.label);
        if (!isDuplicate) accumulator.push(current);
        return accumulator;
      }, []);
    });
  }

  ngOnInit(): void {
    let language: string | null = localStorage.getItem('demo_language');
    if (language) this.selectedLang = language;
    this.switchLanguage(this.selectedLang);
  }

  switchLanguage = (event: any): void => {
    localStorage.setItem('demo_language', event);
    this.translate.use(event);
  }

}
