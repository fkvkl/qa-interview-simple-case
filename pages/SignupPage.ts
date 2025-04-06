import { Locator, Page } from '@playwright/test';
import { User } from '../tests/test-data/users';

export class SignupPage {
  private page: Page;
  private becomeAMemberHeading: Locator;
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  private emailInput: Locator;
  private passwordInput: Locator;
  private submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
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
   * Navigates to the signup page.
   * @throws Will throw an error if navigation fails.
   */
  async navigateTo(): Promise<void> {
    await this.page.goto('/signup');
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
