import { Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { Element } from "../core/element/element";

export class PhotoPage extends BasePage{
    private _imgAvatarHeader: Element= new Element("div[data-test='photos-route'] header img");
    private _btnViewProfile: Element= new Element("//a[.='View profile']");

    async goToPhotographerProfile(): Promise<void> {
        await this._imgAvatarHeader.hover();
        await this._btnViewProfile.click();
    }
}