import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: any = [
    {
      id: 1,
      backdrop_path: 'assets/3idiots-poster.jpg',
      genres: ['Comedy', 'Science Fiction'],
      original_title: '3 Idiots',
      overview:
        'Rascal. Joker. Dreamer. Genius... You\'ve never met a college student quite like "Rancho." From the moment he arrives at India\'s most prestigious university, Rancho\'s outlandish schemes turn the campus upside down—along with the lives of his two newfound best friends. Together, they make life miserable for "Virus," the school’s uptight and heartless dean. But when Rancho catches the eye of the dean\'s daughter, Virus sets his sights on flunking out the "3 idiots" once and for all.',
      poster_path: 'assets/3idiots.jpg',
      release_date: '2009-12-23',
      runtime: 170,
      title: '3 Idiots',
      rating: 0,
      url: 'https://www.youtube.com/embed/xvszmNXdM4w',
    },
    {
      id: 2,
      backdrop_path: 'assets/lifeisbeautiful-poster.jpg',
      genres: ['Comedy', 'Science Fiction'],
      original_title: 'La vita è bella',
      overview:
        'A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.',
      poster_path: 'assets/lifeisbeautiful.jpg',
      release_date: '1997-12-20',
      runtime: 116,
      title: 'Life Is Beautiful',
      rating: 0,
      url: 'https://www.youtube.com/embed/xvszmNXdM4w',
    },
    {
      id: 3,
      backdrop_path: 'assets/dune-poster.jpg',
      genres: 'Science Fiction',
      original_title: 'Dune',
      overview:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      poster_path: 'assets/dune.webp',
      release_date: '2021-09-15',
      runtime: 155,
      title: 'Dune',
      rating: 0,
      url: 'https://www.youtube.com/embed/xvszmNXdM4w',
    },
    {
      id: 4,
      backdrop_path: 'assets/interstellar-poster.jpg',
      genres: 'Science Fiction',
      original_title: 'Interstellar',
      overview:
        'The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
      poster_path: 'assets/interstellar.jpg',
      release_date: '2014-11-05',
      runtime: 169,
      title: 'Interstellar',
      rating: 0,
      url: 'https://www.youtube.com/embed/xvszmNXdM4w',
    },
    {
      id: 5,
      backdrop_path: 'assets/spiritedaway-poster.jpg',
      genres: 'Animation',
      original_title: '千と千尋の神隠し',
      overview:
        'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
      poster_path: 'assets/spiritedaway.jpg',
      release_date: '2001-07-20',
      runtime: 125,
      title: 'Spirited Away',
      rating: 0,
      url: 'https://www.youtube.com/embed/xvszmNXdM4w',
    },
    {
      id: 6,
      backdrop_path: 'assets/spiderman-poster.jpg',
      genres: ['Animation', 'Science Fiction'],
      original_title: 'Spider-Man: Across the Spider-Verse',
      overview:
        'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
      poster_path: 'assets/spiderman.jpg',
      release_date: '2023-05-31',
      runtime: 140,
      title: 'Spider-Man: Across the Spider-Verse',
      rating: 8.459,
      url: 'https://www.youtube.com/embed/xvszmNXdM4w',
    },
    {
      id: 7,
      backdrop_path: 'assets/wall-e-poster.jpg',
      genres: ['Animation', 'Science Fiction'],
      original_title: 'WALL·E',
      overview:
        "WALL·E is the last robot left on an Earth that has been overrun with garbage and all humans have fled to outer space. For 700 years he has continued to try and clean up the mess, but has developed some rather interesting human-like qualities. When a ship arrives with a sleek new type of robot, WALL·E thinks he's finally found a friend and stows away on the ship when it leaves.",
      poster_path: 'assets/wall-e.jpg',
      release_date: '2008-06-22',
      runtime: 98,
      title: 'WALL·E',
      rating: 8.077,
      url: 'https://www.youtube.com/embed/xvszmNXdM4w',
    },
    {
      id: 8,
      backdrop_path: 'assets/soul-poster.jpg',
      genres: 'Animation',
      original_title: 'Soul',
      overview:
        'Joe Gardner is a middle school teacher with a love for jazz music. After a successful audition at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.',
      poster_path: 'assets/soul.jpg',
      release_date: '2020-12-25',
      runtime: 101,
      title: 'Soul',
      rating: 8.15,
      url: 'https://www.youtube.com/embed/xvszmNXdM4w',
    },
    {
      id: 9,
      backdrop_path: 'assets/toy-story-poster.jpg',
      genres: 'Animation',
      original_title: 'Toy Story',
      overview:
        "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
      poster_path: 'assets/toy-story.jpg',
      release_date: '1995-10-30',
      runtime: 81,
      title: 'Toy Story',
      rating: 7.969,
      url: 'https://www.youtube.com/embed/xvszmNXdM4w',
    },
    {
      id: 10,
      backdrop_path: 'assets/lionking-poster.jpg',
      genres: 'Animation',
      original_title: 'The Lion King',
      overview:
        'A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?',
      poster_path: 'assets/lionking.jpg',
      release_date: '1994-06-24',
      runtime: 89,
      title: 'The Lion King',
      rating: 8.256,
      url: 'https://www.youtube.com/embed/xvszmNXdM4w',
    },
  ];
  getMovies(): Observable<any> {
    return of(this.movies);
  }
  private moviesSubject = new BehaviorSubject<any[]>(this.movies);
  movies$: Observable<any[]> = this.moviesSubject.asObservable();

  addMovie(movie: any) {
    this.movies.push(movie);
    console.log(this.movies);
    this.moviesSubject.next(this.movies);
    return of(this.movies);
  }
}
