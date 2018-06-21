/**
 * @flow
 * @relayHash 87fa2c9b2a0c316a31df411c0732b706
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UserEditComponentMutationVariables = {|
  newName?: ?string,
  userId?: ?string,
|};
export type UserEditComponentMutationResponse = {|
  +changeUserName: ?{|
    +id: ?string,
    +name: ?string,
  |}
|};
*/


/*
mutation UserEditComponentMutation(
  $newName: String
  $userId: ID
) {
  changeUserName(newName: $newName, userId: $userId) {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "newName",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ID",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "changeUserName",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "newName",
        "variableName": "newName",
        "type": "String"
      },
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "userId",
        "type": "ID"
      }
    ],
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UserEditComponentMutation",
  "id": null,
  "text": "mutation UserEditComponentMutation(\n  $newName: String\n  $userId: ID\n) {\n  changeUserName(newName: $newName, userId: $userId) {\n    id\n    name\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UserEditComponentMutation",
    "type": "Mutations",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UserEditComponentMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cd80c9a5316135ec286b84b1c148b258';
module.exports = node;
