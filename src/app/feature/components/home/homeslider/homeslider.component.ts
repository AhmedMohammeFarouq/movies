import { Component } from '@angular/core';

@Component({
  selector: 'app-homeslider',
  imports: [],
  templateUrl: './homeslider.component.html',
  styleUrl: './homeslider.component.scss',
})
export class HomesliderComponent {

  currentIndex = 0;

  images: string[] = [

    'https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',

    'https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',

    'https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg',

    'https://image.tmdb.org/t/p/original/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg'

  ];

  ngOnInit(): void {

    setInterval(() => {

      this.currentIndex =
        (this.currentIndex + 1) % this.images.length;

    }, 100);

  }
}
