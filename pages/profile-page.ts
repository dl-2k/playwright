import { Page } from "@playwright/test";
import { Element } from "../core/element/element"
import { BasePage } from "./base-page"

export class ProfilePage extends BasePage {
    private _btnMoreActions: Element = new Element("#popover-more-actions-dropdown");
    private _btnFollow: Element = new Element("button[role='menuitem']");
    private _btnEditProfile: Element = new Element("//a[contains(text(),'Edit profile')]");
    private _tabLikes: Element = new Element("//a[contains(text(), 'Likes')]");
    private _lblFullName(fullName: string): Element {
        return new Element(`//div[contains(text(), '${fullName}')]`);
    }

    async followUser(): Promise<void> {
        // if (await this._btnMoreActions.isClickable()) {
            await this._btnMoreActions.click();
            await this._btnFollow.click();
        // }
    }
    async isFollowed(): Promise<boolean> {
        await this._btnMoreActions.click();
        const buttonText = await this._btnFollow.getText() || '';
        return buttonText.includes("Unfollow");
    }
    async unfollowUser() {
        await this.isFollowed();
        await this._btnFollow.click();
    }

    async goToEditProfile(): Promise<void> {
        await this._btnEditProfile.click();
    }
    async isFullNameCorrect(fullname: string): Promise<boolean> {
        return await this._lblFullName(fullname).isVisible();
    }
    async isPhotoLiked(likedPhotos: string[]): Promise<boolean>{

        await this._tabLikes.click();
        for (const altText of likedPhotos) {
            const photoElement = new Element(`img[alt="${altText}"]`);
            if (!await photoElement.isVisible()) {
                return false;
            }
        }
        return true;
    }
}