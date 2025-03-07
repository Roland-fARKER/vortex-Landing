import { AfterViewInit, Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  borderColor: string;
}

@Component({
  selector: 'app-members',
  standalone: false,
  templateUrl: './members.component.html',
  styleUrl: './members.component.css',
})
export class MembersComponent implements AfterViewInit {
  ngAfterViewInit() {
    const cards = document.querySelectorAll('.group');

    cards.forEach((card) => {
      card.addEventListener('touchstart', () => {
        card.classList.add('hover');
      });

      card.addEventListener('touchend', () => {
        setTimeout(() => card.classList.remove('hover'), 500); // Remueve la clase después de un tiempo
      });
    });
  }

  teamMembers: TeamMember[] = [
    {
      name: 'Rolando Loaisiga',
      role: 'CEO & Fundador',
      description:
        'Ing. Sistemas de informacion con 3 años de experiencia en desarollo web fullstack.',
      image: 'assets/rolandl.png',
      borderColor: '#D91A2A',
    },
    {
      name: 'Josue Bermudez',
      role: 'CTO & fundador',
      description:
        'Ing. Sistemas de informacion con experiencia en el desarrollo web fullstack.',
      image: 'assets/josueb.png',
      borderColor: '#F2B705',
    },
    {
      name: 'Adan Chamoro',
      role: 'UI & UX designer',
      description:
        'Especialista en gestión de proyectos ágiles y transformación digital.',
      image: 'assets/rolandl.png',
      borderColor: '#F27F1B',
    },
  ];
}
