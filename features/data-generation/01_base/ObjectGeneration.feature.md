`@data-generation`
# Feature: Basic Data Generation with Objects

As a user I want to generate List entries of other data types
so that I can generate data in objects.

## Rule: Generating Object of other data type

### Example: Object with Integer Attribute

* Given Mike creates a random number type with Integer generation between 5 and 10
* And he create a object type embedding the type created before in the Attribute "rndInt"
* When he generates a data entry
* Then the data entry is an object with the Attribute "rndInt"
* And the entry in the Attribute "rndInt"is an Integer between 5 and 10

### Example: Object of Strings

* Given Mike creates the pattern "asdf###"
* And he uses the Symbols "xyz" for the letter "#"
* And he create a object type embedding the type created before in the Attribute "rndString"
* When he generates a data entry
* Then the data entry is an object with the Attribute "rndString"
* And the entry in the Attribute "rndString" is a String with all "#" letters changed randomly to one of "xyz"

## Rule: Object with complex data types

### Example: Object with another Object in an Attribute

```json
{
  "rndObj": {
    "rndInt": 7
  }
}
```

* Given Mike creates a random number type with Integer generation between 5 and 10
* And he create a object type embedding the type created before in the Attribute "rndInt"
* And he create a object type embedding the type created before in the Attribute "rndObj"
* When he generates a data entry
* Then the data entry is an object with the Attribute "rndObj"
* And the entry in the Attribute "rndObj" is an Object with the Attribute "rndInt"