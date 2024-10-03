import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Jordy';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male':'invitarlo',
    'female':'invitarla'
  }

  public changeClient():void {
    this.name = 'Lizeth'
    this.gender = 'female'
  }


  // i18n Plural
  public clients: string[] = ['Sol', 'Jordy', 'Maria', 'Jesus']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
   }

  public deleteClient(): void{
    this.clients.shift()
  }


  // Keay value Pipe
  public person = {
    name: 'Jordy',
    age: 22,
    address: 'Pavas'
  }


  // Async Pipe
  public myObservableTime: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap',value))
  );

  public promiseValue:Promise<string> = new Promise( (resolve , reject) => {
    setTimeout( () => {
      resolve('Tenemos data en la promesa')
    }, 3500)
  } )
}
