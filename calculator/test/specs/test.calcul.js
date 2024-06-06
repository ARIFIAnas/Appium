const { expect } = require("@wdio/globals");
const Locators = require("../Data/calcul_locator")


describe("My App Demo Android", () => {
  it("addition 5 + 3 = 8 ", async () => {
    await todoAddition() 
  });
  it("multiplication 6 * 8 = 48 ", async () => {
    await todomultiplication() 
  });
  it("divide 9 / 3 = 3 ", async () => {
    await tododivison() 
  });
  it("soustraction 2 - 7 = -5 ", async () => {
    await todominus() 
  });
  it.only("addition 23 + 48 = 71  ", async () => {
    await addition() 
  });
});

async function todoAddition(){
  await Locators.getnbrs(5).click();
  await Locators.getmath("plus").click();
  await Locators.getnbrs(3).click();
  await Locators.getmath("equals").click();
  await expect (Locators.results).toHaveText('8')
}
async function todomultiplication(){
  await (Locators.getnbrs(6)).click()
  await (Locators.getmath("multiply")).click()
  await (Locators.getnbrs(8)).click()
  await (Locators.getmath("equals")).click()
  await expect (Locators.results).toHaveText('48')
}
async function tododivison(){
  await (Locators.getnbrs(9)).click()
  await (Locators.getmath("divide")).click()
  await (Locators.getnbrs(3)).click()
  await (Locators.getmath("equals")).click()
  await expect (Locators.results).toHaveText('3')
}
async function todominus(){
  await (Locators.getnbrs(2)).click()
  await (Locators.getmath("minus")).click()
  await (Locators.getnbrs(7)).click()
  await (Locators.getmath("equals")).click()
  await expect (Locators.results).toHaveText('−5')
}

async function addition(){
  await (Locators.getnbrs(2)).click()
  await (Locators.getnbrs(3)).click()
  await (Locators.getmath("plus")).click()
  await (Locators.getnbrs(4)).click()
  await (Locators.getnbrs(8)).click()
  await (Locators.getmath("equals")).click()
  await expect (Locators.results).toHaveText('71')
}

