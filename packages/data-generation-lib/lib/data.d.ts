declare class DataType {
  public name: string;
  public uuid: string;
  public baseType: string;
  public schema: string;
  constructor(name:string,uuid:string,baseType:string,schema:string)
}

declare class DataGenerator {
  public type: DataType;
  public generate(): any[];
  constructor(type:DataType, generate:()=>any[])
}

declare class GeneratedDataSet {
  public type: DataType;
  public generator: DataGenerator;
  public tags: string[];
  public data: any[];
}
