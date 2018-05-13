import transformData, { errorMessage } from './utils';
import types from '../../utils/form/types';

describe('transformData', () => {
  describe('happy path', () => {
    it('returns text type when correct input data passed in', () => {
      const data = {
        type: 0,
        value: 'some value',
      };

      const expectedOutput = [{
        type: types.TEXT,
        value: data.value,
      }];

      expect(transformData([data])).toEqual(expectedOutput);
    });
  });

  describe('unhappy path', () => {
    it('fails when passing down data without type', () => {
      try {
        transformData([{ foo: 'bar' }]);
      } catch (e) {
        expect(e.toString()).toContain(errorMessage.noType);
      }
    });

    it('fails when passing down data with incorrect type', () => {
      try {
        transformData([{ type: 'bar' }]);
      } catch (e) {
        expect(e.toString()).toContain(errorMessage.unkownType);
      }
    });
  });
});
