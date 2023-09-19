
import { GameCheckersPage} from '../Pages/gameCheckersPage'
const { test, expect } = require('@playwright/test')

test('checkers game test', async ({ page }) => {
  const GameCheckers = new GameCheckersPage(page)
  const SELECT_COORDINATES = [[6,4], [6,8], [6,2], [7,3], [5,7]];
  const MOVE_COORDINATES = [[5,5], [5,7], [5,3], [5,1], [4,6]];

  // Navigate to https://www.gamesforthebrain.com/game/checkers/
  await GameCheckers.goToWebPage();

  // Verify the title
  await expect(page).toHaveTitle(/Checkers - Games for the Brain/);

  // Verify pre-start text
  GameCheckers.confirmDefaultText;

  // Make five legal moves as orange:
  await GameCheckers.selectAndMovePiece(SELECT_COORDINATES[0], MOVE_COORDINATES[0])
  await GameCheckers.confirmNextMove();
  await GameCheckers.selectAndMovePiece(SELECT_COORDINATES[1], MOVE_COORDINATES[1])
  await GameCheckers.confirmNextMove();
  await GameCheckers.selectAndMovePiece(SELECT_COORDINATES[2], MOVE_COORDINATES[2])
  await GameCheckers.confirmNextMove();
  await GameCheckers.selectAndMovePiece(SELECT_COORDINATES[3], MOVE_COORDINATES[3])
  await GameCheckers.confirmNextMove();
  await GameCheckers.selectAndMovePiece(SELECT_COORDINATES[4], MOVE_COORDINATES[4])

  // confirm restart
  await page.getByRole('link', { name: 'Restart...' }).click();
  GameCheckers.confirmDefaultText;
});

