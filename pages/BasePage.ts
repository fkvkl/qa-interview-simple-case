import { Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected page: Page) { }

  /**
   * Navigates to the specified path.
   * @param path - The relative URL path to navigate to.
   * @throws Will throw an error if navigation fails.
   */
  async navigateTo(path: string): Promise<void> {
    try {
      await this.page.goto(path);
    } catch (error) {
      throw new Error(`Failed to navigate to ${path}: ${error}`);
    }
  }
}
