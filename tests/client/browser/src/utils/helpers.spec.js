//import React from 'react';
import {
  shallow,
  mount,
  render,
} from 'enzyme';
import { expect } from 'chai';
import {
  describe,
  it,
} from 'mocha';
import { buildKeyVideoStore } from '../../../../../src/client/browser/src/utils/helpers';

describe('helpers', () => {
  it('buildKeyVideoStore', () => {
    const obj = {
      category: 'animation',
      subcategory: '',
      showby: '',
      duration: '',
      period: '',
    };

    expect(buildKeyVideoStore(obj)).toEqual('animation|||');
  });

});
