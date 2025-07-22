exports.HomePage = class HomePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.computers = page.locator('div.leftside-3 > div.block.block-category-navigation > div.listbox > ul > li:nth-child(2) > a');
    this.desktop = page.locator('div.block.block-category-navigation > div.listbox > ul > li.active > ul > li:nth-child(1) > a');
    this.headerMenuComputers = page.locator('div.header-menu > ul.top-menu > li:nth-child(2) > a');
    this.computersSubItems = page.locator('ul.top-menu > li:nth-child(2) > ul >li');

  }

  async goToComputers() {
    await this.computers.click();
  }
  async goToDesktops() {
    await this.desktop.click();
  }
  async hoverOnComputersMenu() {
    await this.headerMenuComputers.hover()
  }
  async countAndDisplayComputerSubMenuItems() {
    this.hoverOnComputersMenu()
    const listOfmenus = await this.computersSubItems.allInnerTexts()
    console.log('Count of Compuetr Submenu items is:', await this.computersSubItems.count())
    // Print each list item
    console.log('List computer Sub Items is:');
    listOfmenus.forEach(item => {
      console.log(item.trim());
    });
  }

}
