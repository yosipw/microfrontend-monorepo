import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="mfe-container">
      <h1>🅰️ Angular Microfrontend</h1>
      <p>This is an Angular 21 microfrontend loaded via Module Federation.</p>
      <button (click)="handleClick()" class="mfe-button">
        Click Me (Angular)
      </button>
      <p class="counter">Button clicked: {{ clickCount }} times</p>
    </div>
  `,
  styles: [`
    .mfe-container {
      padding: 20px;
      border: 2px solid #dd0031;
      border-radius: 8px;
      background-color: #f9f9f9;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    h1 {
      color: #dd0031;
      margin-top: 0;
    }

    .mfe-button {
      padding: 10px 20px;
      background-color: #dd0031;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;
    }

    .mfe-button:hover {
      background-color: #c50028;
    }

    .counter {
      margin-top: 15px;
      color: #666;
      font-weight: 500;
    }
  `]
})
export class AppComponent {
  clickCount = 0;
  
  handleClick() {
    this.clickCount++;
    console.log('Button clicked from Angular MFE!', this.clickCount);
  }
}