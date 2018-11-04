/// <reference path="./phaser.d.ts"/>

import 'phaser';

const config: GameConfig = {
    width: 300,
    height: 300,
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#93e7ff',
    pixelArt: false,
    zoom: 1,
};

export class Game extends Phaser.Game {

    constructor(GameConfig: config) {
        super(config);
    }

}


new Game(config);