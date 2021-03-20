import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomizerService {

  constructor() { }

  generatePassword(length : number, numbers : boolean ,symbols: boolean) : Observable<string> {

    const ALPHA = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
    const NUMBERS = ["0","1","2","3","4","5","6","7","8","9"];
  
    const SYMBOLS = ["~","!","@","#","$","%","^","&","*","(",")","-","+","{","}","[","]","\\",":","'","<",">",",",".","/","?","="];
  
    let CHARACTERS = [ALPHA];
  
    if (numbers) {
        CHARACTERS.push(NUMBERS);
    }
  
    if (symbols) {
        CHARACTERS.push(SYMBOLS);
    }
  
    let generatedpassword = "";
  
    for (let i = 0; i < length; i++) {
        let generator = this.generateRandomNumber(CHARACTERS.length);
        generatedpassword = generatedpassword + CHARACTERS[generator][this.generateRandomNumber(CHARACTERS[generator].length)];
    }
  
    return of(generatedpassword);
  }
  
  private generateRandomNumber(maxNumber) : number {
    return Math.floor(Math.random() * maxNumber);
  }

}