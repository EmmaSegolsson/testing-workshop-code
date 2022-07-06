import { hotWheels } from "./hotWheels";
import { categorizedByManufacturer, categorizedByModel } from "./fixtures";
import { apiClient } from "../../mocks";

describe("hotWheels", () => {
  it("should categorize by manufacturer", () => {
    const result = null;
    expect(result).toEqual(categorizedByManufacturer);
  });
  it("should categorize by model", () => {
    const result = null;
    expect(result).toEqual(categorizedByModel);
  });
});
