export enum AssetType {
    STOCK,
    CRYPTO,
  }
  
  export abstract class Asset {
    protected readonly _type: AssetType;
    protected readonly _symbol: string;
    protected readonly _name: string;
    protected _amount: number;
    protected readonly _initialPrice: number;
  
    constructor(
      type: AssetType,
      symbol: string,
      name: string,
      amount: number,
      initialPrice: number,
    ) {
      this._type = type;
      this._symbol = symbol;
      this._name = name;
      this._amount = amount;
      this._initialPrice = initialPrice;
    }
  
    get type(): AssetType {
      return this._type;
    }
  
    get symbol(): string {
      return this._symbol;
    }
  
    get name(): string {
      return this._name;
    }
  
    get amount(): number {
      return this._amount;
    }
  
    set amount(amount: number) {
      this._amount = amount;
    }
  
    get initialPrice(): number {
      return this._initialPrice;
    }
  }