const { all, search, iconsListByStyle } = require("../index.js");

describe("Test index file", () => {
  test("should icons props exists and defined", () => {
    const keys = Object.keys(all[0]);

    all.forEach((icon) => {
      keys.forEach((key) => {
        expect(icon[key]).not.toBeUndefined();
      });
    });
  });

  test("should icons props the exact data type", () => {
    all.forEach((icon) => {
      // check arrays
      expect(Array.isArray(icon.changes)).toBeTruthy();
      expect(Array.isArray(icon.search)).toBeTruthy();
      expect(Array.isArray(icon.styles)).toBeTruthy();
      expect(Array.isArray(icon.prefixClasses)).toBeTruthy();
      expect(Array.isArray(icon.classes)).toBeTruthy();
      // check strings
      expect(typeof icon.label).toBe("string");
      expect(typeof icon.unicode).toBe("string");
      expect(typeof icon.name).toBe("string");
    });
  });

  test("should Search function works", () => {
    expect(search("home")[0].label).toEqual("home");
  });

  test("should iconsListByStyle function works", () => {
    const styleName = "regular";

    expect(iconsListByStyle(styleName)[0].styles).toContain(styleName);
  });
});
