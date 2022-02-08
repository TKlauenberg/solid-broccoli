import { Given, Then, When } from '@cucumber/cucumber';
import {
  containItemsWhereEachItem,
  Ensure,
  equals,
  isGreaterThan,
  isLessThan,
  or,
} from '@serenity-js/assertions';
import {
  actorCalled,
  actorInTheSpotlight,
  Expectation,
  List,
  Log,
} from '@serenity-js/core';
import {
  CreateIntegerGenerator,
  generate,
} from './support/screenplay/interactions';
import { CurrentGeneratedData } from './support/screenplay/questions';
import { IsNumberOfType } from './support/screenplay/questions/Number';

Given(
  '{word} creates a random number type with integer generation between {int} and {int}',
  (name: string, min: number, max: number) =>
    actorCalled(name).attemptsTo(CreateIntegerGenerator.between(min).and(max)),
);

When('he/she/they generates a data entry', () =>
  actorInTheSpotlight().attemptsTo(generate(1).dataEntries),
);

When('he/she/they generates {int} data entries', (amount) =>
  actorInTheSpotlight().attemptsTo(generate(amount).dataEntries),
);

const isLessOrEqual = (value: number) => or(isLessThan(value), equals(value));

const isGreaterOrEqual = (value: number) =>
  or(isGreaterThan(value), equals(value));

Then('the data entry is between {int} and {int}', (min: number, max: number) =>
  actorInTheSpotlight().attemptsTo(
    Ensure.that(List.of(CurrentGeneratedData).first(), isGreaterOrEqual(min)),
    Ensure.that(List.of(CurrentGeneratedData).first(), isLessOrEqual(max)),
    Log.the(CurrentGeneratedData),
  ),
);

Then('all data entries is between {int} and {int}', (min, max) =>
  actorInTheSpotlight().attemptsTo(
    Ensure.that(
      List.of(CurrentGeneratedData),
      containItemsWhereEachItem(isGreaterOrEqual(min)),
    ),
    Ensure.that(
      List.of(CurrentGeneratedData),
      containItemsWhereEachItem(isLessOrEqual(max)),
    ),
    Log.the(CurrentGeneratedData),
  ),
);

function isOfType(expected: string): Expectation<any> {
  return Expectation.thatActualShould<string, any>(
    'be of type',
    expected,
  ).soThat(
    (actualValue, expectedValue) => typeof actualValue === expectedValue,
  );
}

Then('the data entry is integer', () =>
  actorInTheSpotlight().attemptsTo(
    Ensure.that(List.of(CurrentGeneratedData).first(), isOfType('number')),
    Ensure.that(
      List.of(CurrentGeneratedData).first(),
      IsNumberOfType.Integer(),
    ),
  ),
);

Then('all data entries are integers', () =>
  actorInTheSpotlight().attemptsTo(
    Ensure.that(
      List.of(CurrentGeneratedData),
      containItemsWhereEachItem(isOfType('number')),
    ),
    Ensure.that(
      List.of(CurrentGeneratedData),
      containItemsWhereEachItem(IsNumberOfType.Integer()),
    ),
  ),
);
