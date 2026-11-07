import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly name = signal('Tom');
  protected readonly age = signal(25);
  protected readonly colspan = 2;
  protected readonly count = signal(0);
  protected readonly eventCount = signal(0);
  protected readonly lastEventType = signal('—');

  protected increase(): void {
    this.count.update(count => count + 1);
  }

  protected increaseWithEvent(event: MouseEvent): void {
    this.eventCount.update(count => count + 1);
    this.lastEventType.set(event.type);
  }
}
