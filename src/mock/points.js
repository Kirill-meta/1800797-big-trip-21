/* eslint-disable camelcase */
import { getRandomArrayElement } from '../utils.js';

const mockPoints = [
  {
    'id': '19b02609-cb43-456a-8f3c-ac8e176f8e0d',
    'base_price': 7575,
    'date_from': '2023-09-08T08:22:06.379Z',
    'date_to': '2023-09-08T15:12:06.379Z',
    'destination': '65f1a1fd-ac1e-443b-8b94-d4efb48bcb88',
    'is_favorite': false,
    'offers': [
      '403c2422-afce-4bbe-ba55-7809409fd42c',
      '1a915456-6c79-476c-9433-939c93e675ae',
      'c95cda8d-c2b8-43db-93ad-a9bd43941189'
    ],
    'type': 'bus'
  },
  {
    'id': '8f1f89ba-7b48-4305-91d8-88dbb266ff4d',
    'base_price': 8314,
    'date_from': '2023-09-10T05:51:06.379Z',
    'date_to': '2023-09-10T22:08:06.379Z',
    'destination': '5c099438-319e-46bd-82ae-3442769dc2a6',
    'is_favorite': true,
    'offers': [
      '1ef4a027-1911-4640-9ceb-fb8d3b4cbc5d',
      '17256bc9-8c01-487f-adf5-af6d8e219020'
    ],
    'type': 'drive'
  },
  {
    'id': '77ff58ac-fdab-4931-b40b-f4c0edb3f9c0',
    'base_price': 5547,
    'date_from': '2023-09-12T05:56:06.379Z',
    'date_to': '2023-09-13T19:45:06.379Z',
    'destination': '82ea7946-dd02-402e-aab2-bc516c40efb2',
    'is_favorite': false,
    'offers': [
      '6472b3cd-f0c5-4c3f-8e82-0aab462d4b21',
      'f01c6587-eef1-4ca7-8651-f0d1f09d6c4b',
      '3c9a0d1a-f245-41e0-b5c9-ce3b1c1e5e17'
    ],
    'type': 'check-in'
  },
  {
    'id': 'ec1d96e0-9c6f-4ae5-bb6f-ea5a2e983400',
    'base_price': 3660,
    'date_from': '2023-09-15T11:42:06.379Z',
    'date_to': '2023-09-16T20:02:06.379Z',
    'destination': '82ea7946-dd02-402e-aab2-bc516c40efb2',
    'is_favorite': false,
    'offers': [
      'e1a2879a-9de6-473c-b361-b98911ec1e05'
    ],
    'type': 'flight'
  },
  {
    'id': '6b08a962-5c62-4d04-ab0c-4f6324724499',
    'base_price': 2945,
    'date_from': '2023-09-18T05:41:06.379Z',
    'date_to': '2023-09-19T18:19:06.379Z',
    'destination': '5c099438-319e-46bd-82ae-3442769dc2a6',
    'is_favorite': true,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': '77966fe5-697c-481f-ac10-c7920000ab06',
    'base_price': 4646,
    'date_from': '2023-09-20T15:04:06.379Z',
    'date_to': '2023-09-22T07:09:06.379Z',
    'destination': '65f1a1fd-ac1e-443b-8b94-d4efb48bcb88',
    'is_favorite': true,
    'offers': [
      'c95cda8d-c2b8-43db-93ad-a9bd43941189'
    ],
    'type': 'bus'
  },
  {
    'id': 'f933bdb6-e41b-409f-918e-b5bb93094948',
    'base_price': 959,
    'date_from': '2023-09-23T14:58:06.379Z',
    'date_to': '2023-09-24T05:31:06.379Z',
    'destination': '65f1a1fd-ac1e-443b-8b94-d4efb48bcb88',
    'is_favorite': false,
    'offers': [
      'a58ffc97-3d37-4ea4-ade9-5c8a8c10d7ad',
      '5405fac5-2323-48b3-9945-048a0c81891c'
    ],
    'type': 'train'
  },
  {
    'id': '45d35d77-71c0-4067-a78b-14d00ba3b9a1',
    'base_price': 8063,
    'date_from': '2023-09-25T18:43:06.379Z',
    'date_to': '2023-09-26T18:07:06.379Z',
    'destination': 'ced3e600-f822-452f-b3a1-c50de458f059',
    'is_favorite': true,
    'offers': [
      '17256bc9-8c01-487f-adf5-af6d8e219020'
    ],
    'type': 'drive'
  },
  {
    'id': 'db89a55b-670c-4e70-8bd0-75451041ee0a',
    'base_price': 9297,
    'date_from': '2023-09-28T15:09:06.379Z',
    'date_to': '2023-09-29T00:34:06.379Z',
    'destination': 'cfd63673-cedc-4107-8e45-b39277c49481',
    'is_favorite': true,
    'offers': [
      '6a4f68db-62d9-4317-b024-ac4a08f5001e',
      'ac922c5f-6df1-4468-a132-24f82efa0fa7',
      '01ef883c-7685-4c6e-a7eb-35289299d402',
      '3fd4847d-5427-4a66-984d-0e585779bae5',
      '63dcf525-fa19-4532-8260-ff11ac59cac4',
      'a53b9635-afca-4b5d-96f7-ccb593ef3c0e'
    ],
    'type': 'ship'
  },
  {
    'id': '08453715-23c3-4ba1-9367-9893ad9a9031',
    'base_price': 3849,
    'date_from': '2023-09-30T08:56:06.379Z',
    'date_to': '2023-10-01T18:52:06.379Z',
    'destination': '739a1bb5-b67e-4b3c-8dd1-73b8f58d9717',
    'is_favorite': false,
    'offers': [
      '6a4f68db-62d9-4317-b024-ac4a08f5001e',
      'ac922c5f-6df1-4468-a132-24f82efa0fa7',
      '01ef883c-7685-4c6e-a7eb-35289299d402',
      '3fd4847d-5427-4a66-984d-0e585779bae5',
      '63dcf525-fa19-4532-8260-ff11ac59cac4',
      'a53b9635-afca-4b5d-96f7-ccb593ef3c0e'
    ],
    'type': 'ship'
  },
  {
    'id': '424cc8e3-61ca-4e54-8568-cd1c4bb1b2af',
    'base_price': 8890,
    'date_from': '2023-10-02T17:21:06.379Z',
    'date_to': '2023-10-03T12:42:06.379Z',
    'destination': 'e200a68b-b8e8-4c31-92ac-a70750b4d396',
    'is_favorite': true,
    'offers': [
      'f2ae0d23-b3e6-4158-8ee0-04d4a19b82ae',
      'e15ab692-4ccb-464e-89ab-825870c688ce',
      '4aaaae6a-89d4-43b3-a381-b72320babe28',
      '4a310bab-e857-4b72-9d65-aaac69a49c02',
      'e1a2879a-9de6-473c-b361-b98911ec1e05'
    ],
    'type': 'flight'
  },
  {
    'id': '0938c6dc-ca26-4f0b-a175-6a34b0fe59ae',
    'base_price': 5637,
    'date_from': '2023-10-03T21:22:06.379Z',
    'date_to': '2023-10-04T14:04:06.379Z',
    'destination': 'cfd63673-cedc-4107-8e45-b39277c49481',
    'is_favorite': true,
    'offers': [
      'c95cda8d-c2b8-43db-93ad-a9bd43941189'
    ],
    'type': 'bus'
  },
  {
    'id': 'ca272f5a-81cc-4a54-81b1-439cf511485f',
    'base_price': 6026,
    'date_from': '2023-10-05T03:08:06.379Z',
    'date_to': '2023-10-06T10:49:06.379Z',
    'destination': '3f374349-2a25-4694-94d1-e21abf28b630',
    'is_favorite': true,
    'offers': [
      '67ea64dd-cdc6-4a13-a3ba-63dc509aaa8e',
      'f2ae0d23-b3e6-4158-8ee0-04d4a19b82ae',
      'e15ab692-4ccb-464e-89ab-825870c688ce',
      '4aaaae6a-89d4-43b3-a381-b72320babe28',
      '4a310bab-e857-4b72-9d65-aaac69a49c02',
      'e1a2879a-9de6-473c-b361-b98911ec1e05'
    ],
    'type': 'flight'
  },
  {
    'id': '600490df-94ca-411a-9337-7f2ec66b4dc5',
    'base_price': 9847,
    'date_from': '2023-10-07T08:42:06.379Z',
    'date_to': '2023-10-07T14:47:06.379Z',
    'destination': '82ea7946-dd02-402e-aab2-bc516c40efb2',
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '15863cb2-cb04-4cdf-a128-69be71472e2c',
    'base_price': 4827,
    'date_from': '2023-10-09T04:23:06.379Z',
    'date_to': '2023-10-09T23:13:06.379Z',
    'destination': '739a1bb5-b67e-4b3c-8dd1-73b8f58d9717',
    'is_favorite': false,
    'offers': [
      '44c2137f-d0be-43ea-a6d1-d99b661acf4f',
      '1ee9b7f5-85a0-42b7-a61a-d72dfa238e26'
    ],
    'type': 'restaurant'
  },
  {
    'id': '02ce1389-6704-4d6a-815f-d719ec4b5a45',
    'base_price': 7060,
    'date_from': '2023-10-11T01:16:06.379Z',
    'date_to': '2023-10-11T11:28:06.379Z',
    'destination': 'e200a68b-b8e8-4c31-92ac-a70750b4d396',
    'is_favorite': true,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': 'bf1dfcea-615f-46c1-9bda-d9848d7e52cb',
    'base_price': 4650,
    'date_from': '2023-10-12T07:30:06.379Z',
    'date_to': '2023-10-13T23:37:06.379Z',
    'destination': '613e3943-e271-465e-8570-f0061188ec45',
    'is_favorite': false,
    'offers': [
      '966bc899-3c88-46ac-9ac1-5255ec51879b',
      '77ca6a66-9d3c-4b60-969c-cbcff558d6a9',
      '6472b3cd-f0c5-4c3f-8e82-0aab462d4b21',
      'f01c6587-eef1-4ca7-8651-f0d1f09d6c4b',
      '3c9a0d1a-f245-41e0-b5c9-ce3b1c1e5e17'
    ],
    'type': 'check-in'
  },
  {
    'id': '36d12de9-cb37-4805-8359-678816c1f2df',
    'base_price': 439,
    'date_from': '2023-10-14T05:52:06.379Z',
    'date_to': '2023-10-16T00:51:06.379Z',
    'destination': '5c099438-319e-46bd-82ae-3442769dc2a6',
    'is_favorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '8d6f65d0-641c-4847-812c-f1377c5e9224',
    'base_price': 9065,
    'date_from': '2023-10-16T14:58:06.379Z',
    'date_to': '2023-10-18T05:21:06.379Z',
    'destination': '5c099438-319e-46bd-82ae-3442769dc2a6',
    'is_favorite': false,
    'offers': [
      'fc7e953f-6063-4f75-a886-1f9a40254a07'
    ],
    'type': 'taxi'
  },
  {
    'id': '13219c9b-17e4-454d-9dd1-b4b9f2bcccf7',
    'base_price': 4756,
    'date_from': '2023-10-19T18:49:06.379Z',
    'date_to': '2023-10-20T06:59:06.379Z',
    'destination': '739a1bb5-b67e-4b3c-8dd1-73b8f58d9717',
    'is_favorite': true,
    'offers': [
      'a58ffc97-3d37-4ea4-ade9-5c8a8c10d7ad',
      '5405fac5-2323-48b3-9945-048a0c81891c'
    ],
    'type': 'train'
  },
  {
    'id': 'b89309b4-e396-4f8b-84f1-14d3eb7e0c1b',
    'base_price': 2908,
    'date_from': '2023-10-21T23:50:06.379Z',
    'date_to': '2023-10-23T18:29:06.379Z',
    'destination': '65f1a1fd-ac1e-443b-8b94-d4efb48bcb88',
    'is_favorite': true,
    'offers': [],
    'type': 'check-in'
  },
  {
    'id': 'be87150e-22a5-4ee1-bbd7-282306f77ea1',
    'base_price': 3128,
    'date_from': '2023-10-24T18:18:06.379Z',
    'date_to': '2023-10-26T15:09:06.379Z',
    'destination': 'cfd63673-cedc-4107-8e45-b39277c49481',
    'is_favorite': false,
    'offers': [
      '5405fac5-2323-48b3-9945-048a0c81891c'
    ],
    'type': 'train'
  },
  {
    'id': '9dc37f2f-7cd6-44ee-8983-9c878e470072',
    'base_price': 4931,
    'date_from': '2023-10-27T02:28:06.379Z',
    'date_to': '2023-10-28T02:03:06.379Z',
    'destination': '509b72c6-cdfe-4b7b-90b4-e50f8c12a6c8',
    'is_favorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '487f2a6e-2572-487e-b04f-7292188c81b6',
    'base_price': 6412,
    'date_from': '2023-10-28T20:24:06.379Z',
    'date_to': '2023-10-30T08:32:06.379Z',
    'destination': 'cfd63673-cedc-4107-8e45-b39277c49481',
    'is_favorite': false,
    'offers': [
      'f01c6587-eef1-4ca7-8651-f0d1f09d6c4b',
      '3c9a0d1a-f245-41e0-b5c9-ce3b1c1e5e17'
    ],
    'type': 'check-in'
  },
  {
    'id': '99daded0-c7a6-493c-baf3-cd0a2bce6eb7',
    'base_price': 7529,
    'date_from': '2023-10-31T05:42:06.379Z',
    'date_to': '2023-11-01T21:10:06.379Z',
    'destination': '82ea7946-dd02-402e-aab2-bc516c40efb2',
    'is_favorite': false,
    'offers': [
      '5405fac5-2323-48b3-9945-048a0c81891c'
    ],
    'type': 'train'
  }
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}


function getPoints(n) {
  return mockPoints.slice(0, n);
}

export {getRandomPoint , getPoints};
