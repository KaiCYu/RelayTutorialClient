/**
 * @flow
 * @relayHash f2d4f9fdb731b4b05c00dcbbb60104cb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type App_appUser$ref = any;
export type reactComponentsRootQueryVariables = {||};
export type reactComponentsRootQueryResponse = {|
  +random_label2: ?{|
    +$fragmentRefs: App_appUser$ref
  |}
|};
*/


/*
query reactComponentsRootQuery {
  random_label2: myUser(name: "Joker") {
    ...App_appUser
  }
}

fragment App_appUser on Viewer {
  ...Welcome_userToGreet
  ...UserEdit_activeUser
}

fragment Welcome_userToGreet on Viewer {
  user {
    name
    id
  }
}

fragment UserEdit_activeUser on Viewer {
  user {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "reactComponentsRootQuery",
  "id": null,
  "text": "query reactComponentsRootQuery {\n  random_label2: myUser(name: \"Joker\") {\n    ...App_appUser\n  }\n}\n\nfragment App_appUser on Viewer {\n  ...Welcome_userToGreet\n  ...UserEdit_activeUser\n}\n\nfragment Welcome_userToGreet on Viewer {\n  user {\n    name\n    id\n  }\n}\n\nfragment UserEdit_activeUser on Viewer {\n  user {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "reactComponentsRootQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "random_label2",
        "name": "__myUser_viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "App_appUser",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "reactComponentsRootQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "random_label2",
        "name": "myUser",
        "storageKey": "myUser(name:\"Joker\")",
        "args": [
          {
            "kind": "Literal",
            "name": "name",
            "value": "Joker",
            "type": "String"
          }
        ],
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": "random_label2",
        "name": "myUser",
        "args": [
          {
            "kind": "Literal",
            "name": "name",
            "value": "Joker",
            "type": "String"
          }
        ],
        "handle": "viewer",
        "key": "",
        "filters": null
      }
    ]
  }
};
// prettier-ignore
(node/*: any*/).hash = '3ebcbc843ee7e6e8a473aa3d4ac628e4';
module.exports = node;
