import { Component } from '@angular/core';

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrl: './services-details.component.scss'
})
export class ServicesDetailsComponent {
  services = [
    { name: 'Illustration Design', link: 'illustration-design' },
    { name: 'Business Branding', link: 'business-branding' },
    { name: 'Web UI/UX Design', link: 'web-ui-ux-design' },
    { name: 'Application Design', link: 'application-design' },
    { name: 'Digital Marketing', link: 'digital-marketing' },
    { name: 'Web Development', link: 'web-development' },
  ];

  accordionItems = [
    {
      title: 'Simple process for workflow?',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at venenatis urna.'
    },
    {
      title: 'Unique brand identity and strategy',
      content: 'All the Lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary.'
    },
    {
      title: 'Tailor-made digital products',
      content: 'Praesent ac bibendum lorem, nec tincidunt erat. Cras sed est sit amet risus tempus vehicula.'
    }
  ];

  activeIndex: number | null = null;

  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
