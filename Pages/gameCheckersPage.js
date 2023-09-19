const { test, expect } = require('@playwright/test')

exports.GameCheckersPage = class GameCheckersPage {

    constructor(page){
        this.page = page
        this.default_text = page.getByText('Select an orange piece to move.')
        this.next_move_text = page.getByText('Make a move.')
    }

async goToWebPage(){
    await this.page.goto('https://www.gamesforthebrain.com/game/checkers/');
}

async confirmDefaultText(){
    await expect(this.default_text).toHaveText('Select an orange piece to move.');
}

async selectAndMovePiece(selectCoordinates, moveCoordinates){
    await this.page.locator('div:nth-child(' + selectCoordinates[0] + ') > img:nth-child(' + selectCoordinates[1] + ')').click();
    await this.page.locator('div:nth-child(' + moveCoordinates[0] + ') > img:nth-child(' + moveCoordinates[1] + ')').click();
    await this.page.waitForTimeout(2000)
}

async confirmNextMove(){
    await expect(this.next_move_text).toHaveText('Make a move.', {timeout: 10000});
}
}

