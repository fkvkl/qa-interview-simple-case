import { Locator, Page } from '@playwright/test';
import { BasePage } from 'pages/BasePage';

export class HomePage extends BasePage {
  private readonly logoutButton: Locator;
  private readonly welcomeText: Locator;

  constructor(page: Page) {
    super(page);
    this.logoutButton = page.getByRole('button', {
      name: 'Log out',
      exact: true,
    });
    this.welcomeText = page.getByText(new RegExp(/^Welcome\s+(\S+)\s+(\S+)$/));
  }

  /**
   * Gets the "Log out" text locator.
   * @returns The Locator for the "Log out" text.
   */
  getLogoutButton(): Locator {
    return this.logoutButton;
  }

  /**
   * Gets the "Welcome" text locator.
   * @returns The Locator has RegExp "/^Welcome\s+(\S+)\s+(\S+)$/".
   */
  getWelcomeText(): Locator {
    return this.welcomeText;
  }
}
