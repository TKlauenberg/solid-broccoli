import { Actor, Cast, TakeNotes } from '@serenity-js/core';
import { GenerateData } from './abilities';


export class Actors implements Cast {
  prepare(actor: Actor): Actor {
    return actor.whoCan(GenerateData.locally(), TakeNotes.usingAnEmptyNotepad());
  }
}
