import { BrowserManager } from "./browser-manager";

export class BrowserHelper {
    static GoToUrl(url: string) {
        BrowserManager.page.goto(url);
    }
}
