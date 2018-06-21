/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type UserEdit_activeUser$ref = any;
type Welcome_userToGreet$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type App_appUser$ref: FragmentReference;
export type App_appUser = {|
  +$fragmentRefs: Welcome_userToGreet$ref & UserEdit_activeUser$ref,
  +$refType: App_appUser$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "App_appUser",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "Welcome_userToGreet",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "UserEdit_activeUser",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '33084f2c551d055d7e6d07e2c1f2a2ad';
module.exports = node;
