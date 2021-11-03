import { Given, When, Then } from "@cucumber/cucumber";
import { actorCalled, actorInTheSpotlight } from "@serenity-js/core";
import { CreateNumberGenerator } from "./support/screenplay/interactions/CreateNumberGenerator";

Given(
  '{word} creates a random number type with integer generation between {int} and {int}',
  (name, min, max) => actorCalled(name).attemptsTo(CreateNumberGenerator.between(min).and(max)),
);
