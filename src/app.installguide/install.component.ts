///<reference path="../typings/globals/chrome/index.d.ts"/>
import { Component } from "@angular/core";
import { TranslateService } from "ng2-translate/ng2-translate";

@Component({
    selector: "install",
    templateUrl: "install.component.html",
    styleUrls: ["install.component.css"]
})
export class InstallComponent {

    constructor(translate: TranslateService) {
        translate.setDefaultLang("en");
        translate.use("ru"); /** need to be initialized without delay caused by chrome.storage.sync.get */
        chrome.storage.sync.get({ "currentLang": "ru" }, (items) => {
            console.log("got settings: ", items);
            translate.use(items["currentLang"]);
        });
        chrome.storage.onChanged.addListener(function(changes, namespace) {
            if ("currentLang" in changes) {
                let change = changes["currentLang"];
                console.log(`detect language changing from ${change.oldValue} to ${change.newValue}`);
                translate.use(change.newValue);
            }
        });
    }
}