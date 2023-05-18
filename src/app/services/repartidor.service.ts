import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Repartidor } from '../classes/repartidor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {
  repartidorRef = collection(this.firestore, 'repartidores')

  constructor(private firestore : Firestore) { }

  addRepartidor(producto: Repartidor){
    return addDoc(this.repartidorRef, producto);
  }

  getRepartidores(): Observable<Repartidor[]>{
    return collectionData(this.repartidorRef, {idField: 'id'}) as Observable<Repartidor[]>;
  }
}
