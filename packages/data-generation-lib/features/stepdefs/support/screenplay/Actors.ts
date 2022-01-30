import { Actor, Cast, TakeNotes } from '@serenity-js/core';
import { GenerateData } from './abilities';

/**
 * base Actor configuration
 */
export class Actors implements Cast {
  /**
   * @param {Actor} actor actor to initialize
   * @return {Actor} initialized actor
   */
  prepare(actor: Actor): Actor {
    return actor.whoCan(
      GenerateData.locally(),
      TakeNotes.usingAnEmptyNotepad(),
    );
  }
}
