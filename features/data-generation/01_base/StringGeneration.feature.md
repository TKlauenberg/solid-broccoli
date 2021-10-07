`@data-generation`
# Feature: Basic Data Generation with Strings

As a user I want to generate data with Strings following specific patterns
so that I can generate text data.

## Rule: Standard Patterns

### Example: String Pattern

* Given Mike creates the pattern "asdf###"
* And he uses the Symbols "xyz" for the letter "#"
* When he generates one data entry
* Then all "#" letters are changed randomly to one of "xyz"

### Example: Complex String Pattern

* Given Mike create the pattern "asdf###$$$"
* And he uses the Symbols "xyz" for the letter "#"
* And "123" for the letter "$"
* When he generates one data entry
* Then all "#" letters are changed randomly to one of "xyz"
* And all "$" letters are changed randomly to one of "123"
