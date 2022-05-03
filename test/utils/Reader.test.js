const Reader = require("./../../lib/utils/Reader");
const jsonFile = "visualpartners.json";
describe("Read class testing", () => {
    test("should return a parsed js object from json file", () => {
        const parsedObject = Reader.readJsonFile(jsonFile);
        expect(parsedObject).not.toBeUndefined();
    });
});