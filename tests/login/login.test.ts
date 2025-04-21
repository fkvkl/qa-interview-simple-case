import { existingUsers } from 'test-data/users';
import { expect, test } from 'tests/fixtures';

test.describe('Login Tests', () => {
  for (const user of existingUsers) {
    test(`Log in as "${user.email}" and verify welcome text and "LOG OUT" button is displayed`, async ({
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

      await test.step('Submit the login form and verify welcome text and "LOG OUT" button is displayed', async () => {
        await loginPage.submit();

        await expect(homePage.getWelcomeText()).toHaveText(
          `Welcome ${user.firstName} ${user.lastName}`,
        );
        await expect(homePage.getLogoutButton()).toBeVisible();
      });
    });
  }
});
