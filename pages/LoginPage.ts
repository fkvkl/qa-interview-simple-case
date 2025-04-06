import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  private loginHeading: Locator;
  private emailInput: Locator;
  private passwordInput: Locator;
  private submitButton: Locator;
  private signupLink: Locator;

  constructor(page: Page) {
    super(page);
    this.loginHeading = page.getByRole('heading', { name: 'Login' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.submitButton = page.getByRole('button', { name: 'Login' });
    this.signupLink = page.getByRole('link', { name: 'Signup' });
  }

  /**
   * Navigates to the login page.
   * @throws Will throw an error if navigation fails.
   */
  async navigate(): Promise<void> {
    try {
      await this.navigateTo('/login');
    } catch (error) {
      throw new Error(`Failed to navigate to login page: ${error}`);
    }
  }

  /**
   * Gets the login header locator.
   * @returns {Locator} The Locator for the login header.
   */
  getLoginHeading(): Locator {
    return this.loginHeading;
  }

  /**
   * Fills the email input field.
   * @param email - The email address to input.
   */
  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  /**
   * Fills the password input field.
   * @param password - The password to input.
   */
  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  /**
   * Submits the login form.
   */
  async submit(): Promise<void> {
    await this.submitButton.click();
  }

  /**
   * Clicks the signup link.
   */
  async clickSignup(): Promise<void> {
    await this.signupLink.click();
  }
}
