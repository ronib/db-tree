import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from 'src/app/model/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {

  @Input('children') children: TreeNode[];
  @Input('parent') parent: number;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(){
    this.loadTreeData(this.parent);
  }

  loadTreeData(parent: number): void {
    this.apiService.getDbData(parent).subscribe(result => {
      console.log("children", result);
      this.children = result;
    },
      err => {
        console.error("error", err);
      });
  }

  expand(node: TreeNode): void {
    if (node.permision !== false){
      node.expanded = !node.expanded;
    } 
  }

}
