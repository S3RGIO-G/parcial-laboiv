import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Pizza } from '../classes/pizza';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  pizzaRef = collection(this.firestore, 'pizzas')

  constructor(private firestore : Firestore) { }

  addPizza(pizza: Pizza){
    return addDoc(this.pizzaRef, pizza);
  }

  getPizzas(): Observable<Pizza[]>{
    return collectionData(this.pizzaRef, {idField: 'id'}) as Observable<Pizza[]>;
  }

  updatePizza(pizza : Pizza){
    const updatedPizza = {
      nombre: pizza.nombre,
      ingredientes: pizza.ingredientes,
      precio: pizza.precio,
      peso: pizza.peso,
    };
    return updateDoc(doc(this.pizzaRef,pizza.id), updatedPizza)
  }

  deletePizza(id: string){
    return deleteDoc(doc(this.pizzaRef,id));
  }
}
