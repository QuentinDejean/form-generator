import { errorMessage, getFormData, transformData } from './utils';
import types from '../../utils/form/types';

describe('transformData', () => {
  describe('happy path', () => {
    it('returns text type when correct input data passed in', () => {
      const data = {
        type: 0,
        params: {
          value: 'some value',
        },
      };

      const expectedOutput = [{
        type: types.TEXT,
        params: {
          value: data.params.value,
        },
      }];

      expect(transformData([data])).toEqual(expectedOutput);
    });

    it('returns date type when correct input data passed in', () => {
      const data = {
        type: 1,
        params: {
          label: 'Date of Birth',
        },
      };

      const expectedOutput = [{
        type: types.DATE,
        params: {
          label: 'Date of Birth',
        },
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

describe('getFormData', () => {
  it('returns an object for the given array', () => {
    const name = {
      name: 'name',
      type: 0,
      params: {
        label: 'Name',
        required: false,
        value: 'Obiwan Kenobi',
      },
    };

    const dob = {
      name: 'dob',
      type: 1,
      params: {
        label: 'Date of Birth',
        required: true,
        min: 18,
      },
    };

    const data = [name, dob];

    const expectedOutput = {
      [name.name]: name.params.value,
      [dob.name]: dob.params.value,
    };

    expect(getFormData(data)).toEqual(expectedOutput);
  });
});
