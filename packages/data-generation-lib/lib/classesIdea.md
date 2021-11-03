
```mermaid
classDiagram
  class DataType {
    string name
    string uuid
    string baseType
    JSONSchema schema
    DataGenerator[] generators
  }
  DataType -- DataGenerator
  class DataGenerator {
    string typeUUID
    GeneratedDataSet generate()
  }
  DataType -- GeneratedDataSet
  DataGenerator -- GeneratedDataSet
  class GeneratedDataSet {
    DataType type
    DataGenerator generator
    string[] tags
    any[] data
  }
```


```TypeScript
const between = (params)=>{
  const [a,b] = params;
  return Math.floor(Math.random() * (b-a)) + a;
}
const HouseNr = {
  typeName: 'HouseNr',
  schema: {
    type: 'Integer',
    generation: {
      ruleName: between,
      params: [1,300],
    }
  }
}

const Address = {
  typeName: 'Address',
  schema:{
    type: 'Object',
    childElements: {
      country: {},
      city:{},
      street:{},
      houseNr: HouseNr,
      zipCode: {},
    }
  }
}


```