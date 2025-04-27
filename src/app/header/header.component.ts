import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AllservicesService } from '../allservices/allservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private router: Router, private allservices: AllservicesService) { this.activeOnNavigationEnd(); }

  selectedLink: string = 'home';
  activeOnNavigationEnd() {
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationEnd) {
        this.selectedLink = events.urlAfterRedirects.split('/')[1];
        this.selectedLink = this.getCurrentRoute(events.urlAfterRedirects);
      }
    })
  }

  getCurrentRoute(url: string) {
    if (url === '/' || url === '/home') {
      return 'home';
    } else {
      return url.split('/')[1];
    }
  }
  navigateTo(pageName: string, scrollid: any) {
    this.selectedLink = pageName;
    if (pageName === 'home' && scrollid === 'home') {
      setTimeout(() => {
        this.scrollIntoView('home');
      }, 100);
    } else if (pageName === 'home' && scrollid === 'abouts') {
      setTimeout(() => {
        this.scrollIntoView('abouts');
      }, 100);
    }
    this.router.navigateByUrl(pageName);
  }


  // navigateTo(pageName: string) {
  //   this.router.navigateByUrl(pageName);
  //   this.selectedLink = pageName;
  // }
  @HostListener('window:scroll', ['$event'])
  onScrollEvent() {
    const getHeader = document.getElementById('header');
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      if (!!getHeader) {
        getHeader.classList.add('headerEffect');
      }
    } else {
      if (!!getHeader) {
        getHeader.classList.remove('headerEffect');
      }
    }



  }







  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


  scrollIntoView(navID: string) {
    const id = document.getElementById(navID);
    if (!!id) {
      id.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }


  openCanvas(canvasID: string) {
    if (!!canvasID) {
      this.allservices.openOffcanvas(canvasID);
    }
  }
}
