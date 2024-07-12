import { Page } from "playwright";
import { BasePage } from "./base-page";
import { Element } from "../core/element/element";
import { Utils } from "../utilities/utils";

export class HomePage extends BasePage {
    private _btnUserProfile: Element = new Element("button[title='Your personal menu button']");
    private _btnViewProfile: Element = new Element("//a[text()='View profile']//parent::li");
    private _btnAccountSettings: Element = new Element("//a[text()='Account settings']//parent::li");

    private _btnLikeImage(position: string): Element {
        return new Element(`figure[data-masonryposition='${position}'] button[title='Like this image']`);
    }

    private _img(position: string): Element {
        return new Element(`figure[data-masonryposition='${position}']`);
    }

    private _altImage(position: string) {
        return new Element(`figure[data-masonryposition='${position}'] img[alt]`).getAttribute("alt");
    }

    async likeRandomPhotos(count: number): Promise<string[]> {
        const likedPhotos: string[] = [];
        const usedPositions: number[] = [];
        for (let i= 0; i < count; i++) {
            var position: number;
            do {
                position = await Utils.getRandomInt(1, 20);
            } while (usedPositions.includes(position));
    
            await usedPositions.push(position);
            await this._img(position.toString()).hover();
            await this._btnLikeImage(position.toString()).click();
            const altText = await this._altImage(position.toString());
            if (altText) {
                likedPhotos.push(altText);
            }
        }
        return likedPhotos;
    }

    async clickImage(position: string): Promise<void> {
        await this._img(position).click();
    }

    async isUserProfileVisible(): Promise<boolean> {
        return await this._btnUserProfile.isVisible();
    }

    async waitForUserProfileVisible(): Promise<void> {
        await this._btnUserProfile.isVisible();
    }

    async viewUserProfile(): Promise<void> {
        await this._btnUserProfile.click();
        await this._btnViewProfile.click();
    }
}
