import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter, switchMap, tap } from 'rxjs';

import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``,
})
export class NewPageComponent implements OnInit {
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigateByUrl('/');

        this.heroForm.reset(hero);
        return;
      });
  }

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  });

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero;
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroesService.updateHero(this.currentHero).subscribe((hero) => {
        this.showSnackBar(`${hero.superhero} updated!`);
      });

      return;
    }

    this.heroesService.addHero(this.currentHero).subscribe((hero) => {
      this.router.navigate(['heroes/edit', hero.id]);
      this.showSnackBar(`${hero.superhero} Created!`);
    });
  }

  onDeleteHero() {
    if (!this.currentHero.id) throw Error('Hero Id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    //* Version optimizada
    dialogRef
      .afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap(() => this.heroesService.deleteHeroById(this.currentHero.id)),
        filter((wasDeleted: boolean) => wasDeleted)
      )
      .subscribe((result) => {
        this.router.navigate(['/heroes']);
      });

    //* Version sin optimizar
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (!result) return;

    //   this.heroesService
    //     .deleteHeroById(this.currentHero.id)
    //     .subscribe((wasDeleted) => {
    //       if (wasDeleted) {
    //         this.router.navigate(['/heroes']);
    //       }
    //     });
    // });
  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, 'done', {
      duration: 2500,
    });
  }
}
