const NORTH = "north",
    EAST = "east",
    SOUTH = "south",
    WEST = "west";

class Rover {
    constructor(x = 0, y = 0, direction = NORTH) {
        this._checkOnValidNumber(x);
        this._checkOnValidNumber(y);
        this._checkOnValidDirection(direction)
        this._x = x;
        this._y = y;
        this._direction = direction;
    }

    _checkOnValidDirection(direction) {
        if(![NORTH, EAST, SOUTH, WEST].find(item => item === direction)) throw new TypeError
    }

    _checkOnValidNumber(num) {
        if (typeof num !== 'number') throw new TypeError();
        if (parseInt(num, 10) !== num) throw new TypeError();
    }

    left() {
        switch (this._direction) {
            case NORTH:
                this._direction = WEST;
                break;
            case EAST:
                this._direction = NORTH;
                break;
            case SOUTH:
                this._direction = EAST;
                break;
            case WEST:
                this._direction = SOUTH;
                break;
        }
        return this;
    }

    right() {
        switch (this._direction) {
            case NORTH:
                this._direction = EAST;
                break;
            case EAST:
                this._direction = SOUTH;
                break;
            case SOUTH:
                this._direction = WEST;
                break;
            case WEST:
                this._direction = NORTH;
                break;
        }
        return this;
    }

    move(n) {
        this._checkOnValidNumber(n)
        switch (this._direction) {
            case NORTH:
                this._y += n;
                break;
            case EAST:
                this._x += n;
                break;
            case SOUTH:
                this._y -= n;
                break;
            case WEST:
                this._x -= n;
                break;
        }
        return this;
    }

    getPosition() {
        return { x: this._x, y: this._y };
    }

    getDirection() {
        return this._direction;
    }
}

export { NORTH, EAST, SOUTH, WEST, Rover };
