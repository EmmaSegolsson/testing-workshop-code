import { hotWheels } from './hotWheels';
import { categorizedByManufacturer, categorizedByModel } from './fixtures';
import { apiClient } from '../../mocks';

describe('hotWheels', () => {
  // What is this?!
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should categorize by manufacturer', () => {
    const soldCars = apiClient.getRecentSoldCars();

    const result = hotWheels({
      response: soldCars,
      categorizeBy: 'manufacturer',
    });
    expect(result).toEqual(categorizedByManufacturer);
  });
  it('should categorize by model', () => {
    const soldCars = apiClient.getRecentSoldCars();

    const result = hotWheels({
      response: soldCars,
      categorizeBy: 'model',
    });
    expect(result).toEqual(categorizedByModel);
  });
});
