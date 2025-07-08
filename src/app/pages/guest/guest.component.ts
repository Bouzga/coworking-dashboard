import { Component, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ à importer
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-guest',
  standalone: true,
  imports: [CommonModule, MatIcon, FormsModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './guest.component.html',
  styleUrl: './guest.component.scss',
   providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }]
})
export class GuestComponent {
  currentSlide = 0;
  stepIndex = 0;
  isMobileMenuOpen = false;
  today = new Date();
  selectedDate: Date | null = null;
  selectedFormule: string = '';
  selectedDuree: string = '';


  horaires: string[] = [
    '9h30', '10h00', '10h30', '11h00', '11h30',
    '12h00', '12h30', '13h00', '13h30',
    '14h00', '14h30', '15h00', '15h30',
    '16h00', '16h30', '17h00', '17h30'
  ];

  ngOnInit() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
    }, 7000);
  }

  heroSlides = [
    {
      image: 'assets/images/first.jpg',
      title: 'Adhérez à votre nouvel espace',
      subtitle: 'Un lieu productif, calme et professionnel...',
    },
    {
      image: 'assets/images/second.jpg',
      title: 'Travaillez autrement',
      subtitle: 'Des espaces adaptés à vos besoins quotidiens...',
    },
    {
      image: 'assets/images/third.jpg',
      title: 'Rejoignez notre communauté',
      subtitle: 'Un lieu stimulant et collaboratif pour innover...',
    }
  ];


  onReserve() {
    console.log('Réservation initiée !');
    // Logique de réservation à implémenter
  }

  tarif() {
    console.log('Tarif demandé !');
    // Logique pour afficher les tarifs ou rediriger vers une page de tarifs
  }

  nextStep() {
    if (this.stepIndex < 4) {
      this.stepIndex++;
    }
  }


  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
