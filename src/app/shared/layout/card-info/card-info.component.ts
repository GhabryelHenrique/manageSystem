import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
  standalone: true,
  imports: [AvatarModule, CommonModule],
})
export class CardInfoComponent {
  @Input() title!: string;
  @Input() value!: number;
  @Input() percent!: number;
  @Input() icon!: string;
  @Input() avatarStyle!: { [key: string]: string };

  constructor() {}

  ngOnInit(): void {
    this.avatarStyle = {
      ...this.avatarStyle,
      width: '60px',
      height: '60px'
    }
  }
}
