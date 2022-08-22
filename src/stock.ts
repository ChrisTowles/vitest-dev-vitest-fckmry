import { Asset, AssetType } from './asset';

export class Position {
    protected readonly _stock: Stock;
    protected readonly _position: number;
    constructor(
        stock: Stock,
        position: number,
    ) {
        this._stock = stock;
        this._position = position;
    }
}

export class Broker {
    protected readonly _positions: Position[] = [];
    constructor(
        positions: Position[],
    ) {
        this._positions = positions;
    }
 
    public get positions() {
        return this._positions;
    }

}


export class Stock extends Asset {
    constructor(
        symbol: string,
        name: string,
        amount: number,
        initialPrice: number,
    ) {
        super(AssetType.STOCK, symbol, name, amount, initialPrice);
    }
}