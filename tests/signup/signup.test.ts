import { generateRandomUser, User } from 'test-data/users';
import { expect, test } from 'tests/fixtures';

test.describe('Signup tests', () => {
  const newUser: User = generateRandomUser();

  test('Sign up a new user and verify welcome text', async ({
    loginPage,
    signupPage,
    homePage,
  }) => {
    await test.step('Navigate to Login page and verify Login heading is displayed', async () => {
      await loginPage.navigate();

      await expect(loginPage.getLoginHeading()).toBeVisible();
    });

    await test.step('Click "Sign up" link and verify "Become a Member" heading is displayed', async () => {
      await loginPage.clickSignup();

      await expect(signupPage.getBecomeAMemberHeading()).toBeVisible();
    });

    await test.step('Fill the signup form', async () => {
      await signupPage.fillForm(newUser);
    });

    await test.step(`Submit the form and verify "Welcome ${newUser.firstName} ${newUser.lastName}" text and the log out button is displayed`, async () => {
      await signupPage.submitForm();

      await expect(homePage.getWelcomeText()).toHaveText(
        `Welcome ${newUser.firstName} ${newUser.lastName}`,
      );
      await expect(homePage.getLogoutButton()).toBeVisible();
    });
  });
});
