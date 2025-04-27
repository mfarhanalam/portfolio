import { Component } from '@angular/core';

interface ServiceItem {
  number: string;
  type: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      number: '01',
      type: 'Designer',
      title: 'Digital Illustrations for Web & Mobile Apps',
      description: 'Vibrant and clean digital illustrations created for both web and mobile applications. Each design reflects creativity and a deep understanding of user experience.',
      link: '#'
    },
    {
      number: '02',
      type: 'Branding',
      title: 'Branding & Logo Illustrations',
      description: 'Custom illustrations created for brand identities, including logos and brand mascots, designed to communicate the unique values and story of the brand.',
      link: '#'
    },
    {
      number: '03',
      type: 'UI/UX Design',
      title: 'Web UI/UX Design',
      description: 'Creating intuitive, visually appealing web interfaces that enhance user experience, focusing on functionality, seamless navigation, and high-performance design from wireframes to prototypes.',
      link: '#'
    },
    {
      number: '04',
      type: 'Web Design',
      title: 'Application Design',
      description: 'I design intuitive, visually striking applications that provide seamless user experiences, focusing on responsive, user-centered designs across devices, aligning with business objectives.',
      link: '#'
    },
    {
      number: '05',
      type: 'SEO Analytics',
      title: 'Digital Marketing',
      description: 'I offer digital marketing services with SEO and analytics, using data-driven strategies to boost online visibility, traffic, and user engagement.',
      link: '#'
    },
    {
      number: '06',
      type: 'Concept Art',
      title: 'Concept Art for Projects',
      description: 'I create original concept art for digital media, focusing on visual storytelling, dynamic compositions, and aligning with clients\' creative vision.',
      link: '#'
    }
  ];
}
