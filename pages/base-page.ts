import { Page } from '@playwright/test';
import { BrowserManager } from '../core/browser/browser-manager';

export class BasePage {

    async goToUrl(url: string): Promise<void> {
        console.log('Navigating to URL:', url);
        await BrowserManager.page.goto(url);
    }
}
