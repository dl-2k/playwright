import { Page } from 'playwright';
import { Element } from '../core/element/element';
import { BasePage } from './base-page';
import { UrlConstant } from '../constants/url-constant';

export class LoginPage extends BasePage{
    private _txtEmail: Element= new Element("input[name='email']");
    private _txtPassword: Element= new Element("input[name='password']");
    private _btnLogin: Element= new Element("button[value='Login']");

    async enterEmail(email: string){
        await this._txtEmail.enter(email);
    }

    async enterPassword(password: string){
        await this._txtPassword.enter(password);
    }

    async clickLogin(){
        await this._btnLogin.click();
    }

    async login(email: string, password: string){
        await this.goToUrl(UrlConstant.login_url);
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLogin();
    }
}

