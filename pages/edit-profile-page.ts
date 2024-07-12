import { Element } from "../core/element/element"
import { BasePage } from "./base-page"

export class EditProfilePage extends BasePage{
    private _txtUsername = new Element("//label[.='Username']/following-sibling::input");
    private _btnUpdate = new Element("input[value='Update account']");

    async updateUsername(value:string): Promise<void>{
        await this._txtUsername.enter(value);
        await this._btnUpdate.click();
    }
}