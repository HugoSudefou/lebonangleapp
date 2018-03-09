import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-notice',
  templateUrl: './search-notice.component.html',
  styleUrls: ['./search-notice.component.css']
})
export class SearchNoticeComponent implements OnInit {

  notice;

  constructor() { }

  ngOnInit() {
    this.notice = [
      {
        "_id": "5aa28ef7424ef7b9e1ffc27b",
        "index": 0,
        "title": "Mcfarland",
        "description": "Occaecat culpa aute in nostrud adipisicing elit irure proident qui eiusmod. Reprehenderit occaecat laboris ea adipisicing velit dolore. Lorem cillum aliqua aliqua nostrud magna elit. Officia velit eiusmod non in velit eu esse eiusmod aliquip. Ipsum reprehenderit commodo duis enim proident sunt amet aute sit.\r\n",
        "width": 707.4,
        "height": 149.8,
        "depth": 427.3,
        "angle": 110,
        "user": {
          "_id": "5aa28ef75aa562db7f241754",
          "index": 0,
          "first_name": "Burks",
          "last_name": "Boyle"
        }
      },
      {
        "_id": "5aa28ef71d0ca80c9608d200",
        "index": 1,
        "title": "Savage",
        "description": "Quis pariatur nostrud eiusmod excepteur incididunt ipsum officia est eu sunt aliqua amet. Cupidatat laboris tempor cillum anim. Non irure minim commodo est ex pariatur deserunt tempor aliquip est eu proident.\r\n",
        "width": 1666.3,
        "height": 1636.2,
        "depth": 1583.4,
        "angle": 59,
        "user": {
          "_id": "5aa28ef7970bc9bb4f82fea4",
          "index": 1,
          "first_name": "Walter",
          "last_name": "Nash"
        }
      },
      {
        "_id": "5aa28ef7f34f548bfeb4a1f4",
        "index": 2,
        "title": "Cohen",
        "description": "Veniam exercitation sint sit duis elit labore commodo eiusmod exercitation dolor est non labore ex. Pariatur elit est esse enim consectetur do culpa sint enim do cillum. Tempor cupidatat deserunt reprehenderit labore ut voluptate quis dolore adipisicing deserunt nulla consectetur pariatur tempor. Do Lorem incididunt elit eiusmod voluptate cupidatat.\r\n",
        "width": 1259.8,
        "height": 104.5,
        "depth": 1608.8,
        "angle": 176,
        "user": {
          "_id": "5aa28ef79b5e23e9f49e8e7c",
          "index": 2,
          "first_name": "Byrd",
          "last_name": "Reyes"
        }
      },
      {
        "_id": "5aa28ef737a3c6b8004be8f7",
        "index": 3,
        "title": "Cote",
        "description": "Veniam proident id laboris ad anim occaecat et duis cupidatat tempor id labore duis elit. Aute est laborum irure duis aliqua amet cupidatat Lorem est occaecat consequat labore. Cupidatat qui consequat nostrud irure laborum minim amet elit. In fugiat amet officia irure enim labore veniam reprehenderit reprehenderit ad.\r\n",
        "width": 1541.4,
        "height": 1961.7,
        "depth": 674.1,
        "angle": 163,
        "user": {
          "_id": "5aa28ef7264aeae743c0f744",
          "index": 3,
          "first_name": "Short",
          "last_name": "May"
        }
      },
      {
        "_id": "5aa28ef7a972ce44885b6d8a",
        "index": 4,
        "title": "Shaw",
        "description": "Culpa deserunt consectetur commodo in reprehenderit. Aliqua nulla eu amet pariatur exercitation nostrud ea consequat. Lorem veniam nisi minim anim fugiat dolore Lorem. Commodo voluptate nisi aliqua eiusmod minim magna enim. Consequat eu quis sunt et minim nulla sit deserunt occaecat id proident mollit.\r\n",
        "width": 1752.9,
        "height": 338.9,
        "depth": 1164.3,
        "angle": 71,
        "user": {
          "_id": "5aa28ef7a7382710e70ea2f4",
          "index": 4,
          "first_name": "Weaver",
          "last_name": "Salas"
        }
      }
    ]
  }

  
}
