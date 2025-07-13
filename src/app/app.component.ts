import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dorius-landing';

  private countdownInterval: any;

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  startCountdown(): void {
    const launchDate = new Date('2025-08-15T00:00:00').getTime();
    
    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.updateCountdownElement('days', days);
      this.updateCountdownElement('hours', hours);
      this.updateCountdownElement('minutes', minutes);
      this.updateCountdownElement('seconds', seconds);

      if (distance < 0) {
        clearInterval(this.countdownInterval);
        this.updateCountdownElement('days', 0);
        this.updateCountdownElement('hours', 0);
        this.updateCountdownElement('minutes', 0);
        this.updateCountdownElement('seconds', 0);
      }
    }, 1000);
  }

  private updateCountdownElement(id: string, value: number): void {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value.toString().padStart(2, '0');
    }
  }
}
