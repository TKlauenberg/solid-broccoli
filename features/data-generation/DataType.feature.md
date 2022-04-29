`@data-generation`
# Feature: Creating a Datatype

- [Feature: Creating a Datatype](#feature-creating-a-datatype)
  - [How to create a Datatype](#how-to-create-a-datatype)
  - [Rule: Validating a number Datatype](#rule-validating-a-number-datatype)
    - [Scenario Template: positive Validation Integer](#scenario-template-positive-validation-integer)
      - [Examples:](#examples)
    - [Example: negative Validation](#example-negative-validation)
  - [Rule: Validating a string Datatype](#rule-validating-a-string-datatype)
    - [Example: positive Validation](#example-positive-validation)
    - [Example: negative Validation](#example-negative-validation-1)
  - [Rule: Validating a complex Datatype](#rule-validating-a-complex-datatype)
    - [Example: positive Validation](#example-positive-validation-1)
    - [Example: negative Validation string part](#example-negative-validation-string-part)
    - [Example: negative Validation number part](#example-negative-validation-number-part)

## How to create a Datatype

```TypeScript
const firstname = new DataType('firstname', 'string');
const lastname = new DataType('lastname', 'string');
const streetname = new DataType('streetname', 'string');
const houseNo = new DataType('houseno', 'number');
const city = new DataType('city', 'string');
const address = new DataType('address', {
  street: streetname,
  houseNo,
  city,
});
const person = new DataType('Person', {
  firstname,
  lastname,
  address,
});

```

## Rule: Validating a number Datatype

### Scenario Template: positive Validation Integer

* Given Mike creates a "number" Datatype
* When he Validates the Value <value>
* Then the Validation result should be positive

#### Examples:

  | type    | value |
  | ------- | :---: |
  | Integer |   5   |
  | Float   |  5.5  |

### Example: negative Validation

* Given Mike creates a "number" Datatype
* When he Validates the Value "asdf"
* Then the Validation result should be negative

## Rule: Validating a string Datatype

### Example: positive Validation

* Given Mike creates a "string" Datatype
* When he Validates the Value "asdf"
* Then the Validation result should be positive

### Example: negative Validation

* Given Mike creates a "string" Datatype
* When he Validates the Value 5
* Then the Validation result should be negative

## Rule: Validating a complex Datatype

The example Datatype is created like this:

```TypeScript
const streetname = new DataType('streetname', 'string');
const houseNo = new DataType('houseno', 'number');
const city = new DataType('city', 'string');
const address = new DataType('address', {
  street: streetname,
  houseNo,
  city,
});
```

### Example: positive Validation

* Given Mike creates a "complex" Datatype
* When he Validates the complex Value
  ```json
  {
    "street": "Test Avenue",
    "houseNo": 300,
    "city": "Example"
  }
  ```
* Then the Validation result should be positive

### Example: negative Validation string part

* Given Mike creates a "complex" Datatype
* When he Validates the complex Value
  ```json
  {
    "street": "Test Avenue",
    "houseNo": 300,
    "city": 5
  }
  ```
* Then the Validation result should be negative

### Example: negative Validation number part

* Given Mike creates a "complex" Datatype
* When he Validates the complex Value
  ```json
  {
    "street": "Test Avenue",
    "houseNo": "300",
    "city": "Example"
  }
  ```
* Then the Validation result should be negative

