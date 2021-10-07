`@data-generation`
# Feature: Basic Data Generation with Numbers

As a user I want to generate data with Numbers following specific Rules
so that I can generate different numbers.

## Rule: Standard Patterns

### Example: Integer

* Given Mike creates a random number type with integer generation between 5 and 10
* When he generates a data entry
* Then the data entry is between 5 and 10
* And the data entry is integer

### Example: A lot of Integers

* Given Mike creates a random number type with integer generation between 5 and 10
* When he generates 5000 data entries
* Then all data entries is between 5 and 10
* And all data entries are integers

### Example: Float

* Given Mike creates a random number type with float generation between 5.0 and 10.9
* When he generates a data entry
* Then the data entry is between 5.0 and 10.9

### Example: A lot of Floats

* Given Mike creates a random number type with float generation between 5.0 and 10.9
* When he generates 5000 data entries
* Then all data entries is between 5.0 and 10.9
* And some data entries are floats
