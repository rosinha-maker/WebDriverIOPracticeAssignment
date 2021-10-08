import {Given,When,Then} from '@cucumber/cucumber';

Given(/^I'm on the landing page$/, function(){
    console.log("Started");
    browser.url('/');
    browser.maximizeWindow();

});

When(/^I click on signIn button$/, function(){
    const signInBtn = $("//a[@class='login']");
    signInBtn.click();
});

Then(/^I shall be on the authentication page$/, function(){
    var strUrl =browser.getUrl();
    console.log("URL is : "+strUrl);
});
