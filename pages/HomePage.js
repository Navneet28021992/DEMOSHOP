exports.HomePage = class HomePage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;
    this.computers = page.locator('div.leftside-3 > div.block.block-category-navigation > div.listbox > ul > li:nth-child(2) > a');
    this.desktop = page.locator('div.block.block-category-navigation > div.listbox > ul > li.active > ul > li:nth-child(1) > a');

  }

  async goToComputers() {
    await this.computers.click();
  }
  async goToDesktops() {
    await this.desktop.click();
  }

}
