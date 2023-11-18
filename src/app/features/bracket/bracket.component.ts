import { Component, OnInit } from '@angular/core';
import { TreeNode } from './tournament-bracket-component/tournament-bracket-component.component';

@Component({
  selector: 'app-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.scss']
})
export class BracketComponent implements OnInit {
  treeData!: TreeNode[];

  constructor() { }

  ngOnInit(): void {
    this.treeData = JSON.parse(`[
      {
        "id": 1,
        "name": "Node 1",
        "code": "001",
        "description": "lerom ibsom",
        "color": "#ff0000",
        "icon": "node-dots fa fa-sitemap",
        "parentId": 0,
        "children": [
          {
            "id": 2,
            "name": "Node 1.1",
            "code": "001",
            "description": "lerom ibsom",
            "color": "blue",
            "icon": "node-dots fa fa-sitemap",
            "parentId": 1,
            "children": [
              {
                "id": 3,
                "name": "Node 1.1.1",
                "code": "001",
                "description": "lerom ibsom",
                "color": "#FD397A",
                "icon": "node-dots fa fa-sitemap",
                "parentId": 2,
                "children": [
                  {
                    "id": 9,
                    "name": "Node 1.1.1",
                    "code": "001",
                    "description": "lerom ibsom",
                    "color": "#FD397A",
                    "icon": "node-dots fa fa-sitemap",
                    "parentId": 10,
                    "children": [
                      {
                        "id": 9,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      },
                      {
                        "id": 11,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      }
                    ]
                  },
                  {
                    "id": 11,
                    "name": "Node 1.1.1",
                    "code": "001",
                    "description": "lerom ibsom",
                    "color": "#FD397A",
                    "icon": "node-dots fa fa-sitemap",
                    "parentId": 10,
                    "children": [
                      {
                        "id": 9,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      },
                      {
                        "id": 11,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      }
                    ]
                  }
                ]
              },
              {
                "id": 4,
                "name": "Node 1.1.1",
                "code": "001",
                "description": "lerom ibsom",
                "color": "#FD397A",
                "icon": "node-dots fa fa-sitemap",
                "parentId": 2,
                "children": [
                  {
                    "id": 9,
                    "name": "Node 1.1.1",
                    "code": "001",
                    "description": "lerom ibsom",
                    "color": "#FD397A",
                    "icon": "node-dots fa fa-sitemap",
                    "parentId": 10,
                    "children": [
                      {
                        "id": 9,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      },
                      {
                        "id": 11,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      }
                    ]
                  },
                  {
                    "id": 11,
                    "name": "Node 1.1.1",
                    "code": "001",
                    "description": "lerom ibsom",
                    "color": "#FD397A",
                    "icon": "node-dots fa fa-sitemap",
                    "parentId": 10,
                    "children": [
                      {
                        "id": 9,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      },
                      {
                        "id": 11,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": 5,
            "name": "Node 1.1",
            "code": "001",
            "description": "lerom ibsom",
            "color": "blue",
            "icon": "node-dots fa fa-sitemap",
            "parentId": 1,
            "children": [
              {
                "id": 6,
                "name": "Node 1.1.1",
                "code": "001",
                "description": "lerom ibsom",
                "color": "#FD397A",
                "icon": "node-dots fa fa-sitemap",
                "parentId": 5,
                "children": [
                  {
                    "id": 7,
                    "name": "Node 1.1.1",
                    "code": "001",
                    "description": "lerom ibsom",
                    "color": "#FD397A",
                    "icon": "node-dots fa fa-sitemap",
                    "parentId": 6,
                    "children": [
                      {
                        "id": 9,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      },
                      {
                        "id": 11,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      }
                    ]
                  },
                  {
                    "id": 8,
                    "name": "Node 1.1.1",
                    "code": "001",
                    "description": "lerom ibsom",
                    "color": "#FD397A",
                    "icon": "node-dots fa fa-sitemap",
                    "parentId": 6,
                    "children": [
                      {
                        "id": 9,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      },
                      {
                        "id": 11,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      }
                    ]
                  }
                ]
              },
              {
                "id": 10,
                "name": "Node 1.1.1",
                "code": "001",
                "description": "lerom ibsom",
                "color": "#FD397A",
                "icon": "node-dots fa fa-sitemap",
                "parentId": 5,
                "children": [
                  {
                    "id": 9,
                    "name": "Node 1.1.1",
                    "code": "001",
                    "description": "lerom ibsom",
                    "color": "#FD397A",
                    "icon": "node-dots fa fa-sitemap",
                    "parentId": 10,
                    "children": [
                      {
                        "id": 9,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      },
                      {
                        "id": 11,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      }
                    ]
                  },
                  {
                    "id": 11,
                    "name": "Node 1.1.1",
                    "code": "001",
                    "description": "lerom ibsom",
                    "color": "#FD397A",
                    "icon": "node-dots fa fa-sitemap",
                    "parentId": 10,
                    "children": [
                      {
                        "id": 9,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      },
                      {
                        "id": 11,
                        "name": "Node 1.1.1",
                        "code": "001",
                        "description": "lerom ibsom",
                        "color": "#FD397A",
                        "icon": "node-dots fa fa-sitemap",
                        "parentId": 10
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
    `);
    console.log(this.treeData)
  }

}

