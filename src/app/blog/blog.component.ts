import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogs = [
    {
      title: 'How to Learn Angular',
      description: 'Dive into the basics of Angular, understand its core concepts, and build dynamic web applications easily.',
      image: 'blog/angular.png',
      link: 'https://medium.com/@farhan77070/1-how-to-learn-angular-52580d951e8b',
    },
    {
      title: 'Top 5 UI/UX Design Tips',
      description: 'Explore the essential tips for creating visually appealing and user-friendly designs.',
      image: 'blog/uiux.png',
      link: 'https://medium.com/@farhan77070/top-5-ui-ux-design-tips-1234cf0a87cd',
    },
    {
      title: 'Understanding JavaScript Closures',
      description: 'Unravel the mystery behind closures in JavaScript and learn to use them effectively in your code.',
      image: 'blog/javascript.png',
      link: 'https://medium.com/@farhan77070/understanding-javascript-closures-83a33f7610f3',
    },
    {
      title: 'What is TypeScript?',
      description: 'In the ever-evolving world of web development, JavaScript has been the go-to language....',
      image: 'blog/typescript.png',
      link: 'https://medium.com/@farhan77070/understanding-typescript-why-every-developer-should-learn-it-b265736f64ca',
    },
    {
      title: 'DevOps Journey',
      description: 'In the world of modern software development, DevOps has emerged as the bridge between development....',
      image: 'blog/devops.jpg',
      link: 'https://medium.com/@farhan77070/b6644226ef2f',
    },
  ];

  featuredBlogs = [
    {
      title: 'The Ultimate Guide to Angular',
      description: 'Learn Angular step-by-step and build dynamic applications.',
      date: 'Jan 28, 2025',
      image: 'blog/Angular1.jpg',
      link: 'https://medium.com/@farhan77070/the-ultimate-guide-to-angular-ac9b2bfac78d',
    },
    {
      title: 'CSS Tricks for Modern Websites',
      description: 'Discover powerful CSS techniques to improve your web designs.',
      date: 'Jan 28, 2025',
      image: 'blog/css.jpg',
      link: 'https://medium.com/@farhan77070/css-tricks-for-modern-websites-3317bebcc2b1',
    },
    {
      title: 'Mastering JavaScript',
      description: 'Deep dive into JavaScript concepts for advanced developers.',
      date: 'Jan 28, 2025',
      image: 'blog/js.jpg',
      link: 'https://medium.com/@farhan77070/mastering-javascript-747ac717100d',
    },
  ];

  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    target.src = 'https://via.placeholder.com/400x250?text=No+Image';
  }

  navigateToBlog(link: string): void {
    window.open(link, '_blank');
  }
}
