import { expect, test } from '../fixtures';
import { generateRandomUser, User } from '../test-data/users';

test.describe('Signup tests', () => {
  const newUser: User = generateRandomUser();

  test.beforeEach(async ({ signupPage }) => {
    await signupPage.navigateTo();
  });

  test('Sign up a new user and verify welcome text', async ({
    loginPage,
    signupPage,
    homePage,
  }) => {
    await test.step('Fill the signup form', async () => {
      await loginPage.navigate();

      expect(loginPage.getLoginHeading()).toBeVisible();
    });

    await test.step('Click "Sign up" link and verify "Become a Member" heading is displayed', async () => {
      await loginPage.clickSignup();

      expect(signupPage.getBecomeAMemberHeading()).toBeVisible();
    });

    await test.step('Fill the signup form', async () => {
      await signupPage.fillForm(newUser);
    });

    await test.step(`Submit the form and verify "Welcome ${newUser.firstName} ${newUser.lastName}" text is displayed`, async () => {
      await signupPage.submitForm();

      expect(homePage.getWelcomeText()).toHaveText(
        `Welcome ${newUser.firstName} ${newUser.lastName}`,
      );
      expect(homePage.getLogoutButton()).toBeVisible();
    });
  });
});
