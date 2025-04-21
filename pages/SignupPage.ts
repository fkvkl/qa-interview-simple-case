import { Locator, Page } from '@playwright/test';
import { BasePage } from 'pages/BasePage';
import { User } from 'test-data/users';

export class SignupPage extends BasePage {
  private readonly becomeAMemberHeading: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.becomeAMemberHeading = page.getByRole('heading', {
      name: 'Become a member',
    });
    this.firstNameInput = page.getByLabel('First name');
    this.lastNameInput = page.getByLabel('Last name');
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  /**
   * Fills the signup form with user details.
   * @param userDetails - The user details to fill in the form.
   */
  async fillForm(userDetails: User): Promise<void> {
    await this.firstNameInput.fill(userDetails.firstName);
    await this.lastNameInput.fill(userDetails.lastName);
    await this.emailInput.fill(userDetails.email);
    await this.passwordInput.fill(userDetails.password);
  }

  /**
   * Submits the signup form.
   */
  async submitForm(): Promise<void> {
    await this.submitButton.click();
  }

  /**
   * Gets the "Become a member" heading locator.
   * @returns {Locator} The Locator for the "Become a member" heading.
   */
  getBecomeAMemberHeading(): Locator {
    return this.becomeAMemberHeading;
  }
}
