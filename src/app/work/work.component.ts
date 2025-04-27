import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  public projects = [
    {
      title: 'CRM Web Application',
      description: 'Developed a user-friendly CRM system for managing customer relationships.',
      technologies: 'Angular, Tailwind CSS, Firebase',
      image: '/screenshot/1.png',
      imageUrls: ['/screenshot/1.png', '/screenshot/2.png',]
    },
    {
      title: 'E-Commerce Platform',
      description: 'Built a fully responsive e-commerce platform that included user authentication.',
      technologies: 'Angular, Node.js, MongoDB',
      image: '/screenshot/4.png',
      imageUrls: ['/screenshot/4.png', '/screenshot/5.png',]
    },
    {
      title: 'Admin Dashboard',
      description: 'Created an interactive admin dashboard with real-time data analytics.',
      technologies: 'Angular, Chart.js, Firebase',
      image: '/screenshot/3.png',
      imageUrls: ['/screenshot/3.png', '/screenshot/6.png',]
    },
    {
      title: 'Admin Dashboard',
      description: 'Created an interactive admin dashboard with real-time data analytics.',
      technologies: 'Angular, Chart.js, Firebase',
      image: '/screenshot/3.png',
      imageUrls: ['/screenshot/3.png', '/screenshot/6.png',]
    }
  ];

  public images: string[] = [];
  public currentImage: string = '';

  constructor() {}

  ngOnInit(): void {}

  nextImage(): void {
    const currentIndex = this.images.indexOf(this.currentImage);
    const nextIndex = (currentIndex + 1) % this.images.length;
    this.currentImage = this.images[nextIndex];
  }

  previousImage(): void {
    const currentIndex = this.images.indexOf(this.currentImage);
    const previousIndex = (currentIndex - 1 + this.images.length) % this.images.length;
    this.currentImage = this.images[previousIndex];
  }

  openImageModal(imageUrls: string[]): void {
    if (imageUrls.length > 0) {
      this.images = imageUrls;
      this.currentImage = imageUrls[0];
      const modalElement = document.getElementById('imageModal');
      if (modalElement) {
        // Bootstrap modal instance create karke show karte hain
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
      }
    }
  }
  
  closeModal(): void {
    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      // Bootstrap modal ko hide karte hain
      const modal = bootstrap.Modal.getInstance(modalElement);
      if (modal) {
        modal.hide();
      }
    }
  }
  
}
