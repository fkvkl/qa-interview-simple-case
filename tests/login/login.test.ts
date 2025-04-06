import { expect, test } from '../fixtures';
import { existingUsers } from '../test-data/users.ts';

test.describe('Login Tests', () => {
  for (const user of existingUsers) {
    test(`Log in as "${user.email}" and verify that "LOG OUT" button is displayed`, async ({
      loginPage,
      homePage,
    }) => {
      await test.step('Navigate to the login page and verify "Login" heading is displayed', async () => {
        await loginPage.navigate();

        await expect(loginPage.getLoginHeading()).toBeVisible();
      });

      await test.step('Fill in the login form', async () => {
        await loginPage.fillEmail(user.email);
        await loginPage.fillPassword(user.password);
      });

      await test.step('Submit the login form and verify "LOG OUT" button is displayed', async () => {
        await loginPage.submit();

        expect(homePage.getWelcomeText()).toHaveText(`Welcome ${user.firstName} ${user.lastName}`);
        expect(homePage.getLogoutButton()).toBeVisible();
      });
    });
  }
});
