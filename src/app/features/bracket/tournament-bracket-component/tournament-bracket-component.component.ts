import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-bracket-component',
  templateUrl: './tournament-bracket-component.component.html',
  styleUrls: ['./tournament-bracket-component.component.scss']
})
export class TournamentBracketComponentComponent implements OnInit {
  @Input() treeData!: TreeNode[];
  @Input() editable!: boolean;
  @Input() matches!: any[];
  public selectedNodeId = 0;
  public childNode!: TreeNode;
  constructor() {
    // console.log('this.matches')
    // console.log(this.matches)
  }
  onNodeSelected(isNodeSelected: boolean, selectedNodeId: number): void {
    const nodeId = isNodeSelected ? null : +selectedNodeId;
  }
  ngOnInit(): void {

  }

  onMenuClick(e: any): void {
    e.stopPropagation();
  }
}

export interface TreeNode {
  id: number;
  name: string;
  code: string;
  description: string;
  color: string;
  icon: string;
  parentId: number;
  areas: number;
  products: number[];
  children?: TreeNode[];
}