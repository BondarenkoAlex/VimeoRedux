import React from 'react';
import {
  shallow,
  mount,
  render
} from 'enzyme';
import sinon from 'sinon';
import {
  expect,
  assert
} from 'chai';
import $ from 'jquery';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import { getCategoriesIfNeed } from '../../../../../src/client/browser/src/actions/categoriesActions';
import categiriesResponseJson from './categiriesResponseJson';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

// describe('A suite', function () {
//
//   var server;
//
//   beforeEach(function () {
//     server = sinon.fakeServer.create();
//   });
//
//   afterEach(function () {
//     server.restore();
//   });
//
//   it('calls callback with deserialized data', function () {
//     var callback = sinon.spy();
//     getTodos(42, callback);
//
//     // This is part of the FakeXMLHttpRequest API
//     server.requests[0].respond(
//       200,
//       { 'Content-Type': 'application/json' },
//       JSON.stringify([{
//         id: 1,
//         text: 'Provide examples',
//         done: true,
//       },])
//     );
//
//     //assert(callback.calledOnce);
//   });
//
// });
//
// function getTodos(listId, callback) {
//   $.ajax({
//     url: '/todo/' + listId + '/items',
//     success: function (data) {
//       // Node-style CPS: callback(err, data)
//       callback(null, data);
//     },
//   });
// }
//
// describe('A suite ------ ', function () {
//
//   var server;
//
//   beforeEach(function () {
//     server = sinon.fakeServer.create();
//   });
//
//   afterEach(function () {
//     server.restore();
//   });
//
//   it('calls callback with deserialized data', function () {
//     var callback = sinon.spy();
//
//     const store = mockStore({ categories: { itemsByKey: {} } });
//
//     const ff = getCategoriesIfNeed();
//     const { dispatch, getState } = store;
//     store.dispatch(
//       ff(dispatch, getState)
//         .then((items)=> {
//           debugger;
//           callback(items);
//         })
//     );
//
//     // This is part of the FakeXMLHttpRequest API
//     server.requests[0].respond(
//       200,
//       { 'Content-Type': 'application/json' },
//       JSON.stringify([{
//         id: 1,
//         text: 'Provide examples',
//         done: true,
//       },])
//     );
//
//     assert(callback.calledOnce);
//   });
//
// });

describe('A suite ++++ ', function () {
  beforeEach(() => {
    fetchMock.get('*', categiriesResponseJson);
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('calls callback with deserialized data', () => {
    const store = mockStore({ categories: { itemsByKey: {} } });
    const act = getCategoriesIfNeed();
    return store.dispatch(act)
      .then(
        (items)=> {
          debugger;
          const c = store.getActions();
        },
      );
  });

});
