import { describe, it, expect, beforeAll } from 'vitest';
import { Broker, Position, Stock } from '../src/stock';


let stock: Stock;

beforeAll(() => {
  stock = new Stock('XYZ', 'XYZ Co.', 1000, 1.0);
});

describe('addPosition', () => {
  it("should add position to the broker's positions", () => {
    const positions: Position[] = [];
    const broker: Broker = new Broker( positions);
    const newPosition: Position = new Position(stock, 1);

    expect(broker.positions).toEqual([newPosition]);
  });
});