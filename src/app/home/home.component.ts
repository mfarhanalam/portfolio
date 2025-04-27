import { Component, OnInit } from '@angular/core';
import { AllservicesService } from '../allservices/allservices.service';
import * as AOS from 'aos';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  showTabBar: string = 'abouts';

  constructor(private allsahreService: AllservicesService, private router: Router) {

  }

  ngOnInit() {
    this.initializeTab();
    this.allsahreService.homeDivId = 'homeDiv';
    // AOS.init();

    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     AOS.refresh(); // Refresh AOS on route change
    //   }
    // });
  }

  slides = [
    { img: "images/businessbranding.png" },
    { img: "images/mobileapp.png" },
    { img: "images/uiuxdesign.png" },
    { img: "images/websitedesignlogo.png" },
    { img: "images/businessbranding.png" },
    { img: "images/mobileapp.png" },
    { img: "images/uiuxdesign.png" },
    { img: "images/websitedesignlogo.png" },
  ];

  slideConfig = {
    slidesToShow: 3, autoplay: true, autoplaySpeed: 0, speed: 8000, cssEase: 'linear', infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1.9, }
      },
    ]
  };

  activeTab: string = 'abouts'; // Default tab
  tabbar(elementId: string) {
    this.activeTab = elementId; // Update the active tab
    localStorage.setItem('activeTab', this.activeTab); // Save the active tab to localStorage
  }

  initializeTab() {
    this.activeTab = localStorage.getItem('activeTab') || 'abouts'; // Default to 'abouts'
  }

}
