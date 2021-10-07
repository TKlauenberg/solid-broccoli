`@data-generation`
# Feature: Basic Data Generation with Lists

As a user I want to generate List entries of other data types
so that I can generate data in lists.

## Rule: Generating List of other data type

### Example: List of Integers

* Given Mike creates a random number type with integer generation between 5 and 10
* And he create a list type embedding the type created before with the options
  | key    | value |
  | ------ | ----- |
  | length | 100   |
* When he generates a data entry
* Then the data entry is a list of length 100
* And all entries in the list are integers between 5 and 10

### Example: List of Strings

* Given Mike creates the pattern "asdf###"
* And he uses the Symbols "xyz" for the letter "#"
* And he create a list type embedding the type created before with the options
  | key    | value |
  | ------ | ----- |
  | length | 100   |
* When he generates a data entry
* Then the data entry is a list of length 100
* And all entries in the list have all "#" letters changed randomly to one of "xyz"

## Rule: Lists with complex data types

### Example: List of List of Integers

* Given Mike creates a random number type with integer generation between 5 and 10
* And he create a list type embedding the type created before with the options
  | key    | value |
  | ------ | ----- |
  | length | 5   |
* And he create a list type embedding the type created before with the options
  | key    | value |
  | ------ | ----- |
  | length | 5   |
* When he generates a data entry
* Then the data entry is a list of length 5
* And all entries are of type list with a length of 5